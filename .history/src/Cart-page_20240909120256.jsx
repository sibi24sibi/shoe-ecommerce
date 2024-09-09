import React, { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

function Cartpage() {
  const { cartItems, products } = useContext(ShopContext);

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
                        <p className="text-gray-800">
                          Quantity: {cartItems[itemId][size]}
                        </p>
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
