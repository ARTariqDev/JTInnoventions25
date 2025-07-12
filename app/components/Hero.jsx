import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import hero from '../assets/hero.jpg';
import Button from '../components/Button';
import "../app.css";

const Hero = () => {
  const lines = [
    "GET READY FOR",
    "AN EXCITING",
    "CHALLENGE!"
  ];

  const [displayedText, setDisplayedText] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => {
            const currentLine = prev[lineIndex] || '';
            const updatedLines = [...prev];
            updatedLines[lineIndex] = currentLine + lines[lineIndex][charIndex];
            return updatedLines;
          });
          setCharIndex((prev) => prev + 1);
        }, 70);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex]);

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start overflow-hidden scroll-smooth"
      style={{ backgroundImage: `url(${hero})` }}
      id="Hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#050c1a]/80 via-[#050c1a]/90 to-[#050c1a]/95 z-0" />

      {/* Floating dots + binary/AI/ML labels */}
      <div className="absolute inset-0 overflow-hidden z-5 pointer-events-none">
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float-1"></div>
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-float-2"></div>
        <div className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full opacity-50 animate-float-3"></div>
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float-4"></div>
        <div className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-70 animate-float-5"></div>
        <div className="absolute w-1 h-1 bg-blue-600 rounded-full opacity-45 animate-float-6"></div>
        <div className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full opacity-55 animate-float-7"></div>
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-35 animate-float-8"></div>

        {/* Floating label texts - always visible now and reduced clutter */}
        <div className="absolute top-20 right-4 animate-[fadeIn_2s_ease-in-out]">
          <div className="bg-black/30 backdrop-blur-sm border border-blue-400/20 rounded-md p-2 animate-pulse">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <span className="text-blue-400 font-mono text-[10px]">Indulge</span>
            </div>
          </div>
        </div>
        <div className="absolute top-40 left-4 animate-[fadeIn_2.5s_ease-in-out]">
          <div className="bg-black/30 backdrop-blur-sm border border-cyan-400/20 rounded-md p-2 animate-pulse">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <span className="text-cyan-400 font-mono text-[10px]">Invent</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-32 right-8 animate-[fadeIn_3s_ease-in-out]">
          <div className="bg-black/30 backdrop-blur-sm border border-blue-300/20 rounded-md p-2 animate-pulse">
            <div className="flex flex-col items-center space-y-1">
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
              <span className="text-blue-300 font-mono text-[10px]">Innovate</span>
            </div>
          </div>
        </div>
      </div>

      {/* More decorative floats */}
      <div className="absolute inset-0 z-5 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse delay-700"></div>
        <div className="absolute top-2/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse delay-1400"></div>
        <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse delay-300"></div>
      </div>

      {/* Logo + Heading stacked vertically */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto w-full pt-20 pb-10">
        <div className="flex flex-col items-center justify-center gap-6 mb-8 animate-[fadeIn_1s_ease-in-out]">
          <div className="relative flex-shrink-0 animate-[fadeIn_1.5s_ease-in-out]">
            <img
              src={Logo}
              className="h-[25vh] lg:h-[40vh]  filter drop-shadow-2xl animate-logo-glow relative z-10"
              alt="Logo"
            />
            <div className="absolute inset-0 h-[28vh] sm:h-[30vh] bg-blue-400/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full border border-blue-400/30 animate-pulse"></div>
            <div className="absolute -inset-8 rounded-full border border-cyan-400/20 animate-pulse delay-500"></div>
          </div>

          <div className="text-center space-y-1 px-4">
            <h1 className="text-4xl lg:text-4xl text-white leading-snug font-space min-h-[150px]">
              {displayedText.map((line, index) => (
                <div key={index}>
                  {line === "AN EXCITING" ? (
                    <>
                      AN <span className="text-blue-400 animate-pulse font-bold">EXCITING</span>
                    </>
                  ) : (
                    line
                  )}
                </div>
              ))}
            </h1>
          </div>
        </div>

        <div className="relative mb-2 animate-[fadeIn_2.5s_ease-in-out]">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-pulse"></div>
          <div className="absolute -top-1 left-0 w-4 h-3 bg-blue-400 opacity-60 animate-pulse"></div>
          <div className="absolute -top-1 right-0 w-4 h-3 bg-blue-400 opacity-60 animate-pulse delay-500"></div>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-8 max-w-md mx-auto z-20 mb-6 animate-[fadeIn_3s_ease-in-out]">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative rounded-lg p-1">
              <div className="backdrop-blur-sm rounded-lg transition duration-300">
                <Button text="REGISTER NOW" color="#010121" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-1 animate-[fadeIn_2.5s_ease-in-out]">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-pulse"></div>
          <div className="absolute -top-1 left-0 w-4 h-3 bg-blue-400 opacity-60 animate-pulse"></div>
          <div className="absolute -top-1 right-0 w-4 h-3 bg-blue-400 opacity-60 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-20 mt-2 animate-[fadeIn_3.5s_ease-in-out] px-4">
          <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md">
            <div className="relative group cursor-pointer mx-auto w-fit">
              <div className="absolute inset-0 bg-blue-400/30 blur-xl rounded-full animate-pulse group-hover:bg-blue-400/50 transition duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-full p-5 group-hover:bg-black/60 transition duration-300">
                <svg
                  className="w-10 h-10 text-blue-400 animate-bounce drop-shadow-lg group-hover:scale-110 group-hover:text-blue-300 transition duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-16 left-8 w-16 h-16 border-t-2 border-l-2 border-blue-400/30 animate-pulse"></div>
      <div className="absolute top-16 right-8 w-16 h-16 border-t-2 border-r-2 border-blue-400/30 animate-pulse delay-300"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-blue-400/30 animate-pulse delay-600"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-blue-400/30 animate-pulse delay-900"></div>
    </section>
  );
};

export default Hero;
