import { useState, useEffect } from "react";

type Highlight = {
  image_url: string;
  year: string;
  description: string;
};

type HistoryCarouselProps = {
  highlights: Highlight[];
};

export function HistoryCarousel({ highlights }: HistoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(highlights.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const itemWidth = 340;
  const gap = 120;
  const itemWidthWithGap = itemWidth + gap;
  const itemsPerView = 4;

  const duplicatedHighlights = [...highlights, ...highlights, ...highlights];

  useEffect(() => {
    if (currentIndex < highlights.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(highlights.length * 2);
        setTimeout(() => setIsTransitioning(true), 10);
      }, 500);
      return () => clearTimeout(timer);
    } else if (currentIndex >= highlights.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(highlights.length);
        setTimeout(() => setIsTransitioning(true), 10);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, highlights.length]);

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div
      className="relative w-full overflow-x-auto overflow-y-visible -mx-4 sm:mx-0 px-4 sm:px-0 carousel-container"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div
        className="w-full mx-auto"
        style={{
          maxWidth: `min(100%, ${
            itemsPerView * itemWidth + (itemsPerView - 1) * gap
          }px)`,
        }}
      >
        <div
          data-carousel
          className="flex"
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${currentIndex * itemWidthWithGap}px)`,
            transition: isTransitioning
              ? "transform 500ms ease-in-out"
              : "none",
          }}
        >
          {duplicatedHighlights.map((highlight, index) => (
            <div
              key={`${highlight.year}-${index}`}
              className="shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] flex flex-col"
            >
              <div className="relative h-[180px] sm:h-[200px] md:h-[220px] w-full bg-[#E9D2D8]">
                <img
                  src={highlight.image_url}
                  alt={highlight.description}
                  className="object-cover object-center h-full w-full"
                />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 w-full">
                <p className="text-xs sm:text-sm font-semibold uppercase text-[#B0384F]">
                  {highlight.description.split(". ")[0]}
                </p>
                <p
                  className="text-2xl sm:text-3xl font-semibold"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #1B1B1B",
                  }}
                >
                  {highlight.year}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5C5C5C]">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Ẩn progress bar - chỉ hiển thị nút điều hướng trên desktop, ẩn trên mobile */}
      <div className="hidden md:flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8 carousel-navigation">
        <button
          onClick={handlePrevious}
          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#641320] text-white text-lg sm:text-xl transition-colors hover:bg-[#7A1D32] active:scale-95"
          aria-label="Previous"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#641320] text-white text-lg sm:text-xl transition-colors hover:bg-[#7A1D32] active:scale-95"
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
}
