import type { Metadata } from "next";
import { Orbitron, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyberpunk Mini Golfing | Neon Nights. Digital Dreams.",
  description:
    "Enter the grid. Play 18 holes of immersive mini golf in a fully-realized cyberpunk world. Holographic obstacles, reactive environments, and synthwave vibes await.",
  keywords: [
    "cyberpunk",
    "mini golf",
    "immersive gaming",
    "neon",
    "entertainment",
    "date night",
    "corporate events",
  ],
  openGraph: {
    title: "Cyberpunk Mini Golfing | Neon Nights. Digital Dreams.",
    description:
      "Enter the grid. Play 18 holes of immersive mini golf in a fully-realized cyberpunk world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${jetbrainsMono.variable} min-h-screen bg-dark-base text-foreground overflow-x-hidden`}
      >
        <div className="scanline-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
