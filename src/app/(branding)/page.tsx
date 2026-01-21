'use client';

import localFont from "next/font/local";
import { CursorContext } from "@/context/cursorContext";
import { useContext } from "react";
import { motion } from "framer-motion";

// Load fonts
const Gafiya = localFont({
  src: '../assets/fonts/Gafiya-Regular.otf',
  display: 'swap',
});

const FiraCode = localFont({
  src: '../assets/fonts/FiraCode-Regular.ttf',
  display: "swap"
});

export default function Home() {
  const { setCursorState } = useContext(CursorContext);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const target = e.currentTarget as Element;
    const rect = target.getBoundingClientRect();
    setCursorState({
      variant: 'hovering',
      dimensions: rect
    });
  };

  const handleMouseLeave = () => {
    setCursorState({
      variant: 'default',
      dimensions: {} as DOMRect
    });
  };

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0d0d0d] text-[#e0e0e0]">
      
      {/* 1. Abstract Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[180px]" 
        />
      </div>

      <div className="z-10 flex flex-col items-center gap-6">
        
        {/* 2. Main Title Brand */}
        <div 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          className="relative group cursor-default"
        >
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`text-7xl md:text-9xl ${Gafiya.className} tracking-widest text-center mix-blend-difference`}
          >
            BRILLIANTS
          </motion.h1>
          
          {/* Hover Reveal Effect */}
          <motion.div 
            className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
          />
        </div>

        {/* 3. Coming Soon Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="h-[1px] w-12 bg-gray-700" />
          <p className={`text-xs md:text-sm text-gray-500 ${FiraCode.className} tracking-[0.5em] uppercase`}>
            Coming Soon
          </p>
        </motion.div>

      </div>

      {/* 4. Minimal Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 text-[10px] text-gray-600 font-mono tracking-widest"
      >
        EST. 2026 // GOKERWOW
      </motion.div>
    </div>
  );
}