"use client";

import { features } from "@/constants/features";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function Features() {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: ".parentContainer",
        start: "top top",
        end: "bottom +=50%",
        pin: ".rightBlock",
        scrub: true,
        anticipatePin: 1,
      });

      // Clean up function to unregister ScrollTrigger on component unmount
      return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }, []);

  return (
    <section className="parentContainer flex flex-col justify-center bg-white lg:flex-row">
      <div className="h-[100vh] flex-1 ">
        <h1 className="rightBlock px-5 py-6 font-display text-xl text-brown xl:px-28 xl:text-3xl 2xl:text-5xl 3xl:px-36">
          Samen aan de slag met
        </h1>
      </div>
      <div className="flex-1">
        {features.map((feature) => (
          <div key={feature.title} className="relative h-[100vh] w-full">
            <Image
              src={feature.img}
              fill
              className="absolute inset-0 z-10 object-cover"
              alt={`Image of ${feature.title}`}
              loading="lazy"
            />
            <div className="text-grad absolute bottom-0 z-20 flex h-full w-full flex-col items-start justify-end px-5 pb-12 text-center xl:px-16">
              <h1 className="mb-4 text-md font-medium text-white">
                {feature.title}
              </h1>
              <p className="text-start text-sm font-light text-white lg:text-base ">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
