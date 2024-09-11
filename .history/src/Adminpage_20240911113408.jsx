import React, { useState } from "react";

function AddProductForm() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Product Name:", productName);
    console.log("Price:", price);
    console.log("Selected Sizes:", selectedSizes);

    // Clear form
    setProductName("");
    setPrice("");
    setSelectedSizes([]);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="product_name"
            id="product_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <label
            htmlFor="product_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="price"
            id="price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            Select Sizes
          </label>
          <div className="flex gap-4">
            {["8", "9", "10", "11"].map((size) => (
              <div key={size} className="flex items-center">
                <input
                  type="checkbox"
                  id={`size_${size}`}
                  value={size}
                  checked={selectedSizes.includes(size)}
                  onChange={handleSizeChange}
                  className="mr-2"
                />
                <label
                  htmlFor={`size_${size}`}
                  className="text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
