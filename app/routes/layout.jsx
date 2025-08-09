import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBg from "../components/HeroBg";

export default function Layout() {
  return (
    <main>
      <HeroBg />

      {/* made the navbar fixed instead of sticky cause it was annoying to scroll up again to make the navbar visible for navigating between pages/sections */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <Outlet />
      <Footer />


      <div className="fixed top-20 left-6 w-16 h-16 border-t-2 border-l-2 border-blue-400/30 animate-pulse z-50"></div>
      <div className="fixed top-20 right-6 w-16 h-16 border-t-2 border-r-2 border-blue-400/30 animate-pulse [animation-delay:300ms] z-50"></div>
      <div className="fixed bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-blue-400/30 animate-pulse [animation-delay:600ms] z-50"></div>
      <div className="fixed bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-blue-400/30 animate-pulse [animation-delay:900ms] z-50"></div>
    </main>
  );
}