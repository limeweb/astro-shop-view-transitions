export enum ProductCategory {
  Shirts = "projects",
  Pants = "pants",
  Shoes = "shoes",
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  cover: string;
  coverCredits: string;
  category: ProductCategory;
}

export const products: Product[] = [
  {
    id: 32,
    name: "No.8 Chambers",
    slug: "No.8 Chambers",
    site: "https://bbc.co.uk",
    description:
      "Stay Brave with the 705 Shirt from Ryan Hoffman Collection. Show your bravery and drinks some beer with.",
    cover: "/products/no8.webp",
    coverCredits:
      "https://unsplash.com/photos/A7f7XRKgUWc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
  {
    id: 18,
    name: "Lightwoods Tree Surgery",
    slug: "Lightwoods Tree Surgery",
    site: "https://bbc.co.uk",
    description:
      "Feel the Comfort and Peace of the Lightwoods Tree Surgery Shirt white as snow. Don't worry about the stain, it's easy to clean.",
    cover: "/products/tree.webp",
    coverCredits:
      "https://unsplash.com/photos/acn5ERAeSb4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
  {
    id: 21,
    name: "JustPixel",
    slug: "JustPixel",
    site: "https://bbc.co.uk",
    description:
      "Elevate Your Style and Comfort with the JustPixel Shoes. Designed to stay cool and dry all day.",
    cover: "/products/pixel.webp",
    coverCredits:
      "https://unsplash.com/photos/Wr0TpKqf26s?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },

  {
    id: 49,
    name: "First Friends",
    slug: "teddy",
    site: "https://bbc.co.uk",
    description:
      "Stay Cool and Dry with the T-Shirt 705 from Ryan Hoffman Collection. Relax, run, dream.",
    cover: "/products/teddy.webp",
    coverCredits:
      "https://unsplash.com/photos/6Nub980bI3I?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
];
