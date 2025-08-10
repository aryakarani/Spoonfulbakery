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
    image: "https://picsum.photos/id/1080/800/600",
  },
  {
    id: "red-velvet-cupcakes",
    name: "Red Velvet Cupcakes (6)",
    description: "Signature cream cheese frosting and sprinkles.",
    price: 6500,
    image: "https://picsum.photos/id/375/800/600",
  },
  {
    id: "artisan-sourdough",
    name: "Artisan Sourdough",
    description: "Slow-fermented loaf with a crackly crust and airy crumb.",
    price: 3500,
    image: "https://picsum.photos/id/433/800/600",
  },
  {
    id: "butter-croissants",
    name: "Butter Croissants (4)",
    description: "French-style laminated pastry, flaky and buttery.",
    price: 4800,
    image: "https://picsum.photos/id/212/800/600",
  },
  {
    id: "strawberry-tart",
    name: "Fresh Strawberry Tart",
    description: "Vanilla pastry cream, shortcrust base, and ripe strawberries.",
    price: 7000,
    image: "https://picsum.photos/id/102/800/600",
  },
  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies (10)",
    description: "Chewy center, crisp edges, Belgian chocolate chunks.",
    price: 3800,
    image: "https://picsum.photos/id/430/800/600",
  },
];

export default products;