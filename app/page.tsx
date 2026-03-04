import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { GallerySection } from "@/components/gallery-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { StatsSection } from "@/components/stats-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-base">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <PricingSection />
      <TestimonialsSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
