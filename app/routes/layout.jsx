import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBg from "../components/HeroBg";

export default function layout() {
  return (
    <main>
      <HeroBg />
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-[#050c1a]/97 via-[#050c1a]/97 to-[#050c1a]/97 z-[-1]" />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
