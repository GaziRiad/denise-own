import Image from "next/image";
import { Sliders } from "./Sliders";

function Testimonials() {
  return (
    <section className="container mx-auto px-5 py-44">
      <div className="mb-20 xl:w-1/2">
        <h1 className="font-display text-xl text-brown mb-3 lg:mb-9 xl:text-5xl">
          Deze toppers gingen je voor
        </h1>
        <p className="font-medium text-base text-brown xl:text-md">
          Gemiddeld beoordeeld met een 4,8/5!
        </p>
      </div>
      <div className="ml-auto relative xl:pr-64 xl:w-1/2">
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
    </section>
  );
}

export default Testimonials;
