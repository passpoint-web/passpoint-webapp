
import Hero from "@/components/Hero";
import StarterPack from "@/components/StarterPack";
import Advantage from "@/components/Advantage";
import GlobalReach from "@/components/GlobalReach";
import Onboarding from "@/components/Onboarding";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import TrustIndicators from "@/components/TrustIndicators";

import SolutionsPreview from "@/components/SolutionsPreview";

const Index = () => {
  return (
    <div className="bg-background">
      <header>
        <Navigation />
      </header>
      <main>
        <section id="hero"><Hero /></section>
        <section id="starter-pack" className="scroll-mt-16"><StarterPack /></section>
        <section id="advantage" className="scroll-mt-16"><Advantage /></section>
        <TrustIndicators />
        
        <GlobalReach />
        <section id="onboarding" className="scroll-mt-16"><Onboarding /></section>
      </main>
      <Footer />
      <StickyCTA />
      <ScrollToTop />
      
    </div>
  );
};

export default Index;
