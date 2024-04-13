import Image from "next/image";
import { Sliders } from "./Sliders";

function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto px-5 py-20 lg:px-10 3xl:py-44 xl:max-w-6xl 2xl:max-w-[1400px]">
        <div className="mb-20 xl:w-1/2">
          <h1 className="font-display text-xl text-brown mb-3 lg:mb-9 2xl:text-4xl 3xl:text-5xl">
            Deze toppers gingen je voor
          </h1>
          <p className="font-medium text-base text-brown xl:text-md">
            Gemiddeld beoordeeld met een 4,8/5!
          </p>
        </div>
        <div className="ml-auto relative xl:pr-64 xl:w-1/2 z-50">
          <Image
            src="/quote.svg"
            width={100}
            height={100}
            className="absolute -top-[10%] -left-[4%]"
            alt="Quote icon"
            loading="lazy"
          />
          <Sliders />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
