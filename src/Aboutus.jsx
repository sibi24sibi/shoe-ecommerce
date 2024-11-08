import React from "react";

const About = () => {
  return (
    <div className=" grid ">
      <div className="place-content-center px-10">
        <div className="w-full mx-auto max-w-md p-4  my-16 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              About Us
            </h5>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-xs font-semibold text-gray-900 dark:text-white">
                    CEO
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center ">
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Bonnie Green
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-xs font-semibold text-gray-900 dark:text-white">
                    Product Manager
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Michael Gough
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-xs font-semibold text-gray-900 dark:text-white">
                    Tech lead
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center ">
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Lana Byrd
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-xs font-semibold text-gray-900 dark:text-white">
                    Developer
                  </div>
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Thomes Lean
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-xs font-semibold text-gray-900 dark:text-white">
                    Data Analyst
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
