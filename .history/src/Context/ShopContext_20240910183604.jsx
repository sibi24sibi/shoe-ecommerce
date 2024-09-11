import React, { createContext, useState, useEffect } from "react";
import { productsdData } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products] = useState(productsdData);
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage on initial load
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  // Use effect to update localStorage whenever cartItems changes
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data object
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", productDescription);
    formData.append("image", productImage);

    // Upload to server
    const response = await fetch("/api/upload-product", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Product uploaded successfully");
    } else {
      console.log("Failed to upload product");
    }
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
