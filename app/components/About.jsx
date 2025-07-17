import { useState, useEffect, useRef } from "react";
import Button from "./Button";

function About({ id }) {
  const svgRef = useRef(null);
  const svgRef2 = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const [padding, setPadding] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      const svg = window.innerWidth < 640 ? svgRef : svgRef2;
      if (svg.current) {
        const extra =
          window.innerWidth >= 1280 ? -64 : window.innerWidth >= 1024 ? -20 : 0;
        setPadding(
          svg.current.getBoundingClientRect().height -
            (headingRef.current?.getBoundingClientRect().height || 0) / 2 +
            extra
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if (contentRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in");
            } else {
              entry.target.classList.remove("animate-fade-in");
            }
          });
        },
        { threshold: [0, 0.4] }
      );
      observer.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section
      id={id}
      style={{ paddingTop: padding }}
      className="relative overflow-hidden pb-12 md:pb-15 px-4 xs:px-8 md:px-15 w-full text-center text-slate-300"
    >

      <div className="absolute w-full left-0 top-0 lg:-top-5 xl:-top-16 z-5">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block"
        >
          <defs>
            <filter id="glow2">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="8"
                floodColor="#1e3a8a"
                floodOpacity="0.4"
              />
            </filter>
          </defs>
          <path
            ref={svgRef2}
            preserveAspectRatio="none"
            fill="#000000"
            fillOpacity="0.7"
            d="M0,160L80,165.3C160,171,320,181,480,176C640,171,800,149,960,138.7C1120,128,1280,128,1360,128L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
          <path
            d="M0,160L80,165.3C160,171,320,181,480,176C640,171,800,149,960,138.7C1120,128,1280,128,1360,128L1440,128"
            fill="none"
            stroke="#1e3a8a"
            strokeWidth="5"
            filter="url(#glow2)"
          />
        </svg>
        <svg
          className="sm:hidden"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="8"
                floodColor="#1e3a8a"
                floodOpacity="0.4"
              />
            </filter>
          </defs>
          <path
            ref={svgRef}
            fill="#000000"
            fillOpacity="0.7"
            d="M0,240L80,250C160,260,320,280,480,270C640,260,800,220,960,200C1120,180,1280,180,1360,180L1440,180L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
          <path
            d="M0,240L80,250C160,260,320,280,480,270C640,260,800,220,960,200C1120,180,1280,180,1440,200"
            fill="none"
            stroke="#1e3a8a"
            strokeWidth="8"
            filter="url(#glow)"
          />
        </svg>
      </div>

      <div
        ref={contentRef}
        className="relative max-w-320 mx-auto z-30 opacity-0"
      >
        <h1
          ref={headingRef}
          className="font-monaspace text-3xl xs:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-semibold capitalize text-slate-50"
        >
          What is innoventions?
        </h1>
        <p className="my-5 sm:my-6 font-open-sans font-semibold md:font-medium tracking-wide text-sm/relaxed md:text-base lg:text-[17px]">
          Innoventions'25 is a 3-day Science Olympiad organized by LGS JT,
          showcasing categories spanning Science, Mathematics, IT, Robotics,
          Astronomy and more. The event is designed to engage students from all
          over Pakistan, nurturing their skills in creativity, innovation, and
          critical thinking. Building on a legacy of excellence in successful
          competitive science events, Innoventions '25 provides a platform for
          fostering scientific curiosity and creative problem-solving.
        </p>
        <div>
          <div className="relative group inline-block p-1">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r blur-xs from-blue-800/20 via-cyan-700/20 to-blue-800/20 opacity-30 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="backdrop-blur-xl">
              <Button text="Categories" color="rgba(17, 17, 17, 0.063)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;