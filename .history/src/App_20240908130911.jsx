import "./App.css";
import Carosel from "./Components/Carosel";
import NavBar from "./Components/NavBAr";
import Prodpage from "./Prod-page";

function App() {
  return (
    <>
      <div className="  mx-auto max-w-screen-xl p-4">
        <NavBar />
        <Carosel />
        <Prodpage />
      </div>
    </>
  );
}

export default App;
