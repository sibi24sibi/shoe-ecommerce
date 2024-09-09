import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext"; // Adjust the import based on your file structure

function Payment() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  // Access cart items and products from context
  const { cartItems, products } = useContext(ShopContext);

  // Calculate total price
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
    return total + 50; // Assuming 50 is the package fee
  };

  // Handle form submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
  };

  // Handle navigation
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Enter Your Details
        </h2>
        <form onSubmit={handlePaymentSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-300"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-500"
          >
            Submit Payment
          </button>
        </form>

        {paymentSuccess && (
          <div className="text-center mt-6 text-green-600 dark:text-green-400">
            Payment Successful!
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Order Summary</h3>
              <p>Name: {name}</p>
              <p>Location: {location}</p>
              <div className="mt-4">
                <h4 className="font-semibold">Products Purchased:</h4>
                {Object.keys(cartItems).map((itemId) => {
                  const product = products.find(
                    (product) => product._id === parseInt(itemId, 10)
                  );
                  if (!product) return null;

                  return Object.keys(cartItems[itemId]).map((size) => (
                    <div key={itemId + size} className="flex justify-between">
                      <span>
                        {product.name} ({size})
                      </span>
                      <span>
                        {cartItems[itemId][size]} x ₹{product.price}
                      </span>
                    </div>
                  ));
                })}
                <div className="mt-4 flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>₹{calculateTotal()}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={handleBack}
          className="w-full mt-4 bg-gray-600 text-white py-2 rounded-md hover:bg-gray-500"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Payment;
