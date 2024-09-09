import { Carousel } from "flowbite-react";
import { assets } from "../assets/assets";

export function Carosel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-36">
      <Carousel slide={true}>
        <img src={assets.Carosel1} alt="..." />
        <img src={assets.Carosel2} alt="..." />
        <img src={assets.Carosel3} alt="..." />
        <img src={assets.Carosel2} alt="..." />
        <img src={assets.Carosel1} alt="..." />
      </Carousel>
    </div>
  );
}

export default Carosel;