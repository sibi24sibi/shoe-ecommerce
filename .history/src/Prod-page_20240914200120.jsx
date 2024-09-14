import { useContext } from "react";
import Products from "./Components/Products";
import Carosel from "./Components/Carosel";
import { ShopContext } from "./Context/ShopContext";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import PaginationProdGrid from "./PaginationProdGrid";

function Prodpage() {
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

  return (
    <>
      <div>
        <Carosel />

        {/* Banner Section */}
        <Banner />

        {/* Featured Products Heading */}
        <div>
          <h2 className="text-4xl font-semibold text-center my-8 uppercase">
            Featured Products
          </h2>
          <h2 className="text-4xl font-semibold text-center my-8 uppercase relative -translate-y-28">
            Featured Products
          </h2>
        </div>
        <PaginationProdGrid />
      </div>
      <div className="flex justify-center my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
          {cardData.map((card, index) => (
            <a
              key={index}
              href="#"
              className="flex flex-col mx-auto justify-center items-center aspect-square h-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                {card.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                {card.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Prodpage;
