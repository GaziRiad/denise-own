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
      <div className="hero relative -z-50 flex h-screen w-full items-end justify-center bg-home-hero bg-cover bg-bottom bg-no-repeat">
        <div className="text-grad flex h-screen w-full flex-col items-center justify-center px-5 text-center xl:px-[260px] 2xl:px-[302px]">
          <div className="mt-auto pb-[35%] sm:pb-[20%] lg:pb-[10%]">
            <h1 className="mb-6 font-display text-2xl leading-tight text-white xl:text-3xl 2xl:text-4xl">
              Welkom bij Denise Anna
            </h1>
            <p className="text-sm font-light text-white xl:text-base">
              Velit qui voluptate pariatur minim cillum quis adipisicing ullamco
              irure ex aliqua et. Culpa Lorem laborum reprehenderit ea qui elit
              cupidatat duis laborum. Dolore sint labore quis id minim aute
              occaecat Lorem sit reprehenderit nulla velit.
            </p>
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
