import { useNavigate } from "react-router-dom";

function SellerPage({ addSellerProduct }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleFileChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: productPrice,
      image: productImage,
    };
    addSellerProduct(newProduct); // Pass new product to Prodpage
    // Navigate to Prodpage or display uploaded product (based on your app structure)
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Product input fields */}
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        placeholder="Product Price"
      />
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload Product</button>
    </form>
  );
}

export default SellerPage;
