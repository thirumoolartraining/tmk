import heroImage from "@/assets/hero-factory.jpg";
import { Phone, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-primary">
      <div className="container grid gap-8 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="space-y-6">
          <h1 className="text-3xl font-extrabold leading-tight text-primary-foreground md:text-4xl lg:text-5xl">
            TM KANISHKA GARMENTS
          </h1>
          <p className="text-lg leading-relaxed text-primary-foreground/80">
            Bulk garment manufacturer based in Tiruppur. We produce undergarments, sportswear, socks, and t-shirts for brands, wholesalers, and export buyers. Factory-direct pricing with 10+ years experience.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#inquiry"
              className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Get Bulk Quote
            </a>
            <a
              href="https://wa.me/918754011563?text=Hi%2C%20I%27m%20interested%20in%20bulk%20garment%20manufacturing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Inquiry
            </a>
            <a
              href="tel:+918754011563"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src={heroImage}
            alt="TM KANISHKA GARMENTS factory floor in Tiruppur"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
