"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Star, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    name: "Standard Entry",
    price: "$22",
    period: "per person",
    description:
      "Includes full 18-hole access, augmented scorecard, and one complimentary synth-drink token.",
    features: ["Full 18-hole access", "Augmented scorecard", "1 Synth-drink token"],
    color: "neon-cyan",
    popular: false,
  },
  {
    name: "Night City Pass",
    price: "$35",
    period: "per person",
    description:
      "All Standard benefits plus priority entry, exclusive Null Zone access, and a commemorative holographic badge.",
    features: [
      "All Standard benefits",
      "Priority entry",
      "Exclusive Null Zone access",
      "Holographic badge",
    ],
    color: "neon-magenta",
    popular: true,
  },
  {
    name: "Corporate Grid Package",
    price: "$450",
    period: "up to 20 players",
    description:
      "Private venue rental for 2 hours, dedicated host, catering options, and team tournament mode.",
    features: [
      "Private venue rental (2 hrs)",
      "Dedicated host",
      "Catering options",
      "Team tournament mode",
    ],
    color: "neon-purple",
    popular: false,
  },
  {
    name: "Annual Cyber-Citizen",
    price: "$199",
    period: "per year",
    description:
      "Unlimited play, 15% merch discount, early access to new courses, and VIP event invitations.",
    features: [
      "Unlimited play",
      "15% merch discount",
      "Early access to new courses",
      "VIP event invitations",
    ],
    color: "neon-blue",
    popular: false,
  },
];

export function PricingSection() {
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
      id="pricing"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base via-dark-surface/30 to-dark-base" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block font-mono text-xs text-neon-purple uppercase tracking-widest mb-4">
            // Access Protocols
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">
            <span className="text-white">Access </span>
            <span className="text-gradient-cyber">Passes</span>
          </h2>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={cn(
                "group relative cyber-card p-6 transition-all duration-700 hover:scale-[1.02]",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                tier.popular && "ring-2 ring-neon-magenta/50"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-magenta text-dark-base font-display text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={cn(
                      "font-display text-3xl sm:text-4xl font-black",
                      tier.color === "neon-cyan" && "text-neon-cyan",
                      tier.color === "neon-magenta" && "text-neon-magenta",
                      tier.color === "neon-purple" && "text-neon-purple",
                      tier.color === "neon-blue" && "text-neon-blue"
                    )}
                  >
                    {tier.price}
                  </span>
                  <span className="font-body text-sm text-foreground/50">{tier.period}</span>
                </div>
                <p className="font-body text-sm text-foreground/70">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      className={cn(
                        "h-4 w-4 mt-0.5 flex-shrink-0",
                        tier.color === "neon-cyan" && "text-neon-cyan",
                        tier.color === "neon-magenta" && "text-neon-magenta",
                        tier.color === "neon-purple" && "text-neon-purple",
                        tier.color === "neon-blue" && "text-neon-blue"
                      )}
                    />
                    <span className="font-body text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={cn(
                  "block w-full text-center px-4 py-3 font-display text-sm font-bold uppercase tracking-wider border transition-all duration-300 rounded",
                  tier.color === "neon-cyan" &&
                    "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10",
                  tier.color === "neon-magenta" &&
                    "border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10",
                  tier.color === "neon-purple" &&
                    "border-neon-purple text-neon-purple hover:bg-neon-purple/10",
                  tier.color === "neon-blue" &&
                    "border-neon-blue text-neon-blue hover:bg-neon-blue/10"
                )}
              >
                Select Pass
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
