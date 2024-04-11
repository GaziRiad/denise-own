"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { testimonials } from "@/constants/testimonials";

export function Sliders() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div class="embla">
      <div class="embla__viewport" ref={emblaRef}>
        <div class="embla__container">
          {testimonials.map((testimonial, i) => (
            <div key={i} class="embla__slide">
              <p className="font-medium text-md mb-4">{testimonial.title}</p>
              <blockquote className="font-thin text-sm mb-4 lg:text-base">
                {testimonial.text}
              </blockquote>
              <p className="font-thin text-base mb-16">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
      <button class="embla__prev mr-6" onClick={scrollPrev}>
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 1L2 8L9 15" stroke="#4B372B" stroke-width="2" />
        </svg>
      </button>
      <button class="embla__next" onClick={scrollNext}>
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L8 8L1 15" stroke="#4B372B" stroke-width="2" />
        </svg>
      </button>
    </div>
  );
}
