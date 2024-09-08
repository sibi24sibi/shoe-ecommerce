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
  }, [productInfoId]); // Run the effect when productInfoId changes

  return productShoesData ? (
    <div className="flex md:flex-row flex-col">
      <div>
        <img
          src={productShoesData.image}
          alt={productShoesData.name}
          className=" mx-auto md:mx-0 w-10/12  aspect-auto"
        />
      </div>
      <div className="  space-y-3 mx-0 md:mx-16">
        <h1 className=" text-xl md:text-5xl uppercase font-bold ">
          {productShoesData.name}
        </h1>
        <p> MRP in Indian currency:</p>
        <p className=" text-2xl font-medium font-serif text-yellow-900">
          {productShoesData.price}
        </p>
        <p>(Inclusive of tax)</p>

        <button className="px-4  py-2 bg-yellow-900 text-white font-bold rounded-md hover:bg-yellow-800 transition duration-300">
          Add to Cart
        </button>

        <ul className=" space-y-3 py-6 ">
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} /> Free
            Delivery, Free Returns
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} />
            Delivery: Delhi, Gurgaon: 1-2 Days, Metro cities:2-3 days , Others:
            3-5 days
          </li>

          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} /> COD
            available for orders below ₹5000
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} />
            Secure transactions with hassle free 14 days Exchange and Returns
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} /> Save 5% on
            all Online Payments under Rs 5000/-
          </li>
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
