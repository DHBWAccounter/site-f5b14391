"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 overflow-hidden border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-base" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="relative">
              <Zap className="h-6 w-6 text-neon-cyan animate-pulse-neon" />
            </div>
            <span className="font-display text-base font-bold tracking-wider">
              <span className="text-neon-cyan">CYBER</span>
              <span className="text-neon-magenta">PUNK</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-foreground/50 mb-4">
            © 2024 Cyberpunk Mini Golfing. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="#"
              className="font-body text-sm text-foreground/60 hover:text-neon-cyan transition-colors"
            >
              Privacy Protocol
            </a>
            <span className="text-foreground/30">|</span>
            <a
              href="#"
              className="font-body text-sm text-foreground/60 hover:text-neon-cyan transition-colors"
            >
              Terms of Access
            </a>
            <span className="text-foreground/30">|</span>
            <a
              href="#"
              className="font-body text-sm text-foreground/60 hover:text-neon-cyan transition-colors"
            >
              Accessibility
            </a>
          </div>

          {/* Terminal message */}
          <div className="inline-block px-6 py-3 bg-dark-surface/50 border border-border rounded">
            <p className="font-mono text-xs text-foreground/40 italic">
              System initialized. Connection stable.{" "}
              <span className="text-neon-cyan">See you on the grid.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
