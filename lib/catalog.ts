export type PotColour = {
  name: string;
  hex: string;
};

export type PotSize = {
  label: string;
  diameter: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  botanicalName: string;
  strapline: string;
  description: string;
  longDescription: string;
  price: number;
  previousPrice?: number;
  badge?: string;
  shape: "round" | "hex" | "ribbed" | "wave" | "mini";
  palette: "clay" | "moss" | "chalk" | "fig" | "ochre";
  material: "PLA" | "PETG";
  light: "Low light" | "Bright indirect" | "Flexible";
  room: "Living room" | "Bedroom" | "Desk" | "Kitchen";
  sizes: PotSize[];
  colours: PotColour[];
  features: string[];
  dimensions: string;
  leadTime: string;
  care: string;
};

const standardColours: PotColour[] = [
  { name: "Terracotta", hex: "#b95635" },
  { name: "Chalk", hex: "#e7dfcf" },
  { name: "Forest", hex: "#28483a" },
  { name: "Charcoal", hex: "#363633" },
];

export const products: Product[] = [
  {
    slug: "classic-round",
    name: "The Classic Round",
    botanicalName: "Monstera deliciosa",
    strapline: "A soft silhouette for statement leaves.",
    description:
      "Our modern take on the everyday planter, paired with a young Swiss cheese plant and finished in your chosen colour.",
    longDescription:
      "The Classic Round is quietly architectural: broad at the shoulder, softly tapered at the base and printed with a tactile horizontal grain. Every pot is made to order in our UK studio, then paired with a nursery-grown Monstera selected for shape and vigour.",
    price: 32,
    badge: "Bestseller",
    shape: "round",
    palette: "clay",
    material: "PLA",
    light: "Bright indirect",
    room: "Living room",
    sizes: [
      { label: "Small", diameter: "12 cm", price: 32 },
      { label: "Medium", diameter: "16 cm", price: 42 },
      { label: "Large", diameter: "20 cm", price: 54 },
    ],
    colours: standardColours,
    features: ["Pot, plant and liner included", "Made from plant-based PLA", "Drainage-free inner nursery pot"],
    dimensions: "12–20 cm diameter · 13–21 cm high",
    leadTime: "Printed and dispatched in 3–5 working days",
    care: "Water when the top 3 cm of soil feels dry. Keep in bright, indirect light.",
  },
  {
    slug: "geometric-hex",
    name: "The Geometric Hex",
    botanicalName: "Calathea orbifolia",
    strapline: "Sharp geometry, softly striped foliage.",
    description:
      "A faceted six-sided planter balanced by the painterly leaves of a Calathea Orbifolia.",
    longDescription:
      "The Geometric Hex celebrates the precision of digital making without losing its human touch. Each plane catches the light differently, creating a subtle shift in tone throughout the day. The striped Calathea brings movement and softness to the composition.",
    price: 38,
    badge: "New",
    shape: "hex",
    palette: "moss",
    material: "PLA",
    light: "Bright indirect",
    room: "Bedroom",
    sizes: [
      { label: "Small", diameter: "13 cm", price: 38 },
      { label: "Medium", diameter: "17 cm", price: 48 },
    ],
    colours: [
      { name: "Forest", hex: "#28483a" },
      { name: "Terracotta", hex: "#b95635" },
      { name: "Oat", hex: "#c6b89d" },
    ],
    features: ["Plant and removable liner included", "Crisp faceted profile", "Small-batch UK production"],
    dimensions: "13–17 cm diameter · 14–18 cm high",
    leadTime: "Printed and dispatched in 3–5 working days",
    care: "Keep the compost lightly moist and away from cold draughts. Loves gentle humidity.",
  },
  {
    slug: "ribbed-cylinder",
    name: "The Ribbed Cylinder",
    botanicalName: "Sansevieria trifasciata",
    strapline: "Vertical rhythm for a famously easy plant.",
    description:
      "Fine ribs give this minimal cylinder a furniture-like finish, paired with an almost indestructible snake plant.",
    longDescription:
      "Designed for shelves, consoles and awkward corners, the Ribbed Cylinder has a calm, linear texture that echoes the upright Sansevieria. It is our most forgiving pairing—consider it a beautifully designed first plant.",
    price: 35,
    shape: "ribbed",
    palette: "chalk",
    material: "PETG",
    light: "Flexible",
    room: "Bedroom",
    sizes: [
      { label: "Small", diameter: "12 cm", price: 35 },
      { label: "Medium", diameter: "15 cm", price: 43 },
      { label: "Tall", diameter: "18 cm", price: 55 },
    ],
    colours: standardColours,
    features: ["Low-maintenance plant included", "Water-resistant PETG", "Fine fluted texture"],
    dimensions: "12–18 cm diameter · 16–26 cm high",
    leadTime: "Printed and dispatched in 3–5 working days",
    care: "Let the soil dry completely between waterings. Happy in low light, best in filtered sun.",
  },
  {
    slug: "wave-pot",
    name: "The Wave Pot",
    botanicalName: "Epipremnum aureum",
    strapline: "A playful ripple made for trailing vines.",
    description:
      "A sculptural wave wraps around this planter, with a golden pothos ready to tumble over the edge.",
    longDescription:
      "The Wave Pot turns a continuous printed line into a soft, tactile sculpture. Its generous lip gives trailing stems space to fall, while the pothos brings a flash of acid green. Place it high and let it grow into the room.",
    price: 40,
    badge: "Studio pick",
    shape: "wave",
    palette: "fig",
    material: "PLA",
    light: "Flexible",
    room: "Kitchen",
    sizes: [
      { label: "Small", diameter: "13 cm", price: 40 },
      { label: "Medium", diameter: "17 cm", price: 49 },
    ],
    colours: [
      { name: "Aubergine", hex: "#5a3d49" },
      { name: "Terracotta", hex: "#b95635" },
      { name: "Chalk", hex: "#e7dfcf" },
      { name: "Forest", hex: "#28483a" },
    ],
    features: ["Trailing pothos included", "Sculptural wave texture", "Plant-based PLA"],
    dimensions: "13–17 cm diameter · 14–18 cm high",
    leadTime: "Printed and dispatched in 3–5 working days",
    care: "Water once the top half of the compost dries. Trim long vines to encourage bushier growth.",
  },
  {
    slug: "mini-succulent-set",
    name: "The Mini Succulent Set",
    botanicalName: "Assorted succulents",
    strapline: "Three tiny landscapes for smaller spaces.",
    description:
      "A trio of miniature pots, each printed in a complementary earth tone and planted with a characterful succulent.",
    longDescription:
      "Three forms, three colours and three easy-going plants. The Mini Succulent Set is designed as a ready-made composition for desks, ledges and bedside tables. The exact plants vary with the season, so every set has its own personality.",
    price: 29,
    previousPrice: 34,
    badge: "Giftable",
    shape: "mini",
    palette: "ochre",
    material: "PLA",
    light: "Bright indirect",
    room: "Desk",
    sizes: [{ label: "Set of three", diameter: "7 cm each", price: 29 }],
    colours: [
      { name: "Earth trio", hex: "#b77a45" },
      { name: "Neutral trio", hex: "#cfc4ae" },
    ],
    features: ["Three pots and plants included", "Gift-ready packaging", "Seasonal succulent selection"],
    dimensions: "Each pot 7 cm diameter · 6–8 cm high",
    leadTime: "Printed and dispatched in 2–4 working days",
    care: "Give them the brightest spot you have and water sparingly—only when the soil is fully dry.",
  },
];

export const collections = [
  { name: "For small spaces", caption: "Compact forms, considered impact.", filter: "Desk", palette: "clay" },
  { name: "Low-light heroes", caption: "Good design for trickier corners.", filter: "Low light", palette: "forest" },
  { name: "The gift edit", caption: "Thoughtful, living, ready to give.", filter: "Gift", palette: "chalk" },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
  }).format(price);
}
