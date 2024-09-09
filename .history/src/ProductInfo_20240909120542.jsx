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
  const { cartItems, products, setCartItems } = useContext(ShopContext);

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

  const handleDelete = (itemId, size) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[itemId] && updatedCart[itemId][size]) {
      delete updatedCart[itemId][size];
      if (Object.keys(updatedCart[itemId]).length === 0) {
        delete updatedCart[itemId];
      }
      setCartItems(updatedCart);
    }
  };

  const handleIncrement = (itemId, size) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[itemId]) {
      if (updatedCart[itemId][size]) {
        updatedCart[itemId][size] += 1;
      } else {
        updatedCart[itemId][size] = 1;
      }
      setCartItems(updatedCart);
    }
  };

  const handleDecrement = (itemId, size) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[itemId] && updatedCart[itemId][size]) {
      if (updatedCart[itemId][size] > 1) {
        updatedCart[itemId][size] -= 1;
      } else {
        delete updatedCart[itemId][size];
        if (Object.keys(updatedCart[itemId]).length === 0) {
          delete updatedCart[itemId];
        }
      }
      setCartItems(updatedCart);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-medium mb-6">Your Cart</h1>

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
                  className="border p-4 rounded-md shadow-md flex space-x-4 items-start"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-600">Price: ₹{product.price}</p>
                    {Object.keys(cartItems[itemId]).map((size) => (
                      <div
                        key={size}
                        className="flex justify-between items-center"
                      >
                        <p className="text-gray-800">Size: {size}</p>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleDecrement(itemId, size)}
                            className="px-2 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span className="text-gray-800">
                            {cartItems[itemId][size]}
                          </span>
                          <button
                            onClick={() => handleIncrement(itemId, size)}
                            className="px-2 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                          <button
                            onClick={() => handleDelete(itemId, size)}
                            className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-400"
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
          <div className="mt-6">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Amount:</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Package Fees:</span>
              <span>₹{packageFees}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mt-4">
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
              className="text-5xl text-gray-400"
              icon={faShoePrints}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cartpage;
