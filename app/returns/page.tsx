import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns, Cancellations and Refunds",
  description: "Luna Plants returns, cancellations and refunds policy. Your rights under the Consumer Contracts Regulations 2013.",
};

export default function ReturnsPage() {
  return (
    <main className="legal-page">
      <div className="site-container legal-container">
        <span className="eyebrow">Policy</span>
        <h1>Returns, Cancellations &amp; Refunds</h1>
        <p className="legal-updated">Last updated: August 2026</p>

        <section>
          <h2>1. Your right to cancel</h2>
          <p>Under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, you have the right to cancel your order within 14 days of receiving your goods, without giving a reason.</p>
          <p>To exercise this right, contact us at <a href="mailto:hello@lunaplants.co.uk">hello@lunaplants.co.uk</a> with your order number and a clear statement of your wish to cancel.</p>
        </section>

        <section>
          <h2>2. Exceptions</h2>
          <p>The right to cancel does not apply to:</p>
          <ul>
            <li><strong>Living plants:</strong> Plants are perishable goods and cannot be returned unless they arrive damaged or in poor health. See section 5 below.</li>
            <li><strong>Made-to-order pots:</strong> Where a pot has been customised to your specification, the right to cancel may not apply. Standard designs from our catalogue are not considered customised.</li>
          </ul>
        </section>

        <section>
          <h2>3. Returning a pot</h2>
          <p>Standard (non-customised) pots may be returned within 30 days of delivery provided they are unused, undamaged and in their original packaging. To start a return:</p>
          <ol>
            <li>Email <a href="mailto:hello@lunaplants.co.uk">hello@lunaplants.co.uk</a> with your order number</li>
            <li>We will confirm eligibility and provide a return address</li>
            <li>Pack the item securely and post it back to us</li>
          </ol>
          <p>Return postage is at your expense unless the item is faulty or incorrect. We recommend using a tracked service.</p>
        </section>

        <section>
          <h2>4. Refunds</h2>
          <p>Once we receive and inspect your return, we will process a refund to your original payment method within 14 days. The refund will include the original delivery charge if the return is due to our error or a faulty product.</p>
          <p>We may reduce the refund to reflect any loss in value caused by unnecessary handling beyond what is needed to establish the nature and characteristics of the goods.</p>
        </section>

        <section>
          <h2>5. Damaged or unhealthy plants</h2>
          <p>If your plant arrives damaged or in visibly poor health, contact us within 48 hours of delivery at <a href="mailto:hello@lunaplants.co.uk">hello@lunaplants.co.uk</a> with:</p>
          <ul>
            <li>Your order number</li>
            <li>Photographs of the plant and packaging</li>
          </ul>
          <p>We will offer a replacement plant, store credit or a full refund at your choice. You do not need to return the plant.</p>
        </section>

        <section>
          <h2>6. Faulty or incorrect items</h2>
          <p>If you receive an item that is faulty, damaged or not what you ordered, contact us within 48 hours. We will arrange a replacement or full refund including any return postage costs. Your statutory rights under the Consumer Rights Act 2015 are not affected.</p>
        </section>

        <section>
          <h2>7. Late or missing refunds</h2>
          <p>Refunds typically appear within 5&ndash;10 working days depending on your payment provider. If you have not received your refund after this period, check with your bank or card issuer first, then contact us at <a href="mailto:hello@lunaplants.co.uk">hello@lunaplants.co.uk</a>.</p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>For any returns or refund queries, email <a href="mailto:hello@lunaplants.co.uk">hello@lunaplants.co.uk</a> or write to Lunaplants, The Fairmont, Kitty Lane, FY4 5EG.</p>
        </section>
      </div>
    </main>
  );
}
