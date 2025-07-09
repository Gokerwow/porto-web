import localFont from "next/font/local";
import React from "react";
import { motion } from "../app";

const Delirium = localFont({
    src: '../app/assets/fonts/DeliriumNcv-Vm5e.ttf',
    display: "swap"
})

export default function FlipText({ children }: React.ReactNode) {
    <motion.div initial="initial" whileHover="animate" className="absolute overflow-hidden bg-amber-600 w-full h-full">
        <motion.div className="" variants={{ initial: { y: 0 }, animate: { y: '-100%' } }}>
            <h1 className={`${Delirium.className} text-[840px] text-gray-300 leading-none text-center cursor-default`}>BRILLIANTS</h1>
        </motion.div>
        <motion.div className="absolute inset-0" variants={{ initial: { y: '-100%' }, animate: { y: 0 } }}>
            <h1 className={`${Delirium.className} text-[840px] text-gray-300 leading-none text-center cursor-default`}>BRILLIANTS</h1>
        </motion.div>
    </motion.div>
}