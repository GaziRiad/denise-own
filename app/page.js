import AccordionSection from "@/components/AccordionSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileSection from "@/components/MobileSection";
import Testimonials from "@/components/Testimonials";

function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <MobileSection />
      <Testimonials />
      <AccordionSection />
      <Footer />
    </main>
  );
}

export default Home;
