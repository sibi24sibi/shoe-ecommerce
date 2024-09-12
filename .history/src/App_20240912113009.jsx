import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./Payment";
import Prodpage from "./Prod-page";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import Cartpage from "./Cart-page";
import ProductInfo from "./ProductInfo";
import About from "./Aboutus";
import Pricing from "./Pricing";
import Shop from "./Shop";
import AdminLogin from "./AdminLogin";
import Admin from "./Adminpage";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <div className="bg-slate-50 dark:bg-slate-950">
        <ToastContainer />

        <NavBar />
        <div className="  mx-auto md:max-w-screen-xl  max-w-screen-sm ">
          <Routes>
            <ScrollToTop />
            <Route path="/" element={<Prodpage />} />
            <Route
              path="/productInfo/:productInfoId"
              element={<ProductInfo />}
            />
            <Route path="/cart" element={<Cartpage />} />

            <Route path="/payment" element={<Payment />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
