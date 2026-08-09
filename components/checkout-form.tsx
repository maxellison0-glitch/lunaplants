"use client";

import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useStore } from "./store-provider";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export function CheckoutForm() {
  const { items } = useStore();

  const fetchClientSecret = useCallback(async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: items.map((item) => ({
          slug: item.slug,
          size: item.size,
          colour: item.colour,
          quantity: item.quantity,
        })),
      }),
    });

    const { clientSecret } = await response.json();
    return clientSecret;
  }, [items]);

  if (!items.length) {
    return (
      <section className="order-confirmation">
        <span className="eyebrow">Nothing here yet</span>
        <h1>Your bag is <em>empty.</em></h1>
        <Link className="button button-primary" href="/shop">Browse the collection</Link>
      </section>
    );
  }

  return (
    <div className="checkout-layout">
      <div className="checkout-form">
        <Link className="checkout-back" href="/cart"><ArrowLeft size={15} /> Return to bag</Link>
        <header><span className="eyebrow">Secure checkout</span><h1>Almost <em>home.</em></h1></header>
        <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
}
