import Logo from "../assets/logo.png";
import Shoes_Gazelle_BlueShoes from "../assets/GAZELLE_BOLD_SHOES_Blue_IE0430_01_standard.png";
import Shoes_GazelleYellowShoes from "../assets/GAZELLE_BOLD_SHOES_Yellow_IF5937_01_standard.png";
import Shoes_GazelleRedShoes from "../assets/Gazelle_Indoor_Shoes_Red_IE2946_01_standard.png";
import Shoes_SambaWhite_ID from "../assets/Samba_OG_Shoes_White_ID0478_01_standard.png";
import Shoes_SambaWhite_IF from "../assets/Samba_OG_Shoes_White_IF3814_01_standard.png";
import Carosel1 from "../assets/61lwJy4B8PL._SX3000_.jpg";
import Carosel2 from "../assets/71Ie3JXGfVL._SX3000_.jpg";
import Carosel3 from "../assets/71qcoYgEhzL._SX3000_.jpg";

export const assets = {
  Logo,
  Shoes_Gazelle_BlueShoes,
  Shoes_GazelleYellowShoes,
  Shoes_GazelleRedShoes,
  Shoes_SambaWhite_ID,
  Shoes_SambaWhite_IF,
  Carosel1,
  Carosel2,
  Carosel3,
};

export const productsdData = [
  {
    _id: 1,
    name: "Gazelle Bold Blue Shoes",
    image: assets.Shoes_Gazelle_BlueShoes,
    price: 999,
    size: ["S", "M", "L"],
    description:
      "This shoe is made with a breathable cushioning for comfort and support. It's designed for indoor use, perfect for play or sports.",
    rating: 4.5,
    reviews: 120,
    brand: "Gazelle",
    manufacturingDetails: {
      country: "China",
      material: "Synthetic, Rubber",
      year: "2023",
    },
    warranty: "6 months manufacturer warranty",
    additionalFeatures: [
      "Chunky sole for added style",
      "Synthetic upper with bold color blocks",
      "Rubber outsole for durability",
    ],
  },
  {
    _id: 2,
    name: "Gazelle Bold Yellow Shoes",
    image: assets.Shoes_GazelleYellowShoes,
    price: 249,
    size: ["S", "M", "L"],
    description:
      "This shoe is made with a breathable cushioning for comfort and support. It's designed for indoor use, perfect for play or sports.",
    rating: 4.8,
    reviews: 150,

    brand: "Gazelle",
    manufacturingDetails: {
      country: "Germany",
      material: "Primeknit, Boost",
      year: "2023",
    },
    warranty: "2 years manufacturer warranty",
    additionalFeatures: [
      "Boost cushioning for maximum comfort",
      "Primeknit upper for a snug fit",
      "Stretchweb outsole for flexible grip",
    ],
  },
  {
    _id: 3,
    name: "Gazelle Indoor Red Shoes",
    image: assets.Shoes_GazelleRedShoes,
    price: 779,
    size: ["S", "M", "L"],
    description:
      "This shoe is made with a breathable cushioning for comfort and support. It's designed for indoor use, perfect for play or sports.",
    rating: 4.6,
    reviews: 100,
    brand: "Gazelle",
    manufacturingDetails: {
      country: "China",
      material: "Synthetic, Rubber",
      year: "2023",
    },
    warranty: "6 months manufacturer warranty",
    additionalFeatures: [
      "Chunky sole for added style",
      "Synthetic upper with bold color blocks",
      "Rubber outsole for durability",
    ],
  },
  {
    _id: 4,
    name: "Samba OG White ID Shoes",
    image: assets.Shoes_SambaWhite_ID,
    price: 730,
    size: ["S", "M", "L"],
    description:
      "This shoe is made with a breathable cushioning for comfort and support. It's designed for indoor use, perfect for play or sports.",
    rating: 4.7,
    reviews: 130,
    brand: "Samba",
    manufacturingDetails: {
      country: "China",
      material: "Synthetic, Rubber",
      year: "2023",
    },
    warranty: "6 months manufacturer warranty",
    additionalFeatures: [
      "Chunky sole for added style",
      "Synthetic upper with bold color blocks",
      "Rubber outsole for durability",
    ],
  },
  {
    _id: 5,
    name: "Samba OG White IF Shoes",
    image: assets.Shoes_SambaWhite_IF,
    price: 499,
    size: ["S", "M", "L"],
    description:
      "This shoe is made with a breathable cushioning for comfort and support. It's designed for indoor use, perfect for play or sports.",
    rating: 4.9,
    reviews: 160,
    brand: "Samba",
    manufacturingDetails: {
      country: "China",
      material: "Synthetic, Rubber",
      year: "2023",
    },
    warranty: "6 months manufacturer warranty",
    additionalFeatures: [
      "Chunky sole for added style",
      "Synthetic upper with bold color blocks",
      "Rubber outsole for durability",
    ],
  },
];
