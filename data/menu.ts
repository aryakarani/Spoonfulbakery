export type MenuSizePrice = {
  size: string;
  price: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  prices: MenuSizePrice[];
  image: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "jars",
    title: "Jar Menu",
    subtitle: "Premium desserts in jars - perfect for any occasion",
    items: [
      {
        id: "vegan-panna-cotta",
        name: "Vegan Panna Cotta",
        description:
          "Coconut based panna cotta, with lime marmalade and coconut crumble",
        prices: [
          { size: "Solo Cup", price: 175 },
          { size: "Cheat Treat", price: 225 },
          { size: "Dessert for 2", price: 425 },
          { size: "Party of 4", price: 475 },
        ],
        image: "/images/jars/vegan-panna-cotta.jpg",
      },
      {
        id: "lemon-panna-cotta",
        name: "Lemon Panna Cotta",
        description:
          "Zesty Lemon Panna Cotta, with fresh strawberry compote, topped up with vanilla crumble",
        prices: [
          { size: "Solo Cup", price: 100 },
          { size: "Cheat Treat", price: 150 },
          { size: "Dessert for 2", price: 275 },
          { size: "Party of 4", price: 350 },
        ],
        image: "/images/jars/lemon-panna-cotta.jpg",
      },
      {
        id: "lemon-pistachio-mascarpone-mousse",
        name: "Lemon Pistachio Mascarpone Mousse",
        description:
          "Lemon Mascarpone mousse, with pistachio sponge and a nutty pistachio crumble",
        prices: [
          { size: "Solo Cup", price: 125 },
          { size: "Cheat Treat", price: 175 },
          { size: "Dessert for 2", price: 325 },
          { size: "Party of 4", price: 400 },
        ],
        image: "/images/jars/lemon-pistachio-mousse.jpg",
      },
      {
        id: "russian-honey-cake",
        name: "Russian Honey Cake",
        description:
          "Honey discs layered with a cream cheese chantilly topped up with a honey crumble",
        prices: [
          { size: "Solo Cup", price: 100 },
          { size: "Cheat Treat", price: 175 },
          { size: "Dessert for 2", price: 300 },
          { size: "Party of 4", price: 375 },
        ],
        image: "/images/jars/russian-honey-cake.jpg",
      },
      {
        id: "banoffee",
        name: "Banoffee",
        description:
          "Chocolate Crumble, with dulce de leche, layered with banana slices, and a layer of mascarpone chantilly",
        prices: [
          { size: "Solo Cup", price: 125 },
          { size: "Cheat Treat", price: 175 },
          { size: "Dessert for 2", price: 325 },
          { size: "Party of 4", price: 400 },
        ],
        image: "/images/jars/banoffee.jpg",
      },
      {
        id: "nutella-tub-cake",
        name: "Nutella Tub Cake",
        description:
          "Chocolate sponge, hazelnut crumble, nutella layer and topped with nutella chantilly",
        prices: [
          { size: "Solo Cup", price: 175 },
          { size: "Cheat Treat", price: 225 },
          { size: "Dessert for 2", price: 425 },
          { size: "Party of 4", price: 475 },
        ],
        image: "/images/jars/nutella-tub-cake.jpg",
      },
      {
        id: "tiramisu-tub-cake",
        name: "Tiramisu Tub Cake",
        description:
          "Vanilla sponge soaked with fresh espresso topped with a mascarpone chantilly",
        prices: [
          { size: "Solo Cup", price: 150 },
          { size: "Cheat Treat", price: 200 },
          { size: "Dessert for 2", price: 325 },
          { size: "Party of 4", price: 425 },
        ],
        image: "/images/jars/tiramisu-tub-cake.jpg",
      },
      {
        id: "snickers-tub-cake",
        name: "Snickers Tub Cake",
        description:
          "Chocolate crumble, layered with a milk chocolate caramel mousse, chocolate sponge, chewy soft caramel, caramelized peanuts, topped up with a chocolate chantilly",
        prices: [
          { size: "Solo Cup", price: 150 },
          { size: "Cheat Treat", price: 200 },
          { size: "Dessert for 2", price: 350 },
          { size: "Party of 4", price: 425 },
        ],
        image: "/images/jars/snickers-tub-cake.jpg",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies Menu",
    subtitle: "Artisanal cookies - Minimum order 250 grams (10 pieces)",
    items: [
      {
        id: "chocolate-chunk-cookies",
        name: "Chocolate Chunk Cookies",
        description: "60% Whole wheat flour, 60% Raw Sugar, Couverture Chocolate",
        prices: [{ size: "250g", price: 400 }],
        image: "/images/cookies/chocolate-chunk.jpg",
      },
      {
        id: "coconut-cookies",
        name: "Coconut Cookies",
        description: "50% Desiccated Coconut, 60% Raw Sugar + Coconut Sugar",
        prices: [{ size: "250g", price: 375 }],
        image: "/images/cookies/coconut.jpg",
      },
      {
        id: "honey-oat-blueberry-cookies",
        name: "Honey Oat and Blueberry Cookies",
        description: "70% Oats, 75% Raw Sugar, No refined sugar",
        prices: [{ size: "250g", price: 450 }],
        image: "/images/cookies/honey-oat-blueberry.jpg",
      },
      {
        id: "fudgy-chocolate-cookies",
        name: "Fudgy Chocolate Cookies",
        description: "60% Whole wheat flour, 60% Raw Sugar, Couverture Chocolate",
        prices: [{ size: "250g", price: 425 }],
        image: "/images/cookies/fudgy-chocolate.jpg",
      },
      {
        id: "almond-sticks",
        name: "Almond Sticks",
        description: "60% Whole wheat flour, 60% Raw Sugar",
        prices: [{ size: "250g", price: 400 }],
        image: "/images/cookies/almond-sticks.jpg",
      },
      {
        id: "orange-cranberry-sticks",
        name: "Orange Cranberry Sticks",
        description: "60% Whole Wheat Flour, 60% Raw Sugar, fresh orange peel",
        prices: [{ size: "250g", price: 400 }],
        image: "/images/cookies/orange-cranberry-sticks.jpg",
      },
      {
        id: "kesar-pista",
        name: "Kesar Pista",
        description: "No essences, no colour",
        prices: [{ size: "250g", price: 450 }],
        image: "/images/cookies/kesar-pista.jpg",
      },
      {
        id: "cheese-crackers",
        name: "Cheese Crackers",
        description: "60% Whole Wheat",
        prices: [{ size: "250g", price: 375 }],
        image: "/images/cookies/cheese-crackers.jpg",
      },
    ],
  },
];

export default menu;