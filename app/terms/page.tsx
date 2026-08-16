import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for purchasing from Luna Plants, a UK-based online retailer of 3D-printed plant pots and houseplants.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="site-container legal-container">
        <span className="eyebrow">Legal</span>
        <h1>Terms &amp; Conditions</h1>
        <p className="legal-updated">Last updated: August 2026</p>

        <section>
          <h2>1. About us</h2>
          <p>Luna Plants (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a trading name of Lunaplants. Our registered address is The Fairmont, Kitty Lane, FY4 5EG, United Kingdom. You can reach us at <a href="mailto:hello@lunaplants.co.uk">hello@lunaplants.co.uk</a>.</p>
        </section>

        <section>
          <h2>2. These terms</h2>
          <p>By placing an order through lunaplants.co.uk you agree to be bound by these terms together with our <Link href="/privacy">Privacy Notice</Link>, <Link href="/delivery">Delivery Policy</Link>, <Link href="/returns">Returns Policy</Link> and <Link href="/cookies">Cookie Policy</Link>. We may update these terms from time to time; the version in force at the date of your order applies.</p>
        </section>

        <section>
          <h2>3. Orders and pricing</h2>
          <p>All prices are in pounds sterling (GBP) and include VAT where applicable. We reserve the right to change prices at any time, but changes will not affect orders already accepted.</p>
          <p>An order is accepted when we send a confirmation email. Until that point, we may decline or cancel an order for any reason, including stock availability or pricing errors.</p>
        </section>

        <section>
          <h2>4. Products</h2>
          <p>Our pots are 3D-printed to order. Colours and textures may vary slightly between units due to the nature of the printing process. Product images are representative; minor variations are not defects.</p>
          <p>Living plants are natural products. Size, shape and foliage may differ from photographs. We select healthy specimens and pack them with care, but seasonal variation is normal.</p>
        </section>

        <section>
          <h2>5. Payment</h2>
          <p>Payment is taken at checkout via Stripe. We accept major credit and debit cards. All transactions are processed securely; we do not store your card details.</p>
        </section>

        <section>
          <h2>6. Delivery</h2>
          <p>Delivery terms are set out in our <Link href="/delivery">Delivery Policy</Link>. Risk passes to you on delivery. Title passes when we receive full payment.</p>
        </section>

        <section>
          <h2>7. Returns, cancellations and refunds</h2>
          <p>Your cancellation and return rights are set out in our <Link href="/returns">Returns, Cancellations and Refunds Policy</Link>.</p>
        </section>

        <section>
          <h2>8. Limitation of liability</h2>
          <p>Nothing in these terms limits our liability for death or personal injury caused by our negligence, fraud or any other liability that cannot be excluded by law.</p>
          <p>Subject to the above, our total liability for any claim arising from or related to an order shall not exceed the amount you paid for that order.</p>
        </section>

        <section>
          <h2>9. Intellectual property</h2>
          <p>All content on this site, including designs, images, text and the Luna brand, is owned by us or our licensors. You may not reproduce, distribute or use any content without our written permission.</p>
        </section>

        <section>
          <h2>10. Governing law</h2>
          <p>These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales, without prejudice to your statutory rights.</p>
        </section>

        <section>
          <h2>11. Contact</h2>
          <p>Questions about these terms? Email us at <a href="mailto:hello@lunaplants.co.uk">hello@lunaplants.co.uk</a> or write to Lunaplants, The Fairmont, Kitty Lane, FY4 5EG.</p>
        </section>
      </div>
    </main>
  );
}
