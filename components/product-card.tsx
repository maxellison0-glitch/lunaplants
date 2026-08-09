"use client";

import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { formatPrice, type Product } from "@/lib/catalog";
import { ProductArt } from "./product-art";
import { useStore } from "./store-provider";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [colour, setColour] = useState(product.colours[0]);
  const [added, setAdded] = useState(false);
  const { addItem } = useStore();

  function quickAdd() {
    addItem(product, { colour: colour.name });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <article className="product-card" style={{ "--card-index": index } as React.CSSProperties}>
      <div className="product-card-visual">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
          <ProductArt shape={product.shape} palette={product.palette} colour={colour.hex} priorityLabel={`${product.name}, ${product.botanicalName}, in a ${colour.name} pot`} />
        </Link>
        <button className="quick-add" onClick={quickAdd} aria-label={`Quick add ${product.name}`}>
          <Plus size={17} strokeWidth={1.7} /> {added ? "Added" : "Quick add"}
        </button>
      </div>
      <div className="product-card-info">
        <div>
          <span className="product-botanical">{product.botanicalName}</span>
          <Link href={`/products/${product.slug}`} className="product-title-link">
            <h3>{product.name}</h3><ArrowUpRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="product-price">
          {product.previousPrice && <s>{formatPrice(product.previousPrice)}</s>}
          <strong>from {formatPrice(product.price)}</strong>
        </div>
      </div>
      <div className="swatch-list" aria-label="Available pot colours">
        {product.colours.map((option) => (
          <button
            className={colour.name === option.name ? "is-selected" : ""}
            key={option.name}
            style={{ background: option.hex }}
            onClick={() => setColour(option)}
            aria-label={`Show ${option.name}`}
            title={option.name}
          />
        ))}
        <span>{colour.name}</span>
      </div>
    </article>
  );
}
