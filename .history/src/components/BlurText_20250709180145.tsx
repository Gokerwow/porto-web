import localFont from 'next/font/local';
import { CursorContext } from "@/context/cursorContext";
import { useContext } from 'react';
import { animate, motion } from 'framer-motion';
import { blur } from 'three/tsl';
import { transition } from 'three/examples/jsm/tsl/display/TransitionNode.js';

const Transcity = localFont({
    src: '../app/assets/fonts/Transcity DEMO.otf', // Path relatif ke file font
    display: 'swap',
});

interface BlurProps {
    children: string
}

export default function BlurText({ children }: BlurProps) {
    const container = {
        initial: { opacity: 0 },
        animate: (i = 1) => ({
            opacity: 1,
            // INI BAGIAN PENTINGNYA
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        initial: {
            x: 100,
            opacity: 0,

        },
        animate: {
            x: 0,
            opacity: 1,
        }
    } as const;

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
        <motion.div variants={container} initial="initial" animate="animate" className="absolute z-20 left-50 top-1/4">
            <motion.div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[500px] text-right'>{children.split("").map((l, i) => {
                return <motion.span variants={child} transition={{ type: "spring", delay: 0.4 * i, duration: 2 }} key={i} className={`text-8xl text-right inline-block ${Transcity.className}`}>{l}</motion.span>
            })}
            </motion.div>
        </motion.div>
    )
}