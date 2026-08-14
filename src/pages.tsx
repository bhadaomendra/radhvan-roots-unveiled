import { createRoot } from "react-dom/client";
import { SiteNav, Hero } from "@/components/site/Hero";
import {
  WhatIsCordyceps,
  WhyUnique,
  Compounds,
  Evidence,
  Process,
  Research,
  About,
  FutureRange,
  FAQ,
  Newsletter,
  Footer,
} from "@/components/site/Sections";
import { Sinensis, Applications } from "@/components/site/SinensisSections";
import "./styles.css";

function App() {
  return (
    <div className="bg-background">
      <SiteNav />
      <main>
        <Hero />
        <WhatIsCordyceps />
        <WhyUnique />
        <Sinensis />
        <Compounds />
        <Applications />
        <Evidence />
        <Process />
        <Research />
        <About />
        <FutureRange />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
