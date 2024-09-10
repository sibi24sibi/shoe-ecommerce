import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src={assets.Logo}
                  className="h-8 me-3"
                  alt="Nivakush Logo"
                />
                <span className="self-center text-sm uppercase md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Nivakush Footwear
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Shop
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Men's Shoes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Women's Shoes
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Categories
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Sports Shoes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Casual Shoes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Formal Shoes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sneakers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Support
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Customer Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Shipping & Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 Nivakush Footwear. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 0 0-3.16 19.498c.5.092.683-.217.683-.483 0-.237-.009-.868-.014-1.703-2.782.603-3.368-1.343-3.368-1.343-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.07-.608.07-.608 1.002.071 1.53 1.029 1.53 1.029.892 1.528 2.34 1.087 2.91.831.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.986 1.03-2.684-.104-.253-.446-1.274.098-2.656 0 0 .84-.269 2.75 1.025a9.562 9.562 0 0 1 2.5-.336 9.56 9.56 0 0 1 2.5.336c1.91-1.294 2.75-1.025 2.75-1.025.544 1.382.202 2.403.098 2.656.642.698 1.03 1.592 1.03 2.684 0 3.842-2.34 4.688-4.566 4.935.36.31.682.92.682 1.852 0 1.336-.012 2.415-.012 2.744 0 .269.18.58.688.482A10 10 0 0 0 10 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.478 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.684-.217.684-.483 0-.237-.009-.868-.014-1.703-2.782.603-3.368-1.343-3.368-1.343-.454-1.153-1.11-1.46-1.11-1.46-.909-.62.07-.608.07-.608 1.002.071 1.53 1.029 1.53 1.029.893 1.528 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.986 1.03-2.684-.105-.253-.447-1.274.097-2.656 0 0 .84-.269 2.75 1.025a9.562 9.562 0 0 1 2.5-.336 9.56 9.56 0 0 1 2.5.336c1.91-1.294 2.75-1.025 2.75-1.025.544 1.382.202 2.403.097 2.656.642.698 1.03 1.592 1.03 2.684 0 3.842-2.34 4.688-4.566 4.935.36.31.682.92.682 1.852 0 1.336-.012 2.415-.012 2.744 0 .269.18.58.688.482C17.135 18.164 20 14.418 20 10c0-5.522-4.478-10-10-10Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">LinkedIn account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
