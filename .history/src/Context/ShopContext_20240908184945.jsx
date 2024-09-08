import React from "react";
import { createContext } from "react";
import { productsdData } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  return (
    <ShopContext.Provider value={productsdData}>
      {props.children}
    </ShopContext.Provider>
  );
};
