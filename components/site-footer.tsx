import Link from "next/link";
import { AtSign } from "lucide-react";
import { Logo } from "./logo";
import { Newsletter } from "./newsletter";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-lead">
        <div>
          <span className="eyebrow eyebrow-light">Notes from the greenhouse</span>
          <h2>Good things grow slowly.</h2>
        </div>
        <div>
          <p>Plant care, new forms and the occasional studio experiment. No clutter.</p>
          <Newsletter compact />
        </div>
      </div>
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <Logo inverse />
          <p>3D-printed pots and characterful plants, paired for modern UK homes.</p>
        </div>
        <div className="footer-links">
          <div><h3>Shop</h3><Link href="/shop">All pairings</Link><Link href="/shop?room=Desk">Small spaces</Link><Link href="/shop?sort=gift">Gifts</Link></div>
          <div><h3>Terra</h3><Link href="/about">Our story</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link></div>
          <div><h3>Help</h3><Link href="/contact#delivery">Delivery & returns</Link><Link href="/contact#care">Plant care</Link><Link href="/contact#faq">FAQs</Link></div>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} Terra Studio Ltd.</span>
        <div><Link href="/contact">Privacy</Link><Link href="/contact">Terms</Link><a href="https://www.instagram.com" aria-label="Terra on Instagram"><AtSign size={17} strokeWidth={1.4} /></a></div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">TERRA</div>
    </footer>
  );
}
