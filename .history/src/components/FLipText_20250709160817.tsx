import React from "react";

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