import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const userName = useRef("  ");
  const passWord = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    userName.current.value = "admin";
    passWord.current.value = "password";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate user inputs
    if (!userName.current.value || !passWord.current.value) {
      alert("Please fill out all fields");
      return;
    }

    if (
      userName.current.value === "admin" &&
      passWord.current.value === "password"
    ) {
      navigate("/admin");
    } else {
      alert("Incorrect username or password");
    }

    userName.current.value = "";
    passWord.current.value = "";
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        className="max-w-sm w-full bg-gray-100 p-12"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="user"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            User name
          </label>
          <input
            type="text"
            id="user"
            ref={userName}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            ref={passWord}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
