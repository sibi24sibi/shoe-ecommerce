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
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Your Shopping Cart
      </h1>

      {Object.keys(cartItems).length > 0 ? (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <table className="min-w-full text-left">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-gray-700 dark:text-gray-300">
                  Product
                </th>
                <th className="py-3 px-4 text-gray-700 dark:text-gray-300">
                  Size
                </th>
                <th className="py-3 px-4 text-gray-700 dark:text-gray-300">
                  Quantity
                </th>
                <th className="py-3 px-4 text-gray-700 dark:text-gray-300">
                  Price
                </th>
                <th className="py-3 px-4 text-gray-700 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cartItems).map((itemId) => {
                const product = products.find(
                  (product) => product._id === parseInt(itemId, 10)
                );
                if (!product) return null;

                return Object.keys(cartItems[itemId]).map((size) => (
                  <tr
                    key={itemId + size}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <td className="py-4 px-4 flex items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <span className="text-gray-900 dark:text-gray-100">
                        {product.name}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-900 dark:text-gray-300">
                      {size}
                    </td>
                    <td className="py-4 px-4 text-gray-900 dark:text-gray-300">
                      <div className="flex items-center">
                        <button
                          onClick={() => decrementQuantity(itemId, size)}
                          className="px-2 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="mx-2">{cartItems[itemId][size]}</span>
                        <button
                          onClick={() => incrementQuantity(itemId, size)}
                          className="px-2 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-900 dark:text-gray-300">
                      ₹{cartItems[itemId][size] * product.price}
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => deleteItem(itemId, size)}
                        className="px-3 py-1 bg-red-500 dark:bg-red-600 text-white rounded-md hover:bg-red-400 dark:hover:bg-red-500"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                ));
              })}
            </tbody>
          </table>

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
