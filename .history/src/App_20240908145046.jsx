import { Route, Routes } from "react-router-dom";
import "./App.css";

import Prodpage from "./Prod-page";
import Carosel from "./Components/Carosel";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <div className="  mx-auto max-w-screen-xl p-4">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/" e />
          <Route />
          <Route />
        </Routes>
      </div>
    </>
  );
}

export default App;
