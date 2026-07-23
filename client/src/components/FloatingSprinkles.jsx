import { useEffect, useRef } from "react";

const FloatingSprinkles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Create particles - increased quantity
    const particleCount = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 12000));
    const colors = ["rgba(58, 190, 255, ", "rgba(0, 255, 240, ", "rgba(95, 133, 255, "];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.6, // slightly larger variation
        baseColor: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.35, // slightly faster drift for coolness
        vy: (Math.random() - 0.5) * 0.35,
        glow: Math.random() * 8 + 4, // glowing ranges
        alpha: Math.random() * 0.5 + 0.15,
        alphaSpeed: (Math.random() - 0.5) * 0.008 // pulsing speed
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Update alpha/pulse
        p.alpha += p.alphaSpeed;
        if (p.alpha < 0.15 || p.alpha > 0.7) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        const rgbaColor = `${p.baseColor}${p.alpha})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = rgbaColor;
        ctx.shadowBlur = p.glow;
        ctx.shadowColor = rgbaColor;
        ctx.fill();

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      // Clear shadows for clean next iterations
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[51]"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default FloatingSprinkles;
