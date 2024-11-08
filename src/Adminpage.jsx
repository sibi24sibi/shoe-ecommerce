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
      <form
        className="max-w-md  dark:bg-slate-800 bg-slate-100 p-12 mx-8  rounded-lg shadow-md "
        onSubmit={handleSubmit}
      >
        <h2 className=" text-slate-900 dark:text-slate-100 text-center text-3xl  font-bold mb-8">
          ADD PRODUCT
        </h2>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="product_name"
            className=" text-gray-900 dark:text-gray-200"
          >
            Product Name
          </label>
          <input
            type="text"
            name="product_name"
            id="product_name"
            className="block py-2.5  w-full text-sm dark:text-gray-100 px-2 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300"
            placeholder=" "
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className=" mb-5 group">
          <label htmlFor="price" className="  text-gray-900 dark:text-gray-200">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="block py-2.5  w-full text-sm dark:text-gray-100 px-2 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300"
            placeholder=" "
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium dark:text-gray-100  text-gray-900 mb-2">
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
                  className="mr-2 text-blue-600 dark:bg-gray-800 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                <label
                  htmlFor={`size_${size}`}
                  className="text-sm dark:text-gray-100 text-gray-900"
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-900 mb-2 dark:text-gray-100">
            Upload Image
          </label>
          <div
            className="relative border-2 border-dashed border-gray-300 rounded-md p-4 dark:bg-gray-500 bg-gray-50"
            onDragOver={(e) => e.preventDefault()} // Prevent default behavior
            onDrop={(e) => handleImageDrop(e)}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <p className="text-center text-gray-500 dark:text-gray-400">
              Drag and drop an image here or click to select a file
            </p>
          </div>
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
