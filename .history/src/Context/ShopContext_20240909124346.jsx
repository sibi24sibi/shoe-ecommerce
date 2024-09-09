import React, { createContext, useState } from "react";
import { productsdData } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products] = useState(productsdData);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
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

  const incrementQuantity = (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
      setCartItems(cartData);
    }
  };

  const decrementQuantity = (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId] && cartData[itemId][size]) {
      if (cartData[itemId][size] > 1) {
        cartData[itemId][size] -= 1;
      } else {
        delete cartData[itemId][size];
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
      setCartItems(cartData);
      toast.success("Added to cart"  );
    };
  
    }
  };

  const deleteItem = (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId] && cartData[itemId][size]) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
      setCartItems(cartData);
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        totalCount += cartItems[item][size];
      }
    }
    return totalCount;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        deleteItem,
        getCartCount,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
