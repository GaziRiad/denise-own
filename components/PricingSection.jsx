import { pricingContent } from "@/translations/nl/thirdPage";
import Image from "next/image";

function PricingSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto px-5 py-20 lg:px-10 xl:max-w-6xl 2xl:max-w-[1400px] 3xl:py-44">
        <h1 className=" mx-auto mb-20 max-w-5xl text-center font-display text-[2.5rem] xl:text-[4rem]">
          Prijzen en lidmaatschap
        </h1>

        <div className=" flex flex-col gap-24">
          {pricingContent.map((block, i) => (
            <div
              className={`flex flex-col items-center justify-center gap-10 ${
                i % 2 !== 0 ? " xl:flex-row-reverse" : ""
              } xl:flex-row xl:gap-12`}
              key={i}
            >
              <Image
                src={block.img}
                width={2000}
                height={2000}
                alt="Over page image"
                className="h-auto w-full flex-1 object-cover md:w-2/3 xl:aspect-square xl:w-1/3 2xl:h-[616px] 2xl:w-[616px]"
              />
              <div className="flex-1 list-disc">
                <p className="flex items-center justify-between">
                  <span className="mb-4 text-md font-medium">
                    {block.title}
                  </span>
                  <span className="mb-4 text-md font-medium">
                    €{block.price} p/m
                  </span>
                </p>
                {block.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
