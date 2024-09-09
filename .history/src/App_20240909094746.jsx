import { Route, Routes } from "react-router-dom";
import "./App.css";

import Prodpage from "./Prod-page";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import Cartpage from "./Cart-page";
import ProductInfo from "./ProductInfo";
import { useState } from "react";

function App() {
  const [changeTheme, setChangeTheme] = useState(false);

  const toggleTheme = () => {
    setChangeTheme(!changeTheme);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
      <div className="  mx-auto max-w-screen-xl p-4">
        <NavBar theme={toggleTheme} />
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
