"use client";

import Image from "next/image";
import { useState } from "react";
import Script from "next/script";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ContentMarquee } from "@/components/ContentMarquee";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { FormInput } from "@/components/ui/FormInput";
import { FormTextarea } from "@/components/ui/FormTextarea";
import { Button } from "@/components/ui/Button";
import { UserIcon, EmailIcon, PenIcon } from "@/components/icons/FormIcons";
import { generateBreadcrumbSchema } from "@/lib/seo";

const programs = [
  {
    name: "Psychology",
    icon: "/icons/brain.svg",
    description:
      "We have focused generating new knowledge & promoting is any kind of situations.",
  },
  {
    name: "Sociology",
    icon: "/icons/degree.svg",
    description:
      "We have concentrated on generating new knowledge across diverse social situations.",
  },
  {
    name: "Political Science",
    icon: "/icons/book.svg",
    description:
      "We have focused on generating new knowledge understanding in a variety of political situations.",
  },
  {
    name: "Anthropology",
    icon: "/icons/book.svg",
    description:
      "We have concentrated on generating understanding in a wide range of social contexts.",
  },
  {
    name: "Economics",
    icon: "/icons/book.svg",
    description:
      "We have focused on improving understanding across diverse economic contexts and issues.",
  },
  {
    name: "International Relations",
    icon: "/icons/degree.svg",
    description:
      "We have focused on generating new knowledge in various global and diplomatic contexts.",
  },
  {
    name: "Geography",
    icon: "/icons/book.svg",
    description:
      "We have focused on promoting understanding across different geographical contexts.",
  },
  {
    name: "Physics",
    icon: "/icons/book.svg",
    description:
      "We have focused on advancing understanding in various physical and scientific contexts.",
  },
];

const testimonials = [
  {
    image: "/gallery/gallery-1.jpg",
    altText: "Students sitting outside studying",
    quote:
      "Every subject and topic I studied was extremely interesting, and that's what kept me going.",
    program: "Diploma in UX",
    name: "Amelia K. Hamilton",
    showPlayIcon: true,
  },
  {
    image: "/gallery/gallery-2.jpg",
    altText: "Student with laptop and coffee",
    quote:
      "Each subject I delved into was captivating, which fueled my passion to keep learning.",
    program: "Diploma in UX",
    name: "Juliana P. Taylor",
    showPlayIcon: true,
  },
  {
    image: "/gallery/gallery-3.jpg",
    altText: "Student in classroom with orange sweater",
    quote:
      "Every area of study I pursued was which encouraged me to stay committed.",
    program: "Diploma in UX",
    name: "Natalia T. Morgan",
    showPlayIcon: true,
  },
];

export default function ProgramsPage() {
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(
    null
  );
  const videoId = "0nn_fOjcYM0";

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Programs", url: "/programs" },
  ]);

  // Course Schema for programs
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Social Science Programs",
    description:
      "Comprehensive Social Science programs including Psychology, Sociology, Political Science, Anthropology, Economics, and more.",
    provider: {
      "@type": "EducationalOrganization",
      name: "Eduvet University",
    },
    courseCode: "SS-2024",
    educationalLevel: "Undergraduate",
    teaches: [
      "Psychology",
      "Sociology",
      "Political Science",
      "Anthropology",
      "Economics",
      "International Relations",
      "Geography",
      "Physics",
    ],
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema-programs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* Course Schema */}
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />
      <div className="bg-white text-[#1B1B1B]">
        <SiteHeader />

        <main className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24 bg-white pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-0">
          {/* Programs Overview Section */}
          <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-8 sm:gap-12 md:gap-16 px-4 sm:px-6">
              <AnimateOnScroll>
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#1B1B1B] px-2 sm:px-4 break-words">
                    University expertise:
                    <br />
                    <span className="text-[#641320]">Social science</span>
                  </h2>
                </div>
              </AnimateOnScroll>

              {/* Programs Grid */}
              <AnimateOnScroll>
                <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {programs.map((program) => (
                    <ProgramCard
                      key={program.name}
                      name={program.name}
                      icon={program.icon}
                      description={program.description}
                    />
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </section>

          {/* Testimonials Section */}
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
          {/* Hero Form Section */}
          <section className="bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12">
            <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
              {/* Left: Contact Form */}
              <div className="flex w-full lg:w-1/2 shrink-0 flex-col gap-6 sm:gap-8">
                <AnimateOnScroll>
                  <div className="flex flex-col pt-0 sm:pt-6 md:pt-[50px] gap-3 sm:gap-4">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#1B1B1B] underline underline-offset-2 sm:underline-offset-4">
                      GET IN TOUCH
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl my-3 sm:my-4 md:my-[20px] font-semibold leading-tight text-[#1B1B1B] break-words">
                      Tell us anything{" "}
                      <span className="text-[#822333]">here.</span>
                    </h2>
                  </div>

                  <form className="mt-4 sm:mt-5 relative flex flex-col gap-4 sm:gap-6 md:gap-8 z-10">
                    <FormInput
                      type="email"
                      placeholder="Business email"
                      icon={<UserIcon />}
                    />

                    <FormInput
                      type="text"
                      placeholder="info@"
                      icon={<EmailIcon />}
                    />

                    <FormTextarea
                      placeholder="Message"
                      rows={4}
                      icon={<PenIcon />}
                    />

                    <Button
                      type="submit"
                      variant="secondary"
                      size="md"
                      fullWidth
                      className="sm:w-auto"
                    >
                      SUBMIT
                    </Button>
                  </form>
                </AnimateOnScroll>
              </div>

              {/* Right: Image */}
              <div className="relative w-full lg:w-auto shrink-0 flex justify-center lg:justify-start">
                <AnimateOnScroll>
                  <div className="relative h-[350px] w-full max-w-[300px] sm:h-[450px] sm:max-w-[380px] md:h-[550px] md:max-w-[450px] lg:h-[630px] lg:w-[480px] bg-[#E5D2D7] mx-auto lg:mx-0">
                    <Image
                      src="/gallery/gallery-1.jpg"
                      alt="Students talking with laptop in classroom"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 380px, (max-width: 1024px) 450px, 480px"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </section>

          {/* Subject Divider */}
          <section className="bg-white py-8 sm:py-10 md:py-12">
            <ContentMarquee
              borderColorClass="border-b-[#641320] border-t-white"
              itemClassName="flex items-center gap-4 sm:gap-6 md:gap-8"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#641320]">
                Commerce
              </span>
              <Image
                src="/icons/hat.svg"
                alt="Graduation cap"
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 text-[#C27C8A]"
              />
              <span
                className="text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px #C27C8A",
                }}
              >
                Mathematics
              </span>
              <Image
                src="/icons/hat.svg"
                alt="Graduation cap"
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 text-[#C27C8A]"
              />
              <span
                className="text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px #C27C8A",
                }}
              >
                Arts
              </span>
            </ContentMarquee>
          </section>
        </main>

        <SiteFooter variant="light" />
      </div>
    </>
  );
}
