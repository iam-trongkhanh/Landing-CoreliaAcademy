import { useState } from "react";
import { navRoutes, navigation } from "../lib/siteData";
import { Button } from "./ui/Button";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#E3D5DA] bg-white sticky-header relative">
      {/* Top bar – only show on desktop (>= 1280px) */}
      <div className="hidden xl:block bg-[#4A0F1F] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.15em] text-white">
        <div className="app-container flex w-full flex-col gap-2 sm:flex-row items-center justify-between py-2 sm:py-3">
          <span className="text-center sm:text-left">
            Welcome to our Eduvet University
          </span>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left">
            <span className="text-xs sm:text-[11px]">+8 (378) 389 092</span>
            <span className="text-xs sm:text-[11px] hidden sm:inline">
              contactinfo@gmail.com
            </span>
            <span className="text-xs sm:hidden">contactinfo@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="app-container flex w-full items-center justify-between py-4 sm:py-6">
        <div className="flex items-center gap-3">
          <h1 className="text-xl sm:text-2xl font-semibold text-[#4A0F1F]">
            <a href="/" aria-label="Eduvet University Home">
              Eduvet.
            </a>
          </h1>
        </div>

        {/* Desktop Navigation – only on very large screens (>= 1280px) */}
        <nav className="hidden items-center gap-6 lg:gap-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.2em] text-[#1B1B1B] xl:flex">
          {navigation.map((item) =>
            item === "Pages" ? (
              <div key={item} className="relative group">
                <a
                  href={navRoutes[item] ?? "/"}
                  className="inline-flex items-center gap-[2px] transition-colors hover:text-[#B0384F]"
                >
                  <span>{item}</span>
                  <span className="inline-block transform transition-transform duration-300 group-hover:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.086l3.71-3.855a.75.75 0 1 1 1.08 1.04l-4.25 4.417a.75.75 0 0 1-1.08 0L5.25 8.27a.75.75 0 0 1-.02-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
                <div
                  className="pointer-events-none absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4 sm:pt-6 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="grid w-[85vw] max-w-[520px] grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 bg-[#4A0F1F] px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 text-left text-xs font-semibold uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white shadow-[0px_30px_80px_rgba(0,0,0,0.35)]">
                    {/* Left column: Demos + Other Pages */}
                    <div className="space-y-8 sm:space-y-10">
                      <div className="space-y-4">
                        <p className="text-[11px] tracking-[0.1em] text-white/60">
                          Demos
                        </p>
                        <button className="block text-sm tracking-[0.1em] cursor-pointer hover:text-[#F3C9D1] hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4">
                          Home-1
                        </button>
                        <button className="block text-sm tracking-[0.1em] cursor-pointer hover:text-[#F3C9D1] hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4">
                          Home-2
                        </button>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[11px] tracking-[0.3em] text-white/60">
                          Other Pages
                        </p>
                        {["Contact.", "FAQ.", "404"].map((link) => (
                          <button
                            key={link}
                            className="block text-sm tracking-[0.1em] cursor-pointer hover:text-[#F3C9D1] hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
                          >
                            {link}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Right column: CMS Pages */}
                    <div className="space-y-4">
                      <p className="text-[11px] tracking-[0.1em] text-white/60">
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
                          className="block text-sm tracking-[0.1em] cursor-pointer hover:text-[#F3C9D1] hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
                        >
                          {link}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item}
                href={navRoutes[item] ?? "/"}
                className="transition-colors hover:text-[#B0384F]"
              >
                {item}.
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button – shown on widths < 1280px */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#1B1B1B] transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1B1B1B] transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1B1B1B] transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Desktop Apply Button – only show on >= 1280px */}
        <div className="hidden xl:flex items-center gap-4 text-[#1B1B1B]">
          <Button
            variant="outline"
            size="md"
            href="/apply"
            showArrow
            className="px-6 sm:px-9"
          >
            apply now
          </Button>
        </div>
      </div>

      {/* Mobile Menu – shown on widths < 1280px (overlay, not pushing content) */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute inset-x-0 top-full z-50 border-t border-[#E3D5DA] bg-white shadow-lg">
          <nav className="app-container flex w-full flex-col py-4 max-h-[calc(100vh-120px)] overflow-y-auto">
            {navigation.map((item) => (
              <a
                key={item}
                href={navRoutes[item] ?? "/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#1B1B1B] transition-colors hover:text-[#B0384F] border-b border-[#E3D5DA] last:border-b-0"
              >
                {item}.
              </a>
            ))}
            <div className="mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="outline"
                size="sm"
                href="/apply"
                fullWidth
                className="text-sm tracking-[0.4em]"
              >
                apply now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
