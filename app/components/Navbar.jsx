import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import "../app.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const prevScrollYRef = useRef(0);
  const handleClick = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const scrollY = window.scrollY;
        if (scrollY > prevScrollYRef.current && scrollY > 55) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        prevScrollYRef.current = scrollY;
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        transform: `translateY(${showNavbar ? 0 : "-100%"})`,
        opacity: showNavbar ? 1 : 0,
      }}
      className="bg-black/40 backdrop-blur-md w-full pt-3 pb-2 px-3 xs:px-6 md:px-10 mb-2 fixed top-0 left-0 right-0 z-50 font-mono tracking-wider shadow-md shadow-blue-500/30 transition-all duration-300 border-4 border-blue-500/30 "
    >
      <div className="flex flex-col sm:flex-row sm:justify-between mx-auto w-full text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-xl lg:text-2xl" id="headerText">
            JT Innoventions'25{" "}
          </h2>
          <button
            onClick={handleClick}
            className="cursor-pointer text-gray-400 hover:text-white active:text-white transition-all delay-150 ease-out sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
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
          className={`font-medium cursor-pointer overflow-hidden mt-0.5 text-sm md:text-base flex flex-col sm:flex-row justify-center items-center text-gray-400 sm:opacity-100 sm:max-h-none uppercase transform-all duration-800 ease-in-out 
            ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <li>
            <Link className="py-1 px-2 md:px-3" to="/#hero">
              Home
            </Link>
          </li>
          <li>
            <Link className="py-1 px-2 md:px-3" to="/#about">
              About
            </Link>
          </li>
          <li>
            <Link className="py-1 px-2 md:px-3" to="/categories">
              Categories
            </Link>
          </li>
          <li>
            <Link className="py-1 px-2 md:px-3" href="">
              Register
            </Link>
          </li>
          <li>
            <Link className="pt-1 px-2 sm:py-1 md:pl-3" to="/#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
