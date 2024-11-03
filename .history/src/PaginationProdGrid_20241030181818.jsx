import React, { useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { ShopContext } from "./Context/ShopContext";
import Products from "./Components/Products";
import { Link } from "react-router-dom";

function PaginationProdGrid() {
  const { products } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const displayedItems = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <>
      {/* Products Grid */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 m-4 md:m-8">
        {displayedItems && displayedItems.length > 0 ? (
          displayedItems.map((item) => (
            <Link key={item._id} to={`/productInfo/${item._id}`}>
              <Products
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full">No products available</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(products.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName="pagination flex items-center space-x-2 text-gray-700 dark:text-gray-200"
          pageClassName="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600"
          previousClassName="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600"
          nextClassName="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600"
          activeClassName="bg-blue-500 text-white"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </>
  );
}

export default PaginationProdGrid;
