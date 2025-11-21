import Image from "next/image";

const awardBadges = [
  "Hyper Best Award Winner",
  "Ultra Institution Winner",
  "Global Education Summit",
];

export function Hero() {
  return (
    <section className="relative h-[850px] overflow-hidden bg-[#FDEFF2]">
      <div className="absolute left-8 top-10 hidden lg:block">
        <Image
          src="/images/hero-cap.svg"
          alt="Graduation cap illustration"
          width={280}
          height={240}
          priority
        />
      </div>
      <div className="mx-auto flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-16 px-6 py-20 lg:flex-row lg:items-center">
        <div className="relative z-10 flex-1 space-y-10">
          <p className="text-base font-semibold uppercase tracking-[0.5em] text-[#A5495C]">
            Meet with #01 university
          </p>
          <h1 className="text-6xl font-semibold leading-tight text-[#1B1B1B] lg:text-6xl w-[700px]">
            Most reputed educational{" "}
            <span className="text-[#7A1D32]">institution</span>
            <br />
            in Booston
          </h1>
          <div className="flex flex-wrap gap-4">
            <button className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#1B1B1B] px-10 py-5 text-sm font-semibold uppercase tracking-[0.4em] text-white transition-colors duration-300 bg-[#651224]">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                apply now
              </span>

              {/* Mũi tên xoay */}
              <span
                aria-hidden="true"
                className="relative z-10 transition-transform duration-300 transform -rotate-45 group-hover:rotate-0"
              >
                →
              </span>

              {/* Hiệu ứng nền trượt */}
              <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 group-hover:translate-x-0" />
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-12 pt-8">
            {awardBadges.map((badge) => (
              <div
                key={badge}
                className="text-sm font-semibold uppercase tracking-[0.4em] text-[#7A1D32]"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative mx-auto h-[500px] w-[500px] max-w-full">
            <div className="absolute inset-0 rounded-full bg-white shadow-[0px_25px_80px_rgba(122,29,50,0.15)]" />
            <Image
              src="/images/hero-student.jpg"
              alt="Student smiling with book"
              fill
              sizes="(max-width: 768px) 80vw, 500px"
              className="rounded-full object-cover object-center"
              priority
            />
          </div>
          <div className="absolute -bottom-8 right-8 rounded-xl border border-[#F3C9D1] bg-white px-8 py-5 shadow-[0px_15px_40px_rgba(122,29,50,0.12)]">
            <p className="text-4xl font-semibold text-[#7A1D32]">2009</p>
            <p className="text-sm uppercase tracking-[0.6em] text-[#A86A78]">
              Toward Education Award
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
