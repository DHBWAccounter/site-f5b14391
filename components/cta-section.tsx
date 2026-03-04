"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/50 via-dark-base to-dark-base" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent animate-pulse-neon" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-neon-magenta/20 to-transparent animate-pulse-neon" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent animate-pulse-neon" style={{ animationDelay: "1s" }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-neon-cyan/10 rounded-full animate-pulse-neon" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-neon-magenta/10 rounded-full animate-pulse-neon" style={{ animationDelay: "0.5s" }} aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-dark-surface/80 backdrop-blur-sm border border-neon-cyan/30 rounded-full mb-8">
            <Clock className="h-4 w-4 text-neon-cyan" />
            <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">
              Limited Capacity
            </span>
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
            <span className="text-white">Initialize Your </span>
            <span className="glitch-text text-gradient-neon" data-text="Journey">
              Journey
            </span>
          </h2>

          <p className="font-body text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            The grid is waiting. Sessions fill up fast—especially on weekends.{" "}
            <span className="text-neon-cyan font-semibold">Book your time slot now</span> and prepare
            for the most immersive mini golf experience on the planet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@cyberpunkminigolf.com?subject=Booking Request"
              className="group relative px-10 py-5 font-display text-base font-bold uppercase tracking-wider bg-neon-cyan text-dark-base hover:bg-neon-cyan/90 transition-all duration-300 rounded"
            >
              <span className="relative z-10 flex items-center gap-3">
                Reserve Your Spot
                <Zap className="h-5 w-5 group-hover:animate-pulse" />
              </span>
              <div className="absolute inset-0 bg-neon-cyan blur-xl opacity-50 group-hover:opacity-75 transition-opacity rounded" />
            </a>
          </div>

          <p className="mt-6 font-body text-sm text-foreground/50">
            Walk-ins welcome, but priority goes to pre-booked players.
          </p>
        </div>
      </div>
    </section>
  );
}
