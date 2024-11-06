import React, { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import Products from "./Components/Products";
import { Link } from "react-router-dom";

function PaginationProdGrid() {
  const { products } = useContext(ShopContext);
  

  return (
    <>
      {/* Products Grid */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-8">
        {displayedItems && displayedItems.length > 0 ? (
          displayedItems.map((item, index) => (
            <Link key={index} to={`/productInfo/${index}`}>
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
<<<<<<< HEAD
=======

      {/* Pagination Controls */}
      <div className="flex justify-center">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(products.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination flex items-center p-5"}
          pageClassName={
            "px-4 py-2 rounded-md mx-1 cursor-pointer transition-colors duration-200 hover:bg-blue-500 hover:text-white"
          }
          previousClassName={
            "px-4 py-2 rounded-md mx-1 cursor-pointer transition-colors duration-200 hover:bg-blue-500 hover:text-white"
          }
          nextClassName={
            "px-4 py-2 rounded-md mx-1 cursor-pointer transition-colors duration-200 hover:bg-blue-500 hover:text-white"
          }
          activeClassName={"bg-blue-500 text-white"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />
      </div>
>>>>>>> main
    </>
  );
}

export default PaginationProdGrid;

