import Image from "next/image";
import Button from "./Button";

function MobileSection() {
  return (
    <section className="bg-[#F9DCE8] pb-32 xl:pb-32 xl:pt-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <Image
          src="/images/mobile.png"
          width={500}
          height={500}
          alt="Anna Denise Mobile App"
          loading="lazy"
        />
        <h1 className="px-5 font-display text-xl text-brown lg:px-0 lg:text-3xl">
          Download de app
        </h1>
        <p className="mb-6 px-5 text-sm font-thin lg:px-0 lg:text-base">
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
