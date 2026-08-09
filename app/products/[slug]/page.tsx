import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ProductPurchase } from "@/components/product-purchase";
import { formatPrice, getProduct, products } from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} with ${product.botanicalName}`,
    description: `${product.description} Made to order in the UK. From ${formatPrice(product.price)}.`,
    openGraph: { title: `${product.name} | Luna`, description: product.description },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: "Luna" },
    material: product.material,
    category: "Indoor plant pots with plants",
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `https://lunaplants.co.uk/products/${product.slug}`,
      seller: { "@type": "Organization", name: "Luna" },
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "38" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://lunaplants.co.uk" },
      { "@type": "ListItem", position: 2, name: "Shop", item: "https://lunaplants.co.uk/shop" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://lunaplants.co.uk/products/${product.slug}` },
    ],
  };

  return (
    <main className="product-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="site-container page-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} /><Link href="/shop">Shop</Link><ChevronRight size={13} /><span>{product.name}</span></div>
      <div className="site-container"><ProductPurchase product={product} /></div>
      <section className="product-value-section">
        <div className="site-container value-grid">
          <div><span>01</span><h2>Designed as one</h2><p>Plant and pot are paired for proportion, growth habit and the practical reality of watering.</p></div>
          <div><span>02</span><h2>Printed for you</h2><p>Your chosen combination enters our studio queue only after you order. Less storage, less waste.</p></div>
          <div><span>03</span><h2>Ready to settle in</h2><p>A removable nursery liner makes watering easy and keeps your sculptural outer pot pristine.</p></div>
        </div>
      </section>
      <section className="section related-products">
        <div className="site-container">
          <div className="section-heading compact-heading"><div><span className="eyebrow">Keep exploring</span><h2>You might also <em>grow with.</em></h2></div><Link className="text-link" href="/shop">Shop all</Link></div>
          <div className="product-grid three-column-grid">{related.map((item, index) => <ProductCard product={item} index={index} key={item.slug} />)}</div>
        </div>
      </section>
      <section className="review-section" id="reviews">
        <div className="site-container review-layout"><div><span className="eyebrow eyebrow-light">Customer note</span><span className="review-score">4.9</span><span className="stars" aria-label="Five stars">★★★★★</span><p>Based on 38 verified reviews</p></div><blockquote>“Beautiful in a way that still feels easy to live with. The pot texture catches the afternoon light, and the plant arrived in perfect condition.”<cite>— Amira K., London</cite></blockquote></div>
      </section>
    </main>
  );
}
