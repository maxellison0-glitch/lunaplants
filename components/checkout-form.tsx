"use client";

import Link from "next/link";
import { ArrowLeft, Check, CreditCard, LockKeyhole } from "lucide-react";
import { FormEvent, useState } from "react";
import { formatPrice } from "@/lib/catalog";
import { ProductArt } from "./product-art";
import { useStore } from "./store-provider";

export function CheckoutForm() {
  const { items, subtotal, clearCart } = useStore();
  const [submitted, setSubmitted] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);
  const delivery = subtotal >= 50 || subtotal === 0 ? 0 : 4.95;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <section className="order-confirmation">
        <span className="confirmation-mark"><Check size={34} strokeWidth={1.3} /></span>
        <span className="eyebrow">Order LUNA-2608 confirmed</span>
        <h1>A new thing is <em>growing.</em></h1>
        <p>Thank you. We’ve received your order and reserved its place in the print queue. A confirmation will be sent to your email.</p>
        <div><span>Next step</span><strong>We print your pot</strong><small>Estimated dispatch in 3–5 working days</small></div>
        <Link className="button button-primary" href="/journal">Read the plant-care journal</Link>
      </section>
    );
  }

  return (
    <div className="checkout-layout">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <Link className="checkout-back" href="/cart"><ArrowLeft size={15} /> Return to bag</Link>
        <header><span className="eyebrow">Secure checkout</span><h1>Almost <em>home.</em></h1></header>
        <section className="checkout-section">
          <div className="checkout-section-title"><span>01</span><div><h2>Contact</h2><p>For your order confirmation and delivery updates.</p></div></div>
          <div className="form-grid"><label className="field full-field"><span>Email address</span><input required type="email" autoComplete="email" placeholder="you@example.com" /></label><label className="checkbox-field full-field"><input type="checkbox" /><span>Send me occasional Luna notes and new releases</span></label></div>
        </section>
        <section className="checkout-section">
          <div className="checkout-section-title"><span>02</span><div><h2>Delivery</h2><p>UK mainland delivery in 2–3 days after dispatch.</p></div></div>
          <div className="form-grid">
            <label className="field"><span>First name</span><input required autoComplete="given-name" /></label><label className="field"><span>Last name</span><input required autoComplete="family-name" /></label>
            <label className="field full-field"><span>Address</span><input required autoComplete="street-address" placeholder="House number and street" /></label>
            <label className="field"><span>Town or city</span><input required autoComplete="address-level2" /></label><label className="field"><span>Postcode</span><input required autoComplete="postal-code" /></label>
            <label className="field full-field"><span>Delivery note <small>(optional)</small></span><input placeholder="Safe place, access details…" /></label>
          </div>
          <label className="delivery-option"><input type="radio" name="delivery" defaultChecked /><span><strong>Standard UK delivery</strong><small>2–3 working days after dispatch</small></span><b>{delivery ? formatPrice(delivery) : "Free"}</b></label>
        </section>
        <section className="checkout-section">
          <div className="checkout-section-title"><span>03</span><div><h2>Payment</h2><p>Encrypted and securely processed.</p></div></div>
          <div className="payment-card">
            <div className="payment-card-head"><span><CreditCard size={18} /> Card</span><span className="card-brands">VISA · MC · AMEX</span></div>
            <label className="field full-field"><span>Card number</span><input required inputMode="numeric" autoComplete="cc-number" placeholder="1234 1234 1234 1234" pattern="[0-9 ]{15,19}" /></label>
            <div className="form-grid"><label className="field"><span>Expiry</span><input required inputMode="numeric" autoComplete="cc-exp" placeholder="MM / YY" /></label><label className="field"><span>CVC</span><input required inputMode="numeric" autoComplete="cc-csc" placeholder="123" /></label></div>
          </div>
        </section>
        <button className="button button-primary checkout-submit" type="submit" disabled={!items.length}><LockKeyhole size={16} /> {items.length ? `Place order · ${formatPrice(subtotal + delivery)}` : "Your bag is empty"}</button>
        <p className="checkout-terms">By placing your order you agree to Luna’s terms and privacy policy. This demo checkout does not capture payment.</p>
      </form>

      <aside className="checkout-summary">
        <span className="eyebrow">Your order</span><h2>{items.length} {items.length === 1 ? "pairing" : "pairings"}</h2>
        <div className="checkout-items">
          {items.map((item) => <div className="checkout-item" key={item.id}><div><ProductArt shape={item.shape} palette={item.palette} colour={item.colourHex} /><span>{item.quantity}</span></div><p><strong>{item.name}</strong><small>{item.size} · {item.colour}</small></p><b>{formatPrice(item.price * item.quantity)}</b></div>)}
        </div>
        <button className="promo-toggle" onClick={() => setPromoOpen((open) => !open)}>{promoOpen ? "Hide" : "Add"} a gift card or discount code</button>
        {promoOpen && <div className="promo-form"><input aria-label="Promo code" placeholder="Code" /><button type="button">Apply</button></div>}
        <div className="checkout-totals"><p><span>Subtotal</span><b>{formatPrice(subtotal)}</b></p><p><span>Delivery</span><b>{delivery ? formatPrice(delivery) : "Free"}</b></p><p className="checkout-grand-total"><span>Total <small>GBP</small></span><b>{formatPrice(subtotal + delivery)}</b></p></div>
        <div className="checkout-note"><LockKeyhole size={17} /><span><strong>Secure checkout</strong><small>256-bit encrypted connection</small></span></div>
      </aside>
    </div>
  );
}
