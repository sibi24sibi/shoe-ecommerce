import React, { useContext, useState } from "react";
import { ShopContext } from "./Context/ShopContext";

function AddProductForm() {
  const { addNewProduct } = useContext(ShopContext);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [image, setImage] = useState(null);

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 1000000) + Date.now();
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      _id: generateRandomId(),
      name: productName,
      image: image ? URL.createObjectURL(image) : null,
      price: parseFloat(price),
      size: selectedSizes,
      description:
        "This shoe is made with a breathable cushioning for comfort and support. It's designed for indoor use, perfect for play or sports.",
      rating: 4.5,
      reviews: 120,
      brand: "Gazelle",
      manufacturingDetails: {
        country: "China",
        material: "Synthetic, Rubber",
        year: "2023",
      },
      warranty: "6 months manufacturer warranty",
      additionalFeatures: [
        "Chunky sole for added style",
        "Synthetic upper with bold color blocks",
        "Rubber outsole for durability",
      ],
    };

    addNewProduct(newProduct);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-10">
      <form
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add New Product</h2>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="product_name"
            id="product_name"
            className="block py-3 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="price"
            id="price"
            className="block py-3 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Select Sizes
          </label>
          <div className="flex flex-wrap gap-4">
            {["8", "9", "10", "11"].map((size) => (
              <div key={size} className="flex items-center">
                <input
                  type="checkbox"
                  id={`size_${size}`}
                  value={size}
                  onChange={handleSizeChange}
                  className="mr-2"
                />
                <label htmlFor={`size_${size}`} className="text-sm">
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm mx-5 text-gray-900 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
