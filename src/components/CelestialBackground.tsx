import React, { useEffect, useRef } from 'react';

export const CelestialBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate gentle gold light dust particles
    const particleCount = Math.min(55, Math.floor(width / 25));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.6 + 0.2,
      speedY: Math.random() * 0.35 + 0.15,
      speedX: (Math.random() - 0.5) * 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
      pulse: Math.random() * Math.PI,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle celestial beam from top
      const beamGrad = ctx.createRadialGradient(
        width / 2, 0, 10,
        width / 2, 0, Math.max(width, height) * 0.75
      );
      beamGrad.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
      beamGrad.addColorStop(0.5, 'rgba(212, 175, 55, 0.02)');
      beamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = beamGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw floating golden particles
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.pulse += p.pulseSpeed;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const dynamicAlpha = Math.max(0.1, p.alpha + Math.sin(p.pulse) * 0.25);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 230, 171, ${dynamicAlpha})`;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.7)';
        ctx.shadowBlur = p.radius * 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep celestial navy gradient */}
      <div className="absolute inset-0 bg-radial-[ellipse_80%_80%_at_50%_0%] from-[#132347] via-[#0B132B] to-[#050914]" />
      
      {/* Subtle divine golden glow aura */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#D4AF37]/15 via-[#F3E5AB]/5 to-transparent blur-3xl rounded-full" />
      
      {/* Golden dust canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
