import { buildMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata = buildMetadata({
  title: "Safety Nets & Invisible Grills in Electronic City Bangalore",
  description: "Certified safety net and invisible grill installations across Electronic City Phase 1, Phase 2 & Neeladri Road. Free on-site consultation.",
  path: "/safety-nets-electronic-city",
  keywords: ["safety nets electronic city", "balcony nets electronic city phase 1", "invisible grills electronic city"],
});

const faqs = [
  { question: "Do you serve all apartment societies in Electronic City?", answer: "Yes, we install safety nets and invisible grills across Phase 1, Phase 2, Neeladri Road, Huskur, Bommasandra, and Singasandra." },
];

export default function ElectronicCityPage() {
  return (
    <LocationPageTemplate
      area="Electronic City"
      slug="safety-nets-electronic-city"
      imageSrc="/images/invisiblegrill.webp"
      imageAlt="Invisible grill installation in Electronic City apartment"
      faqs={faqs}
      content={
        <div className="space-y-8">
          <div>
            <h2>Engineered Safety Nets for Electronic City Residences</h2>
            <p>Home to major tech parks and family-oriented residential enclaves, Electronic City's high-rise communities require reliable, certified balcony netting and modern invisible grills.</p>
            <p>Shrishti Enterprises delivers prompt, professional installations that comply fully with gated society RWA guidelines while safeguarding your loved ones.</p>
          </div>
        </div>
      }
    />
  );
}
