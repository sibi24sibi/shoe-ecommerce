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
        {products.length > 0 ? (
          products.map((item) => (
            <Link key={item.id } >
              <Products
                name={item.name}
               
              />
            </Link>
          ))
        ) : (
          <p className="text-center">No products available</p>
        )}
      </div>
    </>
  );
}

export default PaginationProdGrid;
