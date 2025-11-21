import Image from "next/image";

import { SectionHeading } from "@/components/SectionHeading";

const navigation = ["Home", "Campus", "Programs", "Pages", "Events"];

const stats = [
  { label: "Student Nationalities", value: "100+" },
  { label: "International Students", value: "25%" },
  { label: "Daily Admissions", value: "1k+" },
  { label: "Support", value: "24/7" },
];

const brandLogos = [
  "/brands/brand-1.svg",
  "/brands/brand-2.svg",
  "/brands/brand-3.svg",
  "/brands/brand-4.svg",
  "/brands/brand-5.svg",
];

const historyEntries = [
  {
    year: "2015",
    title: "Get awards reward",
    description:
      "While the adoption of cryptocurrency for everyday transactions is growing.",
    image: "/gallery/gallery-1.jpg",
  },
  {
    year: "2020",
    title: "Nominate by Google",
    description:
      "While the use of cryptocurrency for everyday transactions is on the rise.",
    image: "/gallery/gallery-2.jpg",
  },
  {
    year: "2024",
    title: "Get awards reward",
    description:
      "As cryptocurrency becomes increasingly adopted for everyday transactions.",
    image: "/gallery/gallery-3.jpg",
  },
];

const departments = [
  {
    title: "Psychology",
    description:
      "We have focused generating new knowledge & promoting understanding in any kind of situations.",
  },
  {
    title: "Sociology",
    description:
      "We have concentrated on generating new knowledge across diverse social situations.",
  },
  {
    title: "Political Science",
    description:
      "We have focused on generating new knowledge understanding in a variety of political situations.",
  },
  {
    title: "Anthropology",
    description:
      "We have concentrated on generating understanding in a wide range of social contexts.",
  },
  {
    title: "Economics",
    description:
      "We have focused on improving understanding across diverse economic contexts and issues.",
  },
];

const supportColumns = [
  {
    heading: "Essential.",
    items: [
      "About Us",
      "Our Teachers",
      "What we do",
      "Contact Us",
      "FAQ",
      "Blogs",
    ],
  },
  {
    heading: "Programs.",
    items: [
      "Psychology",
      "Sociology",
      "Political Science",
      "Anthropology",
      "Economics",
      "Geography",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#1B1B1B]">
      <header className="w-full border-b border-[#E6D1D7] bg-white">
        <div className="w-full bg-[#4A0F1F] text-white">
          <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em]">
            <span>Welcome to our Eduvet University</span>
            <div className="flex gap-6 tracking-[0.2em]">
              <span>+8 (378) 389 092</span>
              <span>contactinfo@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-6 py-6">
          <div className="text-2xl font-semibold text-[#4A0F1F]">Eduvet.</div>
          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#1B1B1B] md:flex">
            {navigation.map((item) =>
              item === "Pages" ? (
                <div key={item} className="relative group">
                  <button className="transition-colors hover:text-[#B0384F]">
                    {item}.
                  </button>
                  <div
                    className="pointer-events-none absolute left-1/2 top-full z-30 -translate-x-1/2 pt-6 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
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
                          {["Contact.", "FAQ.", "404"].map((link) => (
                            <button
                              key={link}
                              className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]"
                            >
                              {link}
                            </button>
                          ))}
                        </div>
                        <div className="space-y-4">
                          <p className="text-[11px] tracking-[0.3em] text-white/60">
                            CMS Pages
                          </p>
                          {[
                            "Teachers.",
                            "Teacher details.",
                            "Subject details.",
                            "Blogs.",
                            "Blog details.",
                            "Event details.",
                          ].map((link) => (
                            <button
                              key={link}
                              className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]"
                            >
                              {link}
                            </button>
                          ))}
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
            )}
          </nav>
          <div className="flex items-center gap-4 text-[#1B1B1B]">
            <button className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#1B1B1B] px-10 py-4 text-sm font-semibold uppercase tracking-[0.4em]">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                apply now
              </span>
              <span
                aria-hidden="true"
                className="relative z-10 -rotate-45 transition-transform duration-300 group-hover:rotate-0 group-hover:text-white"
              >
                →
              </span>
              <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 group-hover:translate-x-0" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-28 bg-[#FDF8FA] pb-28 pt-0 text-[#1B1B1B]">
        <section className="bg-[#FDEFF2]">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-16 px-6 py-24 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-8">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#A5495C]">
                Shape
              </p>
              <h1 className="text-6xl font-semibold leading-tight text-[#1B1B1B]">
                Unleashing academic{" "}
                <span className="text-[#7A1D32]">excellence</span>
              </h1>
              <p className="text-lg leading-relaxed text-[#4D4D4D]">
                We have focused on generating new knowledge and promoting
                critical thinking amongst our students, graduating more than
                7,000 young men and women during this time.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <button className="inline-flex items-center justify-center border border-[#7A1D32] px-10 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-[#7A1D32]">
                  Apply now ↗
                </button>
                <div className="text-sm uppercase tracking-[0.5em] text-[#7A1D32]">
                  Since 1990
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="grid grid-cols-2 gap-6">
                {[
                  "/images/hero-student.jpg",
                  "/images/founder-main.jpg",
                  "/images/founder-mentor.jpg",
                  "/images/hero-student.jpg",
                ].map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="relative h-64 w-64 bg-[#E8C7D1]"
                  >
                    <Image
                      src={src}
                      alt="About collage"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-12 px-6 text-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#B0384F]">
                Students facts
              </p>
              <h2 className="text-4xl font-semibold">
                Quality education for every students.
              </h2>
              <p className="text-base leading-relaxed text-[#5C5C5C]">
                We have focused on generating new knowledge and promoting
                critical thinking amongst our students, graduating more than
                7,000 young men and women during this time.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-2 border border-[#E6D1D7] px-6 py-10 text-center"
                >
                  <p className="text-sm uppercase tracking-[0.4em] text-[#7A1D32]">
                    {stat.label}
                  </p>
                  <p className="text-4xl font-semibold text-[#1B1B1B]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FDF8FA]">
          <div className="mx-auto grid w-full max-w-[1300px] gap-16 px-6 py-16 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#B0384F]">
                Since 1990
              </p>
              <h2 className="text-4xl font-semibold leading-tight">
                Quality education for every students.
              </h2>
              <p className="text-base leading-relaxed text-[#4D4D4D]">
                We have focused on generating new knowledge and promoting
                critical thinking amongst our students, graduating more than
                7,000 young men and women during this time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "/images/founder-main.jpg",
                  "/images/founder-mentor.jpg",
                  "/images/hero-student.jpg",
                  "/images/founder-main.jpg",
                ].map((src, index) => (
                  <div
                    key={src + index}
                    className="relative h-48 w-full bg-[#EAD3D9]"
                  >
                    <Image
                      src={src}
                      alt="About gallery"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-10">
              <div className="border border-[#E6D1D7] px-8 py-10">
                <p className="text-sm uppercase tracking-[0.5em] text-[#B0384F]">
                  Student Nationalities
                </p>
                <p className="text-5xl font-semibold text-[#1B1B1B]">100+</p>
              </div>
              <div className="border border-[#E6D1D7] px-8 py-10">
                <p className="text-sm uppercase tracking-[0.5em] text-[#B0384F]">
                  International Students
                </p>
                <p className="text-5xl font-semibold text-[#1B1B1B]">25%</p>
              </div>
              <div className="border border-[#E6D1D7] px-8 py-10">
                <p className="text-sm uppercase tracking-[0.5em] text-[#B0384F]">
                  Daily Admissions
                </p>
                <p className="text-5xl font-semibold text-[#1B1B1B]">1k+</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto w-full max-w-[1300px] px-6">
            <SectionHeading
              eyebrow="Brand Logo"
              title="Partnering ecosystems"
              align="left"
            />
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {[0, 1, 2].map((row) => (
                <div
                  key={row}
                  className="flex items-center justify-between border border-[#E6D1D7] px-8 py-6"
                >
                  {brandLogos.map((logo, index) => (
                    <div
                      key={`${logo}-${index}`}
                      className="h-10 w-24 opacity-70"
                    >
                      <Image
                        src={logo}
                        alt="Brand logo"
                        width={96}
                        height={40}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FDF8FA] py-24">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-12 px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#B0384F]">
                Our history
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight">
                One of the largest, most diverse universities in the NYC.
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {historyEntries.map((entry) => (
                <div
                  key={entry.year}
                  className="flex flex-col border border-[#E6D1D7]"
                >
                  <div className="relative h-56 w-full bg-[#E9D2D8]">
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-3 px-8 py-10">
                    <p className="text-sm uppercase tracking-[0.5em] text-[#B0384F]">
                      {entry.title}
                    </p>
                    <p className="text-3xl font-semibold text-[#1B1B1B]">
                      {entry.year}
                    </p>
                    <p className="text-sm leading-relaxed text-[#5C5C5C]">
                      {entry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-10 px-6">
            <SectionHeading eyebrow="departments" title="Academies expertise" />
            <div className="flex flex-col">
              {departments.map((dept, index) => (
                <div
                  key={dept.title}
                  className="flex flex-col border-b border-[#E6D1D7] py-8 text-[#1B1B1B] lg:flex-row lg:items-center"
                >
                  <div className="text-3xl font-semibold tracking-[0.2em] text-[#C27C8A]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex flex-1 flex-col gap-3 pl-0 lg:pl-16">
                    <h3 className="text-3xl font-semibold">{dept.title}</h3>
                    <p className="text-base leading-relaxed text-[#4D4D4D]">
                      {dept.description}
                    </p>
                  </div>
                  <button className="ml-auto text-sm font-semibold uppercase tracking-[0.4em] text-[#7A1D32]">
                    Explore ↗
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#3C0B18] py-28 text-white">
        <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-12 px-6">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-semibold">Eduvet.</span>
              <p className="text-sm leading-relaxed text-white/80">
                The residential semester takes place at a specially designed
                campus in NYC, which provides a support system that aids
                students in becoming confident and self-reliant.
              </p>
            </div>
            {supportColumns.map((column) => (
              <div
                key={column.heading}
                className="flex flex-col gap-3 text-sm uppercase tracking-[0.3em] text-white/80"
              >
                <span className="text-base font-semibold tracking-[0.4em] text-white">
                  {column.heading}
                </span>
                {column.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ))}
            <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.3em] text-white/80">
              <span className="text-base font-semibold tracking-[0.4em] text-white">
                Get in touch.
              </span>
              <div>
                <p className="text-xs text-white/60">Phone Number</p>
                <p className="text-lg font-semibold text-white">
                  +1 (123) 456 789 00
                </p>
              </div>
              <div>
                <p className="text-xs text-white/60">Email address</p>
                <p className="text-lg font-semibold text-white">
                  info@eduvet.com
                </p>
              </div>
              <div>
                <p className="text-xs text-white/60">Address</p>
                <p className="text-lg font-semibold text-white">
                  12/A, New Booston Tower, NYC
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-xs uppercase tracking-[0.4em] text-white/70">
            Copyright & design by ©FramerDevs 2024, All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
