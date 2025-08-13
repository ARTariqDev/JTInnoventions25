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
  const [allLoaded, setAllLoaded] = useState(false);

  const checkOverflow = useCallback(() => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const contentWidth = Array.from(scrollRef.current.children[0].children)
        .reduce((total, child) => total + child.offsetWidth, 0);
      setShouldScroll(contentWidth > containerWidth);
    }
  }, []);

  const preloadImages = useCallback((cb) => {
    let loadedCount = 0;
    sponsors.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === sponsors.length) cb();
      };
    });
  }, []);

  const handleResizeOrOrientation = useCallback(() => {
    setAllLoaded(false);
    preloadImages(() => {
      checkOverflow();
      setAllLoaded(true);
    });
  }, [checkOverflow, preloadImages]);

  useEffect(() => {
    handleResizeOrOrientation();
    window.addEventListener("resize", handleResizeOrOrientation);
    window.addEventListener("orientationchange", handleResizeOrOrientation);
    return () => {
      window.removeEventListener("resize", handleResizeOrOrientation);
      window.removeEventListener("orientationchange", handleResizeOrOrientation);
    };
  }, [handleResizeOrOrientation]);

  const logosToShow = shouldScroll ? sponsors.concat(sponsors) : sponsors;

  return (
    <div
      className="w-screen min-h-[35vh] bg-black flex flex-col items-center justify-center overflow-hidden relative border-t-[0.3rem] border-b-[0.3rem] border-blue-900/40 p-5"
      id="sponsors"
    >
      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6" id="headerText">
        Sponsors
      </h1>


      {!allLoaded && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 z-10">
          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="relative w-full overflow-hidden">
        <div
          className={`container mx-auto flex ${shouldScroll ? "" : "justify-center"}`}
          ref={scrollRef}
        >
          <div
            className={`flex w-max transition-opacity duration-500 ${
              allLoaded ? "opacity-100" : "opacity-0"
            } ${shouldScroll ? "animate-scroll" : "justify-center flex-wrap gap-12"}`}
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
                          ? "max-w-[200px] sm:max-w-[260px]"
                          : "max-w-[100px] sm:max-w-[140px]"
                        : isTetraPak
                          ? "max-w-[280px] sm:max-w-[340px]"
                          : "max-w-[160px] sm:max-w-[200px]"
                    } ${isAwais ? "bg-white p-2 rounded-lg" : ""}`}
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
