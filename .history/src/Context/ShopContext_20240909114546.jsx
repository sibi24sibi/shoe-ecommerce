import React, { createContext, useState } from "react";
import { productsdData } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products] = useState(productsdData);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("select product size");
    }
    // Create a deep copy of the current cart items
    let cartData = structuredClone(cartItems);

    // Check if the item already exists in the cart
    if (cartData[itemId]) {
      // If the size exists, increment the quantity
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        // Otherwise, add the size with quantity 1
        cartData[itemId][size] = 1;
      }
    } else {
      // If the item doesn't exist, initialize it with the size
      cartData[itemId] = { [size]: 1 };
    }

    // Update the state with the new cart data
    setCartItems(cartData);
  };

  return (
    <ShopContext.Provider value={{ products, cartItems, addToCart }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
