import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact and FAQs",
  description: "Contact Terra about an order, plant care, delivery or trade enquiries. Find answers to common questions about our made-to-order plant pots.",
};

const faqs = [
  ["Does the plant arrive inside the decorative pot?", "Yes. The plant stays in a fitted, removable nursery liner inside your Terra pot. It arrives composed and ready to place, while the liner keeps watering straightforward."],
  ["How long will my order take?", "Pots are printed to order, usually within 3–5 working days. UK mainland delivery takes a further 2–3 working days. We’ll email tracking as soon as it leaves the studio."],
  ["What if my plant arrives damaged?", "Photograph the plant and packaging within 48 hours and email us. Our healthy-arrival promise means we’ll make it right with care guidance, a replacement or a refund."],
  ["Are 3D-printed pots waterproof?", "The decorative pot is designed as a cover pot rather than a direct planter. The removable nursery liner handles water and drainage, protecting both the printed pot and your surfaces."],
  ["Can I return a made-to-order pot?", "Unused pots can be returned within 30 days. Living plants are perishable, so contact us promptly if there is a quality issue and we’ll resolve it fairly."],
];

export default function ContactPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return (
    <main className="contact-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="contact-hero"><div className="site-container"><span className="eyebrow eyebrow-light">We’re here</span><h1>Let’s talk <em>plants.</em></h1><p>Questions about an order, an unhappy leaf or something altogether more ambitious? Send us a note.</p></div></section>
      <section className="contact-main"><div className="site-container contact-grid"><div className="contact-details"><span className="eyebrow">Contact Terra</span><h2>A small team,<br />with real replies.</h2><p>We answer messages Monday to Friday and usually come back within two working days.</p><div className="contact-methods"><a href="mailto:hello@lunaplants.co.uk"><Mail size={20} /><span><small>Email</small>hello@lunaplants.co.uk</span></a><div><MapPin size={20} /><span><small>Studio</small>Bristol, United Kingdom</span></div><a href="https://www.instagram.com"><MessageCircle size={20} /><span><small>Social</small>@terraplants</span></a></div></div><ContactForm /></div></section>
      <section className="faq-section" id="faq"><div className="site-container faq-layout"><div><span className="eyebrow">Useful answers</span><h2>Frequently<br /><em>asked.</em></h2><p id="delivery">Still unsure? Our team is always happy to help with delivery, sizing or plant care.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} id={index === 3 ? "care" : undefined}><summary><span>0{index + 1}</span>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    </main>
  );
}
