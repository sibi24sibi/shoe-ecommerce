// Payment.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
  };

  const navigate = useNavigate();

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
          <button
            onClick={handleBack}
            className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-500"
          >
            Back
          </button>
        </form>

        {paymentSuccess && (
          <div className="text-center mt-6 text-green-600 dark:text-green-400">
            Payment Successful!
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
