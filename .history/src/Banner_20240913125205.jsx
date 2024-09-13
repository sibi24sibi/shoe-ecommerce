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
      icon: faShoePrints,
      title: "Exclusive Sneakers",
      caption:
        "Step up your game with the latest sneakers, designed for comfort and style.",
    },
    {
      icon: faSlippers,
      title: "Casual Shoes",
      caption:
        "Stay relaxed and stylish with our range of comfortable casual shoes.",
    },
    {
      icon: faRunning,
      title: "Running Shoes",
      caption: "Hit the track with our lightweight, durable running shoes.",
    },
    {
      icon: faMale,
      title: "Formal Shoes",
      caption:
        "Look sharp and professional with our collection of elegant formal shoes.",
    },
  ];

  return (
    <div className="font-sans my-12">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-4">
        {BannerData.map((item, index) => (
          <a
            key={index}
            href="#"
            className="bg-gray-100 p-6 rounded-md transition-transform transform hover:scale-105 focus:outline-none"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md"
            />
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.caption}</p>
            <span className="text-blue-600 font-bold inline-block text-sm mt-4 hover:underline">
              Learn more
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Banner;
