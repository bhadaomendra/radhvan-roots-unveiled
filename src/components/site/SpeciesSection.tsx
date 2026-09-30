import React from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import speciesBannerImg from "@/assets/cordyceps-species-full-banner.png";

export function SpeciesSection() {
  return (
    <section
      aria-label="What is Cordyceps species overview"
      className="relative w-full overflow-hidden border-y border-amber-950/40 py-16 lg:py-20 bg-[#251707]"
    >
      {/* Background Banner Image covering the full section box */}
      <div className="absolute inset-0 z-0">
        <img
          src={speciesBannerImg}
          alt="Cordyceps militaris fruiting bodies in cultivation"
          className="w-full h-full object-cover object-left lg:object-center pointer-events-none select-none opacity-100"
        />
        {/* Soft subtle ambient shadow ONLY behind text to maintain contrast without hiding the left leaf */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#211406]/20 via-[#211406]/40 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 min-h-[400px]">
            {/* Left Column: Crisp HTML Text Content & Interactive Button */}
            <div className="relative z-10 lg:col-span-7 flex flex-col items-center text-center py-2">
              {/* Eyebrow with horizontal line */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#F15A24] uppercase">
                  THE SPECIES
                </span>
                <span className="h-[1px] w-12 bg-[#F15A24]/50 inline-block" />
              </div>

              {/* Main Heading */}
              <h2 className="mt-3 font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-normal leading-[1.08] text-white tracking-tight drop-shadow-md">
                What is Cordyceps?
              </h2>

              {/* Description Paragraph */}
              <p className="mt-4 text-base lg:text-lg leading-relaxed text-amber-100/90 max-w-xl text-center mx-auto drop-shadow-sm">
                Cordyceps militaris is a remarkable fungus with a fascinating biology. Learn how it differs from wild Cordyceps sinensis and why cultivation matters.
              </p>

              {/* Pill CTA Button */}
              <div className="mt-7 flex justify-center w-full">
                <Link
                  to="/cordyceps-study"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F15A24] px-8 py-3.5 text-xs font-bold tracking-[0.16em] text-white uppercase shadow-lg shadow-[#F15A24]/30 transition-all duration-300 hover:bg-[#d94e1c] hover:shadow-xl hover:-translate-y-0.5"
                >
                  STUDY CORDYCEPS <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Bottom 3 Feature Badges */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-6 border-t border-white/15 w-full">
                {/* Badge 1: Natural Origin */}
                <div className="flex items-center gap-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-500/50 bg-amber-950/60 text-amber-400 backdrop-blur-sm shadow-md">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  </div>
                  <div className="text-[0.68rem] font-bold tracking-[0.14em] text-amber-100/90 uppercase leading-snug">
                    <div>NATURAL</div>
                    <div>ORIGIN</div>
                  </div>
                </div>

                <div className="hidden sm:block h-7 w-[1px] bg-white/20" />

                {/* Badge 2: Science Backed */}
                <div className="flex items-center gap-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-500/50 bg-amber-950/60 text-amber-400 backdrop-blur-sm shadow-md">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M10 2v7.5L4.5 18A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3L14 9.5V2" />
                      <path d="M8.5 2h7" />
                      <path d="M7 16h10" />
                    </svg>
                  </div>
                  <div className="text-[0.68rem] font-bold tracking-[0.14em] text-amber-100/90 uppercase leading-snug">
                    <div>SCIENCE</div>
                    <div>BACKED</div>
                  </div>
                </div>

                <div className="hidden sm:block h-7 w-[1px] bg-white/20" />

                {/* Badge 3: Cultivation Matters */}
                <div className="flex items-center gap-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-500/50 bg-amber-950/60 text-amber-400 backdrop-blur-sm shadow-md">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M12 22V12" />
                      <path d="M12 12C12 7.5 7.5 7.5 7.5 7.5C7.5 12 12 12 12 12Z" />
                      <path d="M12 12C12 6.5 17.5 6.5 17.5 6.5C17.5 12 12 12 12 12Z" />
                    </svg>
                  </div>
                  <div className="text-[0.68rem] font-bold tracking-[0.14em] text-amber-100/90 uppercase leading-snug">
                    <div>CULTIVATION</div>
                    <div>MATTERS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Spacer to reserve space for background artwork on desktop */}
            <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

