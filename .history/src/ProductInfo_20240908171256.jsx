import React from "react";
import { useParams } from "react-router-dom";
import { productsdData } from "./assets/assets";

function ProductInfo() {
  const { productInfoId } = useParams();

  return (
    <>
      <div className="product-info"></div>
    </>
  );
}

export default ProductInfo;
