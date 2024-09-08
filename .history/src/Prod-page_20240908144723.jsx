import React from "react";
import Products from "./Components/Products";
import Carosel from "./Components/Carosel";

function Prodpage() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-8">
      <Carosel />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
    </div>
  );
}

export default Prodpage;
