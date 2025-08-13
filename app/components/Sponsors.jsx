import React from "react";

const sponsors = [
  "/sponsors/awaisinternational.png",
  "/sponsors/happymums.jpg",
  "/sponsors/lenovo.webp",
  "/sponsors/tetrapak.png",
  "/sponsors/wewear.gif",
];

const Sponsors = () => {
  return (
    <div className="w-screen h-[40vh] bg-black flex flex-col items-center justify-center overflow-hidden" id="sponsors">
      <h1 className="text-white text-5xl font-bold mb-6" id="headerText">Sponsors</h1>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {sponsors.concat(sponsors).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Sponsor ${i}`}
              className="h-20 w-auto mx-8 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
