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
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-8">
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
          <p className="text-center">No products available</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(products.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={
            "pagination flex items-center  text-black dark:text-white"
          }
          pageClassName={
            "px-3 py-2 rounded-md mx-1  text-black dark:text-white"
          }
          previousClassName={
            "px-3 py-2 rounded-md mx-1  text-black dark:text-white"
          }
          nextClassName={
            "px-3 py-2 rounded-md mx-1  text-black dark:text-white"
          }
          activeClassName={"bg-blue-500 text-white"}
        />
      </div>
    </>
  );
}

export default PaginationProdGrid;
