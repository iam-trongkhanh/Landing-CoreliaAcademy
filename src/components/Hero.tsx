import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative bg-[#FDEFF2] md:min-h-[500px] lg:min-h-[650px] xl:min-h-[850px] pt-12 sm:pt-16 md:pt-0 lg:pt-0 pb-0 overflow-hidden">
      <div className="absolute left-4 sm:left-6 md:left-8 top-6 sm:top-8 md:top-10 hidden lg:block">
        <img
          src="/images/hero-cap.svg"
          alt="Graduation cap illustration"
          width={280}
          height={240}
          className="w-[180px] h-auto md:w-[240px] lg:w-[280px]"
        />
      </div>

      <div className="relative mx-auto h-full max-w-[1300px] px-0 md:px-6">
        <div className="relative flex flex-col md:flex-row h-full items-start md:items-center">
          <div className="relative z-30 flex-1 space-y-6 sm:space-y-8 md:space-y-10 text-left px-[25px] md:px-0 pr-0 md:pr-[240px] lg:pr-0 md:flex md:flex-col md:justify-center md:min-h-[500px] lg:min-h-[650px] xl:min-h-[850px]">
            <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#A5495C]">
              Meet with #01 university
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#1B1B1B] max-w-full lg:max-w-[700px]">
              Most Reputed
              <br />
              Educational <span className="text-[#7A1D32]">Institution</span>
              <br />
              in Booston
            </h2>

            <div className="flex flex-wrap justify-start gap-4">
              <Button variant="primary" size="lg" showArrow href="/apply">
                apply now
              </Button>
            </div>
          </div>

          {/* Mobile image with badge */}
          <div className="block md:hidden mt-8 w-full px-[25px]">
            <div className="relative w-full overflow-hidden bg-white shadow-[0px_25px_80px_rgba(122,29,50,0.15)]">
              <img
                src="/images/hero-student.jpg"
                alt="Student smiling with book at Eduvet University - Quality Education in NYC"
                className="w-full h-auto object-cover object-center"
              />
              <div className="absolute bottom-4 right-4 w-[180px] h-auto min-h-[70px] px-3 py-2 bg-white shadow-[0px_15px_40px_rgba(122,29,50,0.12)] flex flex-col justify-center items-center text-center">
                <p className="text-2xl font-semibold text-[#7A1D32]">2009</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A86A78]">
                  Toward Education Award
                </p>
              </div>
            </div>
          </div>

          {/* Desktop / Tablet image with badge */}
          <div className="hidden md:block absolute right-0 md:right-[-30px] lg:right-[-50px] xl:right-[-80px] top-0 h-[400px] md:h-[500px] lg:h-[650px] xl:h-[850px] w-[280px] md:w-[380px] lg:w-[580px] xl:w-[800px] z-20 max-w-[90vw]">
            <div className="relative h-full w-full overflow-hidden bg-white shadow-[0px_25px_80px_rgba(122,29,50,0.15)]">
              <img
                src="/images/hero-student.jpg"
                alt="Student smiling with book at Eduvet University - Quality Education in NYC"
                className="object-cover object-center h-full w-full"
              />
            </div>

            <div className="absolute bottom-0 right-0 w-[200px] md:w-[240px] lg:w-[290px] h-auto min-h-[70px] md:min-h-[80px] lg:min-h-[90px] px-3 md:px-4 py-2 md:py-3 bg-white shadow-[0px_15px_40px_rgba(122,29,50,0.12)] flex flex-col justify-center items-center text-center">
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
