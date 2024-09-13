function Banner() {
  const BannerData = [
    {
      symbol: <i className="fas fa-shoe-prints"></i>,
      title: "Exclusive Sneakers",
      caption:
        "Step up your game with the latest sneakers, designed for comfort and style.",
    },
    {
      symbol: <i className="fa-regular fa-face-laugh-wink"></i>,
      title: "Casual Shoes",
      caption:
        "Stay relaxed and stylish with our range of comfortable casual shoes",
    },
    {
      symbol: <i className="fas fa-running"></i>,
      title: "Running Shoes",
      caption: "Hit the track with our lightweight, durable running shoes.",
    },
    {
      symbol: <i className="fas fa-male"></i>,
      title: "Formal Shoes",
      caption:
        "Look sharp and professional with our collection of elegant formal shoes.",
    },
  ];
  return (
    <div className="font-sans">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-4 my-12">
        {BannerData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-700 p-6 rounded-md"
          >
            <div className="text-4xl text-gray-400 dark:text-gray-100 mb-4">
              {item.symbol}
            </div>
            <h3 className="text-lg font-bold mb-2 dark:text-gray-300 text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {item.caption}
            </p>
            <a
              href=""
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
