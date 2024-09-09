import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import Prodpage from "./Prod-page";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Cartpage from "./Cart-page";
import ProductInfo from "./ProductInfo";

function App() {
  const [changeTheme, setChangeTheme] = useState(false);

  const toggleTheme = () => {
    setChangeTheme(!changeTheme);

    // Toggle the dark-mode class on the body
    if (!changeTheme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl p-4">
        <NavBar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Prodpage />} />
          <Route path="/productInfo/:productInfoId" element={<ProductInfo />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
