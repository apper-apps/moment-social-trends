import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import ProblemSection from "@/components/organisms/ProblemSection";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import ComparisonSection from "@/components/organisms/ComparisonSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import PricingSection from "@/components/organisms/PricingSection";
import FAQSection from "@/components/organisms/FAQSection";
import FinalCTASection from "@/components/organisms/FinalCTASection";
import Footer from "@/components/organisms/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <ComparisonSection />
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <FinalCTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;