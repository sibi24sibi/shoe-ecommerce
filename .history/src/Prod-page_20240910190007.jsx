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

  // This function can be called when a seller uploads a product (as an example)
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
            <circle cx="50" cy="50" r="50" fill="currentColor" />
          </svg>
        </div>
        <div className="relative z-10">
          <p className="text-2xl font-bold text-white mb-4">Exclusive Offer!</p>
          <p className="text-lg text-white mb-6">
            Flat 40% Off on Selected Products
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-yellow-600 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Dynamic Cards Section */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-8">
        {cardData.map((card, index) => (
          <a
            key={index}
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {card.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {card.description}
            </p>
          </a>
        ))}
      </div>

      {/* Featured Products Heading */}
      <h2 className="text-3xl font-semibold text-center my-8">
        Featured Products
      </h2>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-8">
        {/* Predefined products */}
        {productsdData.map((item, index) => (
          <Link key={index} to={`/productInfo/${item._id}`}>
            <Products name={item.name} image={item.image} price={item.price} />
          </Link>
        ))}

        {/* Seller Uploaded Products */}
        {sellerProducts.map((product, index) => (
          <div key={index} className="w-full max-w-sm">
            <Products
              name={product.name}
              image={URL.createObjectURL(product.image)}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prodpage;
