import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "flowbite-react";
import "../index.css"

function TestNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location =useLocation();

  const toggleNav = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  return (
    <nav
      className={`border-gray-200 ${
        isNavOpen ? "bg-black" : "bg-transparent"
      }  dark:bg-gray-900 z-50 relative`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="images/eercLogo.png"
            className="w-10 h-10 mr-2"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            EERC
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleNav}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5   sr-only"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isNavOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex md:items-center md:space-x-20`}
          id="navbar-default"
        >
          <ul
            className={`font-medium flex flex-col md:flex-row items-center p-4 md:p-0 mt-8 border border-gray-100 rounded-lg ${
              isNavOpen ? "bg-black" : "bg-gray-50"
            } ${location.pathname == '/' && !isNavOpen ? 'text-white' : 'text-black'} md:space-x-20 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
          >
            <Link to="/">
              <li
                className={`block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:hover:text-white md:dark:hover:bg-transparent`}
                aria-current="page"
              >
                Home
              </li>
            </Link>
           
            <Link to="/about">
              <li
                className={`block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                About
              </li>
            </Link>
             
            <Link to="/projects">
              <li
                className={`block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Projects
              </li>
            </Link>
            <Link to="/blog">
              <li
                className={`block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:hover:text-white md:dark:hover:bg-transparent`}
                aria-current="page"
              >
                Blog
              </li>
            </Link>
            
            <Link to="/gallery">
              <li
                className={`block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Gallery
              </li>
            </Link>
            

            <Link to="/contact">
              <li
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                {" "}
                <Button className="rounded-xl   bg-[#F59E0B] font-bold text-xl">
                  Let's Talk
                </Button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TestNav;