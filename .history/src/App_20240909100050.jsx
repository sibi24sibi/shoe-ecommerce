import { Route, Routes } from "react-router-dom";
import "./App.css";

import Prodpage from "./Prod-page";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import Cartpage from "./Cart-page";
import ProductInfo from "./ProductInfo";

function App() {
  return (
    <>
      <div className="bg-slate-50 dark:bg-slate-950">
        <div className="  mx-auto max-w-screen-xl p-4">
          <NavBar />
          <Routes>
            <Route path="/" element={<Prodpage />} />
            <Route
              path="/productInfo/:productInfoId"
              element={<ProductInfo />}
            />
            <Route path="/cart" element={<Cartpage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;