import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "flowbite-react";
import "../index.css"

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';

  // Determine text color based on page and scroll position
  const getTextColor = () => {
    if (isNavOpen) return "text-black";
    if (isHomePage) {
      return scrolled ? "text-black" : "text-white";
    }
    return "text-black";
  };

  return (
    <nav
      className={`fixed w-full transition-all duration-300 ${
        isNavOpen ? "bg-white" : scrolled ? "bg-white shadow-lg" : isHomePage ? "bg-transparent" : "bg-white"
      } z-50 pb-4`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="images/eercLogo.png"
            className="w-12 h-12 mr-2"
            alt="Logo"
          />
          <span className={`self-center text-2xl font-semibold whitespace-nowrap ${getTextColor()}`}>
             
          </span>
        </Link>
        <button
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 ${getTextColor()}`}
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isNavOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div
          className={`${
            isNavOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex md:items-center md:space-x-20 transition-all duration-300 ease-in-out`}
        >
          <ul
            className={`font-medium flex flex-col md:flex-row items-center p-4 md:p-0 mt-8 border border-gray-100 rounded-lg ${
              isNavOpen ? "bg-white" : "bg-transparent"
            } md:space-x-20 rtl:space-x-reverse md:mt-0 md:border-0`}
          >
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/newsletter", label: "Newsletter" },
              { path: "/gallery", label: "Gallery" },
            ].map((item) => (
              <Link key={item.path} to={item.path}>
                <li
                  className={`block py-2 px-3 rounded transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-[#F59E0B] font-semibold"
                      : isNavOpen || scrolled || !isHomePage
                      ? "text-black hover:text-[#F59E0B]"
                      : "text-white hover:text-[#F59E0B]"
                  }`}
                >
                  {item.label}
                </li>
              </Link>
            ))}
            <Link to="/contact">
              <li className="block py-2 px-3">
                <Button className="rounded-xl bg-[#F59E0B] hover:bg-[#D97706] transition-colors duration-200 font-bold text-xl">
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

export default Nav;