import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import Products from "./Components/Products";
import { Link } from "react-router-dom";
Link;
function PaginationProdGrid() {
  const { products } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Number of items to display per page
  const displayedItems =
    currentPage * itemsPerPage <= products.length
      ? products.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        )
      : [];

  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };
  return (
    <>
      {/* Products Grid */}
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
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(products.length / itemsPerPage)} // Total pages
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange} // Function to call on page change
        containerClassName={"pagination"} // CSS class for the pagination container
        activeClassName={"active"} // CSS class for the active page
      />
    </>
  );
}

export default PaginationProdGrid;
