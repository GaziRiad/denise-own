import { blocksContent } from "@/translations/nl/secondPage";
import Image from "next/image";

function OverBlocksSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto px-5 py-20 lg:px-10 xl:max-w-6xl 2xl:max-w-[1400px] 3xl:py-44">
        <p className="mb-20 max-w-5xl font-display text-[2.5rem] xl:mb-44 xl:text-[4rem]">
          “Ga samen met mij tot het uiterste en word jouw beste versie.”
        </p>

        <div className=" z-50 flex flex-col gap-24">
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
                className="h-auto w-full flex-1 object-cover md:w-2/3 xl:aspect-square xl:w-1/3 2xl:h-[616px] 2xl:w-[616px]"
              />
              <div className="flex-1 no-underline">
                <p className="mb-4 text-md font-medium">{block.title}</p>
                {block.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OverBlocksSection;
