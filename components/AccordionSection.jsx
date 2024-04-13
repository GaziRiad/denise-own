import { items } from "@/constants/faqs";
import AccordionItem from "./AccordionItem";

function AccordionSection() {
  return (
    <section className="flex items-center justify-center bg-brownLight">
      <div className="mx-auto w-full px-5 py-20 lg:px-10 xl:max-w-6xl 2xl:min-w-[1400px] 3xl:py-44">
        <div className=" flex flex-col xl:flex-row xl:items-start">
          <h1 className="flex-1 font-display text-xl text-brown xl:-mt-16 xl:text-2xl">
            Veel gestelde vragen
          </h1>
          <div className="z-50 flex flex-1 flex-col justify-center gap-4">
            {items.map((faq, i) => (
              <AccordionItem key={i} title={faq.title} body={faq.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccordionSection;
