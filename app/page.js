import AccordionSection from "@/components/AccordionSection";
import AppSliders from "@/components/AppSliders";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroApp from "@/components/HeroApp";
import MobileSection from "@/components/MobileSection";
import NoiseLayer from "@/components/NoiseLayer";
import SignupSection from "@/components/SignupSection";
import Testimonials from "@/components/Testimonials";

function Home() {
  return (
    // <main>
    //   <NoiseLayer />
    //   <Hero />
    //   <Features />
    //   <MobileSection />
    //   <Testimonials />
    //   <AccordionSection />
    //   <Footer />
    // </main>
    <main>
      <NoiseLayer />
      <HeroApp />
      <AppSliders />
      <SignupSection />

      <AccordionSection />

      <Footer />
    </main>
  );
}

export default Home;
