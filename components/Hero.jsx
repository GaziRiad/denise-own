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
    <>
      <HeroNav />
      <section className="-z-50 bg-home-hero bg-cover bg-no-repeat bg-bottom h-screen w-full flex items-end justify-center relative hero">
        <div className="text-grad w-full h-screen flex flex-col items-center justify-center text-center px-5 xl:px-[260px] 2xl:px-[302px]">
          <div className="mt-auto pb-[20%] sm:pb-[10%]">
            <h1 className="font-display text-white text-2xl leading-tight xl:text-3xl 2xl:text-4xl">
              Welkom bij Denise Anna
            </h1>
            <p className="text-white text-sm font-light mb-11 xl:text-base">
              Velit qui voluptate pariatur minim cillum quis adipisicing ullamco
              irure ex aliqua et. Culpa Lorem laborum reprehenderit ea qui elit
              cupidatat duis laborum. Dolore sint labore quis id minim aute
              occaecat Lorem sit reprehenderit nulla velit.
            </p>
            <Button>Aanmelden</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
