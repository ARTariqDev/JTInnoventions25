import { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-primary w-full pt-3 pb-2 px-3 xs:px-6 md:px-10 mb-2 fixed top-0 left-0 right-0 z-50 font-mono tracking-wider shadow-md shadow-secondary/60">
      <div className="flex flex-col sm:flex-row sm:justify-between mx-auto w-full text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-2xl">Innoventions</h2>
          <button
            onClick={handleClick}
            className="text-gray-400 hover:text-white active:text-white transition-all delay-200 ease-out sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <ul
          className={`font-medium cursor-pointer overflow-hidden mt-0.5 text-sm md:text-base flex flex-col sm:flex-row justify-center items-center text-gray-400 sm:opacity-100 sm:max-h-none uppercase transform-all duration-800 ease-in-out 
            ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <li className="py-1 sm:px-2 md:px-3">
            <Link href="">Home</Link>
          </li>
          <li className="py-1 sm:px-2 md:px-3">
            <Link href="">About</Link>
          </li>
          <li className="py-1 sm:px-2 md:px-3">
            <Link href="">Categories</Link>
          </li>
          <li className="py-1 sm:px-2 md:px-3">
            <Link href="">Register</Link>
          </li>
          <li className="pt-1 sm:px-2 sm:py-1 md:pl-3">
            <Link href="">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
