import React, { useContext, useState } from "react";
import { ShopContext } from "./Context/ShopContext"; // Import the context

function AddProductForm() {
  const { addNewProduct } = useContext(ShopContext); // Get the addNewProduct function from context

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

    addNewProduct(newProduct); // Add the product to the context
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="product_name"
            id="product_name"
            className="block py-2.5 px-0 w-full text-sm dark:text-gray-100 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300"
            placeholder=" "
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <label
            htmlFor="product_name"
            className="absolute text-sm text-gray-500"
          >
            Product Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="price"
            id="price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300"
            placeholder=" "
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <label htmlFor="price" className="absolute text-sm text-gray-500">
            Price
          </label>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Select Sizes
          </label>
          <div className="flex gap-4">
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

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm bg-gray-50 border border-gray-300"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 rounded-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
