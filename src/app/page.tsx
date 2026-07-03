import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TrustBar } from "@/components/site/trust-bar";
import { AboutFounder } from "@/components/site/about-founder";
import { StatsStrip } from "@/components/site/stats-strip";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { ServicesGrid } from "@/components/site/services-grid";
import { ServiceComparison } from "@/components/site/service-comparison";
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
import { PrivacyProvider } from "@/components/site/privacy-provider";

export default function Home() {
  return (
    <PrivacyProvider>
      <div className="flex min-h-screen flex-col bg-cream">
        {/* Skip to content — keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-navy-deep px-5 py-3 text-sm font-semibold text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:shadow-premium"
        >
          Skip to content
        </a>
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <main id="main-content" className="flex-1">
          <Hero />
          <TrustBar />
          <AboutFounder />
          <SectionDivider />
          <StatsStrip />
          <WhyChooseUs />
          <ServicesGrid />
          <ServiceComparison />
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
    </PrivacyProvider>
  );
}
