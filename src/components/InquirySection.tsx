import { useState } from "react";
import { toast } from "sonner";
import { MessageCircle, Phone } from "lucide-react";

const InquirySection = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Product: ${form.product}`,
      `Quantity: ${form.quantity}`,
      `Message: ${form.message}`,
    ].join("%0A");
    window.open(`https://wa.me/918754011563?text=${text}`, "_blank");
    toast.success("Redirecting to WhatsApp with your inquiry.");
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const inputClass =
    "w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <section id="inquiry" className="bg-primary py-16 md:py-20">
      <div className="container max-w-3xl">
        <h2 className="mb-2 text-2xl font-bold text-primary-foreground md:text-3xl">
          Send Us Your Requirement
        </h2>
        <p className="mb-8 text-primary-foreground/70">
          Tell us what you need. We'll respond within 24 hours with pricing and lead time.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" placeholder="Your Name *" required value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
            <input type="text" placeholder="Company Name" value={form.company} onChange={(e) => update("company", e.target.value)} className={inputClass} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
            <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <select value={form.product} onChange={(e) => update("product", e.target.value)} required className={inputClass}>
              <option value="" className="text-primary">Select Product *</option>
              <option value="Undergarments" className="text-primary">Undergarments</option>
              <option value="Sportswear" className="text-primary">Sportswear</option>
              <option value="Socks" className="text-primary">Socks</option>
              <option value="T-Shirts" className="text-primary">T-Shirts</option>
              <option value="Multiple Products" className="text-primary">Multiple Products</option>
            </select>
            <input type="text" placeholder="Quantity (e.g. 10,000 pcs)" value={form.quantity} onChange={(e) => update("quantity", e.target.value)} className={inputClass} />
          </div>
          <textarea placeholder="Additional details — fabric, design, delivery timeline..." rows={3} value={form.message} onChange={(e) => update("message", e.target.value)} className={inputClass} />
          <button type="submit" className="w-full rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 sm:w-auto">
            Submit Inquiry
          </button>
        </form>

        {/* Alternate contact */}
        <div className="mt-10 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 sm:flex-row sm:items-center">
          <span className="text-sm text-primary-foreground/60">Or reach us directly:</span>
          <a
            href="https://wa.me/918754011563?text=Hi%2C%20I%20want%20to%20discuss%20a%20bulk%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/25 px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Inquiry
          </a>
          <a
            href="tel:+918754011563"
            className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/25 px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="h-4 w-4" />
            Call +91 87540 11563
          </a>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
