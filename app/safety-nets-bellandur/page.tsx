import { buildMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata = buildMetadata({
  title: "Safety Nets & Bird Nets in Bellandur Bangalore | Shrishti",
  description: "Effective bird exclusion netting and high-tensile balcony safety nets for high-rises along Bellandur Lake & ORR corridor. Free quote.",
  path: "/safety-nets-bellandur",
  keywords: ["safety nets bellandur", "bird nets bellandur bangalore", "pigeon safety nets orr"],
});

const faqs = [
  { question: "Why is bird netting especially important around Bellandur?", answer: "Proximity to Bellandur lake attracts extensive bird populations. Our UV-stabilized anti-bird nets create a humane, permanent barrier preventing pigeon roosting and mess." },
];

export default function BellandurPage() {
  return (
    <LocationPageTemplate
      area="Bellandur"
      slug="safety-nets-bellandur"
      imageSrc="/images/ductarea1.webp"
      imageAlt="Bird netting and duct protection in Bellandur high-rise"
      faqs={faqs}
      content={
        <div className="space-y-8">
          <div>
            <h2>Specialized Bird &amp; Balcony Safety Netting in Bellandur</h2>
            <p>High-rise apartments along the Bellandur Outer Ring Road corridor frequently face heavy pigeon nesting. Shrishti Enterprises delivers durable, weather-resistant bird exclusion nets and balcony fall-protection solutions tailored for lake-adjacent communities.</p>
          </div>
        </div>
      }
    />
  );
}
