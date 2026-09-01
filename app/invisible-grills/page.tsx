import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "SS316 Invisible Grills Bangalore | Transparent Balcony & Window Security",
  description: "Modern marine-grade SS316 invisible grills for balconies and windows in Bangalore. Unobstructed panoramic views with 350+ kg tensile security. Free site inspection.",
  path: "/invisible-grills",
  keywords: ["invisible grills bangalore", "ss316 stainless steel grills", "transparent window safety grill", "invisible balcony grill price"],
});

const faqs = [
  { question: "What materials make up Shrishti Enterprises invisible grills?", answer: "Our invisible grills are constructed from high-tensile SS316 marine-grade stainless steel cables (2.5mm to 3.5mm diameter) coated with a transparent DuPont nylon membrane to eliminate oxidation and protect bare hands." },
  { question: "What is the typical price range for invisible grill installation in Bangalore?", answer: "Invisible grill fitment in Bangalore ranges from ₹150 to ₹250 per square foot depending on cable thickness, horizontal vs. vertical orientation, and masonry track structural setup. Contact us for an exact free on-site quote." },
  { question: "How does emergency evacuation work with invisible grills?", answer: "In case of fire or building emergency, invisible grills can be severed within seconds using standard heavy-duty wire cutters, providing far superior emergency egress compared to immovable iron bars." },
  { question: "Are invisible grills permitted by Bangalore apartment associations (RWAs)?", answer: "Yes! Because invisible grills are frameless and do not alter the uniform exterior facade of modern high-rise towers, almost all major Bangalore builder societies and RWAs approve their installation." },
];

export default function InvisibleGrillsPage() {
  return (
    <ServicePageTemplate
      title="Invisible Grills"
      slug="invisible-grills"
      heroHeadline="Sleek Marine-Grade SS316 Invisible Grills in Bangalore"
      heroSub="Preserve your unobstructed skyline view while securing your balcony and windows with 350+ kg tensile stainless steel cable systems."
      imagePath="/images/invisiblegrill.webp"
      imageAlt="Architectural SS316 invisible grill installation on Bangalore apartment window"
      relatedServices={[
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Children Safety Nets", slug: "children-safety-nets" },
        { title: "Bird Nets", slug: "bird-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Architectural High-Tensile Invisible Grills for Bangalore Homes</h2>
            <p>Modern residential architecture in Bangalore features floor-to-ceiling windows and sweeping balcony vistas. Conventional wrought iron and mild steel grilles feel restrictive, obstruct natural light, and rust over time. Shrishti Enterprises invisible grills deliver an ultra-sleek, minimalist security solution that preserves 100% of your view.</p>
            <p>Constructed from marine-grade 316 stainless steel tensile cables anchored into rigid aluminum structural tracks, our invisible grills provide certified child safety and pet protection without the claustrophobic feeling of traditional cage bars.</p>
          </div>

          <div>
            <h2>Key Advantages of Invisible Grills</h2>
            <ul>
              <li><strong>Unmatched Optical Clarity:</strong> From 5 feet away, the ultra-slim 2.5mm cables become nearly imperceptible against the sky.</li>
              <li><strong>Heavy Load Resistance:</strong> Each strand is rated to withstand over 350 kg tensile force, exceeding child safety standards.</li>
              <li><strong>Zero Rust &amp; Zero Maintenance:</strong> SS316 stainless steel is impervious to Bangalore's monsoons and requires no periodic repainting.</li>
              <li><strong>RWA &amp; Society Compliant:</strong> Accepted by leading gated communities (Prestige, Sobha, Brigade, Godrej, Mantri) across Bangalore.</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
