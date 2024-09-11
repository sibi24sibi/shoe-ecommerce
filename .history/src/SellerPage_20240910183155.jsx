import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

function BuyerPage() {
  const { products } = useContext(ShopContext);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-md">
            <img src={product.image} alt={product.name} className="w-full" />
            <h2 className="text-xl">{product.name}</h2>
            <p>{product.description}</p>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyerPage;
