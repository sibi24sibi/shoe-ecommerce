import Products from "./Components/Products";
import Carosel from "./Components/Carosel";
import { assets } from "../assets/assets";
function Prodpage() {
  return (
    <div>
      <Carosel />

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-8">
        <Products />
      </div>
    </div>
  );
}

export default Prodpage;
