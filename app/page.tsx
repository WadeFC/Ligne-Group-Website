import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ValueProposition } from "@/components/home/value-proposition";
import { ProjectsCarousel } from "@/components/home/projects-carousel";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { CeoInsight } from "@/components/home/ceo-insight";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <ProjectsCarousel />
        <TrustIndicators />
        <CeoInsight />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
