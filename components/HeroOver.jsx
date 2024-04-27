import Image from "next/image";
import HeroNav from "./HeroNav";

function HeroOver() {
  return (
    // <section className="h-screen w-full bg-brown text-white">
    <section className="w-full bg-brown text-white xl:h-screen">
      <HeroNav />
      {/* <div className="mx-auto px-5 py-20 lg:px-10 xl:max-w-6xl 2xl:max-w-[1400px] 3xl:py-44">
        <Image
          src="/images/hero-home.jpg"
          width={2000}
          height={2000}
          alt="Een vrolijke vrouw zit lachend op het aanrecht in een helder witte keuken"
          className="absolute top-[16%] z-10 aspect-square w-3/4 object-cover md:w-2/3 lg:w-1/2 xl:top-[6%] xl:w-1/3 2xl:top-[14%]"
        />
        <div className="absolute bottom-[7%] left-1/2 z-20 w-full -translate-x-1/2 px-5 text-center xl:left-1/3 xl:w-fit xl:max-w-5xl xl:translate-x-0 xl:text-left">
          <h1 className="font-display text-2xl leading-tight text-white xl:text-3xl 2xl:text-4xl">
            Over mij
          </h1>
          <p className="text-sm font-light text-white xl:text-base">
            Ik ben Denise Anna en sinds een paar jaar heb ik mijn levensstijl
            volledig omgegooid. Ik sport 5 keer per week, werk aan mijn mentale
            gezondheid, eet gezonde voeding, ben meer dan 10 kilo afgevallen en
            heb hierdoor nog nooit zó lekker in mijn vel gezeten. <br /> <br />{" "}
            Dagelijks deel ik mijn leven en ervaringen, zodat ik jullie ook kan
            inspireren en helpen om lekker in je vel te zitten! Dit doe ik door
            het maken van YouTube video’s, podcasts, social media content en nu
            ook met behulp de app.
          </p>
        </div>
      </div> */}
      {/*  */}
      <div className="mx-auto px-5 py-20 lg:px-10 xl:max-w-6xl 2xl:max-w-[1400px] 3xl:py-44">
        <Image
          src="/images/hero-home.jpg"
          width={2000}
          height={2000}
          alt="Een vrolijke vrouw zit lachend op het aanrecht in een helder witte keuken"
          className="z-10 aspect-square w-3/4 object-cover md:w-2/3 lg:w-1/2 xl:absolute xl:top-[6%] xl:w-1/3 2xl:top-[14%]"
        />
        <div className="z-20 mt-4 w-full px-5 text-center xl:absolute xl:bottom-[7%] xl:left-1/3 xl:mt-0 xl:w-fit xl:max-w-5xl xl:translate-x-0 xl:text-left">
          <h1 className="font-display text-2xl leading-tight text-white xl:text-3xl 2xl:text-4xl">
            Over mij
          </h1>
          <p className="text-sm font-light text-white xl:text-base">
            Ik ben Denise Anna en sinds een paar jaar heb ik mijn levensstijl
            volledig omgegooid. Ik sport 5 keer per week, werk aan mijn mentale
            gezondheid, eet gezonde voeding, ben meer dan 10 kilo afgevallen en
            heb hierdoor nog nooit zó lekker in mijn vel gezeten. <br /> <br />{" "}
            Dagelijks deel ik mijn leven en ervaringen, zodat ik jullie ook kan
            inspireren en helpen om lekker in je vel te zitten! Dit doe ik door
            het maken van YouTube video’s, podcasts, social media content en nu
            ook met behulp de app.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroOver;
