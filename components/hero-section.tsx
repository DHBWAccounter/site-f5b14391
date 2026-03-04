"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, Zap } from "lucide-react";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const colors = ["#00fff0", "#ff00ff", "#8b00ff", "#0066ff"];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 240, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-base/50 to-dark-base z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-magenta/5 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-dark-surface/80 backdrop-blur-sm border border-neon-cyan/30 rounded-full">
          <Zap className="h-4 w-4 text-neon-cyan animate-pulse" />
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">
            System Online
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6">
          <span className="block text-white mb-2">Welcome to</span>
          <span className="block glitch-text text-gradient-neon" data-text="The Grid">
            The Grid
          </span>
        </h1>

        <p className="font-body text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
          Forget everything you know about mini golf.{" "}
          <span className="text-neon-cyan font-semibold">Cyberpunk Mini Golfing</span>{" "}
          drops you into a neon-drenched future where every putt pulses with electric energy.
          Navigate 18 holes of mind-bending courses set across a sprawling tech-noir cityscape—from
          the rain-slicked streets of Sector 7 to the towering data spires of the Corporate Zone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#cta"
            className="group relative px-8 py-4 font-display text-base font-bold uppercase tracking-wider bg-neon-cyan text-dark-base hover:bg-neon-cyan/90 transition-all duration-300 rounded"
          >
            <span className="relative z-10 flex items-center gap-2">
              Initialize Journey
              <Zap className="h-4 w-4 group-hover:animate-pulse" />
            </span>
            <div className="absolute inset-0 bg-neon-cyan blur-xl opacity-50 group-hover:opacity-75 transition-opacity rounded" />
          </a>
          <a
            href="#experience"
            className="px-8 py-4 font-display text-base font-bold uppercase tracking-wider border border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10 transition-all duration-300 rounded"
          >
            Explore Experience
          </a>
        </div>

        <p className="font-body text-sm text-foreground/60 italic">
          Your journey begins at the edge of the digital frontier. Are you ready to hack the course?
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float">
        <a href="#experience" className="text-neon-cyan/50 hover:text-neon-cyan transition-colors">
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-neon-cyan/20 rounded-full animate-pulse-neon" aria-hidden="true" />
      <div className="absolute bottom-40 right-10 w-24 h-24 border border-neon-magenta/20 rounded-full animate-pulse-neon" style={{ animationDelay: "1s" }} aria-hidden="true" />
      <div className="absolute top-1/3 right-20 w-16 h-16 border border-neon-purple/20 rotate-45 animate-pulse-neon" style={{ animationDelay: "0.5s" }} aria-hidden="true" />
    </section>
  );
}
