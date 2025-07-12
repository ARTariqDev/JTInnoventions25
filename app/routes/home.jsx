import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SpotlightCanvas from "../components/SpotlightCanvas";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "@fontsource/monaspace-neon";

export function meta() {
  return [
    { title: "JT Innoventions'25" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="relative w-full h-full flex flex-col items-center justify-center overflow-visible">
      <SpotlightCanvas />
      <Navbar />
      <Hero />
    </main>
  );
}
