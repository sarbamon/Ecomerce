export const products = [
  {
    id: "m-01",
    name: "CLASSIC STRIPE JERSEY",
    category: "Football",
    price: 89,
    badge: "BEST SELLER",
    description: "A timeless striped jersey designed for maximum breathability and style. Features vertical panels and a clean rib-knit V-neck.",
    features: ["100% Recycled Polyester", "Moisture-wicking dry technology", "Premium embroidered emblem", "Athletic slim fit"],
    imageType: "stripes",
    pattern: "vertical-stripes",
    colors: [
      { name: "Monochrome", hex: "#000000" },
      { name: "Crimson Red", hex: "#b91c1c" },
      { name: "Royal Blue", hex: "#1d4ed8" },
      { name: "Forest Green", hex: "#15803d" }
    ]
  },
  {
    id: "m-02",
    name: "STEALTH BLACK JERSEY",
    category: "Basketball",
    price: 95,
    badge: "NEW ARRIVAL",
    description: "Deep matte fabric with minimalist contrasting piping. Engineered for high performance on the court, offering unrestricted movement.",
    features: ["Heavyweight mesh fabric", "High-contrast contrast trim", "Breathable side panels", "Ribbed armholes"],
    imageType: "stealth",
    pattern: "solid-black",
    colors: [
      { name: "Stealth Black", hex: "#000000" },
      { name: "Grape Purple", hex: "#581c87" },
      { name: "Amber Orange", hex: "#b45309" }
    ]
  },
  {
    id: "m-03",
    name: "RETRO MONO HOOPS",
    category: "Retro",
    price: 110,
    badge: "LIMITED EDITION",
    description: "Horizontal stripes inspired by 90s street fashion. Features an oversized silhouette and a vintage fold-over collar with single button placket.",
    features: ["Heavyweight vintage cotton blend", "Woven chest patch", "Ribbed knit cuffs", "Oversized retro fit"],
    imageType: "retro-hoops",
    pattern: "horizontal-stripes",
    colors: [
      { name: "Monochrome", hex: "#000000" },
      { name: "Ocean Teal", hex: "#0f766e" },
      { name: "Cherry Pink", hex: "#be185d" }
    ]
  },
  {
    id: "m-04",
    name: "CHEVRON PRO JERSEY",
    category: "Football",
    price: 99,
    badge: "PRO EDITION",
    description: "Features a striking white chevron on a solid base. Designed for ultimate aerodynamics and comfort during elite competitive matches.",
    features: ["Ultra-lightweight knit fabric", "Laser-cut ventilation holes", "Bonded seams to prevent chafing", "Embraced minimalist crest"],
    imageType: "chevron",
    pattern: "chevron-black",
    colors: [
      { name: "Ink Black", hex: "#000000" },
      { name: "Scarlet Red", hex: "#dc2626" },
      { name: "Sky Blue", hex: "#0284c7" }
    ]
  },
  {
    id: "m-05",
    name: "CORE WHITE PLAYER JERSEY",
    category: "Custom",
    price: 85,
    badge: "FULLY CUSTOMIZABLE",
    description: "Pure white canvas jersey waiting for your custom touch. Add your name, select your favorite number, and choose your print style in high-definition.",
    features: ["Premium matte fabric", "Fully customized heat-press vinyl", "Double-stitched hems", "Regular fit"],
    imageType: "core-white",
    pattern: "solid-white",
    colors: [
      { name: "Clean White", hex: "#ffffff" },
      { name: "Neon Yellow", hex: "#facc15" },
      { name: "Soft Pink", hex: "#fda4af" }
    ]
  },
  {
    id: "m-06",
    name: "GRID PATTERN RETRO",
    category: "Retro",
    price: 105,
    badge: "VINTAGE COLLECTION",
    description: "Features a modern grid design inspired by architectural grids. Minimalist, geometric, and styled to transition seamlessly from match to lifestylewear.",
    features: ["Premium honeycomb jacquard knit", "Subtle grid aesthetic", "Reflective safety piping", "Comfort rib cuffs"],
    imageType: "grid",
    pattern: "fine-grid",
    colors: [
      { name: "Architect Gray", hex: "#71717a" },
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Off White", hex: "#fafafa" }
    ]
  }
];

export const categories = ["All", "Football", "Basketball", "Retro", "Custom"];
