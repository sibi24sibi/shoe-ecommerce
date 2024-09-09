// Cartpage.js
import React, { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faTrashAlt,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Cartpage() {
  const {
    cartItems,
    products,
    incrementQuantity,
    decrementQuantity,
    deleteItem,
  } = useContext(ShopContext);

  const navigate = useNavigate();
  const packageFees = 50;

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

  const handleProceedToPay = () => {
    navigate("/payment");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-medium mb-6 text-gray-900 dark:text-gray-100">
        Your Cart
      </h1>

      {Object.keys(cartItems).length > 0 ? (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          {/* Cart table here */}
          <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow-md">
            <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-gray-100">
              <span>Total Amount:</span>
              <span>₹{calculateTotal() - packageFees}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-gray-100">
              <span>Package Fees:</span>
              <span>₹{packageFees}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">
              <span>Grand Total:</span>
              <span>₹{calculateTotal()}</span>
            </div>
            {/* Proceed to Pay Button */}
            <button
              onClick={handleProceedToPay}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      ) : (
        <div className="text-gray-900 dark:text-gray-100 flex flex-col justify-center items-center min-h-[50vh] space-y-6">
          <h4 className="text-3xl font-medium">Your Cart is Empty</h4>
          <div>
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
