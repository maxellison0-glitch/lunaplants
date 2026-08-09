import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delivery Policy",
  description: "Delivery information for Luna Plants orders, including timescales, shipping costs and what to do if something goes wrong.",
};

export default function DeliveryPage() {
  return (
    <main className="legal-page">
      <div className="site-container legal-container">
        <span className="eyebrow">Policy</span>
        <h1>Delivery Policy</h1>
        <p className="legal-updated">Last updated: August 2026</p>

        <section>
          <h2>1. Where we deliver</h2>
          <p>We currently deliver to mainland United Kingdom addresses only. We do not ship internationally at this time.</p>
        </section>

        <section>
          <h2>2. Made-to-order production</h2>
          <p>Our pots are 3D-printed to order. Production typically takes 3&ndash;5 working days before dispatch. We will email you when your order ships.</p>
        </section>

        <section>
          <h2>3. Delivery timescales</h2>
          <p>Once dispatched, standard UK delivery takes 2&ndash;3 working days. Total time from order to delivery is typically 5&ndash;8 working days.</p>
          <p>These timescales are estimates and not guaranteed. Delays may occur due to high demand, carrier issues or circumstances beyond our control. We will contact you if there is a significant delay.</p>
        </section>

        <section>
          <h2>4. Shipping costs</h2>
          <ul>
            <li><strong>Orders of &pound;50 or more:</strong> Free standard UK delivery</li>
            <li><strong>Orders under &pound;50:</strong> &pound;4.95 standard UK delivery</li>
          </ul>
        </section>

        <section>
          <h2>5. Delivery address</h2>
          <p>Please ensure your delivery address is correct at checkout. We cannot be held responsible for orders delivered to an incorrect address provided by the customer. If you need to change your delivery address after placing an order, contact us as soon as possible at <a href="mailto:hello@lunaplants.co.uk">hello@lunaplants.co.uk</a>. Changes may not be possible once an order has been dispatched.</p>
        </section>

        <section>
          <h2>6. Failed delivery</h2>
          <p>If delivery is attempted and you are not available, the carrier will leave a card with instructions for redelivery or collection. If a parcel is returned to us as undeliverable, we will contact you to arrange redelivery. Additional shipping costs may apply.</p>
        </section>

        <section>
          <h2>7. Damaged or missing items</h2>
          <p>Please inspect your order on arrival. If anything is damaged, missing or incorrect, contact us within 48 hours at <a href="mailto:hello@lunaplants.co.uk">hello@lunaplants.co.uk</a> with photographs of the item and packaging. We will arrange a replacement or refund as set out in our <Link href="/returns">Returns Policy</Link>.</p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>For any delivery enquiries, email <a href="mailto:hello@lunaplants.co.uk">hello@lunaplants.co.uk</a>.</p>
        </section>
      </div>
    </main>
  );
}
