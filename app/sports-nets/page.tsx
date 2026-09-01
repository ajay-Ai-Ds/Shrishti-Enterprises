import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Sports Nets in Bangalore | Cricket, Football & Multi-Sport Nets",
  description: "Sports net installation in Bangalore. Cricket nets, football nets, badminton nets for homes, schools, and commercial facilities. Call +91 80880 47056.",
  path: "/sports-nets",
  keywords: ["sports nets bangalore", "cricket net bangalore", "football net installation", "sports net installation bangalore"],
});

const faqs = [
  { question: "What types of sports nets do you install in Bangalore?", answer: "We install cricket practice nets, football goal nets, badminton court nets, basketball backstop nets, terrace protection nets, and multi-sport perimeter nets for homes, apartments, schools, and commercial facilities." },
  { question: "What is the price of cricket nets in Bangalore?", answer: "Cricket practice net installations in Bangalore cost ₹20–₹40 per sq ft depending on net grade, frame type, and dimensions. Call us on +91 80880 47056 for a free site assessment." },
  { question: "Do you install sports nets in apartment terraces?", answer: "Yes. Apartment terrace sports nets are popular in Bangalore for cricket practice, badminton, and general ball-stop purposes. We design custom solutions for terrace dimensions." },
  { question: "What material are your sports nets made from?", answer: "We use HDPE knotted and knotless nets for sports applications. Cricket practice nets use 25–40mm mesh, while ball-stop perimeter nets typically use 50–75mm mesh." },
];

export default function SportsNetsPage() {
  return (
    <ServicePageTemplate
      title="Sports Nets"
      slug="sports-nets"
      heroHeadline="Sports Nets in Bangalore — Cricket, Football, Badminton & More"
      heroSub="Professional sports net installation for homes, apartments, schools, and sports facilities. Cricket nets, football nets, and multi-sport solutions. Call for free quote."
      imagePath="/images/sports.jpg"
      imageAlt="Sports safety net installation in Bangalore"
      relatedServices={[
        { title: "Cricket Safety Nets", slug: "cricket-safety-nets" },
        { title: "Children Safety Nets", slug: "children-safety-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Sports Nets in Bangalore</h2>
            <p>Shrishti Enterprises provides professional sports net installation for residential, educational, and commercial clients across Bangalore. Whether you need a cricket practice net in your apartment terrace, a football goal net for your school, or a ball-stop perimeter net around a sports court, we have the right solution.</p>
          </div>
          <div>
            <h2>Sports Nets We Install</h2>
            <ul>
              <li><strong>Cricket practice nets:</strong> Full-length batting cage nets for terrace, garden, or indoor practice. Available in PP, HDPE, and nylon grades.</li>
              <li><strong>Football goal nets:</strong> Standard 5-a-side and 11-a-side goal nets in PP knotted twine.</li>
              <li><strong>Badminton court nets:</strong> Standard-height badminton nets in cotton and nylon.</li>
              <li><strong>Basketball backstop nets:</strong> Court perimeter nets to prevent balls from leaving the court.</li>
              <li><strong>Terrace ball-stop nets:</strong> Custom-sized perimeter nets to contain balls on apartment terraces during cricket or football practice.</li>
              <li><strong>Multi-sport perimeter nets:</strong> High-tensile perimeter nets for full sports facilities.</li>
            </ul>
          </div>
          <div>
            <h2>Sports Net Price in Bangalore</h2>
            <ul>
              <li>Cricket practice nets: ₹20–₹40/sq ft</li>
              <li>Football goal nets: ₹500–₹2000 per goal (size-dependent)</li>
              <li>Terrace ball-stop net: ₹18–₹30/sq ft</li>
              <li>Perimeter sports net: ₹20–₹35/sq ft</li>
            </ul>
            <p>All prices include design, materials, and installation. Free site assessment across Bangalore.</p>
          </div>
        </div>
      }
    />
  );
}
