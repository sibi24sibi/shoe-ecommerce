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
    <div>
      <h1>Shopping Cart</h1>
      {Object.keys(cartItems).map((itemId) => {
        const product = products.find(
          (product) => product._id === parseInt(itemId, 10)
        );

        return (
          product && (
            <div key={itemId} className="cart-item">
              <div className="item-details">
                <FontAwesomeIcon icon={faShoePrints} />
                <span>{product.name}</span>
                <span>${product.price}</span>
              </div>
              <div className="item-quantity">
                <button
                  onClick={() => decrementQuantity(itemId)}
                  className="inline-flex h-5 w-5"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{cartItems[itemId]}</span>
                <button
                  onClick={() => incrementQuantity(itemId)}
                  className="inline-flex h-5 w-5"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button
                  onClick={() => deleteItem(itemId)}
                  className="inline-flex items-center text-sm font-medium text-red-600"
                >
                  <FontAwesomeIcon icon={faTrashAlt} /> Remove
                </button>
              </div>
            </div>
          )
        );
      })}

      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>Original price: ${calculateTotal() - packageFees}</p>
        <p>Savings: -$299.00</p>
        <p>Store Pickup: $99</p>
        <p>Tax: $799</p>
        <p>Total: ${calculateTotal()}</p>
      </div>

      <button onClick={handleProceedToPay}>Proceed to Checkout</button>
      <span> or </span>
      <button onClick={() => navigate("/")}>Continue Shopping</button>
    </div>
  );
}

export default Cartpage;
