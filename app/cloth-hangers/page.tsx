import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Cloth Hangers in Bangalore | Ceiling Cloth Drying Hangers",
  description: "Ceiling cloth drying hanger installation in Bangalore. Space-saving pulley and fixed systems for balconies and utility areas. Free inspection. Call +91 80880 47056.",
  path: "/cloth-hangers",
  keywords: ["cloth hangers bangalore", "ceiling cloth hanger bangalore", "cloth drying hanger", "laundry hanger bangalore"],
});

const faqs = [
  { question: "What are ceiling cloth hangers?", answer: "Ceiling cloth hangers (also called ceiling cloth drying hangers) are systems mounted on the ceiling of a balcony or utility room that allow you to dry clothes vertically. They use a pulley mechanism or fixed rods to hold 3–6 rods of clothes at ceiling level, freeing up floor space." },
  { question: "How much do ceiling cloth hangers cost in Bangalore?", answer: "Ceiling cloth hangers cost ₹800–₹2,500 per hanger unit in Bangalore depending on rod count, material, and system type. Installation takes under 2 hours. Call us on +91 80880 47056." },
  { question: "How much weight can cloth hangers hold?", answer: "Our ceiling cloth hangers are rated for 15–25 kg per unit depending on the model. This is sufficient for a full load of wet laundry." },
  { question: "Do you install ceiling cloth hangers in rental apartments?", answer: "Yes. Our installation uses ceiling hooks that require minimal drilling. We fill holes cleanly and our installation does not violate standard rental agreements." },
  { question: "What is the difference between pulley and fixed cloth hangers?", answer: "Pulley systems let you lower the rods to load/unload clothes and pull them up to the ceiling for drying — ideal for high ceilings. Fixed systems have rods at a fixed height — simpler and more affordable." },
];

export default function ClothHangersPage() {
  return (
    <ServicePageTemplate
      title="Cloth Hangers"
      slug="cloth-hangers"
      heroHeadline="Ceiling Cloth Hangers in Bangalore — Save Space, Dry Better"
      heroSub="Space-saving ceiling-mounted cloth drying hanger systems for balconies and utility areas. Pulley and fixed systems available. Fast installation across Bangalore."
      imagePath="/images/clothhanger.jpg"
      imageAlt="Ceiling cloth hanger system installed in Bangalore balcony"
      relatedServices={[
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Bird Nets", slug: "bird-nets" },
        { title: "Children Safety Nets", slug: "children-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Ceiling Cloth Hangers in Bangalore</h2>
            <p>Bangalore's apartments are known for their compact balconies and limited utility space. A ceiling cloth hanger is a simple but brilliant solution that uses the otherwise wasted ceiling space to dry your laundry — freeing up the balcony floor for other uses.</p>
            <p>Shrishti Enterprises installs premium ceiling cloth hangers across Bangalore. Our hangers are strong, rust-proof, and built to last. Installation takes less than 2 hours and leaves your ceiling clean.</p>
          </div>
          <div>
            <h2>Types of Ceiling Cloth Hangers</h2>
            <h3>1. Pulley-System Hangers</h3>
            <p>The most popular type. A rope-and-pulley system lets you lower 3–6 rods to hanging height to load clothes, then pull them up near the ceiling. Ideal for high-ceiling balconies and utility rooms. Price: ₹1,500–₹2,500 per unit.</p>
            <h3>2. Fixed-Rod Hangers</h3>
            <p>Simple aluminium or steel rods mounted at a fixed height on ceiling brackets. Easier to install and more affordable. Ideal for standard-height ceilings (8–9 feet). Price: ₹800–₹1,500 per unit.</p>
            <h3>3. Wall-Mounted Folding Hangers</h3>
            <p>Fold flat against the wall when not in use. Ideal for very compact balconies. Price: ₹600–₹1,200 per unit.</p>
          </div>
          <div>
            <h2>Benefits of Ceiling Cloth Hangers</h2>
            <ul>
              <li>Saves valuable balcony floor space</li>
              <li>Better airflow at ceiling level = faster drying</li>
              <li>Clothes are out of reach of children and pets</li>
              <li>Clean, organised look compared to floor-level racks</li>
              <li>Ideal for apartments with small balconies</li>
            </ul>
          </div>
          <div>
            <h2>Cloth Hanger Installation in Bangalore</h2>
            <p>We install ceiling cloth hangers across all Bangalore areas. Our technician visits your home, recommends the best system for your ceiling height and balcony dimensions, and installs it the same day. Most installations take under 2 hours.</p>
          </div>
        </div>
      }
    />
  );
}
