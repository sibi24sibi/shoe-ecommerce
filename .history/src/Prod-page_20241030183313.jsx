import { useState, useContext } from "react";
import Carosel from "./Components/Carosel";
import { ShopContext } from "./Context/ShopContext";
import Banner from "./Banner";
import PaginationProdGrid from "./PaginationProdGrid";

function Prodpage() {
  const { products } = useContext(ShopContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Must be a multiple of 3

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Calculate the items to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div>
        <Carosel />
        <Banner />
        
        <div className="my-5">
          <h2 className="text-5xl font-extrabold text-center uppercase">Featured Products</h2>
        </div>

        {/* Products Grid */}
        <PaginationProdGrid products={currentProducts} />

        {/* Pagination Controls */}
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
    </>
  );
}

export default Prodpage;
