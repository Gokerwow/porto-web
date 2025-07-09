import localFont from 'next/font/local';
import { motion } from 'framer-motion';

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
            x: '-100%',
            opacity: 0,
            filter: 'blur(10px)'

        },
        animate: {
            x: 0,
            opacity: 1,
            filter: 'blur(0px)'
        }
    } as const;

    return (
        <motion.div variants={container} initial="initial" animate="animate" className="absolute z-20 left-50 top-1/4">
            <motion.div className='w-[500px] text-right'>{children.split(" ").map((word, i) => {
                return <motion.span variants={child} transition={{ type: "spring", delay: 0.05 * i }} key={i} className={`text-8xl text-right inline-block ${Transcity.className}`}>{word + '\u00A0'}</motion.span>
            })}
            </motion.div>
        </motion.div>
    )
}