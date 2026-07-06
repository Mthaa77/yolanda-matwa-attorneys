import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { LiveTicker } from "@/components/site/live-ticker";
import { TrustBar } from "@/components/site/trust-bar";
import { SouthAfricanTrust } from "@/components/site/south-african-trust";
import { OnboardingWizard } from "@/components/site/onboarding-wizard";
import { AboutFounder } from "@/components/site/about-founder";
import { PainPoints } from "@/components/site/pain-points";
import { StatsStrip } from "@/components/site/stats-strip";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { ServicesHero } from "@/components/site/services-hero";
import { ServicesGrid } from "@/components/site/services-grid";
import { PersonalApproach } from "@/components/site/personal-approach";
import { ServiceComparison } from "@/components/site/service-comparison";
import { PricingTransparency } from "@/components/site/pricing-transparency";
import { Competence } from "@/components/site/competence";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { LegalFoundations } from "@/components/site/legal-foundations";
import { Guarantees } from "@/components/site/guarantees";
import { FAQSection } from "@/components/site/faq-section";
import { TestimonialsScaffold } from "@/components/site/testimonials-scaffold";
import { LegalInsights } from "@/components/site/legal-insights";
import { WhatsAppContact } from "@/components/site/whatsapp-contact";
import { ContactSection } from "@/components/site/contact-section";
import { FinalCTA } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { SectionDivider } from "@/components/site/section-divider";
import { ScrollProgress, BackToTop } from "@/components/site/site-enhancements";
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
        <ScrollProgress />
        <Navbar />
        <main id="main-content" className="flex-1">
          <Hero />
          <LiveTicker />
          <TrustBar />
          <SouthAfricanTrust />
          <OnboardingWizard />
          <AboutFounder />
          <PainPoints />
          <SectionDivider />
          <StatsStrip />
          <WhyChooseUs />
          <ServicesHero />
          <ServicesGrid />
          <PersonalApproach />
          <ServiceComparison />
          <PricingTransparency />
          <Competence />
          <ProcessTimeline />
          <LegalFoundations />
          <Guarantees />
          <SectionDivider />
          <FAQSection />
          <TestimonialsScaffold />
          <LegalInsights />
          <WhatsAppContact />
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
