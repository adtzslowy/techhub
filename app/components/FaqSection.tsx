import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/config/faq";
import { RevealOnScroll } from "./layout/reveal-on-scroll";

export default function FaqSection() {
  return (
    <section className="py-20 font-display bg-[#075084] ">
      {/* HEADER */}
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-zinc-300">
            Pertanyaan yang sering ditanyakan tentang TechHub Invokasi
          </p>
        </div>
      </RevealOnScroll>

      {/* ACCORDION */}
      <div className="mx-auto mt-10 max-w-3xl px-6">
        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 80}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-200 font-semibold text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </RevealOnScroll>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
