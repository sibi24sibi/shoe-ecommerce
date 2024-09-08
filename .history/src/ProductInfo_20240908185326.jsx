import React, { createContext, useState } from "react";
import { productsdData } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products] = useState(productsdData);

  return (
    <ShopContext.Provider value={{ products }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
