import { useState, useContext } from "react";
import Carosel from "./Components/Carosel";
import { ShopContext } from "./Context/ShopContext";
import Banner from "./Banner";
import PaginationProdGrid from "./PaginationProdGrid";

function Prodpage() {
  const { products } = useContext(ShopContext);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Must be a multiple of 3 for grid-cols-3

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Calculate the items to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

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
        <div className="my-5">
          <h2 className="text-5xl font-extrabold text-center uppercase translate-y-20">
            Featured Products
          </h2>
          <h2 className="text-8xl whitespace-nowrap overflow-hidden opacity-10 font-semibold text-center uppercase relative">
            Featured Products
          </h2>
        </div>

        {/* Products Grid with Pagination */}
        <PaginationProdGrid products={currentProducts} />

        {/* Custom Pagination Controls */}
        <div className="flex justify-center my-4">
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-1 border rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Info Cards */}
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