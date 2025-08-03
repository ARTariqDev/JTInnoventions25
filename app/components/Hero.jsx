import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import Logo from "../assets/logo.png";
import Button from "../components/Button";
import "../app.css";

const Hero = () => {
  const navigate = useNavigate();
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  const [particles, setParticles] = useState([]);
  const particlesRef = useRef([]);
  const heroRef = useRef(null);

  const handleRegisterClick = () => {
    navigate("/register");
  };

  useEffect(() => {
    setTextAnimationComplete(true);
  }, []);

  useEffect(() => {
    if (textAnimationComplete && particles.length === 0) {
      const newParticles = [...Array(100)].map((_, i) => {
        const baseX = Math.random() * 100;
        const baseY = Math.random() * 100;
        return {
          id: i,
          size: Math.random() * 2 + 1.5,
          baseX,
          baseY,
          x: baseX,
          y: baseY,
          scatterX: 0,
          scatterY: 0,
          scattered: false,
          speed: Math.random() * 1 + 0.5,
          phase: Math.random() * Math.PI * 2,
        };
      });

      setParticles(newParticles);
      particlesRef.current = newParticles;
    }
  }, [textAnimationComplete, particles.length]);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      const time = performance.now() / 1000;

      particlesRef.current = particlesRef.current.map((p) => {
        const floatX = Math.sin(time * p.speed + p.phase) * 3;
        const floatY = Math.cos(time * p.speed + p.phase) * 3;

        return {
          ...p,
          x: p.baseX + p.scatterX + floatX,
          y: p.baseY + p.scatterY + floatY,
          opacity: 0.4 + 0.4 * Math.sin(time * p.speed + p.phase),
        };
      });

      setParticles([...particlesRef.current]);
      animationFrame = requestAnimationFrame(animate);
    };

    if (textAnimationComplete) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [textAnimationComplete]);

  useEffect(() => {
    const updateParticlesFromPosition = (x, y) => {
      particlesRef.current = particlesRef.current.map((p) => {
        const distanceX = p.x - x;
        const distanceY = p.y - y;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        if (distance < 12) {
          const scatterStrength = (12 - distance) * 0.3;
          const angle = Math.atan2(p.y - y, p.x - x);
          const scatterX = Math.cos(angle) * scatterStrength;
          const scatterY = Math.sin(angle) * scatterStrength;

          return {
            ...p,
            scattered: true,
            scatterX,
            scatterY,
          };
        } else if (p.scattered) {
          const returnSpeed = 0.05;
          const newScatterX = p.scatterX * (1 - returnSpeed);
          const newScatterY = p.scatterY * (1 - returnSpeed);

          if (Math.abs(newScatterX) < 0.05 && Math.abs(newScatterY) < 0.05) {
            return {
              ...p,
              scattered: false,
              scatterX: 0,
              scatterY: 0,
            };
          }

          return {
            ...p,
            scatterX: newScatterX,
            scatterY: newScatterY,
          };
        }

        return p;
      });
    };

    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      updateParticlesFromPosition(x, y);
    };

    const handleTouch = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      const y = ((touch.clientY - rect.top) / rect.height) * 100;
      updateParticlesFromPosition(x, y);
    };

    const el = heroRef.current;
    if (textAnimationComplete && el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("touchstart", handleTouch);
      el.addEventListener("touchmove", handleTouch);
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("touchstart", handleTouch);
        el.removeEventListener("touchmove", handleTouch);
      };
    }
  }, [textAnimationComplete]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden pb-5 md:pb-8"
      id="Hero"
    >
      {textAnimationComplete && particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-blue-400"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                top: `${particle.y}%`,
                left: `${particle.x}%`,
                opacity: particle.opacity ?? 0.6,
                transform: particle.scattered ? "scale(1.3)" : "scale(1)",
                transition: "transform 0.2s ease-out",
                boxShadow: "0 0 8px rgba(96, 165, 250, 0.4)",
              }}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-0 overflow-hidden z-5 pointer-events-none">
        <div className="absolute top-20 right-4 animate-[fadeIn_2s_ease-in-out]">
          <div className="bg-black/30 backdrop-blur-sm border border-blue-400/20 rounded-md p-2 animate-pulse">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <span className="text-blue-400 font-mono text-[10px]">
                Indulge
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-40 left-4 animate-[fadeIn_2.5s_ease-in-out]">
          <div className="bg-black/30 backdrop-blur-sm border border-cyan-400/20 rounded-md p-2 animate-pulse">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <span className="text-cyan-400 font-mono text-[10px]">
                Invent
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-32 right-8 animate-[fadeIn_3s_ease-in-out]">
          <div className="bg-black/30 backdrop-blur-sm border border-blue-300/20 rounded-md p-2 animate-pulse">
            <div className="flex flex-col items-center space-y-1">
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
              <span className="text-blue-300 font-mono text-[10px]">
                Innovate
              </span>
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
              className="h-[45vh] lg:h-[55vh] filter drop-shadow-2xl animate-logo-glow relative z-10"
              alt="Logo"
            />

            <div className="absolute inset-1 h-full w-full bg-blue-400/20 blur-2xl rounded-full animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border border-blue-400/30 animate-pulse"></div>
            <div className="absolute -inset-2 rounded-full border border-cyan-400/20 animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="text-center px-4 animate-[fadeIn_2s_ease-in-out] mt-3 mb-3">
          <h1 className="text-[5.5rem] text-white font-Vermin" id="date">
            September <br/>12∘13∘14
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
              <div onClick={handleRegisterClick}>
                <Button text="REGISTER NOW" color="rgba(17, 17, 17, 0.063)" />
              </div>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-8 w-16 h-16 border-t-2 border-l-2 border-blue-400/30 animate-pulse"></div>
      <div className="absolute top-20 right-8 w-16 h-16 border-t-2 border-r-2 border-blue-400/30 animate-pulse delay-300"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-blue-400/30 animate-pulse delay-600"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-blue-400/30 animate-pulse delay-900"></div>
    </section>
  );
};

export default Hero;