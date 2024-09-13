function Banner() {
  const BannerData = [
    {
      symbol: "ds",
      title: "dsdf",
      caption: "sdds",
    },
    {
      symbol: "",
      title: "sd",
      caption: "sdf",
    },
    {
      symbol: "",
      title: "dsffd",
      caption: "dsfdf",
    },
    {
      symbol: "",
      title: "dsf",
      caption: "dfs",
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
