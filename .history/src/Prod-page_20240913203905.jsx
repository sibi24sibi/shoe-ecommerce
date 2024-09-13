import { useContext, useState } from "react";
import Products from "./Components/Products";
import Carosel from "./Components/Carosel";
import { ShopContext } from "./Context/ShopContext";
import { Link } from "react-router-dom";
import Banner from "./Banner";

function Prodpage() {
  const { products } = useContext(ShopContext);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Slice the products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Data for the quote cards section
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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-8">
          {currentProducts && currentProducts.length > 0 ? (
            currentProducts.map((item) => (
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

        {/* Pagination */}
        <nav
          aria-label="Page navigation example"
          className="my-8 flex justify-center"
        >
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                Previous
              </button>
            </li>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageClick(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    currentPage === index + 1
                      ? "text-blue-600 bg-blue-50 border-blue-300"
                      : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  } border dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center px-6 h-12 leading-tight text-gray-800  bg-blue-300 hover:bg-blue-400 border border-gray-300 rounded-e-lg  hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
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
