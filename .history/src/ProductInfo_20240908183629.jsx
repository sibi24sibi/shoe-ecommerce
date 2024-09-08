import React from "react";
import { useParams } from "react-router-dom";
import { productsdData } from "./assets/assets";

function ProductInfo() {
  const { productInfoId } = useParams();

  const product = productsdData.find((item) => item._id === productInfoId);

  if (!product) {
    return null;
  }

  return <div></div>;
}

export default ProductInfo;
