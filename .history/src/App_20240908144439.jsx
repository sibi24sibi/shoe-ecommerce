import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cartpage from "./Cart-page";
import Carosel from "./Components/Carosel";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBAr";
import Prodpage from "./Prod-page";

function App() {
  return (
    <>
      <div className="  mx-auto max-w-screen-xl p-4">
        <Routes>
          <Route path="/" element={<Prodpage />} />
          <Route path="/" />
          <Route />
          <Route />
        </Routes>
      </div>
    </>
  );
}

export default App;
