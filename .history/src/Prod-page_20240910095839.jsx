import Products from "./Components/Products";
import Carosel from "./Components/Carosel";
import { productsdData } from "./assets/assets";
import { Link } from "react-router-dom";

function Prodpage() {
  return (
    <div>
      <Carosel />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-center py-6 my-8 rounded-lg shadow-lg">
  <div className="absolute inset-0 flex items-center justify-center">
    <svg
      className="w-32 h-32 text-white opacity-20"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill="currentColor" />
    </svg>
  </div>
  <div className="relative z-10">
    <p className="text-2xl font-bold text-white mb-4">Exclusive Offer!</p>
    <p className="text-lg text-white mb-6">Flat 40% Off on Selected Products</p>
    <Link
      t


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
