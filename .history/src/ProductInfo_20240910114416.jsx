import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import {
  faTruck,
  faClock,
  faMoneyBillWave,
  faShieldAlt,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className=" md:w-1/2">
        <img
          src={productShoesData.image}
          alt={productShoesData.name}
          className="mx-auto md:mx-0 w-10/12 aspect-auto sticky  top-40 m-5"
        />
      </div>
      {/* Product Details */}
      <div className=" md:w-1/2 space-y-3 mx-8 md:mx-0 m-5 text-gray-900 dark:text-gray-100">
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
                  className={`py-2 px-4 m-2 rounded-lg text-lg ${
                    size === item
                      ? "bg-blue-300 text-black hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500"
                      : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-slate-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </p>
          </div>

          {/* Product Information Table */}
          <div className="mt-6 md:overflow-x-auto overflow-x-scroll ">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                    Attribute
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-slate-950 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    Brand
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {productShoesData.brand}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    Rating
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {productShoesData.rating} ({productShoesData.reviews}{" "}
                    reviews)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    Description
                  </td>
                  <td className="px-6 py-4 whitespace-wrap text-sm text-gray-500 dark:text-gray-300">
                    {productShoesData.description}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    Manufacturing Country
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {productShoesData.manufacturingDetails?.country || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    Material
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {productShoesData.manufacturingDetails?.material || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    Year of Manufacture
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {productShoesData.manufacturingDetails?.year || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    Warranty
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {productShoesData.warranty || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    Additional Features
                  </td>
                  <td className="px-6 py-4 whitespace-wrap text-sm text-gray-500 dark:text-gray-300">
                    {productShoesData.additionalFeatures?.join(", ") || "N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Info List */}
        <ul className="text-xs space-y-3 py-6">
          <li>
            <FontAwesomeIcon className="mx-3" icon={faTruck} /> Free Delivery,
            Free Returns
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faClock} /> Delivery: Delhi,
            Gurgaon: 1-2 Days.
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faMoneyBillWave} /> COD
            available for orders below ₹5000
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShieldAlt} /> Secure
            transactions with hassle-free 1 Returns
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faPercent} /> Save 5% on all
            Online Payments under Rs 5000/-
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="text-gray-900 dark:text-gray-100">
      <div class="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
