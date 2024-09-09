import React, { createContext, useState } from "react";
import { productsdData } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products] = useState(productsdData);
  const [cartItem, setCartItem] = useState({});

  const addToCart = async (itemId) => {};

  return (
    <ShopContext.Provider value={{ products }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
