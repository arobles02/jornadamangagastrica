import HeroSection from "@/components/HeroSection";
import IncludesSection from "@/components/IncludesSection";
import DoctorSection from "@/components/DoctorSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <IncludesSection />
      <DoctorSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <FloatingButtons />
    </main>
  );
};

export default Index;
