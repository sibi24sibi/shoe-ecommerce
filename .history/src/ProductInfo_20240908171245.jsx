import React from "react";
import { useParams } from "react-router-dom";
import { productsdData } from "./assets/assets";

function ProductInfo() {
  const { productInfoId } = useParams();

  return (
    <>
      {productsdData.map((index, item) => {
        <imge key={index} src={item.image} />;
      })}
    </>
  );
}

export default ProductInfo;
