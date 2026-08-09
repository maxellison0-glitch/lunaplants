import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Quote } from "lucide-react";
import { collections, products } from "@/lib/catalog";
import { journalPosts } from "@/lib/journal";
import { Newsletter } from "@/components/newsletter";
import { ProductArt } from "@/components/product-art";
import { ProductCard } from "@/components/product-card";
import { TrustBar } from "@/components/trust-bar";

export const metadata: Metadata = {
  title: "3D-printed plant pots, paired with plants",
  description:
    "Shop modern 3D-printed plant pots with hand-selected indoor plants. Designed and made to order in the UK by Terra.",
};

export default function HomePage() {
  const organisationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Terra",
    url: "https://lunaplants.co.uk",
    description: "Modern 3D-printed pots paired with houseplants, made to order in the UK.",
    areaServed: "GB",
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} />
      <section className="hero-section">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span>Collection 01</span> · Made in Britain</span>
            <h1>Rooted in <em>design.</em></h1>
            <p>Living plants, paired with sculptural pots that we print for you. Nothing sitting on a shelf. Nothing quite like yours.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/shop">Shop the collection <ArrowRight size={17} /></Link>
              <Link className="text-link" href="/about">Discover our process</Link>
            </div>
            <a className="scroll-cue" href="#featured"><ArrowDown size={18} /> Scroll to grow</a>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-number" aria-hidden="true">01</div>
            <ProductArt shape="wave" palette="clay" priorityLabel="Golden pothos in Terra's sculptural terracotta Wave Pot" />
            <div className="hero-caption">
              <span>The Wave Pot</span>
              <span>Terracotta · PLA</span>
            </div>
            <span className="hero-orbit-text">DESIGNED TO GROW · PRINTED TO ORDER · </span>
          </div>
        </div>
        <div className="hero-marquee" aria-hidden="true"><span>WHERE EARTH MEETS ART · WHERE EARTH MEETS ART · WHERE EARTH MEETS ART ·</span></div>
      </section>

      <TrustBar />

      <section className="section section-featured" id="featured">
        <div className="site-container">
          <div className="section-heading">
            <div><span className="eyebrow">The first collection</span><h2>Form, foliage,<br /><em>perfectly paired.</em></h2></div>
            <div className="section-heading-aside"><p>We choose plants for their character, then design each vessel around the way they grow.</p><Link className="text-link" href="/shop">Shop all pairings <ArrowRight size={15} /></Link></div>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((product, index) => <ProductCard product={product} index={index} key={product.slug} />)}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="site-container process-layout">
          <div className="process-intro">
            <span className="eyebrow eyebrow-light">How Terra works</span>
            <h2>Handcrafted by machine.<br /><em>Inspired by nature.</em></h2>
            <p>Digital precision meets the unpredictability of a living thing. We think that contrast makes both more beautiful.</p>
          </div>
          <ol className="process-steps">
            <li><span>01</span><div><h3>Choose your pairing</h3><p>Find a form and plant that suit your room, light and way of living.</p></div></li>
            <li><span>02</span><div><h3>Make it yours</h3><p>Select the pot size and earth-inspired colour that feels at home.</p></div></li>
            <li><span>03</span><div><h3>We print & plant</h3><p>Your pot is made to order, checked by hand and paired with a healthy plant.</p></div></li>
          </ol>
        </div>
        <div className="process-ticker" aria-hidden="true"><span>DRAWN → SLICED → PRINTED → FINISHED → PLANTED → PACKED →</span></div>
      </section>

      <section className="section collection-section">
        <div className="site-container">
          <div className="section-kicker-row"><span className="eyebrow">Shop by mood</span><span>Three easy places to begin</span></div>
          <div className="collection-grid">
            {collections.map((collection, index) => (
              <Link className={`collection-card collection-${collection.palette}`} href={`/shop?collection=${encodeURIComponent(collection.filter)}`} key={collection.name}>
                <span className="collection-index">0{index + 1}</span>
                <div className="collection-art" aria-hidden="true"><span /><span /><span /></div>
                <div><h3>{collection.name}</h3><p>{collection.caption}</p><span className="circle-arrow"><ArrowRight size={18} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-story">
        <div className="studio-image-panel">
          <div className="studio-grid-lines" aria-hidden="true" />
          <div className="studio-pot-stack" aria-hidden="true"><span /><span /><span /></div>
          <span className="studio-note">Small-batch / UK / Since 2026</span>
        </div>
        <div className="studio-copy-panel">
          <span className="eyebrow">Our point of view</span>
          <h2>Objects for living.<br />Made with <em>less waste.</em></h2>
          <p>We started Terra because most plant pots are either mass-produced and forgettable, or beautiful but hard to live with. 3D printing gives us another path: considered forms, produced only when someone wants them.</p>
          <ul>
            <li><Check size={16} /> Plant-based and durable materials</li>
            <li><Check size={16} /> No speculative overproduction</li>
            <li><Check size={16} /> Parts designed to separate and reuse</li>
          </ul>
          <Link className="button button-outline" href="/about">Step inside the studio</Link>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="site-container testimonial-inner">
          <Quote size={28} strokeWidth={1.1} aria-hidden="true" />
          <blockquote>“It arrived looking less like a delivery and more like a tiny piece of set design. Even the plant had main-character energy.”</blockquote>
          <div><span className="stars" aria-label="Five stars">★★★★★</span><cite>Jess M. · Bristol</cite></div>
        </div>
      </section>

      <section className="section journal-preview">
        <div className="site-container">
          <div className="section-heading compact-heading">
            <div><span className="eyebrow">The Terra journal</span><h2>Things worth <em>growing.</em></h2></div>
            <Link className="text-link" href="/journal">Read all stories <ArrowRight size={15} /></Link>
          </div>
          <div className="journal-grid">
            {journalPosts.map((post, index) => (
              <article className="journal-card" key={post.slug}>
                <Link className={`journal-art journal-${post.tone}`} href={`/journal/${post.slug}`} aria-label={`Read ${post.title}`}>
                  <span className="journal-number">0{index + 1}</span><span className="journal-plant" aria-hidden="true" />
                </Link>
                <div className="journal-meta"><span>{post.category}</span><span>{post.readTime}</span></div>
                <h3><Link href={`/journal/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="site-container newsletter-layout">
          <div><span className="eyebrow">Put down roots</span><h2>10% off your first <em>living object.</em></h2></div>
          <div><p>Join us for plant notes, new colour drops and beautifully useful ideas for greener rooms.</p><Newsletter /><small>By subscribing, you agree to our privacy policy. Unsubscribe any time.</small></div>
        </div>
      </section>
    </main>
  );
}
