import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Top Seller",
    image: topSellerImg,
    link: "/top-seller",
  },
  {
    title: "Budget Category",
    image: budgetCategoryImg,
    link: "/budget-category",
  },
  {
    title: "Premium Brand",
    image: premiumBrandImg,
    link: "/premium-brand",
  },
];

function CategoryGrid() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 p-8">
      {categories.map((category, index) => (
        <Link
          key={index}
          to={category.link}
          className="relative block overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl font-bold">{category.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryGrid;
