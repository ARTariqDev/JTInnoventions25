import { useState, useEffect } from "react";
import { Link } from "react-router";
import "../app.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`relative ${
        isScrolled ? "bg-black/60" : "bg-black/30"
      } backdrop-blur-md w-full px-3 xs:px-6 md:px-10 mb-2 fixed top-0 left-0 right-0 z-50 font-[Vermin] tracking-wider shadow-md shadow-[#3399ff]/50 transition-all duration-300 border-4 border-[#3399ff]/40 ${
        isScrolled ? "pt-2 pb-1" : "pt-3 pb-2"
      }`}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,_#1a3d8f_1px,_transparent_1px)] bg-[length:20px_20px] opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3399ff] to-transparent opacity-60"></div>

      <div className="relative flex flex-col sm:flex-row sm:justify-between mx-auto w-full px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-[#3399ff] rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-[#0073e6] rounded-full"></div>
            </div>

            <h2
              className={`transition-all duration-300 text-[#ffffff] drop-shadow-[0_0_10px_#3399ff] ${
                isScrolled
                  ? "text-base md:text-lg lg:text-xl"
                  : "text-lg md:text-xl lg:text-2xl"
              }`}
              id="headerText"
            >
              JT Innoventions{" "}
              <span className="text-[#66b3ff] font-mono text-xs ml-1 opacity-90">
                ’25
              </span>
            </h2>

            <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-[#3399ff] to-transparent"></div>
          </div>

          <button
            onClick={handleClick}
            className="cursor-pointer text-[#33bbff] drop-shadow-[0_0_8px_#3399ff] hover:drop-shadow-[0_0_12px_#66ccff] transition-all sm:hidden relative z-10 p-2"
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
          className={`overflow-hidden flex flex-col sm:flex-row justify-center items-center text-[#ffffff] drop-shadow-[0_0_8px_#3399ff] sm:opacity-100 sm:max-h-none uppercase transition-all duration-500 ease-in-out w-full sm:w-auto text-center tracking-wide ${
            isScrolled ? "text-xs md:text-sm" : "text-sm md:text-base"
          } ${
            isOpen
              ? "max-h-[300px] opacity-100 mt-4 sm:mt-0"
              : "max-h-0 opacity-0 sm:opacity-100 sm:max-h-none mt-0"
          }`}
          id="headerText"
        >
          {[
            { to: "/#hero", text: "Home" },
            { to: "/#about", text: "About" },
            { to: "/categories", text: "Categories" },
            { to: "/register", text: "Register", special: true },
            { to: "/#contact", text: "Contact" },
          ].map((link, idx) => (
            <li key={idx} className="w-full sm:w-auto relative group">
              <Link
                className="block py-2 px-2 md:px-3 relative hover:drop-shadow-[0_0_14px_#66ccff] transition-all"
                to={link.to}
                onClick={handleLinkClick}
              >
                {link.special && (
                  <div className="absolute inset-0 bg-[#3399ff]/20 backdrop-blur-sm group-hover:bg-[#66ccff]/30 transition-all duration-300"></div>
                )}
                <span className="relative">{link.text}</span>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-[#66ccff] group-hover:w-full transition-all duration-500"></div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-[#3399ff]/70 to-transparent"></div>
      </div>
    </nav>
  );
}

export default Navbar;
