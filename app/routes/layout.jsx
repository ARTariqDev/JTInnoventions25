import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBg from "../components/HeroBg";

export default function layout() {
  return (
    <main>
      <HeroBg />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
