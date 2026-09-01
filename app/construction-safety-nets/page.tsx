import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Construction Safety Nets Bangalore | IS-Standard Fall Arrest & Debris Nets",
  description:
    "Certified construction safety netting, scaffold debris containment, and personnel fall-arrest nets for builders and contractors across Bangalore by Shrishti Enterprises.",
  path: "/construction-safety-nets",
  keywords: [
    "construction safety nets bangalore",
    "scaffolding debris net",
    "building site fall net",
    "safety netting contractors bangalore",
  ],
});

const faqs = [
  {
    question: "Do Shrishti Enterprises construction nets meet Indian safety standards?",
    answer:
      "Yes, our construction safety nets comply with IS 5175 and international fall-arrest safety regulations for construction sites, tested to arrest heavy dynamic falls and contain debris.",
  },
  {
    question: "What types of construction nets do you install across Bangalore sites?",
    answer:
      "We provide personnel fall arrest nets, vertical debris containment nets, open elevator shaft covers, and scaffold perimeter netting for residential towers and commercial projects.",
  },
];

export default function ConstructionSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Construction Safety Nets"
      slug="construction-safety-nets"
      heroHeadline="Industrial Construction &amp; Debris Catchment Nets in Bangalore"
      heroSub="High-strength personnel fall-arrest netting and scaffold containment mesh for multi-storey building projects."
      imagePath="/images/construction-safety-nets.webp"
      imageAlt="Certified construction safety net and building fall arrest installation in Bangalore by Shrishti Enterprises"
      relatedServices={[
        { title: "Duct Area Safety Nets", slug: "duct-area-safety-nets" },
        { title: "Sports Nets", slug: "sports-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Site Safety &amp; Fall Prevention Netting in Bangalore</h2>
            <p>
              Multi-storey construction projects in Bangalore require stringent safety measures to protect on-site workers, engineers, and passersby from accidental falls and dropping construction materials. Shrishti Enterprises provides heavy-duty, certified safety netting systems engineered to meet rigorous safety compliance standards.
            </p>
            <p>
              Our high-tensile braided polyamide and HDPE nets are equipped with reinforced border ropes and industrial steel carabiners for dependable load distribution and rapid on-site setup.
            </p>
          </div>
          <div>
            <h2>Key Construction Net Applications</h2>
            <ul>
              <li><strong>Personnel Fall Arrest:</strong> Horizontal containment nets installed below active working decks.</li>
              <li><strong>Scaffold Debris Mesh:</strong> Fine-aperture vertical screening that traps falling tools, masonry chips, and plaster dust.</li>
              <li><strong>Shaft &amp; Void Protection:</strong> Heavy-gauge netting covering open lift shafts, stair voids, and service ducts.</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
