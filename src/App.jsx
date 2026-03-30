import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductIntro } from "./components/ProductIntro";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { HowItWorks } from "./components/HowItWorks";
import { ValueSection } from "./components/ValueSection";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-slate-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <Hero />
      <ProductIntro />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <HowItWorks />
      <ValueSection />
      <Pricing />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
