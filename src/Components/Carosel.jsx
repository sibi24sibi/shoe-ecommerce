import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const slides = [
  {
    imgSrc: assets.Carosel1,
    Title: "Shoes as Unique as You",
    caption: "We have unqiue brands and rare design products for sale.",
  },
  {
    imgSrc: assets.Carosel2,
    Title: "At affordable price",
    caption: "A-Z Cheap and beast product can be fount hear that can be owned.",
  },
  {
    imgSrc: assets.Carosel3,
    Title: "Your Feet Deserve Luxury",
    caption: "Has top brand collection there no low quality .",
  },
];

function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  const previous = () => {
    setCurrentSlideIndex((prev) => (prev > 1 ? prev - 1 : slides.length));
  };

  const next = () => {
    setCurrentSlideIndex((prev) => (prev < slides.length ? prev + 1 : 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Previous Button */}
      <button
        type="button"
        className="absolute left-5 top-1/2 z-20 flex rounded-full -translate-y-1/2 items-center justify-center bg-white/40 p-2 text-neutral-600 transition hover:bg-white/60 focus:outline-none dark:bg-neutral-950/40 dark:text-neutral-300 dark:hover:bg-neutral-950/60"
        aria-label="previous slide"
        onClick={previous}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeWidth="3"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="absolute right-5 top-1/2 z-20 flex rounded-full -translate-y-1/2 items-center justify-center bg-white/40 p-2 text-neutral-600 transition hover:bg-white/60 focus:outline-none dark:bg-neutral-950/40 dark:text-neutral-300 dark:hover:bg-neutral-950/60"
        aria-label="next slide"
        onClick={next}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeWidth="3"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Slides */}
      <div className="relative min-h-[50svh] md:min-h-[65svh] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlideIndex === index + 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <section className="bg-white dark:bg-gray-900  img-bg md:bg-none  ">
              <div className=" grid md:flex md:justify-between max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto px-10 md:px-20 place-self-center lg:col-span-7 ">
                  <h1 className="max-w-2xl  font-outline-2 text-border-sm-screen hover:font-outline-4 mb-4 text-4xl font-extrabold ou tracking-tight leading-none md:text-5xl xl:text-6xl md:dark:text-white">
                    {slide.Title}
                  </h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-950 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-950">
                    {slide.caption}
                  </p>
                  <a
                    href="#"
                    className="inline-flex text-black md:dark:text-white items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                    Get started
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex bg-blue-500 text-slate-200 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Speak to Sales
                  </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img
                    src={slide.imgSrc}
                    className=" size-72  mx-28 "
                    alt="mockup"
                  />
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute rounded-md bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-4 bg-white/75 px-1.5 py-1 dark:bg-neutral-950/75">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition ${
              currentSlideIndex === index + 1
                ? "bg-neutral-600"
                : "bg-neutral-600/50"
            }`}
            onClick={() => setCurrentSlideIndex(index + 1)}
            aria-label={`slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
