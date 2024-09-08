import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { productsdData } from "./assets/assets";
import { ShopContext } from "./Context/ShopContext";

function ProductInfo() {
  const { productInfoId } = useParams();

  const { productsdData } = useContext(ShopContext);

  const [productShoesData, setProductShoesData] = useState(false);

  const fetchProductData = async () => {
    productsdData.map((items) => {
      if (item._id === productInfoId) {
        setProductData(item);
        console.log();
        return null;
      }
    });
  };

  return <div></div>;
}

export default ProductInfo;
