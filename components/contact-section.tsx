"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Mail, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const contactInfo = {
  address: "2077 Neo District Boulevard, Downtown District, Neo Tokyo-7",
  hours: [
    { days: "Monday–Thursday", time: "4 PM – 11 PM" },
    { days: "Friday", time: "4 PM – 1 AM" },
    { days: "Saturday", time: "12 PM – 1 AM" },
    { days: "Sunday", time: "12 PM – 10 PM" },
  ],
  contacts: [
    { label: "General Inquiries", email: "hello@cyberpunkminigolf.com" },
    { label: "Events & Group Bookings", email: "events@cyberpunkminigolf.com" },
    { label: "Press", email: "press@cyberpunkminigolf.com" },
  ],
  social: [
    { name: "Instagram", url: "https://instagram.com/cyberpunkminigolf" },
    { name: "TikTok", url: "https://tiktok.com/@cyberpunkminigolf" },
    { name: "Twitter", url: "https://twitter.com/cyberpunkminigolf" },
  ],
};

export function ContactSection() {
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
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base via-dark-surface/30 to-dark-base" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block font-mono text-xs text-neon-magenta uppercase tracking-widest mb-4">
            // Location Data
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            <span className="text-white">Locate the </span>
            <span className="text-gradient-cyber">Grid</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Address */}
          <div
            className={cn(
              "cyber-card p-6 sm:p-8 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-neon-cyan/50 text-neon-cyan">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                Address
              </h3>
            </div>
            <p className="font-body text-foreground/70 leading-relaxed">
              {contactInfo.address}
            </p>
          </div>

          {/* Hours */}
          <div
            className={cn(
              "cyber-card p-6 sm:p-8 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-neon-magenta/50 text-neon-magenta">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                Hours
              </h3>
            </div>
            <ul className="space-y-2">
              {contactInfo.hours.map((item) => (
                <li key={item.days} className="flex justify-between font-body text-sm">
                  <span className="text-foreground/60">{item.days}</span>
                  <span className="text-neon-cyan">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={cn(
              "cyber-card p-6 sm:p-8 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-neon-purple/50 text-neon-purple">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                Contact
              </h3>
            </div>
            <ul className="space-y-3">
              {contactInfo.contacts.map((item) => (
                <li key={item.label}>
                  <div className="font-body text-xs text-foreground/50 mb-1">{item.label}</div>
                  <a
                    href={`mailto:${item.email}`}
                    className="font-mono text-sm text-neon-cyan hover:text-neon-magenta transition-colors"
                  >
                    {item.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div
          className={cn(
            "mt-12 text-center transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="font-body text-sm text-foreground/50 mb-4">Follow the Signal:</p>
          <div className="flex justify-center gap-4">
            {contactInfo.social.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 border border-border hover:border-neon-cyan/50 rounded transition-all duration-300"
              >
                <span className="font-display text-sm font-bold text-foreground/70 group-hover:text-neon-cyan transition-colors">
                  {item.name}
                </span>
                <ExternalLink className="h-3 w-3 text-foreground/50 group-hover:text-neon-cyan transition-colors" />
              </a>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-foreground/40">
            @CyberpunkMiniGolf on all platforms
          </p>
        </div>
      </div>
    </section>
  );
}
