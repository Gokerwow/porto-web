'use client';

import Image from "next/image";
// import { easeIn, motion, useMotionValue, useTransform } from "framer-motion";
import localFont from "next/font/local";
import Link from "next/link";
import { CursorContext } from "@/context/cursorContext";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import { SplashScreen } from "@/components/SplashScreen"
import FlipText from "@/components/FlipText";
import BlurText from "@/components/BlurText";

// Definisikan Ikon SVG di sini untuk kerapian
// const UniversityIcon = (
//   <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//   </svg>
// );

// const MajorIcon = (
//   <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//   </svg>
// );

// const OrganizationIcon = (
//   <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//   </svg>
// );


const Gafiya = localFont({
  src: './assets/fonts/Gafiya-Regular.otf', // Path relatif ke file font
  display: 'swap',
});

const FiraCode = localFont({
  src: './assets/fonts/FiraCode-Regular.ttf',
  display: "swap"
})

export default function Home() {
  
  // const pathLength = useMotionValue(0)

  // const strokeWidth = useTransform(
  //   pathLength,
  //   [0, 0.01],
  //   ['0', '100'],
  //   {ease: easeIn}
  // )

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("hasLoadedBefore")) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasLoadedBefore", "true");
  };

  const { setCursorState } = useContext(CursorContext);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = (e.target as Element).getBoundingClientRect();
    setCursorState({
      variant: 'hovering',
      dimensions: rect
    })
  }
  

  const handleMouseLeave = () => {
    setCursorState({
      variant: 'default',
      dimensions: {}
    })
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence>
        {isLoading && <SplashScreen onAnimationComplete={handleAnimationComplete} />}
      </AnimatePresence>
      <div className='pt-5 flex justify-between px-7'>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="h-fit p-2 group">
          <h1 className={` text-xl text-gray-500 pointer-events-none group-hover:text-black group-hover:font-bold transition-all duration-200 ${FiraCode.className}`}>Based In</h1>
          <h3 className={` text-gray-500 pointer-events-none group-hover:text-black group-hover:font-bold transition-all duration-200 ${FiraCode.className}`}>Jember, Indonesia</h3>
        </div>

        <div className="text-center">
          <h1 className={` text-2xl  ${Gafiya.className}`}>BRILLIANTS</h1>
          <h3 className={`italic ${FiraCode.className}`}>An Aspiring Developer</h3>
        </div>

        <div className="text-right flex flex-col relative z-30">
          <Link href={'https://github.com/Gokerwow'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} target="_blank" className={`text-xl w-fit text-gray-500 hover:text-black hover:font-bold transition-all duration-200 ${FiraCode.className}`}>GITHUB</Link>
          <Link href={'https://www.instagram.com/brilsyah.m/'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} target="_blank" className={`text-xl w-fit text-gray-500 hover:text-black hover:font-bold transition-all duration-200 ${FiraCode.className}`}>INSTAGRAM</Link>
          <Link href={'https://www.youtube.com/@Goker_952/shorts'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} target="_blank" className={`text-xl w-fit text-gray-500 hover:text-black hover:font-bold transition-all duration-200 ${FiraCode.className}`}>YOUTUBE</Link>
        </div>
      </div>

      <FlipText>BRILLIANTS</FlipText>

      <div className=" w-full flex justify-center items-end h-full relative">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <BlurText>Brillian Maulana  Syah</BlurText>
        </div>
        <div className="absolute z-20 right-50 top-1/4 ">
          <motion.h1 initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ type:'tween', ease: 'easeIn', duration: 1 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`text-3xl p-7 text-left ${FiraCode.className} text-gray-700 `}>A <span className="text-black font-bold">Developer</span> who loves <br /> discovering new things and <br /> exploring the frontiers of <br /> technology</motion.h1>
        </div>
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "backOut", type: "tween", duration: 2 }} className="relative w-[700px] h-[900px]"> {/* Saya beri contoh bingkai dengan tinggi dan lebar */}
          <Image
            src={"/assets/foto_pribadi_3.png"}
            alt={"foto"}
            fill
            // GANTI DARI OBJECT-CONTAIN MENJADI OBJECT-COVER
            className="!relative z-40 object-cover object-top drop-shadow-[0_10px_8px_rgba(0,0,0,0.4)]"
          />
        </motion.div>
      </div>
    </div>
  )
}
