import { useContext } from "react";
import Products from "./Components/Products";
import Carosel from "./Components/Carosel";
import { ShopContext } from "./Context/ShopContext";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

function Prodpage() {
  const { products } = useContext(ShopContext);

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
        <h2 className="text-3xl font-semibold text-center my-8">
          Featured Products
        </h2>

        {/* Products Grid */}
        <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    >
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-8">
          {products && products.length > 0 ? (
            products.map((item) => (
              <Link key={item._id} to={`/productInfo/${item._id}`}>
                <Products
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              </Link>
            ))
          ) : (
            <p className="text-center">No products available</p>
          )}
        </div>
        <ResponsivePagination />
      </div>
      {/* Quotes Cards Section */}
      <div className="grid grid-cols-3 gap-4 my-8 ">
        {cardData.map((card, index) => (
          <a
            key={index}
            href="#"
            className="md:block hidden max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
    </>
  );
}

export default Prodpage;
