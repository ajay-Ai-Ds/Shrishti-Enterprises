import { FAQS } from "@/lib/constants";

interface FAQProps {
  items?: { question: string; answer: string }[];
  title?: string;
}

export default function FAQ({ items = FAQS as unknown as { question: string; answer: string }[], title = "Frequently Asked Questions" }: FAQProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#FAFAFA] text-[#AC7B25] border border-[#AC7B25]/20 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E2125] tracking-tight">{title}</h2>
          <p className="mt-3 text-[#6C6C6E] text-sm md:text-base">Comprehensive answers regarding safety netting specifications, invisible grills, and installation timelines in Bangalore.</p>
        </div>

        <div className="space-y-3.5">
          {items.map((faq, i) => (
            <details key={i} className="group bg-[#FAFAFA] border border-gray-200/80 rounded-2xl overflow-hidden hover:border-[#AC7B25]/50 transition-colors">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-[#1E2125] hover:text-[#AC7B25] transition-colors" role="button" aria-expanded="false">
                <span className="text-base">{faq.question}</span>
                <span className="shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 text-[#AC7B25] flex items-center justify-center group-open:rotate-180 group-open:bg-[#AC7B25] group-open:text-white group-open:border-[#AC7B25] transition-all duration-300 shadow-xs" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-[#6C6C6E] text-sm leading-relaxed border-t border-gray-100 pt-4 bg-white">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
