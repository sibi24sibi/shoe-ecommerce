import Products from "./Components/Products";
import Carosel from "./Components/Carosel";
import { productsdData } from "./assets/assets";
function Prodpage() {
  return (
    <div>
      <Carosel />

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-8">
        {productsdData.map((products) => {
          <Products Name={products.Name} />;
        })}
      </div>
    </div>
  );
}

export default Prodpage;
