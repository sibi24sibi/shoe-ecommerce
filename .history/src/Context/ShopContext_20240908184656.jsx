import React, { useState } from "react";
import { createContext } from "react";
import { productsdData } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState(productsdData);

  return (
    <ShopContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ShopContext.Provider>
  );
};
