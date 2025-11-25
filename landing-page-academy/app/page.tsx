import Image from "next/image";
import Script from "next/script";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { BrandMarquee } from "@/components/BrandMarquee";
import { DepartmentsSection } from "@/components/DepartmentsSection";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VideoShowcase } from "@/components/VideoShowcase";
import { departments, partnerLogos } from "@/lib/siteData";
import { FormInput } from "@/components/ui/FormInput";
import { Button } from "@/components/ui/Button";
import { EmailIcon } from "@/components/icons/FormIcons";
import type { Metadata } from "next";
import {
  generateMetadata as genMeta,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title:
    "Eduvet University - Top Educational Institution in NYC | Quality Education Since 1990",
  description:
    "Eduvet University is one of the most reputed educational institutions in NYC, offering quality education since 1990. Explore our programs in Social Science, Psychology, Sociology, and more. Join 7,000+ successful graduates.",
  path: "/",
  keywords: [
    "university NYC",
    "higher education New York",
    "social science programs",
    "psychology degree NYC",
    "sociology courses",
    "quality education",
  ],
  image: "/images/hero-student.jpg",
});

const announcements = [
  {
    title: "Payment for summer 2024 (Social study)",
    range: "Aug 22, 2024 to Oct 11, 2024",
    image: "/announcements/announcement-1.jpg",
  },
  {
    title: "Summer 2024 Pharmacy Payment Reminder",
    range: "Aug 22, 2024 to Oct 11, 2024",
    image: "/announcements/announcement-2.jpg",
  },
  {
    title: "Important: Pharmacy Payment for Summer 2024",
    range: "Aug 22, 2024 to Oct 11, 2024",
    image: "/announcements/announcement-3.jpg",
  },
];

const facts = [
  { label: "Student Nationalities", value: "100+" },
  { label: "International Students", value: "25%" },
  { label: "Different Majors", value: "20" },
];

const galleryImages = Array.from({ length: 20 }).map(
  (_, index) => `/gallery/gallery-${index + 1}.jpg`
);

const galleryRow = galleryImages.slice(0, 8);

// FAQ Schema for homepage
const homeFAQs = [
  {
    question: "What programs does Eduvet University offer?",
    answer:
      "Eduvet University offers a wide range of programs in Social Science including Psychology, Sociology, Political Science, Anthropology, Economics, International Relations, Geography, and Physics. We focus on generating new knowledge and promoting critical thinking.",
  },
  {
    question: "When was Eduvet University founded?",
    answer:
      "Eduvet University was founded in 1990 and has since become one of the most reputed educational institutions in NYC, graduating more than 7,000 students.",
  },
  {
    question: "Where is Eduvet University located?",
    answer:
      "Eduvet University is located in New York City, specifically at 12/A, New Booston Tower, NYC. We are one of the largest universities in NYC.",
  },
  {
    question: "How can I apply to Eduvet University?",
    answer:
      "You can apply to Eduvet University by visiting our website and clicking the 'Apply Now' button. You can also contact us at +8 (378) 389 092 or email us at contactinfo@gmail.com for more information.",
  },
];

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
  ]);

  const faqSchema = generateFAQSchema(homeFAQs);

  return (
    <>

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="bg-white text-[#1F3050]">
        <SiteHeader />

        <main className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24 bg-white pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-0">
          <Hero />
          <section className="bg-[#FDFDFD] py-12 sm:py-16 md:py-20 lg:py-24">
            <AnimateOnScroll>
              <div className="mx-auto flex w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:h-auto max-w-[1300px] flex-col-reverse gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">

                <div className="relative flex flex-[1.2] justify-center lg:justify-start w-full">
                  <div className="relative h-[300px] w-[240px] sm:h-[400px] sm:w-[320px] md:h-[450px] md:w-[360px] lg:h-[500px] lg:w-[390px] max-w-full mx-auto lg:mx-0">
                    <div className="absolute inset-0 bg-white shadow-[0px_30px_80px_rgba(111,23,41,0.12)] rounded-sm">
                      <Image
                        src="/images/founder-main.jpg"
                        alt="Eduvet University Founder - Leading Quality Education Since 2001"
                        fill
                        sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 390px"
                        className="object-cover object-center"
                        priority
                        quality={85}
                      />
                    </div>
                    <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 md:-bottom-12 md:left-42 lg:-bottom-16 lg:left-50 xl:-bottom-20 xl:left-60 h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px] xl:h-[380px] xl:w-[380px] border-2 sm:border-3 border-white bg-white shadow-[0px_25px_80px_rgba(31,58,95,0.15)] rounded-sm overflow-hidden">
                      <Image
                        src="/images/founder-mentor.jpg"
                        alt="Eduvet University Mentor Guiding Student - Academic Excellence"
                        fill
                        sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 280px, (max-width: 1280px) 320px, 380px"
                        className="object-cover object-center"
                        quality={85}
                      />
                    </div>
                  </div>
                </div>


                <div className="flex flex-[0.8] flex-col justify-center gap-4 sm:gap-6 md:gap-8 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#1B1B1B] break-words">
                    Message from the main{" "}
                    <span className="text-[#B0384F]">founder</span>
                  </h2>

                  <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-snug text-[#1B1B1B]">
                    We have focused on generating new knowledge and promoting
                    critical thinking amongst our students.
                  </h3>

                  <div className="border-l-4 border-[#7A1D32] pl-4 sm:pl-5 md:pl-6 text-sm sm:text-base md:text-lg font-medium text-[#4D4D4D]">
                    Since its inception in 2001, Eduvet University has become
                    one of the most reputed educational institution in NYC.
                  </div>

                  <div className="flex flex-col gap-2 pt-2 sm:pt-3 md:pt-4 text-[#1B1B1B] items-center lg:items-start">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 overflow-hidden rounded-full border border-[#E2CAD0]">
                        <Image
                          src="/images/hero-student.jpg"
                          alt="Founder avatar"
                          width={56}
                          height={56}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold">
                          Founder
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-semibold">
                          Amelia K. Hamilton
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </section>

          <section className="bg-[#651224] py-12 sm:py-16 md:py-20 lg:py-24 text-white">
            <AnimateOnScroll>
              <div className="mx-auto flex min-h-[600px] sm:min-h-[700px] md:min-h-[800px] w-full max-w-[1300px] flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6">
                <div className="text-center">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[#F3C4CC]">
                    why choose eduvet
                  </p>
                  <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight px-2 sm:px-4">
                    One of the Largest Universities in NYC
                  </h2>
                </div>
                <div className="grid w-full gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 border border-[#8F4D5C] bg-transparent px-6 sm:px-8 md:px-10 py-8 sm:py-12 md:py-16 text-center border-t-4 sm:border-t-6">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center">
                      <Image
                        src="/icons/degree.svg"
                        alt="Degree icon"
                        width={60}
                        height={60}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="space-y-3 sm:space-y-4 md:space-y-5">
                      <h3 className="text-xl sm:text-2xl font-semibold">
                        Top Degrees
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-[#F5E0E4]">
                        Offering a wide range of programs across multiple
                        disciplines.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 border border-[#8F4D5C] bg-transparent px-6 sm:px-8 md:px-10 py-8 sm:py-12 md:py-16 text-center border-t-4 sm:border-t-6">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center">
                      <Image
                        src="/icons/brain.svg"
                        alt="Brain icon"
                        width={60}
                        height={60}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="space-y-3 sm:space-y-4 md:space-y-5">
                      <h3 className="text-xl sm:text-2xl font-semibold">
                        Expert Faculty
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-[#F5E0E4]">
                        Learn from leading professionals and academic experts.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 border border-[#8F4D5C] bg-transparent px-6 sm:px-8 md:px-10 py-8 sm:py-12 md:py-16 text-center border-t-4 sm:border-t-6 md:col-span-2 lg:col-span-1">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center">
                      <Image
                        src="/icons/book.svg"
                        alt="Book icon"
                        width={60}
                        height={60}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="space-y-3 sm:space-y-4 md:space-y-5">
                      <h3 className="text-xl sm:text-2xl font-semibold">
                        Extensive Library
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-[#F5E0E4]">
                        Access to a comprehensive collection of resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </section>

          <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
            <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6"></div>
            <AnimateOnScroll>
              <div className="relative left-1/2 mt-8 sm:mt-10 md:mt-12 lg:mt-14 w-screen -translate-x-1/2 px-2 sm:px-4 md:px-[4vw] lg:px-[6vw]">
                <div className="gallery-marquee-full flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                  {galleryRow.concat(galleryRow).map((src, index) => {
                    const isLarge = index % 2 === 0;
                    return (
                      <div
                        key={`${src}-${index}`}
                        className={`relative shrink-0 overflow-hidden bg-white ${
                          isLarge
                            ? "h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px] xl:h-[650px] xl:w-[650px]"
                            : "h-[150px] w-[150px] sm:h-[220px] sm:w-[220px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px]"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`Eduvet University Campus Gallery - Image ${
                            index + 1
                          }`}
                          fill
                          sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 450px, 512px"
                          className="object-cover object-center"
                          priority={index === 0}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimateOnScroll>
          </section>

          <DepartmentsSection departments={departments} />

          <section className="bg-white py-12 sm:py-16 md:py-20">
            <AnimateOnScroll>
              <BrandMarquee logos={partnerLogos} />
            </AnimateOnScroll>
          </section>

          <section className="mx-auto flex w-full max-w-[1300px] flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6">
            <AnimateOnScroll>
              <SectionHeading
                eyebrow="Academic Dates"
                title="Announcements & news feeds"
                align="left"
              />
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {announcements.map((announcement, index) => (
                  <div
                    key={announcement.title}
                    className="group flex flex-col gap-3 sm:gap-4"
                  >
                    <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-80 w-full overflow-hidden bg-[#E5D2D7]">
                      <Image
                        src={announcement.image}
                        alt={`${announcement.title} - Eduvet University Announcement`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="transform object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute left-3 top-3 sm:left-4 sm:top-4 md:left-6 md:top-6 rounded-md bg-[#651224] px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-base sm:text-lg md:text-xl font-semibold tracking-[0.2em] text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B1B1B]">
                        {announcement.title}
                      </h3>
                      <p className="text-sm sm:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#5F5F5F]">
                        {announcement.range}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </section>
          <VideoShowcase />

          <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
            <AnimateOnScroll>
              <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 text-center">
                <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
                  <Image
                    src="/icons/hat.svg"
                    alt="Graduation hat"
                    width={150}
                    height={150}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-[150px] lg:h-[150px] object-contain"
                  />
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#B0384F]">
                    Fun facts about university
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1B1B1B] px-2 sm:px-4">
                    Education, empowering them to{" "}
                    <span className="text-[#B0384F]">become leaders</span> who
                    make a positive impact on the world.
                  </h2>
                </div>
                <div className="flex w-full flex-col gap-6 sm:gap-8 text-[#84404E] md:flex-row md:items-center md:justify-between">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-col items-center gap-2 sm:gap-3 text-center"
                    >
                      <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#84404E]">
                        {fact.label}
                      </p>


                      <p
                        className="text-3xl sm:text-4xl md:text-5xl font-semibold"
                        style={{
                          color: "transparent",
                          WebkitTextStroke: "2px #1B1B1B",
                        }}
                      >
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </section>

          <section className="relative z-20 bg-transparent pb-0 pt-12 sm:pt-16 md:pt-20 lg:pt-28">
            <AnimateOnScroll>
              <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
                <div className="relative z-20 overflow-hidden bg-white shadow-[0px_45px_120px_rgba(0,0,0,0.25)] lg:grid lg:grid-cols-[460px_1fr]">

                  <div className="relative flex justify-center items-center h-[250px] sm:h-[300px] md:h-[350px] lg:h-full">
                    <div className="relative h-full w-full max-w-[420px] lg:h-[415px] lg:w-[440px]">
                      <Image
                        src="/footer/cta.jpg"
                        alt="Eduvet University Students Celebrating Success - Apply for Admission"
                        fill
                        sizes="(max-width: 1024px) 100vw, 440px"
                        className="object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#B0384F]">
                      Apply for admission?
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-[#1B1B1B] break-words">
                      A Place to Provide Students with Enough Knowledge and
                      Skills in a Complex World
                    </h2>

                    <p className="text-sm sm:text-base leading-relaxed text-[#1B1B1B] max-w-3xl">
                      Are you looking for exceptional education experience?
                      Eduvet might be the place for you.
                    </p>

                    <form className="flex flex-col gap-3 sm:gap-4">
                      <FormInput
                        type="email"
                        placeholder="Business email"
                        icon={<EmailIcon />}
                        containerClassName="text-sm"
                        className="text-sm"
                      />

                      <Button
                        variant="primary"
                        size="sm"
                        className="gap-2 sm:gap-3"
                      >
                        subscribe ↗
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
