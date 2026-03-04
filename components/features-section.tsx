"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Smartphone, Gauge, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: MapPin,
    title: "18 Themed Holes",
    description:
      "From the Underground Marketplace to the Skyway Transit System, each course tells a story.",
    color: "neon-cyan",
  },
  {
    icon: Smartphone,
    title: "Augmented Scorecards",
    description:
      "Track your stats, unlock achievements, and compete on global leaderboards via our custom app.",
    color: "neon-magenta",
  },
  {
    icon: Gauge,
    title: "Dynamic Difficulty",
    description:
      "Courses adapt to your skill level—newbies and pros both find their challenge.",
    color: "neon-purple",
  },
  {
    icon: Camera,
    title: "Photo Zones",
    description:
      "Capture your best shots at designated holographic selfie stations.",
    color: "neon-blue",
  },
];

export function FeaturesSection() {
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
      id="experience"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base via-dark-surface/50 to-dark-base" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block font-mono text-xs text-neon-cyan uppercase tracking-widest mb-4">
            // System Features
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">
            <span className="text-white">The </span>
            <span className="text-gradient-cyber">Experience</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            Each hole is a fully immersive environment blending physical obstacles with cutting-edge
            technology.{" "}
            <span className="text-neon-cyan">Reactive LED floors</span> shift beneath your feet.{" "}
            <span className="text-neon-magenta">Holographic barriers</span> flicker in and out of
            existence. <span className="text-neon-purple">Motion-triggered soundscapes</span>{" "}
            respond to your every move.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group cyber-card p-6 sm:p-8 transition-all duration-700 hover:scale-[1.02]",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg border transition-all duration-300",
                    feature.color === "neon-cyan" && "border-neon-cyan/50 text-neon-cyan group-hover:bg-neon-cyan/10",
                    feature.color === "neon-magenta" && "border-neon-magenta/50 text-neon-magenta group-hover:bg-neon-magenta/10",
                    feature.color === "neon-purple" && "border-neon-purple/50 text-neon-purple group-hover:bg-neon-purple/10",
                    feature.color === "neon-blue" && "border-neon-blue/50 text-neon-blue group-hover:bg-neon-blue/10"
                  )}
                >
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
