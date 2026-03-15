import { Phone, MessageCircle } from "lucide-react";

const StickyHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-display text-xl font-bold text-primary">
          TM KANISHKA GARMENTS
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+918754011563"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
          <a
            href="https://wa.me/918754011563?text=Hi%2C%20I%27m%20interested%20in%20bulk%20garment%20manufacturing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
