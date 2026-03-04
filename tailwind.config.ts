import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#e0e0e0",
        background: "#0d0d1a",
        border: "#1a1a2e",
        card: "#0a0a14",
        "neon-cyan": "#00fff0",
        "neon-magenta": "#ff00ff",
        "neon-purple": "#8b00ff",
        "neon-blue": "#0066ff",
        "neon-pink": "#ff0080",
        "dark-base": "#0d0d1a",
        "dark-surface": "#1a1a2e",
        "dark-elevated": "#252540",
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "sans-serif"],
        body: ["var(--font-rajdhani)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "flicker": "flicker 0.15s infinite",
        "scan-line": "scan-line 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glitch": "glitch 1s linear infinite",
      },
      keyframes: {
        "pulse-neon": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.8", filter: "brightness(1.2)" },
        },
        glow: {
          "0%": { filter: "brightness(1) drop-shadow(0 0 2px currentColor)" },
          "100%": { filter: "brightness(1.3) drop-shadow(0 0 8px currentColor)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(0, 255, 240, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 240, 0.03) 1px, transparent 1px)",
        "cyber-gradient": "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 50%, #0d0d1a 100%)",
        "neon-gradient": "linear-gradient(90deg, #00fff0 0%, #ff00ff 50%, #00fff0 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
