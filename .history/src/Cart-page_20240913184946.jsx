import React, { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faTrashAlt,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Cartpage() {
  const {
    cartItems,
    products,
    incrementQuantity,
    decrementQuantity,
    deleteItem,
  } = useContext(ShopContext);

  const navigate = useNavigate();
  const packageFees = 50;

  const calculateTotal = () => {
    let total = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const product = products.find(
          (product) => product._id === parseInt(itemId, 10)
        );
        if (product) {
          total += cartItems[itemId][size] * product.price;
        } else {
          console.warn(`Product with ID ${itemId} not found`);
        }
      }
    }
    return total + packageFees;
  };

  const handleProceedToPay = () => {
    navigate("/payment");
  };

  return (
    <section className="h-100 h-custom">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            {Object.keys(cartItems).length > 0 ? (
              <>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="h5">
                          Shopping Bag
                        </th>
                        <th scope="col">Size</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(cartItems).map((itemId) => {
                        const product = products.find(
                          (product) => product._id === parseInt(itemId, 10)
                        );
                        if (!product) return null;

                        return Object.keys(cartItems[itemId]).map((size) => (
                          <tr key={itemId + size}>
                            <th scope="row">
                              <div className="d-flex align-items-center">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="img-fluid rounded-3"
                                  style={{ width: "120px" }}
                                />
                                <div className="flex-column ms-4">
                                  <p className="mb-2">{product.name}</p>
                                </div>
                              </div>
                            </th>
                            <td className="align-middle">
                              <p className="mb-0" style={{ fontWeight: "500" }}>
                                {size}
                              </p>
                            </td>
                            <td className="align-middle">
                              <div className="d-flex flex-row">
                                <button
                                  onClick={() =>
                                    decrementQuantity(itemId, size)
                                  }
                                  className="btn btn-link px-2"
                                >
                                  <FontAwesomeIcon icon={faMinus} />
                                </button>

                                <input
                                  min="0"
                                  name="quantity"
                                  value={cartItems[itemId][size]}
                                  type="number"
                                  className="form-control form-control-sm"
                                  style={{ width: "50px" }}
                                  readOnly
                                />

                                <button
                                  onClick={() =>
                                    incrementQuantity(itemId, size)
                                  }
                                  className="btn btn-link px-2"
                                >
                                  <FontAwesomeIcon icon={faPlus} />
                                </button>
                              </div>
                            </td>
                            <td className="align-middle">
                              <p className="mb-0" style={{ fontWeight: "500" }}>
                                ₹{cartItems[itemId][size] * product.price}
                              </p>
                            </td>
                            <td className="align-middle">
                              <button
                                onClick={() => deleteItem(itemId, size)}
                                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-400"
                              >
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </button>
                            </td>
                          </tr>
                        ));
                      })}
                    </tbody>
                  </table>
                </div>

                <div
                  className="card shadow-2-strong mb-5 mb-lg-0"
                  style={{ borderRadius: "16px" }}
                >
                  <div className="card-body p-4">
                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: 500 }}
                    >
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">₹{calculateTotal() - packageFees}</p>
                    </div>

                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: 500 }}
                    >
                      <p className="mb-0">Package Fees</p>
                      <p className="mb-0">₹{packageFees}</p>
                    </div>

                    <hr className="my-4" />

                    <div
                      className="d-flex justify-content-between mb-4"
                      style={{ fontWeight: 500 }}
                    >
                      <p className="mb-2">Total (tax included)</p>
                      <p className="mb-2">₹{calculateTotal()}</p>
                    </div>

                    <button
                      type="button"
                      onClick={handleProceedToPay}
                      className="btn btn-primary btn-block btn-lg"
                    >
                      <div className="d-flex justify-content-between">
                        <span>Proceed to Pay</span>
                        <span>₹{calculateTotal()}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-gray-900 dark:text-gray-100 flex flex-col justify-center items-center min-h-[50vh] space-y-6">
                <h4 className="text-3xl font-medium">Your Cart is Empty</h4>
                <FontAwesomeIcon
                  className="text-5xl text-gray-400 dark:text-gray-500"
                  icon={faShoePrints}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cartpage;
