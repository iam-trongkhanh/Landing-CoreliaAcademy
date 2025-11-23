import Image from "next/image";

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:h-[850px] bg-[#FDEFF2] py-12 sm:py-16 md:py-20 lg:py-0 overflow-x-hidden">
      <div className="absolute left-4 sm:left-6 md:left-8 top-6 sm:top-8 md:top-10 hidden lg:block">
        <Image
          src="/images/hero-cap.svg"
          alt="Graduation cap illustration"
          width={280}
          height={240}
          priority
          className="w-[180px] h-auto md:w-[240px] lg:w-[280px]"
        />
      </div>

      <div className="relative mx-auto h-full max-w-[1300px] px-4 sm:px-6">
        <div className="relative flex h-full items-center">
          <div className="relative z-30 flex-1 space-y-6 sm:space-y-8 md:space-y-10 text-center lg:text-left">
            <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#A5495C]">
              Meet with #01 university
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#1B1B1B] max-w-full lg:max-w-[700px] px-4 lg:px-0">
              Most Reputed Educational{" "}
              <span className="text-[#7A1D32]">Institution</span>
              <br />
              in Booston
            </h2>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 px-4 lg:px-0">
              <Button variant="primary" size="lg" showArrow href="/apply">
                apply now
              </Button>
            </div>
          </div>

          <div className="hidden md:block absolute right-[-20px] md:right-[-30px] lg:right-[-50px] xl:right-[-80px] top-0 h-[400px] md:h-[500px] lg:h-[650px] xl:h-[850px] w-[280px] md:w-[380px] lg:w-[580px] xl:w-[800px] z-20 max-w-[90vw]">
            <div className="absolute inset-0 bg-white shadow-[0px_25px_80px_rgba(122,29,50,0.15)] rounded-lg" />

            <Image
              src="/images/hero-student.jpg"
              alt="Student smiling with book at Eduvet University - Quality Education in NYC"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 600px, 830px"
              quality={90}
            />

            <div className="absolute bottom-4 md:bottom-6 lg:bottom-0 right-4 md:right-6 lg:right-0 w-[200px] md:w-[240px] lg:w-[290px] h-auto min-h-[70px] md:min-h-[80px] lg:min-h-[90px] px-3 md:px-4 py-2 md:py-3 bg-white shadow-[0px_15px_40px_rgba(122,29,50,0.12)] flex flex-col justify-center items-center text-center">
              <p className="text-2xl md:text-3xl font-semibold text-[#7A1D32]">
                2009
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#A86A78]">
                Toward Education Award
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
