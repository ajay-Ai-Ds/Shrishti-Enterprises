import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Pigeon Safety Nets in Bangalore | Pigeon Control Nets",
  description: "Heavy-duty pigeon safety nets in Bangalore. Stop pigeon nesting and mess permanently. Humane, effective, durable. Free inspection. Call +91 80880 47056.",
  path: "/pigeon-safety-nets",
  keywords: ["pigeon nets bangalore", "pigeon control net", "anti pigeon net bangalore", "pigeon proofing bangalore"],
});

const faqs = [
  { question: "Why are pigeon nets necessary in Bangalore?", answer: "Bangalore's warm climate and abundant food sources attract large pigeon populations. Pigeons nest on balconies, AC units, window ledges, and terraces — creating noise, mess, and health hazards from their droppings. Pigeon nets permanently stop this." },
  { question: "Are pigeon safety nets harmful to pigeons?", answer: "No. Our pigeon nets act as a physical barrier only — pigeons are not trapped, harmed, or killed. They simply cannot access the netted area and will nest elsewhere." },
  { question: "What mesh size is best for pigeon nets?", answer: "For pigeon control, we recommend 25–50mm mesh size nets. This mesh is small enough to prevent pigeons from passing through but large enough to allow airflow and light." },
  { question: "How much do pigeon nets cost in Bangalore?", answer: "Pigeon net prices in Bangalore range from ₹10 to ₹18 per sq ft depending on mesh size and installation area. Contact us on +91 80880 47056 for a free site visit and exact quote." },
  { question: "How long does pigeon net installation take?", answer: "For a standard balcony or terrace, pigeon net installation takes 2–4 hours. We offer same-day installation across Bangalore." },
];

export default function PigeonSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Pigeon Safety Nets"
      slug="pigeon-safety-nets"
      heroHeadline="Pigeon Safety Nets in Bangalore — Stop Pigeon Problems Permanently"
      heroSub="Heavy-duty HDPE pigeon nets for balconies, terraces, AC units, and window ledges. Humane, durable, and effective. Free inspection across Bangalore."
      imagePath="/images/pigeon-safety-nets.webp"
      imageAlt="Pigeon safety net installed on building balcony in Bangalore"
      relatedServices={[
        { title: "Bird Nets", slug: "bird-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Duct Area Safety Nets", slug: "duct-area-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Pigeon Safety Nets in Bangalore</h2>
            <p>Pigeons are one of the most persistent nuisances for Bangalore apartment residents. Their droppings are acidic, damaging surfaces and creating slip hazards. Pigeon feathers and nesting materials block drains, and their droppings carry diseases including histoplasmosis and salmonellosis.</p>
            <p>Shrishti Enterprises provides heavy-duty HDPE pigeon nets that create a permanent, humane barrier to keep pigeons away from your balcony, terrace, AC unit, window ledge, and any other area of your home.</p>
          </div>
          <div>
            <h2>Why Pigeons Choose Your Home</h2>
            <p>Pigeons are attracted to sheltered spots with a flat surface — exactly what balconies and window ledges provide. Once they find a nesting spot, they return repeatedly and are very difficult to deter using spikes or gels alone. The only permanent solution is a properly installed pigeon net that physically blocks access.</p>
          </div>
          <div>
            <h2>Our Pigeon Net Materials</h2>
            <ul>
              <li><strong>HDPE knotted nets:</strong> Heavy-duty, UV-stabilised. Best for large terraces and building facades.</li>
              <li><strong>Nylon pigeon nets:</strong> Lighter, cleaner finish. Ideal for apartment balconies.</li>
              <li>All nets are UV-stabilised for 5–8 year outdoor life in Bangalore's climate.</li>
            </ul>
          </div>
          <div>
            <h2>Pigeon Net Price in Bangalore</h2>
            <ul>
              <li>Standard pigeon net (50mm mesh): ₹10–₹14/sq ft</li>
              <li>Premium pigeon net (25mm mesh): ₹14–₹18/sq ft</li>
              <li>Terrace / large area: ₹12–₹20/sq ft</li>
            </ul>
            <p>Free site inspection included. Same-day installation available across Bangalore.</p>
          </div>
        </div>
      }
    />
  );
}
