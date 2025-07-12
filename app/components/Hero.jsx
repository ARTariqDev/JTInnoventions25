import React, { useEffect, useState, useRef } from 'react';
import Logo from '../assets/logo.png';
import hero from '../assets/hero.jpg';
import Button from '../components/Button';
import "../app.css";

const Hero = () => {
  const lines = ["GET READY FOR", "AN EXCITING", "CHALLENGE!"];
  const [displayedText, setDisplayedText] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    if (textAnimationComplete && particles.length === 0) {
      const newParticles = [...Array(100)].map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        baseX: Math.random() * 100,
        baseY: Math.random() * 100,
        tx: Math.random() * 60 - 30,
        ty: Math.random() * 60 - 30,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
        scattered: false,
        scatterX: 0,
        scatterY: 0,
      }));
      setParticles(newParticles);
    }
  }, [textAnimationComplete, particles.length]);


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
    } else if (lineIndex >= lines.length && !textAnimationComplete) {

      setTimeout(() => {
        setTextAnimationComplete(true);
      }, 500);
    }
  }, [charIndex, lineIndex, textAnimationComplete]);


  useEffect(() => {
    const updateParticlesFromPosition = (x, y) => {
      setMousePosition({ x, y });

 
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          const distanceX = Math.abs(particle.x - x);
          const distanceY = Math.abs(particle.y - y);
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          
          if (distance < 12) { // Within 12% of screen distance
            const scatterStrength = (12 - distance) * 0.3; // Reduced multiplier for gentler movement
            const angle = Math.atan2(particle.y - y, particle.x - x);
            const scatterX = Math.cos(angle) * scatterStrength;
            const scatterY = Math.sin(angle) * scatterStrength;
            
            return {
              ...particle,
              scattered: true,
              scatterX,
              scatterY,
              x: Math.max(0, Math.min(100, particle.baseX + scatterX)),
              y: Math.max(0, Math.min(100, particle.baseY + scatterY)),
            };
          } else if (particle.scattered) {
            // Gradually return to base position
            const returnSpeed = 0.05; // Slower return for smoother movement
            const newScatterX = particle.scatterX * (1 - returnSpeed);
            const newScatterY = particle.scatterY * (1 - returnSpeed);
            
            if (Math.abs(newScatterX) < 0.05 && Math.abs(newScatterY) < 0.05) {
              return {
                ...particle,
                scattered: false,
                scatterX: 0,
                scatterY: 0,
                x: particle.baseX,
                y: particle.baseY,
              };
            }
            
            return {
              ...particle,
              scatterX: newScatterX,
              scatterY: newScatterY,
              x: Math.max(0, Math.min(100, particle.baseX + newScatterX)),
              y: Math.max(0, Math.min(100, particle.baseY + newScatterY)),
            };
          }
          
          return particle;
        })
      );
    };

    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      updateParticlesFromPosition(x, y);
    };

    const handleTouchMove = (e) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      const y = ((touch.clientY - rect.top) / rect.height) * 100;
      
      updateParticlesFromPosition(x, y);
    };

    const handleTouchStart = (e) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      const y = ((touch.clientY - rect.top) / rect.height) * 100;
      
      updateParticlesFromPosition(x, y);
    };

    if (textAnimationComplete && heroRef.current) {
      const element = heroRef.current;
      

      element.addEventListener('mousemove', handleMouseMove);
      

      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchmove', handleTouchMove);
      
      return () => {

        element.removeEventListener('mousemove', handleMouseMove);
        

        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [textAnimationComplete]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start overflow-hidden scroll-smooth"
      style={{ backgroundImage: `url(${hero})` }}
      id="Hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#050c1a]/80 via-[#050c1a]/90 to-[#050c1a]/95 z-0" />


      {textAnimationComplete && (
        <div className="absolute inset-0 overflow-hidden z-5 pointer-events-none">
          <div className="absolute inset-0 z-40 pointer-events-none">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute rounded-full bg-blue-400 transition-all duration-300 ease-out"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  top: `${particle.y}%`,
                  left: `${particle.x}%`,
                  animation: particle.scattered
                    ? 'none'
                    : `float-random ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
                  "--tx": particle.tx + "px",
                  "--ty": particle.ty + "px",
                  opacity: 0.4,
                  transform: particle.scattered ? 'scale(1.1)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </div>
      )}


      <div className="absolute inset-0 overflow-hidden z-5 pointer-events-none">
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

      
      <div className="absolute inset-0 z-5 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse delay-700"></div>
        <div className="absolute top-2/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse delay-1400"></div>
        <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse delay-300"></div>
      </div>

    
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto w-full pt-20 pb-10">
        <div className="flex flex-col items-center justify-center gap-6 mb-8 animate-[fadeIn_1s_ease-in-out]">
          <div className="relative flex-shrink-0 animate-[fadeIn_1.5s_ease-in-out]">
            <img
              src={Logo}
              className="h-[25vh] lg:h-[42vh] filter drop-shadow-2xl animate-logo-glow relative z-10"
              alt="Logo"
            />

            <div className="absolute inset-1 h-full w-full bg-blue-400/20 blur-2xl rounded-full animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border border-blue-400/30 animate-pulse"></div>
            <div className="absolute -inset-2 rounded-full border border-cyan-400/20 animate-pulse delay-500"></div>
          </div>

  
          <div className="text-center px-4">
            <h1 className="text-3xl lg:text-3xl text-white leading-snug font-space min-h-[150px]">
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

   
        <div className="text-center px-4 animate-[fadeIn_2s_ease-in-out] mt-[-3rem]">
          <h1 className="text-xl text-blue-400 leading-snug font-space">
            September 12∘13∘14
          </h1>
        </div>
      </div>


      <div className="relative mb-2 animate-[fadeIn_2.5s_ease-in-out] mt-[-1rem]">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-pulse"></div>
        <div className="absolute -top-1 left-0 w-4 h-3 bg-blue-400 opacity-60 animate-pulse"></div>
        <div className="absolute -top-1 right-0 w-4 h-3 bg-blue-400 opacity-60 animate-pulse delay-500"></div>
      </div>


      <div className="w-full flex justify-center z-20 mb-6 animate-[fadeIn_3s_ease-in-out]">
        <div className="relative group">
          <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
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