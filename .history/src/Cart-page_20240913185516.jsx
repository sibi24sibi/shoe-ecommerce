import React, { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faTrashAlt,
  faLongArrowAltLeft,
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
        } else {
          console.warn(`Product with ID ${itemId} not found`);
        }
      }
    }
    return total + packageFees;
  };

  const handleProceedToPay = () => {
    navigate("/payment");
  };

  return (
    <section className="h-full bg-gray-200">
      <div className="container py-5 h-full">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h5 className="text-xl font-medium">
                  <a href="#!" className="text-gray-600 flex items-center">
                    <FontAwesomeIcon
                      icon={faLongArrowAltLeft}
                      className="mr-2"
                    />
                    Continue shopping
                  </a>
                </h5>
                <p className="text-gray-600">
                  You have {Object.keys(cartItems).length} items in your cart
                </p>
              </div>

              <hr className="mb-6" />

              {Object.keys(cartItems).length > 0 ? (
                <div>
                  {Object.keys(cartItems).map((itemId) => {
                    const product = products.find(
                      (product) => product._id === parseInt(itemId, 10)
                    );
                    if (!product) return null;

                    return Object.keys(cartItems[itemId]).map((size) => (
                      <div
                        key={itemId + size}
                        className="flex items-center mb-4 p-4 border-b border-gray-300"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-md mr-4"
                        />
                        <div className="flex-grow">
                          <h5 className="text-lg font-semibold">
                            {product.name}
                          </h5>
                          <p className="text-gray-600 text-sm">{size}</p>
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => decrementQuantity(itemId, size)}
                            className="px-2 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span className="mx-2 text-lg">
                            {cartItems[itemId][size]}
                          </span>
                          <button
                            onClick={() => incrementQuantity(itemId, size)}
                            className="px-2 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                        <div className="ml-4 text-lg font-semibold">
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
                  })}

                  <div className="mt-6 bg-gray-100 p-4 rounded-md shadow-md">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total Amount:</span>
                      <span>₹{calculateTotal() - packageFees}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold mt-2">
                      <span>Package Fees:</span>
                      <span>₹{packageFees}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold mt-2">
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
                <div className="text-center text-gray-600 py-16">
                  <h4 className="text-2xl font-medium mb-4">
                    Your Cart is Empty
                  </h4>
                  <FontAwesomeIcon
                    icon={faShoePrints}
                    className="text-6xl text-gray-400"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cartpage;
