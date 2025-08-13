import React, { useEffect, useRef, useState, useCallback } from "react";
import "../app.css";

const sponsors = [
  "/sponsors/awaisinternational.png",
  "/sponsors/happymums.jpg",
  "/sponsors/lenovo.webp",
  "/sponsors/tetrapak.png",
  "/sponsors/wewear.gif",
];

const Sponsors = () => {
  const scrollRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  const checkOverflow = useCallback(() => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const contentWidth = Array.from(scrollRef.current.children[0].children)
        .reduce((total, child) => total + child.offsetWidth, 0);
      setShouldScroll(contentWidth > containerWidth);
    }
  }, []);

  useEffect(() => {
    checkOverflow();
    const handleResize = () => setTimeout(checkOverflow, 50);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [checkOverflow]);

  const logosToShow = shouldScroll ? sponsors.concat(sponsors) : sponsors;

  useEffect(() => {
    setTimeout(checkOverflow, 0);
  }, [logosToShow, checkOverflow]);

  return (
    <div
      className="w-screen min-h-[35vh] bg-black flex flex-col items-center justify-center overflow-hidden"
      id="sponsors"
    >
      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6" id="headerText">
        Sponsors
      </h1>

      <div className="relative w-full overflow-hidden">
        <div
          className={`container mx-auto flex ${
            shouldScroll ? "" : "justify-center"
          }`}
          ref={scrollRef}
        >
          <div
            className={`flex w-max ${
              shouldScroll ? "animate-scroll" : "justify-center flex-wrap gap-12"
            }`}
          >
            {logosToShow.map((src, i) => {
              const isTetraPak = src.includes("tetrapak");
              const isAwais = src.includes("awaisinternational");

              return (
                <div
                  key={i}
                  className={`flex items-center justify-center ${
                    shouldScroll
                      ? "h-16 sm:h-20 md:h-24 mx-[6vw] sm:mx-4"
                      : "h-24 sm:h-28 md:h-32"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Sponsor ${i}`}
                    className={`max-h-full object-contain rounded-md ${
                        shouldScroll
                        ? isTetraPak
                            ? "max-w-[200px] sm:max-w-[260px]" // MUCH bigger in scroll mode
                            : "max-w-[100px] sm:max-w-[140px]"
                        : isTetraPak
                            ? "max-w-[280px] sm:max-w-[340px]" // HUGE in no-scroll mode
                            : "max-w-[160px] sm:max-w-[200px]"
                    } ${isAwais ? "bg-white p-2 rounded-lg" : ""}`}
                    loading="lazy"
                    />

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
