import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQData from "@/data/FaqData";

const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-4xl">
      {FAQData.map((faq) => (
        <AccordionItem key={faq.id} value={`item-${faq.id}`}>
          <AccordionTrigger className="text-left text-lg font-semibold text-[#0B2346] hover:no-underline">
            {faq.question}
          </AccordionTrigger>

          <AccordionContent className="text-base leading-7 text-slate-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
