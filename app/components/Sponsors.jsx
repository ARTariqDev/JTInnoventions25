import React, { useEffect, useRef, useState, useCallback } from "react";
import "../app.css";

const sponsors = [
  "/sponsors/awaisinternational.png",
  "/sponsors/happymums.jpg",
  "/sponsors/lenovo.webp",
  "/sponsors/tetrapak.png",
  "/sponsors/wewear.gif",
  "/sponsors/cb.png",
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

  // Group sponsors for desktop layout when not scrolling
  const groupedSponsors = shouldScroll ? logosToShow : (() => {
    const prioritySponsors = logosToShow.filter(src => 
      src.includes("tetrapak") || src.includes("awaisinternational") || src.includes("cb.png")
    );
    const otherSponsors = logosToShow.filter(src => 
      !src.includes("tetrapak") && !src.includes("awaisinternational") && !src.includes("cb.png")
    );
    return { prioritySponsors, otherSponsors };
  })();

  return (
    <div
      className="w-screen min-h-[35vh] bg-black flex flex-col items-center justify-center overflow-hidden relative border-t-[0.3rem] border-b-[0.3rem] border-blue-900/40 sm:p-[1rem] md:p-2 lg:p-5"
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
            } ${shouldScroll ? "animate-scroll" : "justify-center flex-col items-center gap-8"}`}
          >
            {shouldScroll ? (
              // Scrolling layout
              groupedSponsors.map((src, i) => {
                const isTetraPak = src.includes("tetrapak");
                const isAwais = src.includes("awaisinternational");
                const isCb = src.includes("cb.png");

                return (
                  <div
                    key={i}
                    className="flex items-center justify-center h-16 sm:h-20 md:h-24 mx-[6vw] sm:mx-4"
                  >
                    <img
                      src={src}
                      alt={`Sponsor ${i}`}
                      className={`max-h-full object-contain rounded-md ${
                        isTetraPak
                          ? "max-w-[200px] sm:max-w-[260px]"
                          : isCb
                            ? "max-w-[150px] sm:max-w-[180px]"
                            : "max-w-[100px] sm:max-w-[140px]"
                      } ${isAwais ? "bg-white p-2 rounded-lg" : ""} ${isCb ? "bg-blue-600 p-2 rounded-lg" : ""}`}
                    />
                  </div>
                );
              })
            ) : (
              // desktop layout - grouped sponsors
              <>
                {/* Platinum sponsors row (TetraPak, Awais, CB) */}
                <div className="flex justify-center items-center gap-12 mb-8">
                  {groupedSponsors.prioritySponsors.map((src, i) => {
                    const isTetraPak = src.includes("tetrapak");
                    const isAwais = src.includes("awaisinternational");
                    const isCb = src.includes("cb.png");

                    return (
                      <div
                        key={`priority-${i}`}
                        className="flex items-center justify-center h-24 sm:h-28 md:h-32"
                      >
                        <img
                          src={src}
                          alt={`Priority Sponsor ${i}`}
                          className={`max-h-full object-contain rounded-md ${
                            isTetraPak
                              ? "max-w-[280px] sm:max-w-[340px]"
                              : isCb
                                ? "max-w-[250px] sm:max-w-[280px]"
                                : "max-w-[180px] sm:max-w-[220px]"
                          } ${isAwais ? "bg-white p-2 rounded-lg" : ""} ${isCb ? "bg-blue-600 p-2 rounded-lg" : ""}`}
                        />
                      </div>
                    );
                  })}
                </div>
                
                {/* Other sponsors row */}
                <div className="flex justify-center items-center flex-wrap gap-12">
                  {groupedSponsors.otherSponsors.map((src, i) => (
                    <div
                      key={`other-${i}`}
                      className="flex items-center justify-center h-24 sm:h-28 md:h-32"
                    >
                      <img
                        src={src}
                        alt={`Other Sponsor ${i}`}
                        className="max-h-full object-contain rounded-md max-w-[180px] sm:max-w-[220px]"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
