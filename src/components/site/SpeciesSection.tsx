import React from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import speciesVisual from "@/assets/cordyceps-species-visual.png";

export function SpeciesSection() {
  return (
    <section
      className="relative w-full overflow-hidden border-y border-amber-900/30 py-16 lg:py-24"
      style={{
        background: "linear-gradient(135deg, #1C130B 0%, #140C06 60%, #0E0803 100%)",
      }}
    >
      {/* Ambient background leaf accents */}
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#F15A24_0%,transparent_50%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Column: Content & Features */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Eyebrow with horizontal line */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#F15A24] uppercase">
                  THE SPECIES
                </span>
                <span className="h-[1px] w-12 bg-[#F15A24]/40 inline-block" />
              </div>

              {/* Title */}
              <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-normal leading-[1.08] text-white">
                What is Cordyceps?
              </h2>

              {/* Intro Paragraph */}
              <p className="mt-4 text-base lg:text-lg leading-relaxed text-parchment/75 max-w-xl">
                Cordyceps militaris is a remarkable fungus with a fascinating biology. Learn how it differs from wild Cordyceps sinensis and why cultivation matters.
              </p>

              {/* Pill CTA Button */}
              <Link
                to="/cordyceps-study"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F15A24] px-8 py-3.5 text-xs font-bold tracking-[0.16em] text-white uppercase shadow-lg shadow-[#F15A24]/20 transition-all duration-300 hover:bg-[#d94e1c] hover:-translate-y-0.5"
              >
                STUDY CORDYCEPS <span aria-hidden="true">→</span>
              </Link>

              {/* Bottom 3 Feature Badges / Pillars */}
              <div className="mt-12 flex flex-wrap items-center gap-6 lg:gap-8 pt-6 border-t border-white/10 w-full">
                
                {/* Badge 1: Natural Origin */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-600/40 bg-amber-950/20 text-amber-500">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  </div>
                  <div className="text-[0.68rem] font-bold tracking-[0.14em] text-parchment/80 uppercase leading-tight">
                    <div>NATURAL</div>
                    <div>ORIGIN</div>
                  </div>
                </div>

                <div className="hidden sm:block h-7 w-[1px] bg-white/15" />

                {/* Badge 2: Science Backed */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-600/40 bg-amber-950/20 text-amber-500">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M10 2v7.5L4.5 18A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3L14 9.5V2" />
                      <path d="M8.5 2h7" />
                      <path d="M7 16h10" />
                    </svg>
                  </div>
                  <div className="text-[0.68rem] font-bold tracking-[0.14em] text-parchment/80 uppercase leading-tight">
                    <div>SCIENCE</div>
                    <div>BACKED</div>
                  </div>
                </div>

                <div className="hidden sm:block h-7 w-[1px] bg-white/15" />

                {/* Badge 3: Cultivation Matters */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-600/40 bg-amber-950/20 text-amber-500">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M12 22V12" />
                      <path d="M12 12C12 7.5 7.5 7.5 7.5 7.5C7.5 12 12 12 12 12Z" />
                      <path d="M12 12C12 6.5 17.5 6.5 17.5 6.5C17.5 12 12 12 12 12Z" />
                    </svg>
                  </div>
                  <div className="text-[0.68rem] font-bold tracking-[0.14em] text-parchment/80 uppercase leading-tight">
                    <div>CULTIVATION</div>
                    <div>MATTERS</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Visual Composition */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src={speciesVisual}
                  alt="Cordyceps Militaris species cultivation biology"
                  className="w-full h-auto object-cover rounded-2xl border border-amber-500/20 shadow-amber-950/50"
                />
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
