import AccordionSection from "@/components/AccordionSection";
import Footer from "@/components/Footer";
import HeroOver from "@/components/HeroOver";
import MobileSection from "@/components/MobileSection";
import NoiseLayer from "@/components/NoiseLayer";
import OverBlocksSection from "@/components/OverBlocksSection";

function page() {
  return (
    <main>
      <NoiseLayer />
      <HeroOver />
      <OverBlocksSection />
      <MobileSection />
      <AccordionSection />
      <Footer />
    </main>
  );
}

export default page;
