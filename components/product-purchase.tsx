"use client";

import { Check, Heart, Minus, Plus, Ruler, Truck } from "lucide-react";
import { useState } from "react";
import { formatPrice, type Product } from "@/lib/catalog";
import { ProductArt } from "./product-art";
import { useStore } from "./store-provider";

export function ProductPurchase({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [colour, setColour] = useState(product.colours[0]);
  const [quantity, setQuantity] = useState(1);
  const [view, setView] = useState(0);
  const [favourite, setFavourite] = useState(false);
  const { addItem } = useStore();

  return (
    <div className="product-detail-grid">
      <div className="product-gallery">
        <div className={`product-main-view gallery-view-${view}`}>
          {product.badge && <span className="product-badge">{product.badge}</span>}
          <ProductArt shape={product.shape} palette={product.palette} colour={colour.hex} priorityLabel={`${product.name} with ${product.botanicalName} in ${colour.name}`} />
          <span className="gallery-view-label">0{view + 1} / 03</span>
        </div>
        <div className="gallery-thumbnails">
          {[0, 1, 2].map((item) => (
            <button className={view === item ? "is-selected" : ""} key={item} onClick={() => setView(item)} aria-label={`View product image ${item + 1}`}>
              <ProductArt shape={product.shape} palette={item === 1 ? "chalk" : product.palette} colour={item === 2 ? undefined : colour.hex} />
            </button>
          ))}
        </div>
      </div>

      <div className="product-purchase-panel">
        <div className="product-rating"><span aria-label="Five stars">★★★★★</span><a href="#reviews">4.9 (38 reviews)</a></div>
        <span className="product-botanical">{product.botanicalName}</span>
        <h1>{product.name}</h1>
        <p className="product-strapline">{product.strapline}</p>
        <div className="detail-price">{product.previousPrice && <s>{formatPrice(product.previousPrice)}</s>}<strong>{formatPrice(size.price)}</strong><span>plant + pot</span></div>
        <p className="product-description">{product.description}</p>

        <fieldset className="variant-fieldset">
          <div className="variant-label"><legend>1. Choose a size</legend><button type="button"><Ruler size={15} /> Size guide</button></div>
          <div className="size-options">
            {product.sizes.map((option) => (
              <button className={size.label === option.label ? "is-selected" : ""} key={option.label} onClick={() => setSize(option)}>
                <span>{option.label}</span><small>{option.diameter}</small><strong>{formatPrice(option.price)}</strong>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="variant-fieldset">
          <div className="variant-label"><legend>2. Choose a pot colour</legend><span>{colour.name}</span></div>
          <div className="large-swatches">
            {product.colours.map((option) => (
              <button className={colour.name === option.name ? "is-selected" : ""} key={option.name} onClick={() => setColour(option)} aria-label={option.name} title={option.name}>
                <span style={{ background: option.hex }} />
              </button>
            ))}
          </div>
        </fieldset>

        <div className="purchase-actions">
          <div className="quantity-control large-quantity" aria-label="Quantity">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={15} /></button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus size={15} /></button>
          </div>
          <button className="button button-primary add-to-bag" onClick={() => addItem(product, { size: size.label, colour: colour.name, quantity })}>Add to bag · {formatPrice(size.price * quantity)}</button>
          <button className={`favourite-button ${favourite ? "is-selected" : ""}`} onClick={() => setFavourite((value) => !value)} aria-label={favourite ? "Remove from favourites" : "Add to favourites"}><Heart size={20} fill={favourite ? "currentColor" : "none"} /></button>
        </div>

        <div className="purchase-promises">
          <span><Truck size={18} /> {product.leadTime}</span>
          <span><Check size={18} /> Healthy arrival guarantee</span>
        </div>

        <div className="detail-accordions">
          <details open><summary>The pairing</summary><p>{product.longDescription}</p></details>
          <details><summary>What’s included</summary><ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></details>
          <details><summary>Dimensions & materials</summary><p>{product.dimensions}. Printed in {product.material}.</p></details>
          <details><summary>Plant care</summary><p>{product.care}</p></details>
        </div>
      </div>
    </div>
  );
}
