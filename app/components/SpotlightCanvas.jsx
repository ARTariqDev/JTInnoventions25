import { useEffect, useRef } from "react";

const SpotlightCanvas = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight; // Full document height so that it works on the entire page
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    
    // Also listen for content changes that might affect document height
    const resizeObserver = new ResizeObserver(() => {
      setCanvasSize();
    });
    resizeObserver.observe(document.body);
    
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const adjustedY = y + scrollY;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createRadialGradient(x, adjustedY, 0, x, adjustedY, 200);
      gradient.addColorStop(0, "rgba(0, 123, 255, 0.25)");
      gradient.addColorStop(1, "rgba(0, 123, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-[49]"
      style={{ height: '100%' }}
    />
  );
};

export default SpotlightCanvas;