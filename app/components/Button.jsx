import { useRef, useState } from 'react';

const Button = ({ text, glowColor = '#1b76ff' }) => {
  const btnRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty('--x', `${x}px`);
    btnRef.current.style.setProperty('--y', `${y}px`);
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    btnRef.current.style.setProperty('--x', `0px`);
    btnRef.current.style.setProperty('--y', `0px`);
    setHovered(false);
  };

  const handleClick = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    const newRipple = {
      id,
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);


    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 500);
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className=" cursor-pointer relative px-6 py-2 rounded-md text-white font-medium bg-black overflow-hidden group transition duration-150 active:scale-95 hover:shadow-[0_0_12px_rgba(27,118,255,0.25)] active:shadow-[0_0_16px_rgba(27,118,255,0.35)]"
    >

      <span
        className="absolute inset-0 z-0 rounded-md p-[0.5px]"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(135deg, #1b76ff 10%, #000 60%, #000 100%)',
        }}
      >
        <span className="block w-full h-full rounded-md bg-black" />
      </span>


      <span
        className="absolute inset-0 pointer-events-none rounded-md border z-10 transition-opacity duration-300 ease-out"
        style={{
          borderColor: glowColor,
          borderWidth: '1px',
          opacity: hovered ? 1 : 0,
          maskImage: `radial-gradient(60px at var(--x, 0px) var(--y, 0px), white 0%, transparent 60%)`,
          WebkitMaskImage: `radial-gradient(60px at var(--x, 0px) var(--y, 0px), white 0%, transparent 60%)`,
          transition: 'mask-position 0.05s linear, opacity 0.3s ease-out',
        }}
      />


      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/20 animate-ripple"
          style={{
            left: ripple.x - 50,
            top: ripple.y - 50,
            width: 100,
            height: 100,
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />
      ))}


      <span className="relative z-20">{text}</span>
    </button>
  );
};

export default Button;
