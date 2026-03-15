import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-bold text-primary">
              TM KANISHKA GARMENTS
            </h3>
            <p className="text-sm text-text-body">
              Bulk garment manufacturer based in Tiruppur, India. Serving brands, wholesalers, and export buyers since 2014.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-primary">Products</h4>
            <ul className="space-y-1 text-sm text-text-body">
              <li>Undergarments</li>
              <li>Sportswear</li>
              <li>Socks</li>
              <li>T-Shirts</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-primary">Main Office</h4>
            <div className="space-y-1 text-sm text-text-body">
              <p>Shop D, S&S Complex</p>
              <p>S. R. Nagar, Andipalayam Pirivu</p>
              <p>Tiruppur, TN – 641687</p>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-primary">Branch Office</h4>
            <div className="space-y-1 text-sm text-text-body">
              <p>SBS Complex, Vanjipalayam</p>
              <p>Iduvampalayam</p>
              <p>Tiruppur, TN – 641687</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 text-sm text-text-body sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+918754011563" className="hover:text-primary">+91 87540 11563</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:info@tmkanishkagarments.com" className="hover:text-primary">info@tmkanishkagarments.com</a>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} TM KANISHKA GARMENTS. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
