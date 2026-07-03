import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TrustBar } from "@/components/site/trust-bar";
import { AboutFounder } from "@/components/site/about-founder";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { ServicesGrid } from "@/components/site/services-grid";
import { Competence } from "@/components/site/competence";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { FAQSection } from "@/components/site/faq-section";
import { ContactSection } from "@/components/site/contact-section";
import { FinalCTA } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import {
  ScrollProgress,
  BackToTop,
  LoadingScreen,
} from "@/components/site/site-enhancements";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <AboutFounder />
        <WhyChooseUs />
        <ServicesGrid />
        <Competence />
        <ProcessTimeline />
        <FAQSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
