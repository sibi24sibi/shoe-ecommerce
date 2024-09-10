import Products from "./Components/Products";
import Carosel from "./Components/Carosel";
import { productsdData } from "./assets/assets";
import { Link } from "react-router-dom";

function Prodpage() {
  return (
    <div>
      <Carosel />

      {/* Banner Section */}
      <div className="bg-yellow-400 text-center py-4 my-6 text-white font-bold text-xl">
        <p>Exclusive Offer: Flat 40% Off on Selected Products!</p>
      </div>

      {/* Featured Products Heading */}
      <h2 className="text-3xl font-semibold text-center my-8">
        Featured Products
      </h2>

      {/* Products Grid */}
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
