import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "https://real-time-amazon-data.p.rapidapi.com/deal-products";
      const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/deal-products',
        params: {
          country: 'US',
          sort_by: 'FEATURED',
          page: '1'
        },
        headers: {
          'x-rapidapi-key': '1c9615ffa8msh94a1d61c727bf8cp1b6742jsnfac9e6cd5fad',
          'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setProducts(response.data);
        localStorage.setItem("products", JSON.stringify(response.data));
      } catch (error) {
        console.error('Error while fetching data:', error);
        toast.error("Failed to fetch products.");
      }
    };

    fetchData();
  }, []); 

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }

    setCartItems(prevCartItems => {
      const newCartItems = { ...prevCartItems };
      if (!newCartItems[itemId]) {
        newCartItems[itemId] = {};
      }
      newCartItems[itemId][size] = (newCartItems[itemId][size] || 0) + 1;
      return newCartItems;
    });

    toast.success("Added to cart");
  };

  const addNewProduct = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
    toast.success("New product added!");
  };

  const incrementQuantity = (itemId, size) => {
    setCartItems(prevCartItems => {
      const newCartItems = { ...prevCartItems };
      if (newCartItems[itemId]) {
        newCartItems[itemId][size] = (newCartItems[itemId][size] || 0) + 1;
      }
      return newCartItems;
    });
  };

  const decrementQuantity = (itemId, size) => {
    setCartItems(prevCartItems => {
      const newCartItems = { ...prevCartItems };
      if (newCartItems[itemId] && newCartItems[itemId][size]) {
        if (newCartItems[itemId][size] > 1) {
          newCartItems[itemId][size] -= 1;
        } else {
          delete newCartItems[itemId][size];
          if (Object.keys(newCartItems[itemId]).length === 0) {
            delete newCartItems[itemId];
          }
        }
      }
      return newCartItems;
    });
  };

  const deleteItem = (itemId, size) => {
    setCartItems(prevCartItems => {
      const newCartItems = { ...prevCartItems };
      if (newCartItems[itemId] && newCartItems[itemId][size]) {
        delete newCartItems[itemId][size];
        if (Object.keys(newCartItems[itemId]).length === 0) {
          delete newCartItems[itemId];
        }
      }
      return newCartItems;
    });
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((totalCount, sizes) => {
      return totalCount + Object.values(sizes).reduce((sizeCount, quantity) => sizeCount + quantity, 0);
    }, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        addNewProduct,
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
