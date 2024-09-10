import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMoon,
  faSun,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";

function NavBar() {
  // State to manage the dark theme
  const [darkTheme, setDarkTheme] = useState(false);

  // Effect to apply/remove the 'dark' class on the html element
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  // Access cart count from context
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
            <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">
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
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400"
              />
            </div>
            {/* Cart Icon with Count */}
            <NavLink
              to="/cart"
              className="text-sm text-gray-500 dark:text-white hover:underline relative"
            >
              <div className="flex items-center relative">
                <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </div>
            </NavLink>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <FontAwesomeIcon
                icon={darkTheme ? faSun : faMoon}
                className="text-xl text-gray-700 dark:text-gray-300"
              />
              <span className="absolute inset-0 rounded-full border-2 border-gray-300 dark:border-gray-600"></span>
            </button>

            {/* User Account Icon */}
            <NavLink
              to="/ "
              className="text-sm text-gray-500 dark:text-white hover:underline"
            >
              <FontAwesomeIcon icon={faUser} className="text-lg" />
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="bg-gray-50 dark:bg-gray-700 sticky top-0 z-50">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <NavLink
                to="/"
                className="text-gray-900 dark:text-white hover:underline"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="text-gray-900 dark:text-white hover:underline"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
