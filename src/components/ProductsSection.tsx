import productUndergarments from "@/assets/product-undergarments.jpg";
import productSportswear from "@/assets/product-sportswear.jpg";
import productSocks from "@/assets/product-socks.jpg";
import productTshirts from "@/assets/product-tshirts.jpg";

const products = [
  {
    name: "Undergarments",
    image: productUndergarments,
    alt: "Cotton undergarments for men and women",
    description: "Men's and women's innerwear in cotton and cotton-blend fabrics.",
    examples: "Briefs, trunks, vests, camisoles, boxer shorts",
  },
  {
    name: "Sportswear",
    image: productSportswear,
    alt: "Athletic sportswear tops and shorts",
    description: "Gym and athletic wear in dri-fit, polyester, and mesh fabrics.",
    examples: "Track pants, shorts, tank tops, sports bras, jerseys",
  },
  {
    name: "Socks",
    image: productSocks,
    alt: "Cotton socks in assorted colors",
    description: "Knitted socks in cotton, nylon, and blended yarns.",
    examples: "Ankle socks, crew socks, sports socks, school socks",
  },
  {
    name: "T-Shirts",
    image: productTshirts,
    alt: "Plain cotton t-shirts in various colors",
    description: "Plain and printed t-shirts in 100% cotton and poly-cotton.",
    examples: "Round neck, V-neck, polo, oversized, henley",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="mb-3 text-2xl font-bold text-primary md:text-3xl">
          What We Manufacture
        </h2>
        <p className="mb-10 text-text-body">
          All products are made in our Tirupur facility. Custom sizing, printing, and labelling available.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-lg border bg-card"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-primary">
                  {product.name}
                </h3>
                <p className="text-sm text-text-body">
                  {product.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium">Examples:</span> {product.examples}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
