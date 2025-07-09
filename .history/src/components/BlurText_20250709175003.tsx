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
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    } as const;

    const child = {
        initial: {
            x: "-100%",
            opacity: 0,
            filter: "blur(10px)",
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            }
        },
        animate: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            }
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
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[500px] text-right'>{children.split("").map((l, i) => {
                return <motion.span variants={child} key={i} className={`text-8xl text-right ${Transcity.className}`}>{l}</motion.span>
            })}
            </div>
        </motion.div>
    )
}