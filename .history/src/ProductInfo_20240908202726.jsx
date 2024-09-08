import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import PointerZoom from 'react-pointer-zoom';

function ProductInfo() {
  const { productInfoId } = useParams();
  const { products } = useContext(ShopContext);
  const [productShoesData, setProductShoesData] = useState(null);

  const fetchProductData = () => {
    const foundProduct = products.find(
      (item) => item._id === parseInt(productInfoId)
    );
    setProductShoesData(foundProduct);
  };

  useEffect(() => {
    fetchProductData();
  }, [productInfoId]); // Run the effect when productInfoId changes

  return productShoesData ? (
    <div className="flex">
      <div>
        
<PointerZoom
    size={100}
    image={{
      src={productShoesData.image},  
    }}
    zoomImage={{
        src: "img/cat-large.jpg",
        width: 1024,
        height: 768
    }}
    placeholderZoomImageSrc="img/blured-cat-small.jpg"
    borderColor="white"
    borderSize="5px"
    cursorOffset={{
        x: 100,
        y: -20
    }}
    pointerStyle={{
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "13.5px 23.4px 13.5px 0",
        borderColor: "transparent white transparent transparent",
        position: "absolute",
        left: "-18px",
        bottom: "10px"
    }}
    showPreview
    previewPosition={{ x: 100, y: 100 }}
    snapToPreview
    snapSmooth={0.075}
    snapDelay={300}
/>
      
      </div>
      <div className="  space-y-3">
        <h1 className=" text-5xl uppercase font-bold ">
          {productShoesData.name}
        </h1>
        <p> MRP in Indian currency:</p>
        <p className=" text-2xl font-medium font-serif text-yellow-900">
          {productShoesData.price}
        </p>
        <p>(Inclusive of tax)</p>

        <button className="px-4  py-2 bg-yellow-900 text-white font-bold rounded-md hover:bg-yellow-800 transition duration-300">
          Add to Cart
        </button>

        <ul className=" space-y-3 py-6 ">
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} /> Free
            Delivery, Free Returns
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} />
            Delivery: Delhi, Gurgaon: 1-2 Days, Metro cities:2-3 days , Others:
            3-5 days
          </li>

          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} /> COD
            available for orders below ₹5000
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} />
            Secure transactions with hassle free 14 days Exchange and Returns
          </li>
          <li>
            <FontAwesomeIcon className="mx-3" icon={faShoePrints} /> Save 5% on
            all Online Payments under Rs 5000/-
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default ProductInfo;
