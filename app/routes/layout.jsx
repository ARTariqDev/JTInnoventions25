import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import herobg from "../assets/hero.jpg";
import "@fontsource/monaspace-neon";
import "@fontsource/monaspace-neon/600";

export default function layout() {
  return (
    <main>
      <div
        className="fixed inset-0 bg-cover bg-center z-[-2]"
        style={{
          backgroundImage: `url(${herobg})`,
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#050c1a]/97 via-[#050c1a]/97 to-[#050c1a]/97 z-[-1]" />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
