import { buildMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata = buildMetadata({
  title: "Safety Nets & Invisible Grills in Whitefield Bangalore | Shrishti",
  description: "Certified balcony safety net and SS316 invisible grill installations across Whitefield, ITPL, Kadugodi & Varthur. Free same-day site visit.",
  path: "/safety-nets-whitefield",
  keywords: ["safety nets whitefield", "balcony nets whitefield bangalore", "invisible grills whitefield", "pigeon nets itpl"],
});

const faqs = [
  { question: "Do you offer safety net installation in Whitefield, Bangalore?", answer: "Yes! Shrishti Enterprises provides complete safety netting and invisible grill fitments across all Whitefield areas, including ITPL, Varthur Road, Kadugodi, Hope Farm, Nallurhalli, and Brookefield." },
  { question: "How quickly can your technicians visit a Whitefield apartment?", answer: "We have dedicated field units based in East Bangalore, allowing us to attend to Whitefield site visits within 1 to 2 hours of booking." },
];

export default function WhitefieldPage() {
  return (
    <LocationPageTemplate
      area="Whitefield"
      slug="safety-nets-whitefield"
      imageSrc="/images/balcony.webp"
      imageAlt="Certified balcony safety netting in Whitefield high-rise apartment"
      faqs={faqs}
      content={
        <div className="space-y-8">
          <div>
            <h2>High-Rise Safety Net &amp; Invisible Grill Services in Whitefield</h2>
            <p>Whitefield is one of Bangalore's premier technology corridors, characterized by extensive gated communities and luxury high-rise developments like Prestige Shantiniketan, Godrej United, and Brigade Cosmopolis. With expansive balconies on upper floors, reliable child fall protection and pigeon deterrence are essential for residents.</p>
            <p>Shrishti Enterprises delivers certified copolymer balcony netting, marine-grade SS316 invisible grills, and anti-pigeon screens across all Whitefield sectors with prompt same-day service and authentic warranty coverage.</p>
          </div>
          <div>
            <h2>Popular Safety Fitments for Whitefield Residences</h2>
            <ul>
              <li><strong>SS316 Invisible Grills:</strong> The top aesthetic choice for Whitefield's luxury high-rises, offering unblocked views with 350+ kg strength.</li>
              <li><strong>Balcony Anti-Fall Nets:</strong> UV-stabilized nylon netting to keep toddlers and domestic pets safe.</li>
              <li><strong>Pigeon Exclusion Mesh:</strong> Keeps AC ledges and open utility balconies sanitary and clean.</li>
              <li><strong>Ceiling Cloth Dryers:</strong> Space-saving stainless steel pulley racks for modern compact utility balconies.</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
