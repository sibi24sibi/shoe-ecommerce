import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext";

function ProductInfo() {
  const { productInfoId } = useParams(); // product ID from URL params
  const { products } = useContext(ShopContext); // access products from context
  const [productShoesData, setProductShoesData] = useState(null); // initialize state as null

  // Function to fetch product data based on the URL ID
  const fetchProductData = () => {
    const foundProduct = products.find(
      (item) => item._id === parseInt(productInfoId)
    );
    setProductShoesData(foundProduct);
  };

  useEffect(() => {
    fetchProductData();
  }, [productInfoId]); // Run the effect when productInfoId changes

  return productShoesData ? (
    <div>
      <h2>{productShoesData.name}</h2>
      <img src={productShoesData.image} alt={productShoesData.name} />
      <p>Price: ${productShoesData.price}</p>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default ProductInfo;
