import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBg from "../components/HeroBg";

export default function layout() {
  return (
    <main>
      <HeroBg />
      <div className="fixed inset-0 w-full h-full bg-[#01091f]/96 z-[-1]" />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
