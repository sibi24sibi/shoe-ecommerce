import React from "react";
import { useParams } from "react-router-dom";

function ProductInfo() {
  const { productInfoId } = useParams();

  return <div>ProductInfo</div>;
}

export default ProductInfo;
