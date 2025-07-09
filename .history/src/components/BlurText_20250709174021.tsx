import localFont from 'next/font/local';
import { CursorContext } from "@/context/cursorContext";
import { useContext } from 'react';
import { animate, motion } from 'framer-motion';
import { blur } from 'three/tsl';

const Transcity = localFont({
    src: '../app/assets/fonts/Transcity DEMO.otf', // Path relatif ke file font
    display: 'swap',
});

interface BlurProps {
    children: string
}

export default function BlurText({ children } : BlurProps) {
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
        <motion.div initial="initial" animate="animate" className="absolute z-20 left-50 top-1/4">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[500px] text-right'>{children.split("").map((l, i) => {
                return <motion.span variants={{ initial: { x:"-100%", opacity:0, filter: "blur(10px)" }, animate: { x:0, opacity:1, filter: "blur(0px)" } }} transition={{ type:"tween", ease:"backOut", delay: 0.025 * i }} key={i} className={`text-8xl text-right ${Transcity.className}`}>{l}</motion.span>
            })}
            </div>
        </motion.div>
    )
}