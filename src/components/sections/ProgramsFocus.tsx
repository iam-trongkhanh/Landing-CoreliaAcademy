import { useState } from "react";
import { motion } from "framer-motion";
import { departments } from "../../lib/siteData";

export function ProgramsFocus() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Dot Grid Background - more visible */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(101, 18, 36, 0.15) 1.5px, transparent 1.5px)`,
          backgroundSize: `28px 28px`,
        }}
      />
      {/* Gradient fade at edges for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[1]" />

      <div className="relative z-[2] max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#651224] mb-4"
          >
            Academic Programs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1B1B]"
          >
            Explore Our <span className="text-[#B0384F]">Departments</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-gray-600 max-w-xl mx-auto"
          >
            High-quality training programs designed to develop students'
            capabilities and critical thinking.
          </motion.p>
        </div>

        {/* Programs Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {departments.map((dept, index) => (
            <motion.a
              key={dept.title}
              href="/programs"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer group
                ${index === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
                ${index === 0 ? "h-[280px] md:h-[320px] lg:h-full lg:min-h-[480px]" : "h-[220px] md:h-[240px]"}
              `}
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <motion.div
                  animate={{
                    y: hoveredIndex === index ? -4 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2 max-w-sm">
                    {dept.description}
                  </p>
                </motion.div>

                {/* Learn More */}
                <motion.div
                  className="flex items-center gap-2 mt-3 text-white/80"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.6,
                    x: hoveredIndex === index ? 4 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium">Learn more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Hover Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                animate={{
                  borderColor:
                    hoveredIndex === index
                      ? "rgba(101, 18, 36, 0.5)"
                      : "rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="/programs"
            className="inline-flex items-center gap-2 bg-[#651224] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#7a1d32] transition-all hover:scale-105 group"
          >
            View All Programs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
