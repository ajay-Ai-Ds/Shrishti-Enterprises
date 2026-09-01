import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Sports Netting Solutions Bangalore | Turf, Football & Badminton Nets",
  description: "Heavy-duty perimeter and goal sports nets for schools, sports complexes, and residential turfs across Bangalore by Shrishti Enterprises.",
  path: "/sports-nets",
  keywords: ["sports nets bangalore", "football turf netting", "badminton court net", "box cricket boundary net"],
});

const faqs = [
  { question: "What sports netting systems does Shrishti Enterprises install?", answer: "We install boundary and ceiling nets for football turfs, cricket practice cages, badminton courts, tennis courts, and school sports grounds." },
];

export default function SportsNetsPage() {
  return (
    <ServicePageTemplate
      title="Sports Nets"
      slug="sports-nets"
      heroHeadline="Commercial &amp; Residential Sports Netting in Bangalore"
      heroSub="Durable boundary netting, turf surrounds, and court dividers engineered for impact absorption and weather endurance."
      imagePath="/images/sports.jpg"
      imageAlt="Sports boundary net installation on Bangalore turf"
      relatedServices={[
        { title: "Cricket Safety Nets", slug: "cricket-safety-nets" },
        { title: "Construction Safety Nets", slug: "construction-safety-nets" },
        { title: "Monkey Safety Nets", slug: "monkey-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Professional Sports Netting Enclosures in Bangalore</h2>
            <p>From rooftop sports turfs to school playgrounds, Shrishti Enterprises delivers durable, UV-treated sports netting that withstands powerful ball impacts season after season.</p>
          </div>
        </div>
      }
    />
  );
}
