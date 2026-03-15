import { Factory, Users, ShieldCheck, MapPin, Handshake } from "lucide-react";

const capabilities = [
  {
    icon: Factory,
    title: "Bulk Production",
    text: "Our facility handles 50,000+ units per month across cutting, stitching, and finishing — all under one roof.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    text: "100+ trained workers with 10+ years of garment production experience. Low rejection rates, consistent output.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Checks",
    text: "Every batch goes through fabric inspection, in-line checks, and final audit before packing. No shortcuts.",
  },
  {
    icon: MapPin,
    title: "Tirupur Advantage",
    text: "Located in India's largest knitwear cluster. Direct access to yarn suppliers, dye houses, and logistics — keeping costs low.",
  },
  {
    icon: Handshake,
    title: "Brand & Wholesale Ready",
    text: "We work with private labels, D2C brands, and wholesalers. Custom labels, packaging, and size sets included.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="bg-section-alt py-16 md:py-20">
      <div className="container">
        <h2 className="mb-3 text-2xl font-bold text-primary md:text-3xl">
          How We Work
        </h2>
        <p className="mb-10 text-text-body">
          End-to-end garment manufacturing from our Tirupur facility.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border bg-card p-5 space-y-2"
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 shrink-0 text-accent" />
                <h3 className="font-semibold text-primary">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-body">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
