import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Monkey Safety Nets Bangalore | Heavy-Gauge Barrier Netting",
  description: "Protect your terrace, open garden, and balcony from monkey troop intrusions with thick-gauge monkey nets by Shrishti Enterprises Bangalore.",
  path: "/monkey-safety-nets",
  keywords: ["monkey safety nets bangalore", "monkey deterrent netting", "terrace monkey proofing", "monkey net cost bangalore"],
});

const faqs = [
  { question: "Can monkeys chew or tear through your monkey safety nets?", answer: "No. Our monkey barrier nets utilize ultra-thick braided HDPE copolymer with high bite resistance and reinforced stainless steel tension cables." },
  { question: "What is the price of monkey netting in Bangalore?", answer: "Heavy-gauge monkey barrier nets cost between ₹18 and ₹30 per sq ft depending on framing and height." },
];

export default function MonkeySafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Monkey Safety Nets"
      slug="monkey-safety-nets"
      heroHeadline="Heavy-Gauge Monkey Deterrent Netting in Bangalore"
      heroSub="Robust, tear-resistant barrier netting designed to safeguard balconies, open terraces, and rooftop areas from aggressive monkeys."
      imagePath="/images/monkey.webp"
      imageAlt="Heavy-gauge monkey deterrent safety netting on Bangalore terrace"
      relatedServices={[
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Construction Safety Nets", slug: "construction-safety-nets" },
        { title: "Cricket Safety Nets", slug: "cricket-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Heavy-Duty Monkey Barrier Systems in Bangalore</h2>
            <p>Several Bangalore localities near lakes and wooded areas face regular monkey intrusions. Shrishti Enterprises monkey safety nets offer heavy-duty, chew-resistant barriers that protect property and prevent dangerous encounters.</p>
          </div>
        </div>
      }
    />
  );
}
