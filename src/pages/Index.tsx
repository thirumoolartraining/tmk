import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CapabilitiesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <InquirySection />
      <Footer />
    </div>
  );
};

export default Index;
