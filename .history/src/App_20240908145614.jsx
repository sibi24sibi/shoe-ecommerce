import { Route, Routes } from "react-router-dom";
import "./App.css";

import Prodpage from "./Prod-page";
import NavBar from "./NavBar";
import Carosel from "./Components/Carosel";
import Products from "./Components/Products";
import NavBar from "./../.history/src/Components/NavBAr_20240908121242";

function App() {
  return (
    <>
      <div className="  mx-auto max-w-screen-xl p-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Prodpage />} />
          <Route path="/" />
          <Route path="/productInfo/:productInfoId" />
          <Route path="/cart" />
        </Routes>
      </div>
    </>
  );
}

export default App;
