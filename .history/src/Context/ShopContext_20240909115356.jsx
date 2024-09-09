import React, { createContext, useState } from "react";
import { productsdData } from "../assets/assets";
import { toast } from "react-toastify";

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

  const getCartCount = () => {
    let totalCount = 0;
    for(const items in cartItems []){

      for(const item in cartItems[items][item]>0){
        try{
          if(cartItems[items][item]>0){
            totalCount += cartItems[items][item];
          }
        } catch (error){

        }
        
      }
    }
  }

  return (
    <ShopContext.Provider value={{ products, cartItems, addToCart ,getCartCount}}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
