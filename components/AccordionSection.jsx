import { faqItems } from "@/translations/nl/firstPage";
import AccordionItem from "./AccordionItem";

function AccordionSection() {
  return (
    <section className="flex items-center justify-center bg-brownLight">
      <div className="mx-auto w-full px-5 py-20 lg:px-10 xl:max-w-6xl 2xl:min-w-[1400px] 3xl:py-44">
        <div className=" flex flex-col xl:flex-row xl:items-start">
          <h1 className="mb-16 flex-1 font-display text-xl text-brown xl:-mt-16 xl:mb-0 xl:text-2xl">
            Veel gestelde vragen
          </h1>
          <div className="z-50 flex flex-1 flex-col justify-center gap-4">
            {faqItems.map((faq, i) => (
              <AccordionItem key={i} title={faq.title} body={faq.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccordionSection;
