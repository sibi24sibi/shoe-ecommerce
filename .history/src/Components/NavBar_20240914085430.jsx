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
              className="relative inline-flex items-center  text-sm md:text-lg p-1 bg-blue-200 dark:bg-blue-800 rounded-full md:w-12 md:h-6 w-6   h-3 transition-colors duration-300 focus:outline-none shadow-md"
            >
              <span
                className={`absolute inline-block md:w-4 md:h-4 w-2 h-2  bg-blue-400 dark:bg-blue-500 rounded-full transition-transform transform ${
                  darkTheme
                    ? "translate-x-3 md:translate-x-6"
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
                <div className="relative md:w-9 md:h-9 w-5  h-5 text-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <img
                    src={assets.userlogo}
                    className=" size-8 rounded-full"
                    alt=""
                  />
                </div>
                <span className="top-0 left-4 absolute   w-2 h-2 bg-green-400 border-2 border-white dark:border-gray-800  block md:hidden rounded-full"></span>
                <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800  hidden md:block rounded-full"></span>
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

      {/* <header class="bg-white">
  <div class="container mx-auto px-4 py-8 flex items-center">

    <!-- logo -->
    <div class="mr-auto md:w-48 flex-shrink-0">
      <img class="h-8 md:h-10" src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png" alt="">
    </div>

    <!-- search -->
    <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
      <select class="bg-transparent uppercase font-bold text-sm p-4 mr-4" name="" id="">
        <option>all categories</option>
      </select>
      <input class="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4" type="text" placeholder="I'm searching for ...">
      <svg class="ml-auto h-5 px-4 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-9x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
    </div>

    <!-- phone number -->
    <div class="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
      <span class="font-bold md:text-xl">8 800 332 65-66</span>
      <span class="font-semibold text-sm text-gray-400">Support 24/7</span>
    </div>

    <!-- buttons -->
    <nav class="contents">
      <ul class="ml-4 xl:w-48 flex items-center justify-end">
        <li class="ml-2 lg:ml-4 relative inline-block">
          <a class="" href="">
            <svg class="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14 fa-9x"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
          </a>
        </li>
        <li class="ml-2 lg:ml-4 relative inline-block">
          <a class="" href="">
            <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">3</div>
            <svg class="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16 fa-9x"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
          </a>
        </li>
        <li class="ml-2 lg:ml-4 relative inline-block">
          <a class="" href="">
            <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">12</div>
            <svg class="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-shopping-cart fa-w-18 fa-9x"><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg>
          </a>
        </li>
      </ul>
    </nav>

    <!-- cart count -->
    <div class="ml-4 hidden sm:flex flex-col font-bold">
      <span class="text-xs text-gray-400">Your Cart</span>
      <span>$2,650,59</span>
    </div>
  </div>
  
  <hr>
</header> */}
    </div>
  );
}

export default NavBar;
