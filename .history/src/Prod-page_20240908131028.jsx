import React from "react";
import Products from "./Components/Products";

function Prodpage() {
  return (
    <div className="grid grid-cols-3 gap-4 m-8">
      <Products />
      <Products />
    </div>
  );
}

export default Prodpage;
