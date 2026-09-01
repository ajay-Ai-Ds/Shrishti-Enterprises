import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Monkey Safety Nets in Bangalore | Anti-Monkey Nets",
  description: "Heavy-gauge monkey safety nets in Bangalore. Keep monkeys out of your home, terrace, and balcony. Durable and effective. Call +91 80880 47056.",
  path: "/monkey-safety-nets",
  keywords: ["monkey nets bangalore", "anti monkey net", "monkey proof net bangalore", "monkey safety net"],
});

const faqs = [
  { question: "Are monkey nets really effective?", answer: "Yes. Heavy-gauge HDPE monkey nets with 50–75mm mesh create a physical barrier that monkeys cannot break through or climb over when properly installed. They are the most effective long-term solution for monkey intrusion in Bangalore homes." },
  { question: "What strength of net is needed for monkeys?", answer: "Monkeys are strong and can weigh 5–15 kg. We use heavy-gauge knotted HDPE nets with a breaking strength of 500+ kg per linear metre. Regular bird nets are not strong enough for monkeys." },
  { question: "Do monkey nets harm monkeys?", answer: "No. Our nets are humane deterrents — monkeys cannot enter but are not harmed. They simply move away from the netted area." },
  { question: "Where are monkey nets installed?", answer: "Monkey nets are installed on balconies, terraces, windows, skylights, and around entire building perimeters. In areas like Bannerghatta Road and Yelahanka where monkeys are common, terrace nets are very popular." },
  { question: "What is the price of monkey nets in Bangalore?", answer: "Monkey nets cost ₹18–₹30 per sq ft due to the heavy-gauge material required. Contact us on +91 80880 47056 for a free site assessment and exact quote." },
];

export default function MonkeySafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Monkey Safety Nets"
      slug="monkey-safety-nets"
      heroHeadline="Monkey Safety Nets in Bangalore — Keep Your Home Monkey-Free"
      heroSub="Heavy-gauge HDPE nets designed to keep monkeys out of balconies, terraces, and homes. Strong, durable, and humane. Free inspection across Bangalore."
      imagePath="/images/monkey.webp"
      imageAlt="Monkey safety net installed on building terrace in Bangalore"
      relatedServices={[
        { title: "Bird Nets", slug: "bird-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Cricket Safety Nets", slug: "cricket-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Monkey Safety Nets in Bangalore</h2>
            <p>Monkeys are a common problem in many parts of Bangalore, particularly in areas close to forests and lakes such as Bannerghatta Road, Yelahanka, Hennur, Tumkur Road, and parts of North Bangalore. Monkeys raid homes for food, damage property, and can be aggressive when cornered.</p>
            <p>Standard bird nets or balcony safety nets are not designed to hold monkeys. Shrishti Enterprises provides specially designed heavy-gauge monkey nets that create a strong, permanent barrier.</p>
          </div>
          <div>
            <h2>Why Monkeys Are a Problem in Bangalore</h2>
            <ul>
              <li>Monkeys raid kitchens and balconies for food</li>
              <li>They steal phones, glasses, and small valuables from windows</li>
              <li>Monkey scratches and bites can transmit disease</li>
              <li>They damage furniture, plants, and electrical wires</li>
              <li>Aggressive monkeys can scare children and elderly</li>
            </ul>
          </div>
          <div>
            <h2>Our Monkey Net Specifications</h2>
            <ul>
              <li>Material: Heavy-gauge knotted HDPE</li>
              <li>Mesh size: 50–75mm</li>
              <li>Breaking strength: 500+ kg/linear metre</li>
              <li>UV-stabilised: 8–10 year outdoor life</li>
              <li>Fixing: SS304 hooks and tensioning cables for secure perimeter</li>
            </ul>
          </div>
          <div>
            <h2>Monkey Net Price in Bangalore</h2>
            <p>Due to the heavy-gauge materials required, monkey nets are priced at ₹18–₹30 per sq ft. Terrace coverage is ₹20–₹35 per sq ft. All prices include free inspection and installation.</p>
          </div>
        </div>
      }
    />
  );
}
