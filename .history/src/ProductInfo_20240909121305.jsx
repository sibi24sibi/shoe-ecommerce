import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

function ProductInfo() {
  const { productInfoId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productShoesData, setProductShoesData] = useState(null);
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const foundProduct = products.find(
      (item) => item._id === parseInt(productInfoId, 10)
    );
    setProductShoesData(foundProduct);
  };

  useEffect(() => {
    fetchProductData();
  }, [productInfoId, products]);

  return productShoesData ? (
    <div className="flex md:flex-row flex-col bg-white dark:bg-slate-950 transition duration-300">
      {/* Product Image */}
      <div className="w-2/4">
        <img
          src={productShoesData.image}
          alt={productShoesData.name}
          className="mx-auto md:mx-0 w-10/12 aspect-auto sticky top-5 m-5"
        />
      </div>
      {/* Product Details */}
      <div className="w-2/4 space-y-3 mx-8 md:mx-0 m-5 text-gray-900 dark:text-gray-100">
        <h1 className="text-xl md:text-5xl uppercase font-bold">
          {productShoesData.name}
        </h1>
        <p>MRP in Indian currency:</p>
        <p className="text-2xl font-medium font-serif text-yellow-900 dark:text-yellow-400">
          <span className="mx-2">₹</span>
          {productShoesData.price}
        </p>
        <p>(Inclusive of tax)</p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(productShoesData._id, size)}
          className="px-4 py-2 bg-yellow-900 text-white font-bold rounded-md hover:bg-yellow-800 dark:bg-yellow-600 dark:hover:bg-yellow-500 transition duration-300"
        >
          Add to Cart
        </button>

        <div>
          <div className="flex items-center gap-2">
            <h6 className="text-base font-semibold">Size:</h6>
            <p className="font-normal text-medium uppercase italic">
              {productShoesData.size.map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className="py-2 px-4 m-2 rounded-lg bg-gray-300 text-lg hover:bg-gray-400 dark:hover:bg-slate-600 dark:bg-gray-700"
                >
                  {item}
                </button>
              ))}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h6 className="text-base font-semibold">Brand:</h6>
            <p className="font-normal text-medium uppercase italic">
              {productShoesData.brand}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h6 className="text-base font-semibold">Rating:</h6>
            <p className="font-normal text-medium uppercase italic">
              {productShoesData.rating}
            </p>
          </div>

          <div className="w-4/5 gap-2">
            <h6 className="text-base font-semibold">Description:</h6>
            <p className="font-normal text-medium uppercase italic">
              {productShoesData.description}
            </p>
          </div>
        </div>
        {/* Product Info List */}
        <ul className="text-xs space-y-3 py-6">
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} /> Free
            Delivery, Free Returns
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} />
            Delivery: Delhi, Gurgaon: 1-2 Days, Metro cities: 2-3 days, Others:
            3-5 days
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} /> COD
            available for orders below ₹5000
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} />
            Secure transactions with hassle-free 14 days Exchange and Returns
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} /> Save 5% on
            all Online Payments under Rs 5000/-
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="text-gray-900 dark:text-gray-100">
      <h1>Loading...</h1>
    </div>
  );
}

export default ProductInfo;