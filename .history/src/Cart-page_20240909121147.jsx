import React, { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faTrashAlt,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function Cartpage() {
  const {
    cartItems,
    products,
    incrementQuantity,
    decrementQuantity,
    deleteItem,
  } = useContext(ShopContext);

  // Calculate total package fees
  const packageFees = 50; // Assuming a fixed package fee for simplicity

  // Calculate total amount
  const calculateTotal = () => {
    let total = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const product = products.find(
          (product) => product._id === parseInt(itemId, 10)
        );
        if (product) {
          total += cartItems[itemId][size] * product.price;
        }
      }
    }
    return total + packageFees;
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-medium mb-6 text-gray-900 dark:text-gray-100">
        Your Cart
      </h1>

      {Object.keys(cartItems).length > 0 ? (
        <div>
          <ul className="space-y-4">
            {Object.keys(cartItems).map((itemId) => {
              const product = products.find(
                (product) => product._id === parseInt(itemId, 10)
              );
              if (!product) return null;

              return (
                <li
                  key={itemId}
                  className="border border-gray-200 dark:border-gray-700 p-4 rounded-md shadow-md flex space-x-4 items-start bg-white dark:bg-gray-800"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Price: ₹{product.price}
                    </p>
                    {Object.keys(cartItems[itemId]).map((size) => (
                      <div
                        key={size}
                        className="flex justify-between items-center mb-2"
                      >
                        <p className="text-gray-800 dark:text-gray-300">
                          Size: {size}
                        </p>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => decrementQuantity(itemId, size)}
                            className="px-2 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500"
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span className="text-gray-800 dark:text-gray-200">
                            {cartItems[itemId][size]}
                          </span>
                          <button
                            onClick={() => incrementQuantity(itemId, size)}
                            className="px-2 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500"
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                          <button
                            onClick={() => deleteItem(itemId, size)}
                            className="px-2 py-1 bg-red-500 dark:bg-red-600 text-white dark:text-gray-100 rounded-md hover:bg-red-400 dark:hover:bg-red-500"
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
            <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-gray-100">
              <span>Total Amount:</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-gray-100">
              <span>Package Fees:</span>
              <span>₹{packageFees}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">
              <span>Grand Total:</span>
              <span>₹{calculateTotal()}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-gray-900 dark:text-gray-100 text-center">
          <h4 className="text-3xl font-medium">Your Cart is Empty</h4>
          <div className="mt-4">
            <FontAwesomeIcon
              className="text-5xl text-gray-400 dark:text-gray-500"
              icon={faShoePrints}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cartpage;