import { items } from "@/constants/faqs";
import AccordionItem from "./AccordionItem";

function AccordionSection() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-brownLight py-24 px-5 xl:py-44 xl:px-0">
      <div className="container mx-auto">
        <h1 className="text-brown font-display text-xl mb-16 xl:-mb-12 xl:text-2xl">
          Veel gestelde vragen
        </h1>
        <div className="flex flex-col justify-center gap-4">
          {items.map((faq, i) => (
            <AccordionItem key={i} title={faq.title} body={faq.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccordionSection;
