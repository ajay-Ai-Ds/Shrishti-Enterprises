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
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
          <p className="mt-3 text-gray-500">Everything you need to know about safety nets and invisible grills in Bangalore.</p>
        </div>

        <div className="space-y-3">
          {items.map((faq, i) => (
            <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-green-300 transition-colors">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:text-green-700 transition-colors" role="button" aria-expanded="false">
                <span>{faq.question}</span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-open:rotate-180 transition-transform duration-300" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
