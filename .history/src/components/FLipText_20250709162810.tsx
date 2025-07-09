import localFont from "next/font/local";
import React from "react";
import { motion } from "framer-motion";

const Delirium = localFont({
    src: '../app/assets/fonts/DeliriumNcv-Vm5e.ttf',
    display: "swap"
});

type FlipTextProps = {
    children: string;
};

export default function FlipText({ children }: FlipTextProps) {
    const textHeight = 840; // Sesuaikan dengan ukuran font Anda

    return (
        // 1. "Jendela" dengan tinggi tetap dan overflow hidden
        <div style={{ height: `${textHeight}px` }} className="absolute overflow-hidden cursor-pointer">
            
            {/* 2. "Pembungkus" yang berisi kedua teks dan akan dianimasikan */}
            <motion.div
                // Animasikan posisi Y dari 0 (teks 1 terlihat) ke -textHeight (teks 2 terlihat)
                animate={{ y: [0, -textHeight] }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                }}
            >
                {/* Teks Pertama */}
                <h1 
                    style={{ height: `${textHeight}px` }} 
                    className={`${Delirium.className} text-[${textHeight}px] text-gray-300 leading-none text-center`}
                >
                    {children}
                </h1>

                {/* Teks Kedua (langsung di bawah teks pertama) */}
                <h1 
                    style={{ height: `${textHeight}px` }} 
                    className={`${Delirium.className} text-[${textHeight}px] text-gray-300 leading-none text-center`}
                >
                    {children}
                </h1>
            </motion.div>
        </div>
    );
}