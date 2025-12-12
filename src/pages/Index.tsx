import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import PortfolioSection from "@/components/PortfolioSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CTASection />
      <PortfolioSection />
      <EmailSection />
      <Footer />
    </main>
  );
};

export default Index;