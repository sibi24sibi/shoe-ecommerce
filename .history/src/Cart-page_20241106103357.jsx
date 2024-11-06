import React, { useContext, useState } from "react";
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
    clearCart, // Assuming you have a clearCart function in your context
  } = useContext(ShopContext);

  const navigate = useNavigate();
  const packageFees = 50;
  const [showClearModal, setShowClearModal] = useState(false);

  // Function to calculate total amount
  const calculateTotal = () => {
    let total = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const product = products.find(
          (product) => product.id === parseInt(itemId, 10) // Correctly matching the product
        );
        if (product) {
          total += cartItems[itemId][size] * product.price;
        } else {
          console.warn(`Product with ID ${itemId} not found`);
        }
      }
    }
    return total + packageFees;
  };

  // Handle clearing the cart after confirmation
  const handleClearCart = () => {
    clearCart(); // This would be a function in your ShopContext that clears the cart
    setShowClearModal(false); // Close the modal
  };

  // Handle proceed to checkout with cart validation
  const handleProceedToPay = () => {
    if (Object.keys(cartItems).length === 0) {
      alert("Your cart is empty. Please add items to proceed.");
      return; // Do nothing if cart is empty
    }
    navigate("/payment");
  };

  return (
    <div className="min-h-screen">
      <section className="container md:mx-auto py-8 px-4">
        <div className="flex md:flex-row flex-col gap-4 justify-center">
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-slate-700 shadow-lg rounded-lg">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h5 className="text-lg font-semibold">
                    <a href="#!" className="text-gray-600 dark:text-gray-200 flex items-center">
                      Shopping Cart
                    </a>
                  </h5>
                  <p className="text-gray-600 dark:text-gray-200">
                    You have {Object.keys(cartItems).length} items in your cart
                  </p>
                </div>
                <hr className="mb-6" />

                {Object.keys(cartItems).length > 0 ? (
                  Object.keys(cartItems).map((itemId) => {
                    const product = products.find(
                      (product) => product.id === parseInt(itemId, 10) // Use `id` to match product correctly
                    );
                    if (!product) return null;

                    return Object.keys(cartItems[itemId]).map((size) => (
                      <div
                        key={itemId + size}
                        className="flex items-center mb-4 p-4 border-b text-gray-900 dark:text-gray-200 border-gray-300"
                      >
                        <img
                          src={product.image} // Use the product image here
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-md mr-4"
                        />
                        <div className="flex-grow">
                          <h5 className="md:text-lg text-xs font-semibold">
                            {product.name}
                          </h5>
                          <p className="text-gray-600 md:text-lg text-xs dark:text-gray-200">
                            {size}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => decrementQuantity(itemId, size)}
                            className="px-2 py-1 bg-gray-300 md:text-lg text-xs text-gray-800 rounded-md hover:bg-gray-400"
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span className="mx-2 md:text-lg text-xs">
                            {cartItems[itemId][size]}
                          </span>
                          <button
                            onClick={() => incrementQuantity(itemId, size)}
                            className="px-2 py-1 md:text-lg text-xs bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                        <div className="ml-4 text-lg font-semibold md:text-lg text-xs">
                          ₹{cartItems[itemId][size] * product.price}
                        </div>
                        <button
                          onClick={() => deleteItem(itemId, size)}
                          className="ml-4 text-red-500"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    ));
                  })
                ) : (
                  <div className="text-center text-gray-600 dark:text-gray-200 py-16">
                    <h4 className="text-2xl font-medium mb-4">Your Cart is Empty</h4>
                    <FontAwesomeIcon icon={faShoePrints} className="text-6xl text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 lg:ml-4">
            <div className="dark:bg-blue-600 bg-blue-200 text-black dark:text-white rounded-lg shadow-lg">
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-4">Order Summary</h5>
                <div className="md:text-lg text-base flex justify-between mb-4">
                  <p>Subtotal:</p>
                  <p>₹{calculateTotal() - packageFees}</p>
                </div>
                <div className="md:text-lg text-base flex justify-between mb-4">
                  <p>Package Fees:</p>
                  <p>₹{packageFees}</p>
                </div>
                <div className="md:text-lg text-base flex justify-between mb-6">
                  <p className="font-semibold">Total (Incl. Taxes):</p>
                  <p className="font-semibold">₹{calculateTotal()}</p>
                </div>
                <button
                  onClick={handleProceedToPay}
                  className="w-full bg-green-600 dark:bg-green-300 dark:text-black text-white py-3 rounded-md hover:bg-green-500"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => setShowClearModal(true)}
                  className="w-full mt-4 text-red-600 py-3 rounded-md hover:bg-red-300"
                >
                  Clear All Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal for Clear All Cart */}
      {showClearModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
            <p className="mb-4">Do you want to clear all items in your cart?</p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowClearModal(false)}
                className="bg-gray-300 px-4 py-2 rounded-md text-black hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleClearCart}
                className="bg-slate-900 px-4 py-2 rounded-md text-white hover:bg-red-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cartpage;
