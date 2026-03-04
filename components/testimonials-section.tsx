"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Honestly the coolest date night we've ever had. The Null Zone is insane—putting in near-total darkness with just UV lighting? Unforgettable.",
    author: "Mira T.",
    location: "Sector 4",
    color: "neon-cyan",
  },
  {
    quote:
      "Brought my whole team here for a team-building event. The leaderboard system made it genuinely competitive. Already planning our next visit.",
    author: "James K.",
    location: "Nexus Technologies",
    color: "neon-magenta",
  },
  {
    quote:
      "I've played mini golf my whole life. This is something else entirely. It's like stepping into Blade Runner.",
    author: "Derek S.",
    location: "Retro Gaming Enthusiast",
    color: "neon-purple",
  },
];

export function TestimonialsSection() {
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
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-surface/30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block font-mono text-xs text-neon-cyan uppercase tracking-widest mb-4">
            // User Feedback
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            <span className="text-gradient-cyber">Transmission Logs</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={cn(
                "group cyber-card p-6 sm:p-8 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote
                className={cn(
                  "h-8 w-8 mb-4 opacity-50",
                  testimonial.color === "neon-cyan" && "text-neon-cyan",
                  testimonial.color === "neon-magenta" && "text-neon-magenta",
                  testimonial.color === "neon-purple" && "text-neon-purple"
                )}
              />

              <blockquote className="font-body text-lg text-foreground/90 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full border flex items-center justify-center font-display text-sm font-bold",
                    testimonial.color === "neon-cyan" && "border-neon-cyan/50 text-neon-cyan",
                    testimonial.color === "neon-magenta" && "border-neon-magenta/50 text-neon-magenta",
                    testimonial.color === "neon-purple" && "border-neon-purple/50 text-neon-purple"
                  )}
                >
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white">
                    {testimonial.author}
                  </div>
                  <div className="font-body text-xs text-foreground/50">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
