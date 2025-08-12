import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const diff = +new Date(targetDate) - +new Date();
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevTime, setPrevTime] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setPrevTime(timeLeft);
      setTimeLeft(updated);
      if (!updated) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  if (!timeLeft) {
    return (
      <span className="text-blue-600 font-semibold text-lg tracking-wide">
        JT Innoventions is Live !
      </span>
    );
  }

  return (
    <div className="flex justify-center gap-8 font-sans select-none mt-[-1rem]">
      {["days", "hours", "minutes", "seconds"].map((unit) => {
        const current = timeLeft[unit];
        const previous = prevTime?.[unit];
        const isChanged = current !== previous;

        return (
          <div key={unit} className="flex flex-col items-center mt-[1.5rem]">
            <span
              key={current} // key helps trigger re-render to animate
              className={`text-md sm:text-sm font-extrabold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-transform duration-300 ${
                isChanged ? "scale-110" : "scale-100"}`}
              id="Timer"
            >
              {String(current).padStart(2, "0")}
            </span>
            <span className="uppercase text-xs tracking-widest text-blue-300 mt-1" id="Timer">
              {unit}
            </span>

          </div>
        );
      })}
    </div>
  );
};

export default CountdownTimer;
