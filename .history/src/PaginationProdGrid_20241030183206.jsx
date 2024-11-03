import React from "react";
import Products from "./Components/Products";
import { Link } from "react-router-dom";

function PaginationProdGrid({ products }) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 m-4 md:m-8">
      {products && products.length > 0 ? (
        products.map((item) => (
          <Link key={item._id} to={`/productInfo/${item._id}`}>
            <Products 
              name={item.name} 
              image={item.image} 
              price={item.price} 
              alt={item.name} // Assuming Products can take an alt prop
            />
          </Link>
        ))
      ) : (
        <p className="text-center col-span-full">No products available</p>
      )}
    </div>
  );
}

export default PaginationProdGrid;
