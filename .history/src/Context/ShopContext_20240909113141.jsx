import React, { createContext, useEffect, useState } from "react";
import { productsdData } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products] = useState(productsdData);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId,size) => {
    let cartData = structedClone(cartItems);

    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] +=1;
      }
      else{
        cartData[itemId][size] = 1;
      }
    }
    else{
       cartData[itemId] = { };
       cartData[itemId][size] = 1;
    }
      setCartItems(cartData);
    }
  };

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if(savedCart){
      setCartItems(JSON.parse(savedCart));
    }
  })
  return (
    <ShopContext.Provider value={{ products }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
