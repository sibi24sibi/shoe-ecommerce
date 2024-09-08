import React from "react";
import { useParams } from "react-router-dom";
import { productsdData } from "./assets/assets"; // Ensure the correct path to assets

function ProductInfo() {
  const { productInfoId } = useParams();

  // Find the product based on the ID
  const product = productsdData.find(
    (item) => item._id === parseInt(productInfoId)
  );

  return (
    <>
      {product ? (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
}

export default ProductInfo;
