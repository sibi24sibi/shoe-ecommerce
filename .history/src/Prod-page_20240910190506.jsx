import { useState } from "react";
import Products from "./Components/Products";
import Carosel from "./Components/Carosel";
import { productsdData } from "./assets/assets";
import { Link } from "react-router-dom";

function Prodpage() {
  // Define data for the cards
  const cardData = [
    {
      title: "Express Yourself from Sole to Soul",
      description: "Be different from others.",
    },
    {
      title: "Innovative Tech Trends 2024",
      description:
        "Explore the latest technology trends that are shaping the future of the industry in 2024.",
    },
    {
      title: "Custom Fit for Character and Style",
      description: "From kids to elder ones.",
    },
  ];

  // State to store seller-uploaded products
  const [sellerProducts, setSellerProducts] = useState([]);

  // Function to add seller products
  const addSellerProduct = (product) => {
    setSellerProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <div>
      <Carosel />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-center py-6 my-8 rounded-lg shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-32 h-32 text-white opacity-20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx
