export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Plant care" | "Design notes" | "Studio visit";
  date: string;
  readTime: string;
  tone: "clay" | "forest" | "chalk";
  intro: string;
  sections: { heading: string; body: string }[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "choose-the-right-pot-size",
    title: "How to choose the right pot size",
    excerpt: "A calm, practical guide to giving roots the room they need—without going too big, too soon.",
    category: "Plant care",
    date: "2 August 2026",
    readTime: "5 min read",
    tone: "clay",
    intro: "A new pot should feel like a slightly roomier coat, not an empty ballroom. The right size supports healthy roots, steady watering and a plant that looks in proportion to its vessel.",
    sections: [
      { heading: "Start with the nursery pot", body: "Measure the diameter of the plastic nursery pot your plant currently lives in. For most houseplants, move up by just 2–4 cm. This gives new roots space without leaving so much wet compost that they struggle to breathe." },
      { heading: "Think about the silhouette", body: "Upright plants feel grounded in taller cylinders, while broad or trailing plants suit lower, wider forms. The practical fit comes first, but proportion is what makes the pairing feel intentional." },
      { heading: "Keep the liner", body: "Every Terra pairing keeps the plant in a removable nursery liner. You can lift it out to water and drain, then return it to the decorative pot—cleaner for shelves and kinder to roots." },
    ],
  },
  {
    slug: "why-we-print-to-order",
    title: "Why we print every pot to order",
    excerpt: "Less stock, more choice, and a visible record of how an object was made.",
    category: "Design notes",
    date: "27 July 2026",
    readTime: "4 min read",
    tone: "forest",
    intro: "3D printing lets us make slowly with a fast-moving tool. Instead of filling shelves with guesses, we make the colour, size and form you choose when you choose it.",
    sections: [
      { heading: "Made for one home", body: "Print-to-order production means we can offer considered colour choices without overproducing unpopular combinations. Your order becomes the production brief." },
      { heading: "Texture with a purpose", body: "The fine layers are not something we hide. They are the fingerprint of the process—a tactile record of a single continuous path becoming a useful object." },
      { heading: "Materials we can improve", body: "Most of our indoor pots use plant-based PLA; wetter environments call for durable PETG. We keep designs mono-material where possible so future recovery and recycling are simpler." },
    ],
  },
  {
    slug: "inside-the-terra-studio",
    title: "Inside the Terra studio",
    excerpt: "From a line on screen to a finished planter: an afternoon with our small print farm.",
    category: "Studio visit",
    date: "18 July 2026",
    readTime: "6 min read",
    tone: "chalk",
    intro: "Our studio is part workshop, part greenhouse. Printers hum along one wall, while test plants gather near the brightest windows. The two sides of Terra are always in conversation.",
    sections: [
      { heading: "A digital wheel", body: "Each form begins as a profile and a set of constraints: root space, liner size, strength and the way light should meet the surface. We refine digitally, then learn from the first physical print." },
      { heading: "The finishing bench", body: "Finished pots are checked by hand, cleaned and paired with a snug liner. Small variations in the printed grain are normal and part of the object’s character." },
      { heading: "Plants join last", body: "Plants arrive from specialist UK growers. We check leaves, roots and moisture before matching them to orders, adding a care card and packing each pairing for the journey." },
    ],
  },
];

export function getJournalPost(slug: string) {
  return journalPosts.find((post) => post.slug === slug);
}
