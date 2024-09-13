import React, { useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { ShopContext } from "./Context/ShopContext";
// Ensure you import your Products component

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
    <>
      {/* Products Grid */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-8">
        {displayedItems.length > 0 ? (
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

      {/* Pagination Component */}
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
