import localFont from 'next/font/local';
import { CursorContext } from "@/context/cursorContext";
import { useContext } from 'react';
import { motion } from 'framer-motion';

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
        <motion.div initial className="absolute z-20 left-50 top-1/4">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[600px]'>{children.split("").map((l, i) => {
                return <span key={i} className={`text-8xl text-right ${Transcity.className}`}>{l}</span>
            })}</div>
        </motion.div>
    )
}