import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900  fixed bottom-0 left-0">
        <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src={assets.Logo}
                  className="h-8 me-3"
                  alt="Nivakush Logo"
                />
                <span className="self-center nerko-one-regular text-sm uppercase md:text-2xl font-semibold whitespace-nowrap dark:text-white">
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
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
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
                    d="M10 2.3A7.7 7.7 0 1 0 17.7 10 7.7 7.7 0 0 0 10 2.3Zm4.2 7.7a4.2 4.2 0 1 1-8.4 0 4.2 4.2 0 0 1 8.4 0ZM15 5a1.25 1.25 0 1 1-2.5 0A1.25 1.25 0 0 1 15 5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
