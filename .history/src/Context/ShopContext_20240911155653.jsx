import React, { createContext, useState, useEffect } from "react";
import { productsdData } from "../assets/assets";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

export const ShopContext = createContext();

const navigate = Navigate();

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState(productsdData); // Manage products in state
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    setCartItems(cartData);
    toast.success("Added to cart");
  };

  // Add a new product to the store
  const addNewProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    toast.success("New product added!");
    navigate("/");
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
        addNewProduct, // Expose the new method for adding products
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
