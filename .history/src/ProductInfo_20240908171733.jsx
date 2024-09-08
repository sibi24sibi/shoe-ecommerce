import React from "react";
import { useParams } from "react-router-dom";
import { productsdData } from "./assets/assets";

function ProductInfo() {
  const { productInfoId } = useParams();

  const product = productsdData.find((item) => item.id === productInfoId);

  if (!product) {
    return null;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />

      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductInfo;
