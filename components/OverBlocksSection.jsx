import { blocksContent } from "@/constants/overBlocks";
import Image from "next/image";

function OverBlocksSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto px-5 py-20 lg:px-10 3xl:py-44 xl:max-w-6xl 2xl:max-w-[1400px]">
        <p className="font-display text-[2.5rem] max-w-5xl mb-20 xl:mb-44 xl:text-[4rem]">
          “Aute voluptate sint cupidatat reprehenderit aliquip Lorem in minim
          occaecat tempor ut occaecat ad eu.”
        </p>

        <div className=" flex flex-col gap-24">
          {blocksContent.map((block, i) => (
            <div
              className={`flex flex-col items-center justify-center gap-10 ${
                i % 2 === 0 ? " xl:flex-row-reverse" : ""
              } xl:flex-row xl:gap-12`}
              key={block.title}
            >
              <Image
                src={block.img}
                width={2000}
                height={2000}
                alt="Over page image"
                className="flex-1 w-full h-auto object-cover md:w-2/3 xl:w-1/3 2xl:w-[616px] 2xl:h-[616px] xl:aspect-square"
              />
              <div className="flex-1">
                <p className="text-md font-medium mb-4">{block.title}</p>
                <p className="text-base font-light">{block.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OverBlocksSection;
