"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "18", label: "Themed Holes", color: "neon-cyan" },
  { value: "47,000+", label: "Players Since Launch", color: "neon-magenta" },
  { value: "4.9", label: "Average Rating", color: "neon-purple" },
  { value: "12", label: "Corporate Partners", color: "neon-blue" },
  { value: "3", label: "Secret Unlockable Courses", color: "neon-cyan" },
];

export function StatsSection() {
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
      className="relative py-16 sm:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-base via-dark-surface to-dark-base" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-magenta/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={cn(
            "text-center mb-12 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block font-mono text-xs text-neon-magenta uppercase tracking-widest mb-4">
            // System Metrics
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight">
            <span className="text-white">By the </span>
            <span className="text-gradient-cyber">Numbers</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "font-display text-3xl sm:text-4xl md:text-5xl font-black mb-2",
                  stat.color === "neon-cyan" && "text-neon-cyan",
                  stat.color === "neon-magenta" && "text-neon-magenta",
                  stat.color === "neon-purple" && "text-neon-purple",
                  stat.color === "neon-blue" && "text-neon-blue"
                )}
              >
                {stat.value}
              </div>
              <div className="font-body text-xs sm:text-sm text-foreground/60 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
