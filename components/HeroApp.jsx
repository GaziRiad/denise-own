import Image from "next/image";
import HeroNav from "./HeroNav";
import Button from "./Button";

function HeroApp() {
  return (
    <section className="w-full bg-brown text-white lg:h-screen">
      <HeroNav />
      {/* DESKTOP LAYOUT */}
      <div className="hidden h-full items-center justify-center lg:flex">
        <div className="flex h-1/2 flex-1 items-center justify-center lg:h-full">
          <Image
            src="/images/mobile.png"
            height={800}
            width={800}
            alt="denise anna mobile app"
            className="rotate-90"
          />
        </div>
        <div className="h-full flex-1">
          <div className="flex h-2/3  flex-col items-start justify-center bg-brownLight px-5 lg:px-10">
            <h1 className="mb-6 font-display text-2xl leading-tight text-brown xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              Over de app
            </h1>
            <p className="mb-6 text-sm font-light text-brown xl:text-base">
              Ipsum ipsum dolore tempor tempor do nulla culpa quis consequat
              veniam veniam nisi. Dolore aliquip magna tempor reprehenderit
              officia id aute voluptate deserunt voluptate. Fugiat ad sit ea
              commodo ut tempor nulla aute consequat. Reprehenderit cillum enim
              laboris fugiat do proident cupidatat sit dolore ipsum commodo duis
              culpa non qui. Tempor esse aute in occaecat consectetur eiusmod
              deserunt.
            </p>
            <Button color="dark">Aanmelden</Button>
          </div>
          <Image
            height={400}
            width={400}
            src="/images/food.jpg"
            alt="food image"
            className="h-1/3 w-full object-cover"
          />
        </div>
      </div>

      {/* SMALLER LAYOUT */}
      <div className="">
        <div className="items-center justify-center bg-brownLight py-20 text-center lg:hidden">
          <Image
            src="/images/mobile.png"
            height={1200}
            width={1200}
            alt="denise anna mobile app"
            className="mx-auto mb-11 w-80 rotate-90"
          />
          <div className="flex flex-col items-center justify-center bg-brownLight px-5">
            <h1 className="mb-6 font-display text-2xl leading-tight text-brown">
              Over de app
            </h1>
            <p className="mb-10 text-sm font-light text-brown xl:text-base">
              Ik ben Denise Anna en sinds een paar jaar heb ik mijn levensstijl
              volledig omgegooid. Ik sport 5 keer per week, werk aan mijn
              mentale gezondheid, eet gezonde voeding, ben meer dan 10 kilo
              afgevallen en heb hierdoor nog nooit zó lekker in mijn vel
              gezeten. <br /> <br /> Dagelijks deel ik mijn leven en ervaringen,
              zodat ik jullie ook kan inspireren en helpen om lekker in je vel
              te zitten! Dit doe ik door het maken van YouTube video’s,
              podcasts, social media content en nu ook met behulp de app.
            </p>
            <Button color="dark">Aanmelden</Button>
          </div>
        </div>
        <Image
          height={400}
          width={400}
          src="/images/food.jpg"
          alt="food image"
          className="w-full object-cover lg:hidden"
        />
      </div>
    </section>
  );
}

export default HeroApp;
