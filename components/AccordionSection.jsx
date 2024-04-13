import { items } from "@/constants/faqs";
import AccordionItem from "./AccordionItem";

function AccordionSection() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-brownLight py-24 px-5 lg:px-10 3xl:py-44">
      <div className="container mx-auto flex-col flex justify-between gap-6 xl:items-start xl:flex-row xl:max-w-6xl 2xl:max-w-[1450px]">
        <h1 className="flex-1 text-brown font-display text-xl xl:-mt-16 xl:text-2xl">
          Veel gestelde vragen
        </h1>
        <div className="flex-1 flex flex-col justify-center gap-4">
          {items.map((faq, i) => (
            <AccordionItem key={i} title={faq.title} body={faq.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccordionSection;
