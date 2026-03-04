"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const zones = [
  {
    name: "Chrome Gardens",
    description: "Metallic flora and crystalline pathways",
    gradient: "from-neon-cyan/20 to-neon-blue/20",
  },
  {
    name: "Data Nexus",
    description: "Where information flows like water",
    gradient: "from-neon-magenta/20 to-neon-purple/20",
  },
  {
    name: "Null Zone",
    description: "Pitch-black course navigated only by ultraviolet light",
    gradient: "from-neon-purple/20 to-neon-cyan/20",
    featured: true,
  },
  {
    name: "Sector 7 Streets",
    description: "Rain-slicked alleys and flickering neon",
    gradient: "from-neon-blue/20 to-neon-cyan/20",
  },
  {
    name: "Corporate Zone",
    description: "Towering data spires and holographic billboards",
    gradient: "from-neon-magenta/20 to-neon-pink/20",
  },
  {
    name: "Underground Marketplace",
    description: "Black market vibes and rogue AI traders",
    gradient: "from-neon-cyan/20 to-neon-magenta/20",
  },
];

export function GallerySection() {
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
      id="gallery"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-base" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block font-mono text-xs text-neon-magenta uppercase tracking-widest mb-4">
            // Visual Archive
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">
            <span className="text-gradient-cyber">Neon Vistas</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            Wander through glowing alleyways. Putt past flickering neon kanji. Watch the city pulse
            around you as you play. Every corner is a photo op. Every hole is a world unto itself.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {zones.map((zone, index) => (
            <div
              key={zone.name}
              className={cn(
                "group relative overflow-hidden rounded-lg border border-border transition-all duration-700 hover:border-neon-cyan/50",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                zone.featured && "md:col-span-2 lg:col-span-1 lg:row-span-2"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Placeholder gradient background */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-70 transition-opacity",
                  zone.gradient
                )}
              />

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />

              {/* Animated lines */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent animate-pulse-neon" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-magenta/50 to-transparent animate-pulse-neon" style={{ animationDelay: "1s" }} />
              </div>

              {/* Content */}
              <div
                className={cn(
                  "relative p-6 sm:p-8 flex flex-col justify-end min-h-[200px] sm:min-h-[250px]",
                  zone.featured && "lg:min-h-[520px]"
                )}
              >
                {zone.featured && (
                  <span className="inline-block w-fit px-3 py-1 mb-4 font-mono text-xs text-neon-cyan uppercase tracking-wider border border-neon-cyan/30 rounded-full">
                    Featured
                  </span>
                )}
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {zone.name}
                </h3>
                <p className="font-body text-foreground/70 group-hover:text-foreground/90 transition-colors">
                  {zone.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-neon-cyan/10 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured zone callout */}
        <div
          className={cn(
            "mt-12 p-6 sm:p-8 cyber-card text-center transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="font-body text-foreground/80 italic">
            <span className="text-neon-cyan font-semibold">Featured zones</span> include the Chrome
            Gardens, the Data Nexus, and the legendary{" "}
            <span className="text-neon-magenta font-semibold">Null Zone</span>—a pitch-black course
            navigated only by ultraviolet light.
          </p>
        </div>
      </div>
    </section>
  );
}
