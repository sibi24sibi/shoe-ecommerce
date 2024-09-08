import Products from "./Components/Products";
import Carosel from "./Components/Carosel";
import { productsdData } from "./assets/assets";
import { Link } from "react-router-dom";

function Prodpage() {
  return (
    <div>
      <Carosel />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-8">
        {productsdData.map((item, index) => (
          <Link key={index} to={`/productInfo/${item._id}`}>
            <Products
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Prodpage;
