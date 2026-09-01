import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Duct Area Safety Nets in Bangalore | Apartment Duct Nets",
  description: "Duct area safety nets for apartments in Bangalore. Prevent birds, debris, and accidents in building duct areas. Professional installation. Call +91 80880 47056.",
  path: "/duct-area-safety-nets",
  keywords: ["duct area safety nets bangalore", "duct net", "apartment duct net bangalore"],
});

const faqs = [
  { question: "What is a duct area net?", answer: "Duct area nets are safety nets installed across the open top or sides of apartment building duct spaces — the narrow shafts between buildings used for ventilation, plumbing, and electrical runs. They prevent birds, debris, and accidental falls into the duct." },
  { question: "Why are duct area nets important?", answer: "Without nets, duct areas accumulate bird droppings, nesting material, and debris that creates odours and drain blockages. There is also a risk of children accidentally falling into open duct spaces." },
  { question: "What is the price of duct area safety nets?", answer: "Duct area net prices range from ₹10–₹20 per sq ft depending on access difficulty and duct dimensions. Call us on +91 80880 47056 for a free site inspection." },
  { question: "How long does duct net installation take?", answer: "Standard duct net installation takes 2–4 hours. Some high-rise or difficult-access ducts may require half a day." },
];

export default function DuctAreaSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Duct Area Safety Nets"
      slug="duct-area-safety-nets"
      heroHeadline="Duct Area Safety Nets in Bangalore — Keep Ducts Clean and Safe"
      heroSub="Professional duct area net installation for apartments. Prevents birds, debris, and accidents in building duct spaces. Free inspection across Bangalore."
      imagePath="/images/ductarea2.webp"
      imageAlt="Duct area safety net installed in apartment building Bangalore"
      relatedServices={[
        { title: "Bird Nets", slug: "bird-nets" },
        { title: "Pigeon Safety Nets", slug: "pigeon-safety-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Duct Area Safety Nets in Bangalore</h2>
            <p>Most apartment buildings in Bangalore have one or more duct areas — narrow vertical shafts between buildings or within a building that house utility lines, ventilation pipes, and plumbing. These ducts are often open at the top, creating entry points for birds and accumulation of debris.</p>
            <p>Shrishti Enterprises installs purpose-built duct area nets that cover these open spaces, preventing bird intrusion, debris accumulation, and accidental falls.</p>
          </div>
          <div>
            <h2>Problems Caused by Unprotected Duct Areas</h2>
            <ul>
              <li>Pigeons and other birds nesting inside the duct</li>
              <li>Bird droppings causing odour and drain blockages</li>
              <li>Dead birds creating hygiene issues</li>
              <li>Leaves and rubbish accumulating in the duct</li>
              <li>Risk of children and pets falling into the duct</li>
            </ul>
          </div>
          <div>
            <h2>Our Duct Net Installation Process</h2>
            <p>We visit your apartment building, measure the duct dimensions, and fabricate a custom net cover. The net is fitted using stainless steel hooks and tensioning cables to create a taut, secure cover with minimal visual impact. Installation typically takes 2–4 hours.</p>
          </div>
          <div>
            <h2>Duct Area Net Price in Bangalore</h2>
            <ul>
              <li>Standard duct net cover: ₹10–₹15/sq ft</li>
              <li>High-access / high-rise duct nets: ₹15–₹25/sq ft</li>
            </ul>
            <p>Free site inspection included. Same-day installation available across Bangalore.</p>
          </div>
        </div>
      }
    />
  );
}
