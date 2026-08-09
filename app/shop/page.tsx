import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ShopCatalog } from "@/components/shop-catalog";

export const metadata: Metadata = {
  title: "Shop plants with 3D-printed pots",
  description: "Explore Luna's complete collection of houseplants paired with modern, made-to-order 3D-printed pots. UK delivery.",
};

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ q?: string; room?: string; collection?: string }> }) {
  const query = await searchParams;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://lunaplants.co.uk" },
      { "@type": "ListItem", position: 2, name: "Shop", item: "https://lunaplants.co.uk/shop" },
    ],
  };

  return (
    <main className="shop-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="site-container page-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} /><span>Shop</span></div>
      <header className="site-container shop-hero">
        <span className="eyebrow">The complete edit</span>
        <h1>Plants, <em>properly dressed.</em></h1>
        <p>Each pairing arrives ready to place: a healthy plant, a fitted nursery liner and a pot printed in the colour you choose.</p>
      </header>
      <div className="site-container"><ShopCatalog initialQuery={query.q} initialRoom={query.room} initialCollection={query.collection} /></div>
    </main>
  );
}
