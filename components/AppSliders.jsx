"use client";

// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons'
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

const slides = [
  {
    img: "/images/fitness.jpg",
    title: "App usp",
    text: "Mollit reprehenderit fugiat esse officia amet veniam irure in dolore est id officia non mollit incididunt.",
  },
  {
    img: "/images/food.jpg",
    title: "App usp",
    text: "Mollit reprehenderit fugiat esse officia amet veniam irure in dolore est id officia non mollit incididunt.",
  },
  {
    img: "/images/hero-home.jpg",
    title: "App usp",
    text: "Mollit reprehenderit fugiat esse officia amet veniam irure in dolore est id officia non mollit incididunt.",
  },
  {
    img: "/images/heroOver.png",
    title: "App usp",
    text: "Mollit reprehenderit fugiat esse officia amet veniam irure in dolore est id officia non mollit incididunt.",
  },
  {
    img: "/images/mindfulness.jpg",
    title: "App usp",
    text: "Mollit reprehenderit fugiat esse officia amet veniam irure in dolore est id officia non mollit incididunt.",
  },
];

function AppSliders() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white">
      <div className="mx-auto flex flex-col items-center justify-center px-5 py-20 lg:px-10 xl:max-w-6xl 2xl:max-w-[1400px] 3xl:py-44">
        <p className="mb-20 max-w-5xl text-center font-display text-[2.5rem] xl:text-[4rem]">
          Samen onderweg naar een gezonder leven
        </p>

        <div className="app-sliders relative flex flex-col gap-24">
          <div className="app-sliders embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {slides.map((slide, index) => (
                  <div key={index} className="embla__slide mr-6">
                    <Image
                      src={slide.img}
                      width={500}
                      height={500}
                      alt="slide img"
                      className=" mb-3 h-96 w-full object-cover"
                    />
                    <p className="mb-4 text-center text-md font-medium text-brown">
                      {slide.title}
                    </p>
                    <p className=" text-center text-base font-light text-brown">
                      {slide.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="embla__controls">
              <button
                class="embla__prev absolute -left-[2%] top-1/2 mr-6 -translate-x-1/2"
                onClick={scrollPrev}
              >
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
              <button
                class="embla__next absolute left-[102%] top-1/2 mr-6 -translate-x-1/2 md:-right-[4.5%]"
                onClick={scrollNext}
              >
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppSliders;
