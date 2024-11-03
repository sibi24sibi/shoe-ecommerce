// PaginationProdGrid.js
import React from "react";
import Products from "./Components/Products";
import { Link } from "react-router-dom";

function PaginationProdGrid({ displayedItems }) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 m-4 md:m-8">
      {displayedItems && displayedItems.length > 0 ? (
        displayedItems.map((item) => (
          <Link key={item._id} to={`/productInfo/${item._id}`}>
            <Products name={item.name} image={item.image} price={item.price} />
          </Link>
        ))
      ) : (
        <p className="text-center col-span-full">No products available</p>
      )}
    </div>
  );
}

export default PaginationProdGrid;
