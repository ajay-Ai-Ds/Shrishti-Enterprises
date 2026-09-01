import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Bird Nets in Bangalore | Anti Bird Net Installation",
  description: "Professional bird net installation in Bangalore. Durable anti-bird nets for balconies, windows, and open areas. Humane, effective bird control. Call +91 80880 47056.",
  path: "/bird-nets",
  keywords: ["bird nets bangalore", "anti bird net bangalore", "bird net installation", "bird control nets bangalore"],
});

const faqs = [
  { question: "What are bird nets and how do they work?", answer: "Bird nets are fine-mesh nets made from UV-stabilised HDPE or nylon, installed over balconies, windows, courtyards, and open areas. They create a physical barrier that prevents birds from entering or roosting in protected spaces." },
  { question: "Are bird nets harmful to birds?", answer: "No. Our bird nets are designed to humanely deter birds — they act purely as a physical barrier. Birds are not trapped or harmed. They simply cannot enter netted areas and move elsewhere." },
  { question: "What is the difference between bird nets and pigeon nets?", answer: "Pigeon nets are a heavier-gauge variant of bird nets with smaller mesh (typically 25–50mm) designed specifically for larger birds like pigeons. Standard bird nets work for sparrows, mynas, and small birds. We recommend pigeon nets for pigeon-specific problems." },
  { question: "How long do bird nets last?", answer: "Our UV-stabilised HDPE bird nets last 5–8 years in Bangalore's climate. They are resistant to rain, UV radiation, and temperature variation. We provide a 1-year installation warranty." },
  { question: "What is the price of bird nets in Bangalore?", answer: "Bird net prices in Bangalore range from ₹8 to ₹15 per square foot depending on mesh size, material grade, and installation area. Call us on +91 80880 47056 for a free site inspection and quote." },
];

export default function BirdNetsPage() {
  return (
    <ServicePageTemplate
      title="Bird Nets"
      slug="bird-nets"
      heroHeadline="Bird Nets in Bangalore — Keep Birds Out, Stay Clean"
      heroSub="Professional anti-bird net installation for balconies, windows, terraces, and open courtyards. Humane, durable, and affordable. Free inspection across Bangalore."
      imagePath="/images/antibirdnet.jpg"
      imageAlt="Anti bird net installed on balcony in Bangalore"
      relatedServices={[
        { title: "Pigeon Safety Nets", slug: "pigeon-safety-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Duct Area Safety Nets", slug: "duct-area-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Bird Nets in Bangalore</h2>
            <p>Bird problems are among the most common complaints of apartment residents in Bangalore. Birds nesting on balconies, window ledges, and AC units cause noise, mess, and health hazards from droppings and feathers. Bird nets from Shrishti Enterprises offer a permanent, humane, and effective solution.</p>
            <p>Our anti-bird nets are made from UV-stabilised HDPE — a material that resists Bangalore's monsoons, summer heat, and strong winds for 5–8 years without degrading.</p>
          </div>
          <div>
            <h2>Common Bird Problems in Bangalore</h2>
            <ul>
              <li>Pigeons nesting on balconies and AC units</li>
              <li>Sparrows and mynas building nests in window frames</li>
              <li>Bird droppings on vehicles, furniture, and flooring</li>
              <li>Noise from birds in the morning and evening</li>
              <li>Feathers and nesting material blocking drains</li>
              <li>Allergies from bird dander and droppings</li>
            </ul>
          </div>
          <div>
            <h2>Bird Net Mesh Sizes Explained</h2>
            <ul>
              <li><strong>15–25mm mesh:</strong> For small birds (sparrows, mynas). Very fine mesh.</li>
              <li><strong>25–50mm mesh:</strong> For medium birds (crows, pigeons). Most common for Bangalore apartments.</li>
              <li><strong>50–75mm mesh:</strong> For large open areas and courtyards.</li>
            </ul>
          </div>
          <div>
            <h2>Bird Net Price in Bangalore</h2>
            <p>Bird net installation prices in Bangalore:</p>
            <ul>
              <li>Standard HDPE bird net (25mm mesh): ₹8–₹12/sq ft</li>
              <li>Premium HDPE bird net (15mm mesh): ₹12–₹15/sq ft</li>
              <li>Large area / terrace nets: ₹10–₹18/sq ft (varies by height access)</li>
            </ul>
            <p>All prices include materials and installation. We provide a free site inspection before quoting.</p>
          </div>
          <div>
            <h2>Areas We Serve for Bird Net Installation</h2>
            <p>We install bird nets across all Bangalore areas including Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, Marathahalli, Sarjapur Road, Bellandur, Jayanagar, and all other residential areas.</p>
          </div>
        </div>
      }
    />
  );
}
