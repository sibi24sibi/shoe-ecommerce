import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const slides = [
  {
    imgSrc: assets.Carosel1,
    imgAlt:
      "Vibrant abstract painting with swirling blue and light pink hues on a canvas.",
    caption: "Caption for Slide 1",
  },
  {
    imgSrc: assets.Carosel2,
    imgAlt:
      "Vibrant abstract painting with swirling red, yellow, and pink hues on a canvas.",
    caption: "Caption for Slide 2",
  },
  {
    imgSrc: assets.Carosel3,
    imgAlt:
      "Vibrant abstract painting with swirling blue and purple hues on a canvas.",
    caption: "Caption for Slide 3",
  },
];

function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  // Function to move to the previous slide
  const previous = () => {
    setCurrentSlideIndex((prev) => (prev > 1 ? prev - 1 : slides.length));
  };

  // Function to move to the next slide
  const next = () => {
    setCurrentSlideIndex((prev) => (prev < slides.length ? prev + 1 : 1));
  };

  // Use effect to set up auto-transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 5000); // Change slide every 5 seconds

    // Clear the interval on component unmount
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
      <div className="relative min-h-[50svh] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlideIndex === index + 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.imgSrc}
              alt={slide.imgAlt}
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-0 w-full bg-gray-800 bg-opacity-50 text-white text-center py-2">
              {slide.caption}
            </div>
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
