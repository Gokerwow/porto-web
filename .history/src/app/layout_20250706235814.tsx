import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRILLIANTS",
  description: "Brilliants - Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Mouse/>
        <Navbar />
        <main className=""> {/* <--- TAMBAHKAN INI */}
          {children}
        </main>
      </body>
    </html>
  );
}

const Mouse = (e : React.MouseEvent) => {
  const MouseX = e.clientX
  const MouseY = e.clientY

  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener()
    }
  })
  
  const Variants = {
    default: {
      x: MousePosition.x,
      y: MousePosition.y
    }
  }
  return <motion.div 
  variants={Variants}
  animate="default"
  className="w-20 h-20 bg-purple-400 rounded-full absolute"
  />
}