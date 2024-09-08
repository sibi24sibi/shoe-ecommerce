import React from "react";
import { createContext } from "react";
import { productsdData } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const value = { productsdData };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
