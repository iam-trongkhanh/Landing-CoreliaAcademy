import { useState } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { TestimonialCard } from "./cards/TestimonialCard";

type Testimonial = {
  image: string;
  altText: string;
  quote: string;
  program: string;
  name: string;
  showPlayIcon: boolean;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
  videoId: string;
};

export function TestimonialsSection({
  testimonials,
  videoId,
}: TestimonialsSectionProps) {
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(
    null
  );

  return (
    <section className="bg-[#822333] py-12 sm:py-16 md:py-20 lg:py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-8 sm:gap-12 md:gap-16 px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center px-4">
            <p className="text-xs sm:text-sm md:text-[14px] font-semibold uppercase">
              WHAT OUR STUDENTS SAY?
            </p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight text-white break-words">
              Top reviews provided by
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>our customers
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                image={testimonial.image}
                altText={testimonial.altText}
                quote={testimonial.quote}
                program={testimonial.program}
                name={testimonial.name}
                showPlayIcon={testimonial.showPlayIcon}
                videoId={videoId}
                isPlaying={playingVideoIndex === index}
                onPlayClick={() => setPlayingVideoIndex(index)}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

