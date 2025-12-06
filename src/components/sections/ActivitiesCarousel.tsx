import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryActivities } from "../../lib/carouselData";

export function ActivitiesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

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

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      // Responsive scroll amount
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth < 1024;
      const scrollAmount = isMobile ? 350 : isTablet ? 480 : 550;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const selectedActivity = selectedCard !== null ? galleryActivities[selectedCard] : null;

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCard(null);
    };
    if (selectedCard !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [selectedCard]);

  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {selectedCard !== null && selectedActivity && (
          <div className="fixed inset-0 z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCard(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 max-w-4xl mx-auto my-10 bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/80 hover:bg-black rounded-full flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-64 md:h-96">
                <img
                  src={selectedActivity.src}
                  alt={selectedActivity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 bg-[#651224] text-white text-xs font-medium uppercase tracking-wider rounded-full mb-3">
                    {selectedActivity.category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    {selectedActivity.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {selectedActivity.description}
                </p>

                <div className="p-5 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">Why Join Us?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-[#651224] text-white rounded-full flex items-center justify-center text-xs">✓</span>
                      Professional learning environment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-[#651224] text-white rounded-full flex items-center justify-center text-xs">✓</span>
                      Experienced faculty members
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-[#651224] text-white rounded-full flex items-center justify-center text-xs">✓</span>
                      Excellent career opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        {/* Dot Grid Background - more visible */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#FAFAFA",
            backgroundImage: `radial-gradient(circle, rgba(101, 18, 36, 0.12) 1.5px, transparent 1.5px)`,
            backgroundSize: `24px 24px`,
          }}
        />
        {/* Gradient fade at edges */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-[#FAFAFA]/90 to-transparent z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-[#FAFAFA]/90 to-transparent z-[1]" />

        <div className="relative z-[2] max-w-7xl mx-auto px-4 md:px-6">
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#651224] mb-4"
            >
              Student Life
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1B1B]"
            >
              Activities & <span className="text-[#B0384F]">Events</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-base md:text-lg text-gray-600 max-w-lg"
            >
              Explore vibrant student life with academic activities and special
              events.
            </motion.p>
          </div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-2"
          >
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`
                w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#1B1B1B]
                flex items-center justify-center transition-all
                ${canScrollLeft ? "hover:bg-[#1B1B1B] hover:text-white" : "opacity-30 cursor-not-allowed"}
              `}
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`
                w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#1B1B1B]
                flex items-center justify-center transition-all
                ${canScrollRight ? "hover:bg-[#1B1B1B] hover:text-white" : "opacity-30 cursor-not-allowed"}
              `}
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="flex gap-5 sm:gap-6 md:gap-8 overflow-x-auto scroll-smooth pb-6 -mx-4 px-4 md:-mx-6 md:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
        >
          {galleryActivities.slice(0, 8).map((item, index) => (
            <ActivityCard
              key={item.title}
              item={item}
              index={index}
              onClick={() => setSelectedCard(index)}
            />
          ))}
        </div>
        </div>
      </section>
    </>
  );
}

function ActivityCard({
  item,
  index,
  onClick,
}: {
  item: (typeof galleryActivities)[0];
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  // Handle tap animation for mobile
  const handleTap = () => {
    setIsTapped(true);
    setTimeout(() => setIsTapped(false), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTap}
      onClick={onClick}
      className="relative flex-shrink-0 w-[85vw] max-w-[380px] sm:w-[75vw] sm:max-w-[420px] md:w-[450px] md:max-w-none lg:w-[500px] xl:w-[550px] h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden cursor-pointer group shadow-xl snap-center"
    >
      {/* Background Image with parallax effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: isHovered || isTapped ? 1.08 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#651224]/20 via-transparent to-transparent opacity-60" />

      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered || isTapped ? "200%" : "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Category Badge - larger and more prominent */}
      <motion.div
        className="absolute top-5 sm:top-6 left-5 sm:left-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.2 }}
      >
        <span className="px-4 py-2 bg-white/25 backdrop-blur-md rounded-full text-xs sm:text-sm font-semibold text-white uppercase tracking-wider border border-white/20 shadow-lg">
          {item.category}
        </span>
      </motion.div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#651224]/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        <motion.div
          animate={{
            y: isHovered || isTapped ? -8 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Title with gradient text effect on hover */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
            {item.title}
          </h3>

          {/* Description - larger text */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </motion.div>

        {/* Learn More Button - more prominent */}
        <motion.div
          className="flex items-center gap-3 mt-5 sm:mt-6"
          animate={{
            opacity: isHovered || isTapped ? 1 : 0.8,
            x: isHovered || isTapped ? 6 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-sm sm:text-base md:text-lg font-semibold text-white">
            Learn more
          </span>
          <motion.div
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
            animate={{
              scale: isHovered || isTapped ? 1.1 : 1,
              backgroundColor: isHovered || isTapped ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated border on hover/tap */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        animate={{
          boxShadow: isHovered || isTapped
            ? "inset 0 0 0 3px rgba(101, 18, 36, 0.6), 0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            : "inset 0 0 0 0px rgba(101, 18, 36, 0), 0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Subtle pulse animation indicator for mobile */}
      <motion.div
        className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white/60 md:hidden"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
