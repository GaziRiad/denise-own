import Image from "next/image";
import { Sliders } from "./QuoteSliders";

function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto px-5 py-20 lg:px-10 xl:max-w-6xl 2xl:max-w-[1400px] 3xl:py-44">
        <div className="mb-20 xl:w-1/2">
          <h1 className="mb-3 font-display text-xl text-brown lg:mb-9 2xl:text-4xl 3xl:text-5xl">
            Deze toppers gingen je voor
          </h1>
          <p className="text-base font-medium text-brown xl:text-md">
            Gemiddeld beoordeeld met een 4,8/5
          </p>
        </div>
        <div className="relative z-50 ml-auto xl:w-1/2 2xl:pr-56">
          <Image
            src="/quote.svg"
            width={100}
            height={100}
            className="absolute -left-[4%] -top-[10%]"
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
