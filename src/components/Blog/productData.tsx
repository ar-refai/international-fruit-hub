import { Product } from "@/types/Product";

const productData: Product[] = [
  {
    id: 1,
    title: "Top 10 Superfoods for a Healthy Lifestyle",
    paragraph:
      "Discover the top 10 superfoods that can boost your health and wellbeing. Learn about their benefits and how to incorporate them into your diet.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Alice Green",
      image: "/images/blog/author-01.png",
      designation: "Nutritionist",
    },
    tags: ["health", "superfoods"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Seasonal Fruits: Why Eating in Season Matters",
    paragraph:
      "Eating seasonal fruits is not only better for the environment but also for your health. Find out which fruits are in season and their unique benefits.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "John Berry",
      image: "/images/blog/author-02.png",
      designation: "Agricultural Expert",
    },
    tags: ["seasonal", "fruits"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Organic Vegetables: Are They Worth the Hype?",
    paragraph:
      "Organic vegetables are becoming increasingly popular, but are they really worth the extra cost? Explore the pros and cons of choosing organic produce.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Emma Leaf",
      image: "/images/blog/author-03.png",
      designation: "Organic Farmer",
    },
    tags: ["organic", "vegetables"],
    publishDate: "2025",
  },
];

export default productData;
