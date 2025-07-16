import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SpotlightCanvas from "../components/SpotlightCanvas";
import About from "../components/About";
import Logo from "../assets/logo.png";
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
      <Hero id="hero" />
      <About id="about" />
    </main>
  );
}
