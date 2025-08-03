import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBg from "../components/HeroBg";

export default function layout() {
  return (
    <main>
      <HeroBg />
      {/*Fixed this overlay that was causing issues with the bg (it was a really opaque gradient bg before so i changed it to a translucent dark blue */}
      <div className="fixed inset-0 w-full h-full bg-[#01091f]/96 z-[-1]" />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
