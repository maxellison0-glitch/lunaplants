import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Leaf, Recycle, ScanLine } from "lucide-react";
import { ProductArt } from "@/components/product-art";

export const metadata: Metadata = {
  title: "Our story and process",
  description: "Meet Luna: a UK studio pairing modern 3D-printed plant pots with characterful houseplants, made to order with less waste.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="site-container about-hero-grid">
          <div><span className="eyebrow">Our story / Est. 2026</span><h1>We make pots<br />for <em>living with.</em></h1><p>Luna sits where digital craft meets the unruly optimism of plants. We design the object and choose the living thing as one composition.</p></div>
          <div className="about-hero-art"><ProductArt shape="ribbed" palette="moss" priorityLabel="Snake plant in a forest-green Luna Ribbed Cylinder" /><span>Form 03 / Ribbed Cylinder</span></div>
        </div>
      </section>
      <section className="manifesto-section">
        <div className="site-container manifesto-grid"><span className="manifesto-number">001</span><div><span className="eyebrow">The idea</span><h2>Between the pot that’s everywhere and the one you’re afraid to touch, there should be something <em>better.</em></h2><div className="manifesto-copy"><p>We wanted planters with enough presence to shape a room, but none of the preciousness. Objects that are expressive, useful and made in colours people actually want to live with.</p><p>3D printing lets us keep changing, keep learning and make only what is needed. Plants keep us humble. Put the two together and a more interesting kind of homeware emerges.</p></div></div></div>
      </section>
      <section className="principles-section">
        <div className="site-container"><div className="section-kicker-row"><span className="eyebrow eyebrow-light">What guides us</span><span>Three working principles</span></div><div className="principles-grid">
          <article><ScanLine size={28} strokeWidth={1.2} /><span>01 / Precision</span><h3>Design for the process</h3><p>We let print lines, layer changes and geometric constraints become part of the visual language.</p></article>
          <article><Leaf size={28} strokeWidth={1.2} /><span>02 / Life</span><h3>Respect the plant</h3><p>Every pairing begins with roots, light and growth habit—not a decorative afterthought.</p></article>
          <article><Recycle size={28} strokeWidth={1.2} /><span>03 / Restraint</span><h3>Make what is wanted</h3><p>Print-to-order production keeps our stock light and leaves room for colour, choice and iteration.</p></article>
        </div></div>
      </section>
      <section className="about-process-section">
        <div className="site-container about-process-grid"><div className="about-process-art"><div className="print-path" aria-hidden="true"><span /><span /><span /><span /></div><small>One continuous path,<br />thousands of considered layers.</small></div><div><span className="eyebrow">The making</span><h2>From a line<br />to a <em>living object.</em></h2><ol><li><span>01</span><div><h3>Drawn in three dimensions</h3><p>Each form is modelled around real liner sizes, root space and the strength it needs in use.</p></div></li><li><span>02</span><div><h3>Printed one layer at a time</h3><p>Material is placed only where needed, building texture and structure together.</p></div></li><li><span>03</span><div><h3>Finished and planted by hand</h3><p>We inspect, clean and pair every pot before packing it for a safe journey.</p></div></li></ol></div></div>
      </section>
      <section className="about-cta"><div className="site-container"><span className="eyebrow">Ready when you are</span><h2>Find something<br /><em>worth growing.</em></h2><Link className="button button-primary" href="/shop">Shop the collection <ArrowRight size={16} /></Link></div></section>
    </main>
  );
}
