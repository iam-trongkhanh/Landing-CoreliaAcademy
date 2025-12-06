import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer } from "@react-three/postprocessing";
import { Effect, BlendFunction } from "postprocessing";

// Dither shader - creates the retro pixelated effect
const ditherFragmentShader = `
  uniform float u_colorNum;
  uniform float u_pixelSize;

  const int indexMatrix8x8[64] = int[](
    0,  32, 8,  40, 2,  34, 10, 42,
    48, 16, 56, 24, 50, 18, 58, 26,
    12, 44, 4,  36, 14, 46, 6,  38,
    60, 28, 52, 20, 62, 30, 54, 22,
    3,  35, 11, 43, 1,  33, 9,  41,
    51, 19, 59, 27, 49, 17, 57, 25,
    15, 47, 7,  39, 13, 45, 5,  37,
    63, 31, 55, 23, 61, 29, 53, 21
  );

  float indexValue() {
    int x = int(mod(gl_FragCoord.x / u_pixelSize, 8.0));
    int y = int(mod(gl_FragCoord.y / u_pixelSize, 8.0));
    return float(indexMatrix8x8[x + y * 8]) / 64.0;
  }

  float dither(float color) {
    float closestColor = (color < 0.5) ? 0.0 : 1.0;
    float secondClosestColor = 1.0 - closestColor;
    float d = indexValue();
    float distance = abs(closestColor - color);
    return (distance < d) ? closestColor : secondClosestColor;
  }

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 pixelatedUV = floor(gl_FragCoord.xy / u_pixelSize) * u_pixelSize / resolution;
    vec4 color = texture2D(inputBuffer, pixelatedUV);

    color.r = floor(color.r * u_colorNum) / u_colorNum;
    color.g = floor(color.g * u_colorNum) / u_colorNum;
    color.b = floor(color.b * u_colorNum) / u_colorNum;

    outputColor = vec4(
      dither(color.r),
      dither(color.g),
      dither(color.b),
      1.0
    );
  }
`;

// Custom Effect for dithering
class DitherEffect extends Effect {
  constructor({ colorNum = 4.0, pixelSize = 4.0 }) {
    super("DitherEffect", ditherFragmentShader, {
      blendFunction: BlendFunction.NORMAL,
      uniforms: new Map<string, THREE.Uniform>([
        ["u_colorNum", new THREE.Uniform(colorNum)],
        ["u_pixelSize", new THREE.Uniform(pixelSize)],
      ]),
    });
  }
}

// Wave vertex shader
const waveVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Wave fragment shader - WHITE background with BLACK animated waves
const waveFragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_waveSpeed;
  uniform float u_waveFrequency;
  uniform float u_waveAmplitude;
  uniform vec3 u_waveColor;
  uniform vec3 u_bgColor;
  uniform vec2 u_mouse;
  uniform float u_mouseRadius;
  uniform bool u_enableMouse;
  varying vec2 vUv;

  // Classic Perlin 3D Noise
  vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

  float cnoise(vec3 P) {
    vec3 Pi0 = floor(P);
    vec3 Pi1 = Pi0 + vec3(1.0);
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 6; i++) {
      value += amplitude * cnoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    float time = u_time * u_waveSpeed;

    // Create flowing wave pattern
    vec3 pos = vec3(uv * u_waveFrequency, time);
    float noise = fbm(pos);

    // Add secondary layer for more complexity
    noise += 0.5 * fbm(pos * 2.0 + vec3(100.0));

    // Mouse interaction
    if (u_enableMouse) {
      float dist = distance(uv, u_mouse);
      if (dist < u_mouseRadius) {
        float influence = 1.0 - (dist / u_mouseRadius);
        influence = pow(influence, 2.0);
        noise += influence * 0.5 * sin(time * 5.0 + dist * 20.0);
      }
    }

    // Normalize noise to 0-1 range
    noise = (noise + 1.0) * 0.5;
    noise = pow(noise, 1.5) * u_waveAmplitude;
    noise = clamp(noise, 0.0, 1.0);

    // Mix between background color (white) and wave color (black)
    // noise = 0 -> white, noise = 1 -> black
    vec3 color = mix(u_bgColor, u_waveColor, noise);

    gl_FragColor = vec4(color, 1.0);
  }
`;

interface WaveMeshProps {
  waveSpeed: number;
  waveFrequency: number;
  waveAmplitude: number;
  waveColor: [number, number, number];
  bgColor: [number, number, number];
  enableMouseInteraction: boolean;
  mouseRadius: number;
  disableAnimation: boolean;
}

function WaveMesh({
  waveSpeed,
  waveFrequency,
  waveAmplitude,
  waveColor,
  bgColor,
  enableMouseInteraction,
  mouseRadius,
  disableAnimation,
}: WaveMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const { size, gl } = useThree();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(size.width, size.height) },
      u_waveSpeed: { value: waveSpeed },
      u_waveFrequency: { value: waveFrequency },
      u_waveAmplitude: { value: waveAmplitude },
      u_waveColor: { value: new THREE.Vector3(...waveColor) },
      u_bgColor: { value: new THREE.Vector3(...bgColor) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_mouseRadius: { value: mouseRadius },
      u_enableMouse: { value: enableMouseInteraction },
    }),
    [waveSpeed, waveFrequency, waveAmplitude, waveColor, bgColor, mouseRadius, enableMouseInteraction]
  );

  useEffect(() => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_resolution.value.set(size.width, size.height);
    }
  }, [size]);

  useFrame(({ clock }) => {
    if (meshRef.current && !disableAnimation) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = clock.getElapsedTime();
      material.uniforms.u_mouse.value.set(mouseRef.current.x, mouseRef.current.y);
    }
  });

  useEffect(() => {
    if (!enableMouseInteraction) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    gl.domElement.addEventListener("pointermove", handlePointerMove);
    return () => gl.domElement.removeEventListener("pointermove", handlePointerMove);
  }, [enableMouseInteraction, gl]);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={waveVertexShader}
        fragmentShader={waveFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

// Custom Dither pass component
function DitherPass({ colorNum, pixelSize }: { colorNum: number; pixelSize: number }) {
  const effect = useMemo(() => new DitherEffect({ colorNum, pixelSize }), [colorNum, pixelSize]);
  return <primitive object={effect} />;
}

interface DitherProps {
  waveSpeed?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
  waveColor?: [number, number, number];
  bgColor?: [number, number, number];
  colorNum?: number;
  pixelSize?: number;
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
  className?: string;
}

export function Dither({
  waveSpeed = 0.05,
  waveFrequency = 3,
  waveAmplitude = 0.6,
  waveColor = [0.0, 0.0, 0.0], // Black waves/dots
  bgColor = [1.0, 1.0, 1.0], // White background
  colorNum = 4,
  pixelSize = 4,
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.3,
  className = "",
}: DitherProps) {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: '#ffffff'
      }}
    >
      <Canvas
        gl={{
          preserveDrawingBuffer: true,
          antialias: false,
          alpha: false,
        }}
        camera={{ position: [0, 0, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        dpr={1}
      >
        <color attach="background" args={['#ffffff']} />
        <WaveMesh
          waveSpeed={waveSpeed}
          waveFrequency={waveFrequency}
          waveAmplitude={waveAmplitude}
          waveColor={waveColor}
          bgColor={bgColor}
          enableMouseInteraction={enableMouseInteraction}
          mouseRadius={mouseRadius}
          disableAnimation={disableAnimation}
        />
        <EffectComposer>
          <DitherPass colorNum={colorNum} pixelSize={pixelSize} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
