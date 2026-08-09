import { Box, Leaf, MapPin, RotateCcw } from "lucide-react";

const promises = [
  { icon: MapPin, title: "Made in the UK", copy: "Designed and printed in our studio" },
  { icon: Leaf, title: "Lower-waste making", copy: "Plant-based PLA, made to order" },
  { icon: Box, title: "Ready to place", copy: "Plant, liner and pot together" },
  { icon: RotateCcw, title: "30-day promise", copy: "Simple, friendly returns" },
];

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Why shop Luna">
      <div className="site-container trust-grid">
        {promises.map(({ icon: Icon, title, copy }) => (
          <div className="trust-item" key={title}>
            <Icon size={23} strokeWidth={1.35} aria-hidden="true" />
            <div><strong>{title}</strong><span>{copy}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}
