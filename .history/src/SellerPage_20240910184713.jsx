import { useState } from "react";

function SellerPage() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [submittedProduct, setSubmittedProduct] = useState(null); // State to hold submitted product

  const handleFileChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create product object and update the state to display the product
    const newProduct = {
      name: productName,
      description: productDescription,
      image: URL.createObjectURL(productImage), // Create a URL for the image
    };
    setSubmittedProduct(newProduct);

    // Clear the form fields
    setProductName("");
    setProductDescription("");
    setProductImage(null);
  };

  return (
    <div className="container mx-auto p-6">
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

      {/* Display submitted product */}
      {submittedProduct && (
        <div className="mt-8">
          <h2 className="text-xl font-bold">Submitted Product</h2>
          <div className="mt-4">
            <p>
              <strong>Product Name:</strong> {submittedProduct.name}
            </p>
            <p>
              <strong>Product Description:</strong>{" "}
              {submittedProduct.description}
            </p>
            {submittedProduct.image && (
              <img
                src={submittedProduct.image}
                alt={submittedProduct.name}
                className="mt-4 w-64 h-64 object-cover rounded-md border"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SellerPage;
