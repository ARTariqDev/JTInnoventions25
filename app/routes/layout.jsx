import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBg from "../components/HeroBg";
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function layout() {
  return (
    <main>
      <SpeedInsights />
      <HeroBg />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
