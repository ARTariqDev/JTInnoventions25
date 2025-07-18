import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SpotlightCanvas from "../components/SpotlightCanvas";
import About from "../components/About";
import Contact from "../components/Contact";
import Logo from "../assets/logo.png";
import herobg from "../assets/hero.jpg";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/monaspace-neon";
import "@fontsource/monaspace-neon/600";

export function links() {
  return [{ rel: "icon", type: "image/png", href: Logo }];
}

export function meta() {
  return [
    { title: "JT Innoventions'25" },
    { name: "description", content: "GET READY FOR AN EXCITING CHALLENGE!" },
  ];
}

export default function Home() {
  return (
    <main className="relative w-full h-full flex flex-col items-center justify-center overflow-visible">
      <SpotlightCanvas />
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center z-[-2]"
        style={{
          backgroundImage: `url(${herobg})`,
        }}
      />
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-[#050c1a]/97 via-[#050c1a]/97 to-[#050c1a]/97 z-[-1]" />
      <Hero id="hero" />
      <div className="border-4 border-blue-900/30 w-full">
        <About id="about" />
        <Contact id="contact" />
      </div>
    </main>
  );
}
