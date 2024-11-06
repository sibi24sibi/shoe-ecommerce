import React from "react";
import { Link } from "react-router-dom";

function Products({ name, image, price, id }) {
  return (
    <div className="w-full max-w-sm btn-shine transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:dark:bg-gray-800 hover:dark:border-gray-700">
      <Link to={`/productInfo/${item.id}`}>
        <img
          className="p-8 rounded-t-lg transition-transform duration-300 transform hover:scale-105"
          src={image}
          alt={name}
        />
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300 hover:text-blue-600">
            {name}
          </h5>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ₹ {price}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-transform duration-300 transform hover:scale-105"
            >
              View
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Products;
