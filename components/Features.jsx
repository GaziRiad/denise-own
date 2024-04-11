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
        anticipatePin: 1, // Ensures the pin animation is more responsive
        onToggle: (self) => {
          document.body.style.paddingRight = self.isActive ? "2px" : "0"; // Adjust the padding based on pin state
        },
      });

      // Clean up function to unregister ScrollTrigger on component unmount
      return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }, []);

  return (
    <section className="flex flex-col justify-center lg:flex-row parentContainer">
      <div className="flex-1 h-[608px] xl:h-[784px] ">
        <h1 className=" font-display text-xl text-brown px-5 py-16 xl:px-44 xl:text-5xl rightBlock">
          Samen aan de slag met
        </h1>
      </div>
      <div className="flex-1">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="w-full h-[608px] xl:h-[784px] relative"
          >
            <Image
              src={feature.img}
              fill
              className="absolute inset-0 -z-50"
              alt={`Image of ${feature.title}`}
              loading="lazy"
            />
            <div className="absolute bottom-0 text-grad w-full flex flex-col items-start justify-center text-center px-5 pb-12 xl:px-16">
              <h1 className="text-white text-md mb-4 font-medium">
                {feature.title}
              </h1>
              <p className="text-white font-light text-start text-sm lg:text-base ">
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
