import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBg from "../components/HeroBg";

export default function Layout() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const topOffset = navbarVisible ? "top-20" : "top-6"; // Adjust spacing when navbar hidden so the corners move up

  return (
    <main>
      <HeroBg />


      <div
        className={`transition-transform duration-300 ${
          navbarVisible ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 left-0 right-0 z-50`}
      >
        <Navbar />
      </div>

      <Outlet />
      <Footer />

      {/* moved the HUD corner here so they display over other sections as well */}
      <div
        className={`fixed ${topOffset} left-6 w-16 h-16 border-t-2 border-l-2 border-blue-400/30 animate-pulse z-50`}
      ></div>
      <div
        className={`fixed ${topOffset} right-6 w-16 h-16 border-t-2 border-r-2 border-blue-400/30 animate-pulse [animation-delay:300ms] z-50`}
      ></div>
      <div className="fixed bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-blue-400/30 animate-pulse [animation-delay:600ms] z-50"></div>
      <div className="fixed bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-blue-400/30 animate-pulse [animation-delay:900ms] z-50"></div>
    </main>
  );
}
