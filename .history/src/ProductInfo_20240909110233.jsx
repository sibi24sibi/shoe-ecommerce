import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

function ProductInfo() {
  const { productInfoId } = useParams();
  const { products } = useContext(ShopContext);
  const [productShoesData, setProductShoesData] = useState(null);

  const fetchProductData = () => {
    const foundProduct = products.find(
      (item) => item._id === parseInt(productInfoId)
    );
    setProductShoesData(foundProduct);
  };

  useEffect(() => {
    fetchProductData();
  }, [productInfoId]);

  return productShoesData ? (
    <div className="flex md:flex-row flex-col bg-white dark:bg-slate-950 transition duration-300">
      {/* Product Image */}
      <div>
        <img
          src={productShoesData.image}
          alt={productShoesData.name}
          className="mx-auto md:mx-0 w-10/12 aspect-auto"
        />
        <div>
          <div className="flex items-center gap-2">
            <h6 className=" text-base  font-semibold from-stone-800">Brand:</h6>
            <p className=" font-normal text-medium uppercase italic">
              {productShoesData.brand}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <h6 className="text-base  font-semibold from-stone-800">Rating:</h6>
            <p className=" font-normal text-medium uppercase italic">
              {productShoesData.rating}
            </p>
          </div>
          <p>{productShoesData.description}</p>
        </div>
      </div>
      {/* Product Details */}
      <div className="space-y-3 mx-8 md:mx-0 m-5 text-gray-900 dark:text-gray-100">
        <h1 className="text-xl md:text-5xl uppercase font-bold">
          {productShoesData.name}
        </h1>
        <p>MRP in Indian currency:</p>
        <p className="text-2xl font-medium font-serif text-yellow-900 dark:text-yellow-400">
          {productShoesData.price}
        </p>
        <p>(Inclusive of tax)</p>

        <div className="flex items-center gap-2">
          <h6 className="text-base  font-semibold from-stone-800">Size:</h6>
          <p className=" font-normal text-medium uppercase italic">
            {productShoesData.size.map((index) => {
              return (
                <button
                  key={index}
                  className="py-4 p-6 m-4 rounded-lg bg-gray-500 "
                >
                  {index}
                </button>
              );
            })}
          </p>
        </div>

        {/* Add to Cart Button */}
        <button className="px-4 py-2 bg-yellow-900 text-white font-bold rounded-md hover:bg-yellow-800 dark:bg-yellow-600 dark:hover:bg-yellow-500 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  ) : (
    <div className="text-gray-900 dark:text-gray-100">
      <h1>Loading...</h1>
    </div>
  );
}

export default ProductInfo;
