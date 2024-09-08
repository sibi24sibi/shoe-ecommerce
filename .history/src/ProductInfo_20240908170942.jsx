import React from "react";
import { useParams } from "react-router-dom";
import { productsdData } from "./assets/assets";

function ProductInfo() {
  const { productInfoId } = useParams();

  return (
    <>
      {productsdData.map((index, item) => {
        if (item.id === parseInt(productInfoId)) {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} />

              <p>Price: ${item.price}</p>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

export default ProductInfo;
