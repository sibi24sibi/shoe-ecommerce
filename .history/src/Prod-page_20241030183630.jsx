import { useState, useContext } from "react";
import Carosel from "./Components/Carosel";
import { ShopContext } from "./Context/ShopContext";
import Banner from "./Banner";
import PaginationProdGrid from "./PaginationProdGrid";

function Prodpage() {
  const { products } = useContext(ShopContext);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 3 columns x 3 items per page

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Calculate the start and end indices for slicing
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <Carosel />
      <Banner />

      <h2 className="text-5xl font-extrabold text-center my-5">Featured Products</h2>

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
    </>
  );
}

export default Prodpage;
