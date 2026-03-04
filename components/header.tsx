"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Experience", href: "#experience" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-base/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Zap className="h-8 w-8 text-neon-cyan animate-pulse-neon" />
              <div className="absolute inset-0 blur-md bg-neon-cyan/50 rounded-full" />
            </div>
            <span className="font-display text-lg font-bold tracking-wider">
              <span className="text-neon-cyan">CYBER</span>
              <span className="text-neon-magenta">PUNK</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-body text-sm font-medium text-foreground/70 hover:text-neon-cyan transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a
              href="#cta"
              className="relative px-6 py-2 font-display text-sm font-bold uppercase tracking-wider bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 neon-border-cyan rounded"
            >
              <span className="relative z-10">Enter Grid</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground hover:text-neon-cyan transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-dark-surface border-t border-border px-4 py-6 space-y-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block font-body text-base font-medium text-foreground/70 hover:text-neon-cyan transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#cta"
            className="block w-full text-center px-6 py-3 font-display text-sm font-bold uppercase tracking-wider border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 rounded"
            onClick={() => setMobileMenuOpen(false)}
          >
            Enter Grid
          </a>
        </div>
      </div>
    </header>
  );
}
