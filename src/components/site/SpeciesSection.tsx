import React from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import cordycepsMacroImg from "@/assets/cordyceps-militaris-macro.jpg";

export function SpeciesSection() {
  return (
    <section
      aria-label="What is Cordyceps species overview"
      className="relative w-full overflow-hidden border-y border-amber-950/40 py-14 lg:py-20"
      style={{
        backgroundColor: "#251707",
        backgroundImage:
          "radial-gradient(ellipse 80% 60% at 75% 50%, rgba(241, 90, 36, 0.14) 0%, rgba(37, 23, 7, 0) 70%), linear-gradient(135deg, #2A1A07 0%, #221405 50%, #1A0F03 100%)",
      }}
    >
      {/* Background ambient lighting glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(241,90,36,0.5) 0%, rgba(37,23,7,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Text & Features (55% width ~ 7 cols) */}
            <div className="relative z-10 lg:col-span-7 flex flex-col items-start text-left">
              {/* Small Eyebrow with horizontal line */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#F15A24] uppercase">
                  THE SPECIES
                </span>
                <span className="h-[1px] w-12 bg-[#F15A24]/40 inline-block" />
              </div>

              {/* Main Heading */}
              <h2 className="mt-3 font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-normal leading-[1.08] text-white tracking-tight">
                What is Cordyceps?
              </h2>

              {/* Description */}
              <p className="mt-5 text-base lg:text-lg leading-relaxed text-amber-100/75 max-w-xl">
                Cordyceps militaris is a remarkable fungus with a fascinating biology. Learn how it differs from wild Cordyceps sinensis and why cultivation matters.
              </p>

              {/* CTA Button */}
              <div className="mt-7">
                <Link
                  to="/cordyceps-study"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F15A24] px-8 py-3.5 text-xs font-bold tracking-[0.16em] text-white uppercase shadow-lg shadow-[#F15A24]/20 transition-all duration-300 hover:bg-[#d94e1c] hover:-translate-y-0.5"
                >
                  STUDY CORDYCEPS <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Bottom 3 Feature Badges */}
              <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-white/10 w-full">
                {/* Badge 1: Natural Origin */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-600/40 bg-amber-950/40 text-amber-400">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  </div>
                  <div className="text-[0.68rem] font-bold tracking-[0.14em] text-amber-100/80 uppercase leading-snug">
                    <div>NATURAL</div>
                    <div>ORIGIN</div>
                  </div>
                </div>

                <div className="hidden sm:block h-7 w-[1px] bg-white/15" />

                {/* Badge 2: Science Backed */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-600/40 bg-amber-950/40 text-amber-400">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M10 2v7.5L4.5 18A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3L14 9.5V2" />
                      <path d="M8.5 2h7" />
                      <path d="M7 16h10" />
                    </svg>
                  </div>
                  <div className="text-[0.68rem] font-bold tracking-[0.14em] text-amber-100/80 uppercase leading-snug">
                    <div>SCIENCE</div>
                    <div>BACKED</div>
                  </div>
                </div>

                <div className="hidden sm:block h-7 w-[1px] bg-white/15" />

                {/* Badge 3: Cultivation Matters */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-600/40 bg-amber-950/40 text-amber-400">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M12 22V12" />
                      <path d="M12 12C12 7.5 7.5 7.5 7.5 7.5C7.5 12 12 12 12 12Z" />
                      <path d="M12 12C12 6.5 17.5 6.5 17.5 6.5C17.5 12 12 12 12 12Z" />
                    </svg>
                  </div>
                  <div className="text-[0.68rem] font-bold tracking-[0.14em] text-amber-100/80 uppercase leading-snug">
                    <div>CULTIVATION</div>
                    <div>MATTERS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Organic Integrated Image Composition (45% width ~ 5 cols) */}
            <div className="relative z-10 lg:col-span-5 flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full max-w-[460px] lg:max-w-none">
                {/* Scientific botanical SVG curved arc accent */}
                <svg
                  className="absolute -left-10 -top-8 w-[120%] h-[120%] pointer-events-none hidden sm:block z-0 overflow-visible"
                  viewBox="0 0 500 500"
                  fill="none"
                >
                  {/* Subtle outer arc framing the image */}
                  <path
                    d="M 50 350 A 220 220 0 0 1 380 50"
                    stroke="rgba(241, 90, 36, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <circle cx="380" cy="50" r="3" fill="rgba(241, 90, 36, 0.6)" />

                  {/* Diagonal connecting callout line */}
                  <line
                    x1="350"
                    y1="110"
                    x2="410"
                    y2="80"
                    stroke="rgba(251, 191, 36, 0.5)"
                    strokeWidth="1"
                  />
                  <circle cx="350" cy="110" r="2.5" fill="#F15A24" />
                </svg>

                {/* Main Macro Photograph with Soft Curved Mask & Atmosphere */}
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-amber-500/20 shadow-2xl shadow-black/60 group">
                  <img
                    src={cordycepsMacroImg}
                    alt="Cordyceps militaris fruiting bodies in cultivation"
                    className="w-full h-[340px] sm:h-[400px] lg:h-[420px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Inner subtle warm vignette overlay blending image edges smoothly */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] bg-gradient-to-t from-[#251707]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Macro Circular Callout Zoom Lens (Top Right) */}
                <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 z-20 flex items-center gap-3.5 bg-[#251707]/90 backdrop-blur-md p-1.5 pr-4 rounded-full border border-amber-500/35 shadow-xl shadow-black/50">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-amber-400/60 shrink-0 shadow-inner">
                    <img
                      src={cordycepsMacroImg}
                      alt="Cordyceps militaris detail zoom"
                      className="w-full h-full object-cover object-top scale-150"
                    />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="font-display italic text-sm text-amber-200 font-medium">
                      Cordyceps
                    </div>
                    <div className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-amber-400/80">
                      Militaris
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

