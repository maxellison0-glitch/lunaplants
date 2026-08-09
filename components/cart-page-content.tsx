"use client";

import Link from "next/link";
import { Minus, Plus, ShieldCheck, Trash2, Truck } from "lucide-react";
import { formatPrice } from "@/lib/catalog";
import { ProductArt } from "./product-art";
import { useStore } from "./store-provider";

export function CartPageContent() {
  const { items, subtotal, updateQuantity, removeItem } = useStore();
  const delivery = subtotal >= 50 || subtotal === 0 ? 0 : 4.95;

  if (!items.length) {
    return (
      <div className="cart-empty-state"><span>0 items / plenty of room</span><h2>Your bag feels a little <em>bare.</em></h2><p>Pair a sculptural pot with a plant chosen to thrive in it.</p><Link className="button button-primary" href="/shop">Find your pairing</Link></div>
    );
  }

  return (
    <div className="cart-layout">
      <div className="cart-list">
        {items.map((item) => (
          <article className="cart-line" key={item.id}>
            <Link href={`/products/${item.slug}`} className="cart-line-visual"><ProductArt shape={item.shape} palette={item.palette} colour={item.colourHex} /></Link>
            <div className="cart-line-info">
              <div><Link href={`/products/${item.slug}`}><h2>{item.name}</h2></Link><p>{item.size} · {item.colour}</p><span>Made to order</span></div>
              <div className="cart-line-controls">
                <div className="quantity-control"><button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity"><Minus size={13} /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity"><Plus size={13} /></button></div>
                <strong>{formatPrice(item.price * item.quantity)}</strong>
                <button className="remove-item" onClick={() => removeItem(item.id)}><Trash2 size={13} /> Remove</button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <aside className="order-summary">
        <span className="eyebrow">Order summary</span>
        <h2>In your bag</h2>
        <div className="summary-lines"><p><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></p><p><span>UK delivery</span><strong>{delivery ? formatPrice(delivery) : "Free"}</strong></p></div>
        {subtotal < 50 && <div className="delivery-progress"><p>You’re {formatPrice(50 - subtotal)} away from free delivery.</p><span><i style={{ width: `${Math.min(100, (subtotal / 50) * 100)}%` }} /></span></div>}
        <div className="summary-total"><span>Total</span><strong>{formatPrice(subtotal + delivery)}</strong></div>
        <Link className="button button-primary button-wide" href="/checkout">Continue to checkout</Link>
        <div className="summary-promises"><span><ShieldCheck size={17} /> Secure checkout</span><span><Truck size={17} /> Healthy arrival promise</span></div>
      </aside>
    </div>
  );
}
