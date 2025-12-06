import {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import type { CarouselCard } from "../../types/carousel";

interface CarouselContextType {
  onCardClose: (index: number) => void;
  currentIndex: number;
}

const CarouselContext = createContext<CarouselContextType>({
  onCardClose: () => {},
  currentIndex: 0,
});

export function Carousel({ items }: { items: CarouselCard[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, [checkScrollability]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -800, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 800, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 800;
      const gap = 32;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        {/* Navigation buttons */}
        <div className="flex justify-end gap-2 sm:gap-3 mb-4 sm:mb-6 mr-4 md:mr-10">
          <button
            className={cn(
              "relative z-40 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all",
              !canScrollLeft && "opacity-30 cursor-not-allowed hover:bg-gray-100"
            )}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className={cn(
              "relative z-40 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all",
              !canScrollRight && "opacity-30 cursor-not-allowed hover:bg-gray-100"
            )}
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Carousel */}
        <div
          className="flex w-full overflow-x-scroll scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="flex flex-row gap-8 pl-4 md:pl-10 pr-10">
            {items.map((item, index) => (
              <Card key={`${item.src}-${index}`} card={item} index={index} />
            ))}
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </CarouselContext.Provider>
  );
}

function Card({ card, index }: { card: CarouselCard; index: number }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              ref={containerRef}
              className="max-w-5xl mx-auto bg-white z-[60] my-10 p-6 md:p-10 rounded-3xl relative"
            >
              <button
                className="sticky top-4 h-10 w-10 right-0 ml-auto bg-black/90 hover:bg-black rounded-full flex items-center justify-center z-50 transition-colors"
                onClick={handleClose}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-semibold uppercase tracking-wider text-[#651224]"
              >
                {card.category}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-neutral-800 mt-3"
              >
                {card.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="py-8"
              >
                <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden mb-8">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-4 text-neutral-600">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#651224] text-white flex items-center justify-center text-sm">✓</span>
                      <span>Professional and modern learning environment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#651224] text-white flex items-center justify-center text-sm">✓</span>
                      <span>Experienced and dedicated faculty members</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#651224] text-white flex items-center justify-center text-sm">✓</span>
                      <span>Excellent career opportunities after graduation</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleOpen}
        className="group relative rounded-3xl bg-neutral-900 h-[420px] w-[300px] sm:h-[500px] sm:w-[380px] md:h-[600px] md:w-[500px] lg:h-[700px] lg:w-[600px] xl:h-[800px] xl:w-[700px] overflow-hidden flex-shrink-0 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Image */}
        <BlurImage src={card.src} alt={card.title} />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-10 lg:p-12 xl:p-14 z-30">
          <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium uppercase tracking-wider mb-2 sm:mb-3">
            {card.category}
          </p>
          <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
            {card.title}
          </h3>
          <p className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-3 line-clamp-2">
            {card.description}
          </p>

          {/* Read more indicator */}
          <div className="mt-4 sm:mt-5 md:mt-6 flex items-center gap-2 sm:gap-3 text-white/70 group-hover:text-white transition-colors">
            <span className="text-sm sm:text-base md:text-lg font-medium">Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </motion.button>
    </>
  );
}

function BlurImage({ src, alt }: { src: string; alt: string }) {
  return (
    <>
      {/* Fallback gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#651224] to-[#8b5cf6]" />

      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="sync"
        className="object-cover absolute z-10 inset-0 w-full h-full transition-all duration-500 group-hover:scale-110"
      />
    </>
  );
}

export { Card, BlurImage };
