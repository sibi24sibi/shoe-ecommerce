import { useState } from "react";

function SellerPage() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [submittedProduct, setSubmittedProduct] = useState(null); // State for storing the submitted product

  const handleFileChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the product upload logic here, such as sending data to an API
    const newProduct = {
      name: productName,
      description: productDescription,
      image: URL.createObjectURL(productImage), // Temporarily creating a URL for the uploaded image
    };
    setSubmittedProduct(newProduct); // Save the submitted product details
    setProductName("");
    setProductDescription("");
    setProductImage(null);
  };

  return (
    <div className="container mx-auto p-6">
      {!submittedProduct ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Upload a New Product</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Product Description
              </label>
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Product Image
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Upload Product
            </button>
          </form>
        </>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Product Uploaded</h2>
          <div>
            <img
              src={submittedProduct.image}
              alt={submittedProduct.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{submittedProduct.name}</h3>
            <p className="text-gray-700 mt-2">{submittedProduct.description}</p>
          </div>
          <button
            onClick={() => setSubmittedProduct(null)} // Reset to upload new product
            className="px-4 py-2 mt-4 bg-green-600 text-white rounded-md"
          >
            Upload Another Product
          </button>
        </div>
      )}
    </div>
  );
}

export default SellerPage;
