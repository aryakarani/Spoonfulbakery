type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: "classic-chocolate-cake",
    name: "Classic Chocolate Cake",
    description: "Moist cocoa sponge layered with dark chocolate ganache.",
    price: 12000,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "red-velvet-cupcakes",
    name: "Red Velvet Cupcakes (6)",
    description: "Signature cream cheese frosting and sprinkles.",
    price: 6500,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "artisan-sourdough",
    name: "Artisan Sourdough",
    description: "Slow-fermented loaf with a crackly crust and airy crumb.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "butter-croissants",
    name: "Butter Croissants (4)",
    description: "French-style laminated pastry, flaky and buttery.",
    price: 4800,
    image: "https://images.unsplash.com/photo-1589308078054-832efb6d06db?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "strawberry-tart",
    name: "Fresh Strawberry Tart",
    description: "Vanilla pastry cream, shortcrust base, and ripe strawberries.",
    price: 7000,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies (10)",
    description: "Chewy center, crisp edges, Belgian chocolate chunks.",
    price: 3800,
    image: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?q=80&w=1600&auto=format&fit=crop",
  },
];

export default products;