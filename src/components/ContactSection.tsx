import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-section-alt py-16 md:py-20">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">
          Contact Us
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Address 1 */}
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold text-primary">Main Office</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                <div className="text-sm text-text-body">
                  <p>Shop D, S&S Complex</p>
                  <p>D. No. 295A-3, S. R. Nagar</p>
                  <p>Andipalayam Pirivu</p>
                  <p>Tiruppur, Tamil Nadu – 641687</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
                <a href="tel:+918754011563" className="text-sm text-primary hover:underline">
                  +91 87540 11563
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
                <a href="mailto:info@tmkanishkagarments.com" className="text-sm text-primary hover:underline">
                  info@tmkanishkagarments.com
                </a>
              </div>
            </div>
          </div>

          {/* Address 2 */}
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold text-primary">Branch Office</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                <div className="text-sm text-text-body">
                  <p>SBS Complex</p>
                  <p>Vanjipalayam</p>
                  <p>Iduvampalayam</p>
                  <p>Tiruppur, Tamil Nadu – 641687</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
                <a href="tel:+918754011563" className="text-sm text-primary hover:underline">
                  +91 87540 11563
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
                <a href="mailto:info@tmkanishkagarments.com" className="text-sm text-primary hover:underline">
                  info@tmkanishkagarments.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;