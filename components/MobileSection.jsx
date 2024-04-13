import Image from "next/image";
import Button from "./Button";

function MobileSection() {
  return (
    <section className="bg-[#F9DCE8] pb-32 xl:pb-32 xl:pt-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <Image
          src="/images/mobile.png"
          width={500}
          height={500}
          alt="Anna Denise Mobile App"
          loading="lazy"
        />
        <h1 className="font-display text-xl text-brown px-5 lg:text-3xl lg:px-0">
          Download de app
        </h1>
        <p className="font-thin text-sm mb-6 px-5 lg:px-0 lg:text-base">
          Velit qui voluptate pariatur minim cillum quis adipisicing ullamco
          irure ex aliqua et. Culpa Lorem laborum reprehenderit ea qui elit
          cupidatat duis laborum. Dolore sint labore quis id minim aute occaecat
          Lorem sit reprehenderit nulla velit.
        </p>
        <Button color="dark">Aanmelden</Button>
      </div>
    </section>
  );
}

export default MobileSection;
