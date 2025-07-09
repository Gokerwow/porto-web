'use client';

import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { CursorContext } from "@/context/cursorContext";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SplashScreen } from "@/components/SplashScreen";
import FlipText from "@/components/FlipText";
import BlurText from "@/components/BlurText";

// Definisikan font Anda
const Gafiya = localFont({
  src: './assets/fonts/Gafiya-Regular.otf',
  display: 'swap',
});

const FiraCode = localFont({
  src: './assets/fonts/FiraCode-Regular.ttf',
  display: "swap"
});

// Komponen baru untuk membungkus konten utama
const MainContent = () => {
  const { setCursorState } = useContext(CursorContext);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as Element).getBoundingClientRect();
    setCursorState({
      variant: 'hovering',
      dimensions: rect
    });
  };

  const handleMouseLeave = () => {
    setCursorState({
      variant: 'default',
      dimensions: {} as DOMRect // Pastikan tipe sesuai
    });
  };

  return (
    // Gunakan motion.div sebagai wrapper utama untuk animasi masuk
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative h-full"
    >
      <div className='pt-5 flex justify-between px-7'>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="h-fit p-2 group">
          <h1 className={`text-xl text-gray-500 pointer-events-none group-hover:text-black group-hover:font-bold transition-all duration-200 ${FiraCode.className}`}>Based In</h1>
          <h3 className={`text-gray-500 pointer-events-none group-hover:text-black group-hover:font-bold transition-all duration-200 ${FiraCode.className}`}>Jember, Indonesia</h3>
        </div>

        <div className="text-center">
          <h1 className={`text-2xl ${Gafiya.className}`}>BRILLIANTS</h1>
          <h3 className={`italic ${FiraCode.className}`}>An Aspiring Developer</h3>
        </div>

        <div className="text-right flex flex-col relative z-30">
          <Link href={'https://github.com/Gokerwow'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} target="_blank" className={`text-xl w-fit text-gray-500 hover:text-black hover:font-bold transition-all duration-200 ${FiraCode.className}`}>GITHUB</Link>
          <Link href={'https://www.instagram.com/brilsyah.m/'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} target="_blank" className={`text-xl w-fit text-gray-500 hover:text-black hover:font-bold transition-all duration-200 ${FiraCode.className}`}>INSTAGRAM</Link>
          <Link href={'https://www.youtube.com/@Goker_952/shorts'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} target="_blank" className={`text-xl w-fit text-gray-500 hover:text-black hover:font-bold transition-all duration-200 ${FiraCode.className}`}>YOUTUBE</Link>
        </div>
      </div>

      <FlipText>BRILLIANTS</FlipText>

      <div className="w-full flex justify-center items-end h-full relative">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <BlurText>Brillian Maulana Syah</BlurText>
        </div>
        <div className="absolute z-20 right-50 top-1/4 ">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'tween', ease: 'easeIn', duration: 1 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`text-3xl p-7 text-left ${FiraCode.className} text-gray-700 `}>A <span className="text-black font-bold">Developer</span> who loves <br /> discovering new things and <br /> exploring the frontiers of <br /> technology</motion.h1>
        </div>
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "backOut", type: "tween", duration: 2, delay: 0.2 }} className="relative w-[700px] h-[900px]">
          <Image
            src={"/assets/foto_pribadi_3.png"}
            alt={"foto"}
            fill
            className="!relative z-40 object-cover object-top drop-shadow-[0_10px_8px_rgba(0,0,0,0.4)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Hapus state `showMainContent`, kita akan kontrol langsung dari `isLoading`
  useEffect(() => {
    // Cek sessionStorage hanya sekali saat komponen pertama kali mount
    if (sessionStorage.getItem("hasLoadedBefore")) {
      setIsLoading(false);
    }
  }, []);

  const handleAnimationComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasLoadedBefore", "true");
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence>
        {isLoading ? (
          <SplashScreen key="splash" onAnimationComplete={handleAnimationComplete} />
        ) : (
          // Render MainContent HANYA setelah isLoading false
          <MainContent key="main" />
        )}
      </AnimatePresence>
    </div>
  );
}