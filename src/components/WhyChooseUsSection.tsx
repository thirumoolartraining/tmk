import { CheckCircle } from "lucide-react";

const reasons = [
  "10+ years of manufacturing experience in Tirupur",
  "End-to-end production: fabric sourcing to finished goods",
  "Competitive pricing for bulk orders",
  "Strict quality control at every stage",
  "On-time delivery track record",
  "Custom designs, prints, and private labelling",
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <h2 className="mb-8 text-2xl font-bold text-primary md:text-3xl">
          Why Choose TM KANISHKA GARMENTS
        </h2>
        <ul className="space-y-4">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-text-body">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
