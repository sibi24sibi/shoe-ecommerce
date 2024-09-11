import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SellerPage({ addSellerProduct }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName && productPrice && productImage) {
      const newProduct = {
        name: productName,
        price: productPrice,
        image: productImage,
      };
      addSellerProduct(newProduct); // Pass new product to Prodpage
      navigate("/prodpage"); // Navigate to Prodpage
    } else {
      alert("Please fill out all fields and upload an image.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Product input fields */}
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        placeholder="Product Price"
        required
      />
      <input type="file" onChange={handleFileChange} required />
      <button type="submit">Upload Product</button>
    </form>
  );
}

export default SellerPage;
