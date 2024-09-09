import React, { useContext, useState } from "react";
import { ShopContext } from "./Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faTrashAlt,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function Cartpage() {
  const {
    cartItems,
    products,
    incrementQuantity,
    decrementQuantity,
    deleteItem,
  } = useContext(ShopContext);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setPaymentSuccess(true);
    toast.success("Payment Successful");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-medium mb-6 text-gray-900 dark:text-gray-100">
        Your Cart
      </h1>

      {Object.keys(cartItems).length > 0 ? (
        <>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            {/* Cart table */}
            <table className="min-w-full table-auto">
              {/* Table head and body here */}
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
              {/* Proceed to Pay Button */}
              <button
                onClick={() => setShowModal(true)}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500"
              >
                Proceed to Pay
              </button>
            </div>
          </div>

          {/* Modal for payment details */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
                <button
                  className="mt-4 text-sm text-red-500"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Payment success message */}
          {paymentSuccess && (
            <div className="text-center mt-6 text-green-600 dark:text-green-400">
              Payment Successful!
            </div>
          )}
        </>
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
