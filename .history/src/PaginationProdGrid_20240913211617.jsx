import React, { useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext";
import Products from "./Products";

function PaginationProdGrid() {
  const { products } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Number of items to display per page

  // Calculate the displayed items based on the current page
  const displayedItems = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="container mx-auto py-8">
      {/* Products Grid */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {displayedItems.length > 0 ? (
          displayedItems.map((item) => (
            <Link key={item._id} to={`/productInfo/${item._id}`}>
              <Products
                name={item.name}
                image={item.image}
                price={item.price}
                className="bg-white rounded-lg shadow-md p-4"
              />
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>

      {/* Pagination Component */}
      <div className="flex justify-center mt-6">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(products.length / itemsPerPage)} // Total pages
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange} // Function to call on page change
          containerClassName={"pagination flex items-center"} // CSS class for the pagination container
          pageClassName={"px-3 py-2 rounded-md mx-1"} // CSS class for each page number
          previousClassName={"px-3 py-2 rounded-md mx-1"} // CSS class for previous button
          nextClassName={"px-3 py-2 rounded-md mx-1"} // CSS class for next button
          activeClassName={"bg-blue-500 text-white"} // CSS class for the active page
        />
      </div>
    </div>
  );
}

export default PaginationProdGrid;
