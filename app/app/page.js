import NoiseLayer from "@/components/NoiseLayer";

import AppSliders from "@/components/AppSliders";
import HeroApp from "@/components/HeroApp";
import SignupSection from "@/components/SignupSection";
import AccordionSection from "@/components/AccordionSection";
import Footer from "@/components/Footer";
import XchallengeSection from "@/components/XchallengeSection";
import PricingSection from "@/components/PricingSection";

function page() {
  return (
    <main>
      <NoiseLayer />
      <HeroApp />
      <AppSliders />
      <SignupSection />
      <PricingSection />
      <XchallengeSection />
      <SignupSection bg="white" />
      <AccordionSection />
      <Footer />
    </main>
  );
}

export default page;
