import React from "react";
import { useParams } from "react-router-dom";
import { productsdData } from "../assets/assets";

function ProductInfo() {
  const { productInfoId } = useParams();

  const product = productsdData.find(
    (item) => item._id === parseInt(productInfoId)
  );

  return (
    <div>
      {product ? (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductInfo;
