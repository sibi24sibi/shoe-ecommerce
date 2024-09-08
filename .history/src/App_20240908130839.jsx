import "./App.css";
import Carosel from "./Components/Carosel";
import NavBar from "./Components/NavBAr";
import Prodpage from "./Prod-page";

function App() {
  return (
    <>
      <div className=" flex max-w-screen-xl">
        <NavBar />
        <Carosel />
        <Prodpage />
      </div>
    </>
  );
}

export default App;
