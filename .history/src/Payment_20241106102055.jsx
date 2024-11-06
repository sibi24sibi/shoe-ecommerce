import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext";
import { toast } from "react-toastify";

function Payment() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const { clearCart, cartItems, products } = useContext(ShopContext);
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

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
    clearCart();
    toast.success("Order Successful");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleProceedToPay = () => {
    toast.info("Proceeding to checkout...");
    // Add any further logic for the checkout process here
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Payment</h2>

      <div className="mt-6 w-full max-w-7xl">
        <form
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-8"
          onSubmit={handlePaymentSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side: Payment Form */}
            <div className="space-y-6">
              <div className="mb-4">
                <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Full name (as displayed on card)*
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Bonnie Green"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="+1 234 567 890"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="location" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Address*
                </label>
                <textarea
                  id="location"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Enter your address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>

              {/* Payment Details */}
              <div className="mb-4">
                <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Card number*
                </label>
                <input
                  type="text"
                  id="card-number-input"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="card-expiration-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Card expiration*
                </label>
                <input
                  id="card-expiration-input"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="MM/YY"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="cvv-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  CVV*
                </label>
                <input
                  type="number"
                  id="cvv-input"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="•••"
                  required
                />
              </div>
            </div>

            {/* Order Summary (Right Side) */}
            <div className="w-full lg:w-1/3 lg:ml-4">
              <div className="dark:bg-blue-600 bg-blue-200 text-black dark:text-white rounded-lg shadow-lg">
                <div className="p-6">
                  <h5 className="text-lg font-semibold mb-4">Order Summary</h5>
                  <div className="md:text-lg text-base flex justify-between mb-4">
                    <p>Subtotal:</p>
                    <p>₹{calculateTotal() - packageFees}</p>
                  </div>
                  <div className="md:text-lg text-base flex justify-between mb-4">
                    <p>Package Fees:</p>
                    <p>₹{packageFees}</p>
                  </div>
                  <div className="md:text-lg text-base flex justify-between mb-6">
                    <p className="font-semibold">Total (Incl. Taxes):</p>
                    <p className="font-semibold">₹{calculateTotal()}</p>
                  </div>
                  <button
                    onClick={handleProceedToPay}
                    className="w-full bg-green-600 dark:bg-green-300 dark:text-black text-white py-3 rounded-md hover:bg-green-500"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
