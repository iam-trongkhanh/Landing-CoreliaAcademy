import Image from "next/image";

import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoShowcase } from "@/components/VideoShowcase";

const navigation = ["Home", "Campus", "Programs", "Pages", "Events"];

const highlightCards = [
  {
    title: "Education Affordability",
    description:
      "We design Core-tech scholarships that keep tuition accessible while reinforcing trust for every cohort.",
    iconLabel: "Scholar",
  },
  {
    title: "Core academics solutions",
    description:
      "Studio-grade labs for blockchain, AI, and immersive computing map theory to measurable impact.",
    iconLabel: "Labs",
  },
  {
    title: "Inspiring Student Life",
    description:
      "Resident mentors, founder talks, and crafted rituals turn every semester into a living portfolio.",
    iconLabel: "Campus",
  },
];

const departments = [
  {
    title: "Psychology",
    description:
      "We have focused generating new knowledge & promoting is any kind of situations.",
    image: "/gallery/gallery-1.jpg",
  },
  {
    title: "Sociology",
    description:
      "We have concentrated on generating new knowledge across diverse social situations.",
    image: "/gallery/gallery-2.jpg",
  },
  {
    title: "Political Science",
    description:
      "We have focused on generating new knowledge understanding in a variety of political situations.",
    image: "/gallery/gallery-3.jpg",
  },
  {
    title: "Anthropology",
    description:
      "We have concentrated on generating understanding in a wide range of social contexts.",
    image: "/gallery/gallery-4.jpg",
  },
  {
    title: "Economics",
    description:
      "We have focused on improving understanding across diverse economic contexts and issues.",
    image: "/gallery/gallery-5.jpg",
  },
  {
    title: "Geography",
    description:
      "We have focused on improving understanding across diverse geographic contexts and issues.",
    image: "/gallery/gallery-6.jpg",
  },
];

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

const partnerLogos = [
  { name: "Netflix", src: "/brands/logo1.svg", width: 130, height: 40 },
  { name: "Apple", src: "/brands/logo2.png", width: 110, height: 40 },
  { name: "Microsoft", src: "/brands/logo3.svg", width: 140, height: 40 },
  { name: "Google", src: "/brands/logo4.svg", width: 140, height: 40 },
  { name: "Spotify", src: "/brands/logo5.svg", width: 140, height: 40 },
  { name: "IBM", src: "/brands/logo6.svg", width: 120, height: 40 },
  { name: "Twitter", src: "/brands/logo7.svg", width: 120, height: 40 },
  { name: "Meta", src: "/brands/logo8.svg", width: 140, height: 40 },
];

const footerColumns = [
  ["About Us", "Our team", "what we do", "contact us", "FAQ"],
  ["blogs", "Events", "Subjects", "Programs.", "Psychology"],
];

const galleryImages = Array.from({ length: 20 }).map(
  (_, index) => `/gallery/gallery-${index + 1}.jpg`
);

const galleryRow = galleryImages.slice(0, 8);

export default function Home() {
  return (
    <div className="bg-white text-[#1F3050]">
      <header className="border-b border-[#E3D5DA] bg-white">
        <div className="bg-[#4A0F1F] text-[11px] font-semibold uppercase tracking-[0.35em] text-white">
          <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-6 py-3">
            <span>Welcome to our Eduvet University</span>
            <div className="flex gap-6">
              <span>+8 (378) 389 092</span>
              <span>contactinfo@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-semibold text-[#4A0F1F]">Eduvet.</div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#1B1B1B] md:flex">
            {/* {navigation.map((item) =>
              item === "Pages" ? (
                <div key={item} className="relative group">
                  <button className="transition-colors hover:text-[#B0384F]">
                    {item}.
                  </button>
                  <div className="pointer-events-none absolute left-1/2 top-full z-30 hidden -translate-x-1/2 pt-6 group-hover:block group-hover:pointer-events-auto">
                    <div className="grid min-w-[640px] grid-cols-[1.2fr_2fr] gap-10 bg-[#4A0F1F] px-10 py-10 text-left text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-[0px_30px_80px_rgba(0,0,0,0.35)]">
                      <div className="space-y-4">
                        <p className="text-[11px] tracking-[0.3em] text-white/60">
                          Demos
                        </p>
                        <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                          Home-1
                        </button>
                        <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                          Home-2
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <p className="text-[11px] tracking-[0.3em] text-white/60">
                            Other Pages
                          </p>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            Contact.
                          </button>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            FAQ.
                          </button>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            404
                          </button>
                        </div>
                        <div className="space-y-4">
                          <p className="text-[11px] tracking-[0.3em] text-white/60">
                            CMS Pages
                          </p>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            Teachers.
                          </button>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            Teacher details.
                          </button>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            Subject details.
                          </button>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            Blogs.
                          </button>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            Blog details.
                          </button>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            Event details.
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={item}
                  className="transition-colors hover:text-[#B0384F]"
                >
                  {item}.
                </button>
              )
            )} */}

            {navigation.map((item) =>
              item === "Pages" ? (
                <div key={item} className="relative group">
                  <button className="transition-colors hover:text-[#B0384F]">
                    {item}.
                  </button>

                  {/* WRAPPER FOR ANIMATION */}
                  <div
                    className="
          pointer-events-none absolute left-1/2 top-full z-30 
          -translate-x-1/2 pt-6

          opacity-0 translate-y-3
          transition-all duration-300 ease-out

          group-hover:opacity-100 group-hover:translate-y-0
          group-hover:pointer-events-auto
        "
                  >
                    {/* DROPDOWN CONTENT */}
                    <div
                      className="
            grid min-w-[640px] grid-cols-2 gap-10
            bg-[#4A0F1F] px-10 py-10 text-left 
            text-xs font-semibold uppercase tracking-[0.35em] text-white
            shadow-[0px_30px_80px_rgba(0,0,0,0.35)]
         
          "
                    >
                      {/* COLUMN 1 — DEMOS + OTHER PAGES */}
                      <div className="space-y-10">
                        {/* DEMOS */}
                        <div className="space-y-4">
                          <p className="text-[11px] tracking-[0.3em] text-white/60">
                            Demos
                          </p>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            Home-1
                          </button>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            Home-2
                          </button>
                        </div>

                        {/* OTHER PAGES */}
                        <div className="space-y-4">
                          <p className="text-[11px] tracking-[0.3em] text-white/60">
                            Other Pages
                          </p>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            Contact.
                          </button>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            FAQ.
                          </button>
                          <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                            404
                          </button>
                        </div>
                      </div>

                      {/* COLUMN 2 — CMS PAGES */}
                      <div className="space-y-4">
                        <p className="text-[11px] tracking-[0.3em] text-white/60">
                          CMS Pages
                        </p>
                        <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                          Teachers.
                        </button>
                        <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                          Teacher details.
                        </button>
                        <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                          Subject details.
                        </button>
                        <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                          Blogs.
                        </button>
                        <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                          Blog details.
                        </button>
                        <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                          Event details.
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={item}
                  className="transition-colors hover:text-[#B0384F]"
                >
                  {item}.
                </button>
              )
            )}
          </nav>
          <div className="flex items-center gap-4 text-[#1B1B1B]">
            <button className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#1B1B1B] px-9 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-[#1B1B1B] transition-colors duration-300">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                apply now
              </span>
              {/* <span
                aria-hidden="true"
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
              > */}
              <span
                aria-hidden="true"
                className="relative z-10 transition-transform duration-300 transform -rotate-45 group-hover:rotate-0 group-hover:text-white"
              >
                →
              </span>
              <span className=" absolute inset-0 -translate-x-full bg-black transition-transform duration-500 group-hover:translate-x-0 " />
            </button>
            {/* <button className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#1B1B1B] px-10 py-5 text-sm font-semibold uppercase tracking-[0.4em] text-white transition-colors duration-300 bg-[#651224]">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                apply now
              </span>


              <span
                aria-hidden="true"
                className="relative z-10 transition-transform duration-300 transform rotate-45 group-hover:rotate-0"
              >
                →
              </span>


              <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 group-hover:translate-x-0" />
            </button> */}
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-24 bg-white pb-24 pt-0">
        <Hero />
        <section className="bg-[#FDFDFD] py-24">
          <div className="mx-auto flex w-full h-[750px] max-w-[1300px] flex-col-reverse gap-12 px-6 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative flex flex-1 justify-center lg:justify-start">
              <div className="relative h-[360px] w-[320px] max-w-full">
                <div className="absolute inset-0 rounded-[28px] border border-[#E2CAD0] bg-white shadow-[0px_30px_80px_rgba(111,23,41,0.12)]">
                  <Image
                    src="/images/founder-main.jpg"
                    alt="Founder portrait"
                    fill
                    sizes="(max-width: 768px) 70vw, 320px"
                    className="rounded-[28px] object-cover object-center"
                    priority
                  />
                </div>
                <div className="absolute -top-14 -left-20 hidden h-44 w-44 items-center justify-center rounded-full border border-[#E2CAD0] bg-white text-center text-[11px] font-semibold uppercase tracking-[0.6em] text-[#7A1D32] lg:flex">
                  Since 1990
                </div>
                <div className="absolute -bottom-16 -right-20 h-[220px] w-[220px] rounded-[26px] border border-[#E2CAD0] bg-white shadow-[0px_25px_80px_rgba(31,58,95,0.15)]">
                  <Image
                    src="/images/founder-mentor.jpg"
                    alt="Mentor guiding student"
                    fill
                    sizes="(max-width: 768px) 60vw, 220px"
                    className="rounded-[26px] object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-8 lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.8em] text-[#7A1D32]">
                Message from the main{" "}
                <span className="text-[#B0384F]">founder</span>
              </p>
              <h2 className="text-5xl font-semibold leading-tight text-[#1B1B1B]">
                We have focused on generating new knowledge and promoting
                critical thinking amongst our students.
              </h2>
              <p className="text-lg leading-relaxed text-[#4D4D4D]">
                Since its inception in 2001, Eduvet University has become one of
                the most reputed educational institution in NYC, graduating more
                than 7,000 young men and women during this time.
              </p>
              <div className="border-l-4 border-[#7A1D32] pl-6 text-lg font-medium text-[#4D4D4D]">
                Since its inception in 2001, Eduvet University has become one of
                the most reputed educational institution in NYC.
              </div>
              <div className="flex flex-col gap-2 pt-4 text-[#1B1B1B]">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full border border-[#E2CAD0]">
                    <Image
                      src="/images/hero-student.jpg"
                      alt="Founder avatar"
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base font-semibold">Founder</p>
                    <p className="text-xl font-semibold">Amelia K. Hamilton</p>
                  </div>
                  {/* <div className="ml-auto text-3xl font-medium text-[#B0384F]">
                    ⎯⎯⎯⎯⎯
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#651224] py-24 text-white">
          <div className="mx-auto flex h-[800px] w-full max-w-[1300px] flex-col items-center justify-center gap-12 px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.6em] text-[#F3C4CC]">
                why choose eduvet
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-tight">
                One of the largest, most diverse universities in the nyc
              </h2>
            </div>
            <div className="grid w-full gap-8 lg:grid-cols-3">
              {highlightCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col items-center gap-8 border border-[#8F4D5C] bg-transparent px-10 py-16 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#F3C4CC] text-sm font-semibold uppercase tracking-[0.4em] text-[#F3C4CC]">
                    icon
                  </div>
                  <div className="space-y-5">
                    <h3 className="text-2xl font-semibold">{card.title}</h3>
                    <p className="text-base leading-relaxed text-[#F5E0E4]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto w-full max-w-[1300px] px-6">
            <SectionHeading
              eyebrow="Gallery Image"
              title="Campus overview / Campus overview"
              align="left"
            />
          </div>
          <div className="relative left-1/2 mt-14 w-screen -translate-x-1/2 overflow-hidden px-[6vw]">
            <div className="gallery-marquee-full flex items-center gap-20">
              {galleryRow.concat(galleryRow).map((src, index) => {
                const isLarge = index % 2 === 0;
                return (
                  <div
                    key={`${src}-${index}`}
                    className={`relative flex-shrink-0 overflow-hidden bg-white  ${
                      isLarge ? "h-[650px] w-[650px]" : "h-[450px] w-[450px]"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 80vw, 512px"
                      className="object-cover object-center"
                      priority={index === 0}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-[1300px] flex-col gap-16 px-6">
          <SectionHeading eyebrow="departments" title="Academies expertise" />
          <div className="flex flex-col gap-6">
            {departments.map((dept, index) => (
              <div
                key={dept.title}
                className="group relative overflow-hidden border border-[#E0B9C1] bg-white transition-colors duration-500 hover:border-transparent hover:bg-[#651224]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70">
                  <Image
                    src={dept.image}
                    alt={dept.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative flex items-center justify-between gap-8 px-12 py-12 text-[#1B1B1B] transition-colors duration-500 group-hover:text-white">
                  <div className="flex items-center gap-8 text-5xl font-semibold tracking-[0.2em] text-[#C27C8A] group-hover:text-[#F6C9D5]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-3xl font-semibold">{dept.title}</h3>
                    <p className="text-lg leading-relaxed text-[#444C5C] group-hover:text-[#F6DCE3]">
                      {dept.description}
                    </p>
                  </div>
                  <button className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C27C8A] text-2xl text-[#C27C8A] transition-colors duration-500 group-hover:border-white group-hover:text-white">
                    ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          {/* <div className="mx-auto w-full max-w-[1300px] px-6">
            <SectionHeading
              eyebrow="Brand Logo"
              title="Partnering ecosystems"
              align="left"
            />
          </div> */}
          <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 overflow-hidden border-y border-white py-10">
            <div className="logo-marquee flex items-center gap-20">
              {partnerLogos.concat(partnerLogos).map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex h-16 w-48 items-center justify-center opacity-70 grayscale transition-opacity duration-300 hover:opacity-100"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-[1300px] flex-col gap-10 px-6">
          <SectionHeading
            eyebrow="Academic Dates"
            title="Announcements & news feeds"
            align="left"
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {announcements.map((announcement, index) => (
              <div
                key={announcement.title}
                className="group flex flex-col gap-4"
              >
                <div className="relative h-80 w-full overflow-hidden bg-[#E5D2D7]">
                  <Image
                    src={announcement.image}
                    alt={announcement.title}
                    fill
                    className="transform object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-6 top-6 rounded-md bg-[#651224] px-5 py-2.5 text-xl font-semibold tracking-[0.2em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-[#1B1B1B]">
                    {announcement.title}
                  </h3>
                  <p className="text-base uppercase tracking-[0.3em] text-[#5F5F5F]">
                    {announcement.range}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <VideoShowcase />

        <section className="bg-white py-24">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-6 text-center">
            <div className="flex flex-col items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#C27C8A] text-4xl text-[#C27C8A]">
                🎓
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#B0384F]">
                Fun facts about university
              </p>
              <h2 className="text-5xl font-semibold text-[#1B1B1B]">
                Education, empowering them to{" "}
                <span className="text-[#B0384F]">become leaders</span> who make
                a positive impact on the world.
              </h2>
            </div>
            <div className="flex w-full flex-col gap-8 text-[#84404E] lg:flex-row lg:items-center lg:justify-between">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <p className="text-base uppercase tracking-[0.3em] text-[#84404E]">
                    {fact.label}
                  </p>
                  <p className="text-5xl font-semibold text-[#1B1B1B]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-20 bg-transparent pb-0 pt-28">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <div className="relative z-20 overflow-hidden rounded-[36px] bg-white shadow-[0px_45px_120px_rgba(0,0,0,0.25)] lg:grid lg:grid-cols-[460px_1fr]">
              <div className="relative h-72 w-full lg:h-full">
                <Image
                  src="/footer/cta.jpg"
                  alt="Students celebrating"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* <div className="flex flex-col gap-8 px-12 py-14">
                <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#B0384F]">
                  Apply for admission?
                </p>
                <h2 className="text-5xl font-semibold text-[#1B1B1B]">
                  A place to provide students with enough knowledge and skills
                  in a complex world. Are you looking for exceptional education
                  experience? Eduvet might be the place for you.
                </h2>
                <form className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex flex-1 items-center gap-3 rounded-full border border-[#D9D9D9] px-6 py-4 text-base text-[#1B1B1B]">
                    <span className="text-xl text-[#B0384F]">✉️</span>
                    <input
                      type="email"
                      placeholder="Business email"
                      className="flex-1 bg-transparent text-base text-[#1B1B1B] outline-none placeholder:text-[#8C8C8C]"
                    />
                  </div>
                  <button className="inline-flex items-center gap-3 rounded-full bg-[#651224] px-10 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-white">
                    subscribe ↗
                  </button>
                </form>
              </div> */}
              <div className="flex flex-col gap-6 px-10 py-12">
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#B0384F]">
                  Apply for admission?
                </p>

                <h2 className="text-4xl font-semibold leading-snug text-[#1B1B1B]">
                  A place to provide students with enough knowledge and skills
                  in a complex world.
                </h2>

                <p className="text-base leading-relaxed text-[#1B1B1B] max-w-3xl">
                  Are you looking for exceptional education experience? Eduvet
                  might be the place for you.
                </p>

                <form className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex flex-1 items-center gap-3 rounded-full border border-[#D9D9D9] px-5 py-3 text-sm text-[#1B1B1B]">
                    <span className="text-lg text-[#B0384F]">✉️</span>
                    <input
                      type="email"
                      placeholder="Business email"
                      className="flex-1 bg-transparent text-sm text-[#1B1B1B] outline-none placeholder:text-[#8C8C8C]"
                    />
                  </div>

                  <button className="inline-flex items-center gap-3 rounded-full bg-[#651224] px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white">
                    subscribe ↗
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative -mt-32 bg-[#3C0B18] pt-40 pb-24 text-white">
        <Image
          src="/footer/bg.jpg"
          alt="Students background"
          fill
          className="pointer-events-none object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3C0B18] via-[#3C0B18]/80 to-[#3C0B18]/60" />
        <div className="relative mx-auto flex w-full max-w-[1300px] flex-col gap-12 px-6">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="flex flex-col gap-5">
              <span className="text-3xl font-semibold">Eduvet.</span>
              <p className="text-base leading-relaxed text-white/80">
                The residential semester takes place at a specially designed
                campus in NYC, which provides a support system that aids
                students in becoming confident and self-reliant.
              </p>
              <div className="flex gap-3 text-white/70">
                {["🌐", "📘", "📸", "▶️"].map((icon) => (
                  <span
                    key={icon}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 text-base uppercase tracking-[0.35em] text-white/75">
              <span className="text-lg font-semibold tracking-[0.4em] text-white">
                Essential.
              </span>
              {footerColumns[0].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="flex flex-col gap-4 text-base uppercase tracking-[0.35em] text-white/75">
              <span className="text-lg font-semibold tracking-[0.4em] text-white">
                Programs.
              </span>
              {footerColumns[1].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="flex flex-col gap-5 text-base uppercase tracking-[0.35em] text-white/75">
              <span className="text-lg font-semibold tracking-[0.4em] text-white">
                Get in touch.
              </span>
              <div>
                <p className="text-sm text-white/60">Phone Number</p>
                <p className="text-xl font-semibold text-white">
                  +1 (123) 456 789 00
                </p>
              </div>
              <div>
                <p className="text-sm text-white/60">Email Address</p>
                <p className="text-xl font-semibold text-white">
                  info@eduvet.com
                </p>
              </div>
              <div>
                <p className="text-sm text-white/60">Address</p>
                <p className="text-xl font-semibold text-white">
                  12/A, New Booston Tower, NYC
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-sm uppercase tracking-[0.4em] text-white/70">
            Copyright & design by ©FramerDevs 2024, All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
