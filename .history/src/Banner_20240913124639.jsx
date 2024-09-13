import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faSlippers,
  faRunning,
  faMale,
} from "@fortawesome/free-solid-svg-icons";

function Banner() {
  const BannerData = [
    {
      symbol: faShoePrints,
      title: "Exclusive Sneakers",
      caption:
        "Step up your game with the latest sneakers, designed for comfort and style.",
    },
    {
      symbol: faSlippers,
      title: "Casual Shoes",
      caption:
        "Stay relaxed and stylish with our range of comfortable casual shoes",
    },
    {
      symbol: faRunning,
      title: "Running Shoes",
      caption: "Hit the track with our lightweight, durable running shoes.",
    },
    {
      symbol: faMale,
      title: "Formal Shoes",
      caption:
        "Look sharp and professional with our collection of elegant formal shoes.",
    },
  ];
  return (
    <div className="font-sans">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-4 my-12">
        {BannerData.map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-md">
            <div>{item.symbol}</div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.caption}</p>
            <a
              href="javascript:void(0);"
              className="text-blue-600 font-bold inline-block text-sm mt-4 hover:underline"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;