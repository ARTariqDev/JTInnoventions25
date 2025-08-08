import Hero from "../components/Hero";
import SpotlightCanvas from "../components/SpotlightCanvas";
import About from "../components/About";
import Contact from "../components/Contact";

// transferred metadata here cause it wasn't working in root.jsx

export const meta = () => {
  return [
    { title: "JT Innoventions'25" },
    { 
      name: "description", 
      content: "Innoventions'25 is a 3-day Science Olympiad organized by LGS JT, showcasing categories spanning Science, Mathematics, IT, Robotics, Astronomy and more. The event is designed to engage students from all over Pakistan, nurturing their skills in creativity, innovation, and critical thinking. Building on a legacy of excellence in successful competitive science events, Innoventions '25 provides a platform for fostering scientific curiosity and creative problem-solving.", 
    },
    { name: "keywords", content: "Innoventions 2025, Science Olympiad, LGS JT, Lahore Grammar School, science competition, mathematics, robotics, astronomy, IT, Pakistan students, STEM education, science fair" },
    { name: "author", content: "LGS JT" },
    { name: "robots", content: "index, follow" },

    { property: "og:type", content: "event" },
    { property: "og:title", content: "Innoventions'25 - 3-Day Science Olympiad by LGS JT" },
    { 
      property: "og:description", 
      content: "Join Pakistan's premier Science Olympiad! 3 days of Science, Mathematics, IT, Robotics & Astronomy competitions. Open to students nationwide. Fostering creativity, innovation & critical thinking." 
    },
    { property: "og:url", content: "https://jt-innoventions25.vercel.app" },
    { property: "og:site_name", content: "Innoventions'25 - LGS JT Science Olympiad" },
    { property: "og:image", content: "https://jt-innoventions25.vercel.app/og.png" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Innoventions'25 - Pakistan's Premier Science Olympiad" },
    { 
      name: "twitter:description", 
      content: "3-day Science Olympiad by LGS JT. Science, Math, IT, Robotics & Astronomy competitions for students across Pakistan. Register now!" 
    },

    { name: "theme-color", content: "#ffffff" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "language", content: "English" },
    { name: "revisit-after", content: "7 days" },
    { name: "distribution", content: "global" },
    { name: "rating", content: "general" },

    { name: "geo.region", content: "PK-PB" },
    { name: "geo.placename", content: "Lahore, Punjab, Pakistan" },
    { name: "geo.position", content: "31.5204;74.3587" },
    { name: "ICBM", content: "31.5204, 74.3587" },
  ];
};

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
