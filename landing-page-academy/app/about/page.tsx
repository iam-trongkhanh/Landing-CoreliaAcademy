"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Script from "next/script";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { DepartmentsSection } from "@/components/DepartmentsSection";
import { BrandMarquee } from "@/components/BrandMarquee";
import { ContentMarquee } from "@/components/ContentMarquee";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { departments, partnerLogos } from "@/lib/siteData";
import { StatCard } from "@/components/cards/StatCard";
import { generateBreadcrumbSchema } from "@/lib/seo";

const stats = [
  { label: "Student Nationalities", value: "100+" },
  { label: "Graduation Rate", value: "25%" },
  { label: "Entry Admission", value: "10k" },
  { label: "Open Classes", value: "24/7" },
];

const highlights = [
  {
    image_url: "/gallery/gallery-1.jpg",
    year: "2015",
    description:
      "Set academic records. While the adoption of cryptocurrency for everyday transactions is growing.",
  },
  {
    image_url: "/gallery/gallery-2.jpg",
    year: "2020",
    description:
      "Innovative city campus. While the use of cryptocurrency for everyday transactions is on the rise.",
  },
  {
    image_url: "/gallery/gallery-3.jpg",
    year: "2019",
    description:
      "Innovative city campus. As the adoption of cryptocurrency for daily transactions continues to accelerate.",
  },
  {
    image_url: "/gallery/gallery-4.jpg",
    year: "2024",
    description:
      "Set records. As cryptocurrency becomes increasingly adopted for everyday transactions.",
  },
  {
    image_url: "/gallery/gallery-5.jpg",
    year: "2016",
    description:
      "Expanded global partnerships. The university established connections with leading institutions worldwide.",
  },
  {
    image_url: "/gallery/gallery-6.jpg",
    year: "2017",
    description:
      "Launched new research centers. Focus on innovation and cutting-edge technology development.",
  },
  {
    image_url: "/gallery/gallery-7.jpg",
    year: "2018",
    description:
      "Record enrollment numbers. Welcomed the largest incoming class in university history.",
  },
  {
    image_url: "/gallery/gallery-8.jpg",
    year: "2021",
    description:
      "Digital transformation initiative. Implemented comprehensive online learning platforms.",
  },
  {
    image_url: "/gallery/gallery-9.jpg",
    year: "2022",
    description:
      "Sustainability achievements. Recognized for environmental leadership and green campus initiatives.",
  },
  {
    image_url: "/gallery/gallery-10.jpg",
    year: "2023",
    description:
      "Research excellence award. Faculty recognized for groundbreaking contributions to science.",
  },
];

//   {
//     id: "01",
//     name: "Psychology",
//     description:
//       "We Have Focused On Generating New Knowledge & Promoting In Any Kind Of Situations.",
//   },
//   {
//     id: "02",
//     name: "Sociology",
//     description:
//       "We Have Concentrated On Generating New Knowledge Across Diverse Social Situations.",
//   },
//   {
//     id: "03",
//     name: "Political Science",
//     description:
//       "We Have Focused On Generating New Knowledge Understanding In A Variety Of Political Situations.",
//   },
//   {
//     id: "04",
//     name: "Anthropology",
//     description:
//       "We Have Concentrated On Generating Understanding In A Whole Range Of Social Contexts.",
//   },
//   {
//     id: "05",
//     name: "Economics",
//     description:
//       "We Have Focused On Improving Understanding Across Diverse Economic Contexts And Issues.",
//   },
// ];

export default function AboutPage() {
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
  }, [currentIndex]);

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div
        className=" bg-white text-[#1B1B1B]"
        style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif' }}
      >
        <SiteHeader />

        <main className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24 bg-white pb-12 sm:pb-16 md:pb-20 lg:pb-28 pt-0 text-[#1B1B1B]">
          <section className="bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-4 sm:pb-5">
            <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center justify-center px-4 sm:px-6">
              <AnimateOnScroll>
                <h1
                  className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-semibold leading-tight text-[#111111] px-2 sm:px-4 break-words"
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                  }}
                >
                  Unleashing academic
                  <br />
                  excellence
                </h1>
              </AnimateOnScroll>
            </div>
          </section>

          <section className="bg-white py-4 sm:py-6 md:py-8">
            <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-8 sm:gap-12 md:gap-16 px-4 sm:px-6">
              <div className="grid gap-8 sm:gap-12 md:gap-16 lg:gap-[140px] lg:grid-cols-[1fr_1.15fr]">
                <AnimateOnScroll>
                  <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    <span className="underline underline-offset-4 decoration-2 font-semibold text-xs sm:text-sm md:text-[14px] text-[rgb(100,19,32)]">
                      SINCE 1990
                    </span>

                    <h3 className="mt-4 sm:mt-5 md:mt-[20px] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight break-words">
                      Quality education for every students.
                    </h3>
                    <p className="text-sm sm:text-base md:text-[16px] leading-relaxed text-[#4D4D4D]">
                      We have focused on generating new knowledge and promoting
                      critical thinking amongst our students, graduating more
                      than 7,000 young men and women during this time.
                    </p>
                    <div className="relative w-full max-w-full sm:max-w-[500px] md:max-w-[580px] aspect-video bg-[#E5D2D7]">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="VIT University - 1Min Ad Film"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll>
                  <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    <div className="relative w-full aspect-[580/535] max-w-full sm:max-w-[500px] md:max-w-[580px] lg:max-w-none bg-[#E5D2D7]">
                      <Image
                        src="/gallery/gallery-9.jpg"
                        alt="Students collaborating in modern lounge"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 580px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="grid gap-4 sm:gap-5 grid-cols-2 md:grid-cols-2">
                      {stats.map((stat) => (
                        <StatCard
                          key={stat.label}
                          label={stat.label}
                          value={stat.value}
                        />
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </section>

          <section className="bg-white pb-20">
            <BrandMarquee
              logos={partnerLogos}
              itemClassName="flex h-12 w-28 items-center justify-center opacity-70"
              imageClassName="h-full w-full object-contain"
            />
          </section>

          <section className="bg-[#FDF8FA] py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="mx-auto flex w-full flex-col gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6">
              <AnimateOnScroll>
                <div className="text-center">
                  <p className="text-xs sm:text-sm md:text-[14px] font-semibold underline underline-offset-4 decoration-1 uppercase text-[#B0384F]">
                    OUR HISTORY
                  </p>
                  <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight px-2 sm:px-4">
                    One of the largest,
                    <span className="text-[#641320]"> most </span>
                    diverse
                    <br />
                    <span className="text-[#641320]">universities </span>
                    in the nyc.
                  </h2>
                </div>
              </AnimateOnScroll>
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
                      transform: `translateX(-${
                        currentIndex * itemWidthWithGap
                      }px)`,
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
                          <Image
                            src={highlight.image_url}
                            alt={highlight.description}
                            fill
                            sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 320px, 340px"
                            className="object-cover object-center"
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
            </div>
          </section>

          <DepartmentsSection departments={departments} />

          <section className="bg-white py-8 sm:py-10 md:py-12">
            <ContentMarquee
              borderColorClass="border-[#641320] "
              itemClassName="flex items-center gap-4 sm:gap-6 md:gap-8"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#641320]">
                mathematics
              </span>
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#C27C8A]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.54-3.07 8.83-7.09 9.95C8.07 21.83 5 17.54 5 13V8.18l7-3.5V2.18z" />
              </svg>
              <span
                className="text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #C27C8A",
                }}
              >
                arts
              </span>
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#C27C8A]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.54-3.07 8.83-7.09 9.95C8.07 21.83 5 17.54 5 13V8.18l7-3.5V2.18z" />
              </svg>
              <span
                className="text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #C27C8A",
                }}
              >
                commerce
              </span>
            </ContentMarquee>
          </section>
        </main>

        <SiteFooter variant="light" />
      </div>
    </>
  );
}
