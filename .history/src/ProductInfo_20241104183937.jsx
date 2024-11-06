import { BiCart } from "react-icons/bi";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext";

function ProductInfo() {
  const { productInfoId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productShoesData, setProductShoesData] = useState(null);
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const foundProduct = products.find(
      (item) => item.id === parseInt(productInfoId, 10)
    );
    setProductShoesData(foundProduct);
  };

  useEffect(() => {
    fetchProductData();
  }, [productInfoId, products]);

  if (!productShoesData) {
    return (
      <div className="text-gray-900 dark:text-gray-100">
        <div className="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.8 50.5908C93.8 77.2466 77.2466 93.8 50.5908 93.8C23.935 93.8 7.38086 77.2466 7.38086 50.5908C7.38086 23.935 23.935 7.38086 50.5908 7.38086C77.2466 7.38086 93.8 23.935 93.8 50.5908Z"
                stroke="currentColor"
                strokeWidth="5"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex md:flex-row flex-col bg-white dark:bg-slate-950 transition duration-300">
      {/* Product Image */}
      <div className="md:w-1/2">
        <img
          src={productShoesData.image}
          alt={productShoesData.name}
          className="mx-auto md:mx-0 w-10/12 aspect-auto sticky rounded-xl top-32 m-5"
        />
      </div>
      {/* Product Details */}
      <div className="md:w-1/2 space-y-3 mx-8 md:mx-0 m-5 text-gray-900 dark:text-gray-100">
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
          onClick={() => addToCart(productShoesData.id, size)}
          className="px-4 flex items-center py-2 bg-yellow-900 text-white font-bold rounded-md hover:bg-yellow-800 dark:bg-yellow-600 dark:hover:bg-yellow-500 transition duration-300"
        >
          <BiCart />
          <span className="mx-2">Add to Cart</span>
        </button>

        {/* Size Selection */}
        <div>
          <div className="flex items-center gap-2">
            <h6 className="text-base font-semibold">Size:</h6>
            <p className="font-normal text-medium uppercase italic">
              {['6', '7', '8', '9', '10'].map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`py-2 px-4 m-2 border-2 font-bold text-xl border-zinc-900 hover:bg-black hover:text-zinc-100 dark:border-zinc-100 dark:hover:text-gray-900 dark:hover:bg-white ${
                    size === item
                      ? "bg-blue-400 hover:bg-blue-700 hover:text-slate-100 text-slate-900 dark:hover:bg-blue-200 hover:text-zinc-900"
                      : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </p>
          </div>

          {/* Product Information Table */}
          <div className="mt-6 md:overflow-x-auto overflow-x-scroll">
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
                    {productShoesData.brand || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    Rating
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {productShoesData.rating?.rate || "No Rating"} ({productShoesData.rating?.count || 0} reviews)
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
                    Quantity
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {productShoesData.quantity}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
