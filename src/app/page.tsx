import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TrustBar } from "@/components/site/trust-bar";
import { AboutFounder } from "@/components/site/about-founder";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { ServicesGrid } from "@/components/site/services-grid";
import { Competence } from "@/components/site/competence";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { FAQSection } from "@/components/site/faq-section";
import { TestimonialsScaffold } from "@/components/site/testimonials-scaffold";
import { LegalInsights } from "@/components/site/legal-insights";
import { ContactSection } from "@/components/site/contact-section";
import { FinalCTA } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { SectionDivider } from "@/components/site/section-divider";
import {
  ScrollProgress,
  BackToTop,
  LoadingScreen,
} from "@/components/site/site-enhancements";
import { CookieConsent } from "@/components/site/cookie-consent";

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
        <SectionDivider />
        <WhyChooseUs />
        <ServicesGrid />
        <Competence />
        <ProcessTimeline />
        <SectionDivider />
        <FAQSection />
        <TestimonialsScaffold />
        <LegalInsights />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </div>
  );
}
