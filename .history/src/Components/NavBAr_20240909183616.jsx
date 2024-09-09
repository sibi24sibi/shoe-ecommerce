import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext"; // Import your ShopContext

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
    <div className="mb-8">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={assets.Logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Shoe market
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse relative">
            <NavLink
              to="/cart"
              className="text-sm text-gray-500 dark:text-white hover:underline relative"
            >
              <div className="flex items-center relative">
                <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
                {/* Display cart count */}
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </div>
            </NavLink>

            <a
              href="#"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
            {/* Button to toggle the theme with icon */}
            <button onClick={toggleTheme} className="text-sm dark:text-white">
              <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} />
            </button>
          </div>
        </div>
      </nav>

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
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Features
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;