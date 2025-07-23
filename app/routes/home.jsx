import Hero from "../components/Hero";
import SpotlightCanvas from "../components/SpotlightCanvas";
import About from "../components/About";
import Contact from "../components/Contact";

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
      <div className="border-4 border-blue-900/30 w-full">
        <About id="about" />
        <Contact id="contact" />
      </div>
    </main>
  );
}
