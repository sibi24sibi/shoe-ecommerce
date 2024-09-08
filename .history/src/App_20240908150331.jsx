import { Route, Routes } from "react-router-dom";
import "./App.css";

import Prodpage from "./Prod-page";
import NavBar from "./Components/NavBar";
import Carosel from "./Components/Carosel";
import Products from "./Components/Products";
import Cartpage from "./Cart-page";

function App() {
  return (
    <>
      <div className="  mx-auto max-w-screen-xl p-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Prodpage />} />
          <Route path="/productInfo/:productInfoId" />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
