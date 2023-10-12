import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearData } from "../helpers/redux/slices/authSlice";

const Navbar = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(clearData(isLoggedIn));
    navigate("/login");
  }
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block mt-8 h-20 w-auto lg:hidden"
                src="https://bkdelivery.co.id/static/website/img/logo_2022.38d01a7c7dd3.png"
                alt="Burger King Delivery"
              />
              <Link to="/">
                <img
                  className="hidden drop-shadow-2xl mt-8 h-20 w-auto lg:block"
                  src="https://bkdelivery.co.id/static/website/img/logo_2022.38d01a7c7dd3.png"
                  alt="Burger King Delivery"
                />
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex flex-col text-gray-300 hover:underline px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    <span className="text-[#faaf18] font-flame">Delivery</span>
                    <span className="text-2xl text-white font-flame">
                      Order
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col text-gray-300 hover:underline px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    <span className="text-[#faaf18] font-flame">Get Fresh</span>
                    <span className="text-2xl text-white font-flame">
                      Promotions
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {isLoggedIn ? <>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <FiShoppingCart />
                </button>
                <div className="relative ml-3">
                  <div className="flex space-x-2 justify-center">
                    <button
                      type="button"
                      onClick={logOut}
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block px-6 py-2.5 bg-red-500 text-white font-extrabold tracking-wide text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </> : <>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <FiShoppingCart />
                </button>

                <div className="relative ml-3">
                  <div className="flex space-x-2 justify-center">
                    <Link to="/login"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block px-6 py-2.5 bg-[#faaf18] text-white font-extrabold tracking-wide text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
