import { useState } from "react";
import { Link } from "react-router";
import "../app.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-md w-full pt-3 pb-2 px-3 xs:px-6 md:px-10 mb-2 fixed top-0 left-0 right-0 z-50 font-mono tracking-wider shadow-md shadow-blue-500/30 transition-all duration-300 border-4 border-blue-500/30">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(34,211,238,0.3)_35%,rgba(34,211,238,0.3)_60%,transparent_60%,transparent_80%,rgba(34,211,238,0.3)_80%)] bg-[length:20px_20px] animate-pulse"></div>
      </div>

      <div className="relative flex flex-col sm:flex-row sm:justify-between mx-auto w-full text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-xl lg:text-2xl" id="headerText">
            JT Innoventions'25{" "}
          </h2>
          <button
            onClick={handleClick}
            className="cursor-pointer text-gray-400 hover:text-white active:text-white transition-all delay-150 ease-out sm:hidden relative z-10"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <ul
          className={`font-medium overflow-hidden text-sm md:text-base flex flex-col sm:flex-row justify-center items-center text-gray-400 sm:opacity-100 sm:max-h-none uppercase transition-all duration-500 ease-in-out w-full sm:w-auto text-center
            ${
              isOpen 
                ? "max-h-[300px] opacity-100 mt-4 sm:mt-0" 
                : "max-h-0 opacity-0 sm:opacity-100 sm:max-h-none mt-0"
            }`}
        >
          <li className="w-full sm:w-auto">
            <Link 
              className="block py-2 px-2 md:px-3 hover:text-white transition-colors duration-200" 
              to="/#hero"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link 
              className="block py-2 px-2 md:px-3 hover:text-white transition-colors duration-200" 
              to="/#about"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link 
              className="block py-2 px-2 md:px-3 hover:text-white transition-colors duration-200" 
              to="/categories"
              onClick={handleLinkClick}
            >
              Categories
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link 
              className="block py-2 px-2 md:px-3 hover:text-white transition-colors duration-200" 
              to="/register"
              onClick={handleLinkClick}
            >
              Register
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link 
              className="block py-2 px-2 md:px-3 hover:text-white transition-colors duration-200" 
              to="/#contact"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;