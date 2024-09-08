import React, { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";

function ProductInfo() {
  const { products } = useContext(ShopContext); // Access products here

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductInfo;
