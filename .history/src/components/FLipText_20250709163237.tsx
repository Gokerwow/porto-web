import localFont from "next/font/local";
import React from "react";
import { motion } from "framer-motion";

const Delirium = localFont({
    src: '../app/assets/fonts/DeliriumNcv-Vm5e.ttf',
    display: "swap"
});

// LANGKAH 1: Definisikan tipe untuk props dengan benar
type FlipTextProps = {
    children: string;
};

// Gunakan tipe FlipTextProps di sini
export default function FlipText({ children }: FlipTextProps) {
    // LANGKAH 3: Tambahkan `return` untuk merender JSX
    return (
        <motion.div
            initial="initial"
            animate="animate"
            transition={{ delay: 5 }}
            className="absolute overflow-hidden cursor-pointer" // Ganti `absolute` menjadi `relative` agar lebih mudah di-layout
        >
            <motion.div
                className=""
            >
                <h1 className={`${Delirium.className} text-[840px] text-gray-300 leading-none text-center cursor-default`}>
                    {children.split("").map((l, i) => {
                        return <motion.span className="inline-block" variants={{ initial: { y: 0 }, animate: { y: '-100%' } }}
                            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.025 * i, repeat: Infinity, repeatType:"reverse", repeatDelay: 1 }} key={i}>{l}</motion.span>
                    })}
                </h1>
            </motion.div>
            <motion.div
            >
                <h1 className={`${Delirium.className} text-[840px] text-gray-300 leading-none text-center cursor-default`}>
                    {/* LANGKAH 2: Gunakan `children` di sini juga */}
                    {children.split("").map((l, i) => {
                        return <motion.span className="inline-block" variants={{ initial: { y: 0 }, animate: { y: '-100%' } }}
                            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.025 * i, repeat: Infinity, repeatType:"reverse", repeatDelay: 1 }} key={i}>{l}</motion.span>
                    })}
                </h1>
            </motion.div>
        </motion.div>
    );
}