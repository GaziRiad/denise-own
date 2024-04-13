import Image from "next/image";
import HeroNav from "./HeroNav";

function HeroOver() {
  return (
    <section className="h-screen w-full bg-brown text-white">
      <HeroNav />
      <div className="mx-auto px-5 py-20 lg:px-10 xl:max-w-6xl 2xl:max-w-[1400px] 3xl:py-44">
        <Image
          src="/images/hero-home.jpg"
          width={2000}
          height={2000}
          alt="hero over image"
          className="absolute top-[16%] z-10 aspect-square w-3/4 object-cover md:w-2/3 lg:w-1/2 xl:top-[6%] xl:w-1/3 2xl:top-[14%]"
        />
        <div className="absolute bottom-[10%] left-1/2 z-20 w-full -translate-x-1/2 px-5 text-center xl:left-1/3 xl:w-fit xl:max-w-5xl xl:translate-x-0 xl:text-left">
          <h1 className="font-display text-2xl leading-tight text-white xl:text-3xl 2xl:text-4xl">
            Over Denise Anna
          </h1>
          <p className="text-sm font-light text-white xl:text-base">
            Velit qui voluptate pariatur minim cillum quis adipisicing ullamco
            irure ex aliqua et. Culpa Lorem laborum reprehenderit ea qui elit
            cupidatat duis laborum. Dolore sint labore quis id minim aute
            occaecat Lorem sit reprehenderit nulla velit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroOver;
