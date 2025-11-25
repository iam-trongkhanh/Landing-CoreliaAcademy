import Image from "next/image";

import { footerColumns } from "@/lib/siteData";

interface SiteFooterProps {
  variant?: "dark" | "light";
}

export function SiteFooter({ variant = "dark" }: SiteFooterProps) {
  const isLight = variant === "light";

  return (
    <footer
      className={`relative ${
        isLight ? "bg-white pt-24 pb-24" : "-mt-32 bg-[#3C0B18] pt-40 pb-24"
      } ${isLight ? "text-[#1B1B1B]" : "text-white"}`}
    >
      {!isLight && (
        <>
          <Image
            src="/footer/bg.jpg"
            alt="Students background"
            fill
            className="pointer-events-none object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3C0B18] via-[#3C0B18]/80 to-[#3C0B18]/60" />
        </>
      )}
      <div className="relative mx-auto flex w-full max-w-[1300px] flex-col gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4 sm:gap-5">
            <span className="text-2xl sm:text-3xl font-semibold">Eduvet.</span>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isLight ? "text-[#4D4D4D]" : "text-white/80"
              }`}
            >
              The residential semester takes place at a specially designed
              campus in NYC, which provides a support system that aids students
              in becoming confident and self-reliant.
            </p>

            <div
              className={`flex gap-3 ${
                isLight ? "text-[#4D4D4D]" : "text-white/70"
              }`}
            >
              {/* Facebook */}
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                  isLight ? "border-[#1B1B1B]/30" : "border-white/30"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.325v21.351C0 23.407.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.414c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.325-.593 1.325-1.324V1.325C24 .593 23.404 0 22.675 0z" />
                </svg>
              </span>

              {/* X / Twitter */}
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                  isLight ? "border-[#1B1B1B]/30" : "border-white/30"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </span>

              {/* Instagram */}
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                  isLight ? "border-[#1B1B1B]/30" : "border-white/30"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                </svg>
              </span>

              {/* YouTube */}
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                  isLight ? "border-[#1B1B1B]/30" : "border-white/30"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M23.498 6.186a2.983 2.983 0 0 0-2.1-2.11C19.127 3.5 12 3.5 12 3.5s-7.127 0-9.398.576a2.983 2.983 0 0 0-2.1 2.11C0 8.456 0 12 0 12s0 3.544.502 5.814a2.983 2.983 0 0 0 2.1 2.11C4.873 20.5 12 20.5 12 20.5s7.127 0 9.398-.576a2.983 2.983 0 0 0 2.1-2.11C24 15.544 24 12 24 12s0-3.544-.502-5.814zM9.545 15.568V8.432l6.182 3.568-6.182 3.568z" />
                </svg>
              </span>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div
              key={column.heading}
              className={`flex flex-col gap-3 sm:gap-4 text-base sm:text-lg md:text-[20px] ${
                isLight ? "text-[#4D4D4D]" : "text-white/75"
              }`}
            >
              <span
                className={`text-base sm:text-lg md:text-[20px] font-semibold uppercase ${
                  isLight ? "text-[#1B1B1B]" : "text-white"
                }`}
              >
                {column.heading}
              </span>
              {column.items.map((item) => (
                <span
                  key={item}
                  className={`text-sm sm:text-base md:text-[16px] ${
                    isLight ? "text-[#4D4D4D]" : "text-white/75"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}

          <div
            className={`flex flex-col gap-4 sm:gap-5 md:gap-6 text-xs sm:text-sm md:text-[14px] ${
              isLight ? "text-[#4D4D4D]" : "text-white/75"
            }`}
          >
            <span
              className={`text-base sm:text-lg md:text-[20px] uppercase font-semibold ${
                isLight ? "text-[#1B1B1B]" : "text-white"
              }`}
            >
              Get in touch.
            </span>

            {/* PHONE */}
            <div className="flex items-start gap-3">
              <Image
                src="/icons/phone.svg"
                alt="Phone icon"
                className={`${isLight ? "" : "invert brightness-0"} mt-[2px]`}
                width={20}
                height={20}
              />
              <div className="flex flex-col">
                <p
                  className={`text-[14px] ${
                    isLight ? "text-[#4D4D4D]" : "text-white/60"
                  }`}
                >
                  Phone Number
                </p>
                <p
                  className={`text-[16px] font-semibold ${
                    isLight ? "text-[#1B1B1B]" : "text-white"
                  }`}
                >
                  +(123) 456 789 00
                </p>
              </div>
            </div>

            <hr
              className={isLight ? "border-[#1B1B1B]/30" : "border-white/30"}
            />

            {/* EMAIL */}
            <div className="flex items-start gap-3">
              <Image
                src="/icons/telegram.svg"
                alt="Mail icon"
                className={`${isLight ? "" : "brightness-0 invert"} mt-[2px]`}
                width={20}
                height={20}
              />
              <div className="flex flex-col">
                <p
                  className={`text-[14px] ${
                    isLight ? "text-[#4D4D4D]" : "text-white/60"
                  }`}
                >
                  Email Address
                </p>
                <p
                  className={`text-[16px] font-semibold ${
                    isLight ? "text-[#1B1B1B]" : "text-white"
                  }`}
                >
                  info@eduvet.com
                </p>
              </div>
            </div>

            <hr
              className={isLight ? "border-[#1B1B1B]/30" : "border-white/30"}
            />

            {/* ADDRESS */}
            <div className="flex items-start gap-3">
              <Image
                src="/icons/location.svg"
                alt="Location icon"
                className={`${isLight ? "" : "brightness-0 invert"} mt-[2px]`}
                width={20}
                height={20}
              />
              <div className="flex flex-col">
                <p
                  className={`text-[14px] ${
                    isLight ? "text-[#4D4D4D]" : "text-white/60"
                  }`}
                >
                  Address
                </p>
                <p
                  className={`text-[16px] font-semibold ${
                    isLight ? "text-[#1B1B1B]" : "text-white"
                  }`}
                >
                  New York, US, 12/A, New Boston Tower
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-5 text-base uppercase tracking-[0.35em] text-white/75">
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
              <p className="text-sm text-white/60">Email address</p>
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
          </div> */}
        </div>
        <div
          className={`border-t ${
            isLight ? "border-[#1B1B1B]/20" : "border-white/20"
          } pt-4 sm:pt-5 md:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6`}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/icons/hat.svg"
              alt="Eduvet logo"
              width={20}
              height={20}
              className={`w-5 h-5 sm:w-6 sm:h-6 ${
                isLight ? "" : "brightness-0 invert"
              }`}
            />
            <span
              className={`text-lg sm:text-xl font-semibold ${
                isLight ? "text-[#1B1B1B]" : "text-white"
              }`}
            >
              Eduvet.
            </span>
          </div>
          <div
            className={`text-xs sm:text-sm md:text-[14px] uppercase font-semibold text-center sm:text-right ${
              isLight ? "text-[#4D4D4D]" : "text-white/70"
            }`}
          >
            Copyright & design by
            <span className="text-black"> ©FramerDevs </span>
            2024, All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
