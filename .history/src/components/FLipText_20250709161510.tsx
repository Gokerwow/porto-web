import localFont from "next/font/local";
import React from "react";
import { motion } from "framer-motion";

const Delirium = localFont({
    src: '../app/assets/fonts/DeliriumNcv-Vm5e.ttf',
    display: "swap"
});

// LANGKAH 1: Definisikan tipe untuk props dengan benar
type FlipTextProps = {
    children: React.ReactNode;
};

// Gunakan tipe FlipTextProps di sini
export default function FlipText({ children }: FlipTextProps) {
    // LANGKAH 3: Tambahkan `return` untuk merender JSX
    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="absolute overflow-hidden cursor-pointer" // Ganti `absolute` menjadi `relative` agar lebih mudah di-layout
        >
            <motion.div
                className=""
                variants={{ initial: { y: 0 }, animate: { y: '-100%' } }}
                transition={{ duration: 0.5, ease: 'easeInOut' }} // Tambahkan transisi agar lebih mulus
            >
                <h1 className={`${Delirium.className} text-[840px] text-gray-300 leading-none text-center cursor-default`}>
                    {/* LANGKAH 2: Gunakan `children` di sini */}
                    {children.split("").map}
                </h1>
            </motion.div>
            <motion.div
                className="absolute inset-0"
                variants={{ initial: { y: '100%' }, animate: { y: 0 } }} // Ubah y awal agar teks kedua masuk dari bawah
                transition={{ duration: 0.5, ease: 'easeInOut' }} // Tambahkan transisi agar lebih mulus
            >
                <h1 className={`${Delirium.className} text-[840px] text-gray-300 leading-none text-center cursor-default`}>
                    {/* LANGKAH 2: Gunakan `children` di sini juga */}
                    {children}
                </h1>
            </motion.div>
        </motion.div>
    );
}