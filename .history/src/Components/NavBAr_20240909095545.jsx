import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function NavBar({ toggleTheme }) {
  return (
    <div className="mb-8">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={assets.Logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Shoe Market
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <NavLink
              to="/cart"
              className="text-sm text-gray-500 dark:text-white hover:underline"
            >
              <div>
                <FontAwesomeIcon icon={faCartShopping} className=" " />
              </div>
            </NavLink>

            <a
              href="#"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
            <button type="button" onClick={toggleTheme}>
              Theme
            </button>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
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
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
