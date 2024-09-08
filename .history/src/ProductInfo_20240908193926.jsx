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
    <div className="flex">
      <div>
        <img
          src={productShoesData.image}
          alt={productShoesData.name}
          className=" mx-auto md:mx-0 w-10/12  aspect-auto"
        />
      </div>
      <div className="  space-y-3">
        <h1 className=" text-5xl uppercase font-bold ">
          {productShoesData.name}
        </h1>
        <p> MRP in Indian currency:</p>
        <p className=" text-2xl font-medium font-serif text-yellow-900">
          {productShoesData.price}
        </p>
        <p>(Inclusive of tax)</p>

        <button className="px-4 py-2 bg-yellow-900 text-white font-bold rounded-md hover:bg-yellow-800 transition duration-300">
          Add to Cart
        </button>

        <ul>
          <li>Free Delivery, Free Returns</li>
          <li>
            Delivery: Delhi, Gurgaon: 1-2 Days, Metro cities:2-3 days , Others:
            3-5 days
          </li>

          <li>COD available for orders below ₹5000</li>
          <li>
            Secure transactions with hassle free 14 days Exchange and Returns
          </li>
          <li>Save 5% on all Online Payments under Rs 5000/-</li>
        </ul>
      </div>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default ProductInfo;
