import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMoon,
  faSun,
  faSearch,
  faUserTie,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";

function NavBar() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  const { getCartCount } = useContext(ShopContext);

  return (
    <div className="mb-8 sticky-top">
      {/* Top Navbar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={assets.Logo} className="h-8" alt="Shop Logo" />
            <span className="self-center text-xs/[0.2555rem] nerko-one-regular uppercase md:text-2xl    md:font-semibold  font-normal whitespace-nowrap dark:text-white">
              Nivakush Footware
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white"
              />
              <i className="fa-solid fa-magnifying-glass  absolute left-3 top-4 text-gray-500 dark:text-gray-400"></i>
            </div>

            <NavLink
              to="/cart"
              className="    text-gray-500 dark:text-white hover:underline relative"
            >
              <div className="flex items-center relative">
                <i className="fa-solid fa-cart-shopping bg-blue-200 dark:bg-blue-500 p-3 text-black dark:text-slate-50 rounded-md"></i>
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </div>
            </NavLink>

            <button
              onClick={toggleTheme}
              className="relative inline-flex items-center  text-base md:text-lg p-1 bg-blue-200 dark:bg-blue-500 rounded-full md:w-12 md:h-6 w-10   h-6 transition-colors duration-300 focus:outline-none shadow-md"
            >
              <span
                className={`absolute inline-block md:w-4 md:h-4 w-4 h-4  bg-blue-400 dark:bg-blue-200 rounded-full transition-transform transform ${
                  darkTheme
                    ? "translate-x-4 md:translate-x-6"
                    : "translate-x-0 md:translate-x-1"
                }`}
              />
              <span className="sr-only">Toggle Theme</span>
            </button>

            <NavLink
              to="/login "
              className="text-sm text-gray-500   md:text-lg dark:text-white hover:underline"
            >
              <div className="relative">
                <img
                  src={assets.userlogo}
                  className=" size-8 dark:border-gray-700 border-gray-100  border-4    rounded-full"
                  alt=""
                />

                <span className="top-0 left-6 absolute animate-ping   w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800  block md:hidden rounded-full"></span>
                <span className="top-0 left-6 absolute animate-ping  w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800  hidden md:block rounded-full"></span>
                <span className="top-0 left-6 absolute animate-ping   w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800  block md:hidden rounded-full"></span>
                <span className="top-0 left-6 absolute animate-ping  w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800  hidden md:block rounded-full"></span>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="bg-gray-50 dark:bg-gray-700 sticky top-0 z-50 py-3">
        <div className="max-w-screen-xl px-4 py-3 mx-auto  text-base  ">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <NavLink
                to="/"
                className="text-gray-900 dark:text-white hover:underline  text-base font-semibold"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className="text-gray-900 dark:text-white hover:underline  text-base font-semibold"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-gray-900 dark:text-white hover:underline  text-base font-semibold"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className="text-gray-900 dark:text-white hover:underline  text-base font-semibold"
              >
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;