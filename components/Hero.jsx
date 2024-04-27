"use client";

import { useEffect } from "react";
import Button from "./Button";
import HeroNav from "./HeroNav";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".hero",
      start: "bottom bottom",
      end: "top top",
      endTrigger: ".parentContainer",
      pin: true,
      pinSpacing: false,
    });

    // Clean up function to unregister ScrollTrigger on component unmount
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section className="relative">
      <HeroNav />
      <div className="hero bg- relative -z-50 flex h-screen w-full items-end justify-center bg-home-hero bg-cover bg-top bg-no-repeat">
        <div className="text-grad flex h-screen w-full flex-col items-center justify-center px-5 text-center xl:px-[260px] 2xl:px-[302px]">
          <div className="mt-auto pb-[35%] sm:pb-[20%] lg:pb-[10%]">
            <h1 className="mb-6 font-display text-2xl leading-tight text-white xl:text-3xl 2xl:text-4xl">
              Denise Anna
            </h1>
            <div className="flex justify-center">
              <p className="text-sm font-light text-white md:w-2/3 xl:text-base">
                Welkom op mijn website, waar meer te vinden is over hoe ik mijn
                mindset enorm heb veranderd in de afgelopen 3 jaar. Vanaf nu kan
                ik via een app jullie nog beter helpen om ook deze stappen samen
                met mij te zetten!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[4%] left-1/2 z-50 -translate-x-1/2">
        <Button>Aanmelden</Button>
      </div>
    </section>
  );
}

export default Hero;
