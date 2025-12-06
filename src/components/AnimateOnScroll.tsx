import { useEffect, useRef, useState } from "react";

type AnimationType = "fadeIn" | "fadeInUp";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
};

const animationClassMap: Record<AnimationType, string> = {
  fadeIn: "animate__fadeIn",
  fadeInUp: "animate__fadeInUp",
};

export function AnimateOnScroll({
  children,
  className = "",
  animation = "fadeInUp",
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInViewport) {
        setIsVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isMounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`${
        isVisible ? `animate__animated ${animationClassMap[animation]}` : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
