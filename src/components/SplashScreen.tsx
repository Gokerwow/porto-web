'use client';

import { motion, useMotionValue, useTransform, animate, useAnimationControls } from 'framer-motion';
import localFont from 'next/font/local';
import { useEffect } from 'react';

interface SplashScreenProps {
    duration?: number;
    onAnimationComplete: () => void;
}

// Ensure this path matches your font location relative to components
const FiraCode = localFont({
    src: '../app/assets/fonts/FiraCode-Regular.ttf',
    display: "swap"
})

export const SplashScreen = ({ duration = 3.5, onAnimationComplete }: SplashScreenProps) => {
    const contentControls = useAnimationControls();
    const containerControls = useAnimationControls();
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const sequence = async () => {
            // 1. Counter Animation
            await animate(count, 100, { duration: duration, ease: "easeInOut" });

            // 2. Fade Out Text
            await contentControls.start({
                opacity: 0,
                filter: "blur(10px)",
                transition: { duration: 0.8, ease: "circIn" }
            });

            // 3. Slide Up Curtain
            await containerControls.start({
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            });

            onAnimationComplete();
        };

        sequence();
    }, [count, duration, contentControls, containerControls, onAnimationComplete]);

    return (
        <motion.div
            animate={containerControls}
            initial={{ y: 0 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d0d0d] text-[#e0e0e0]"
        >
            <motion.div animate={contentControls} className="flex flex-col items-center gap-4">
                <div className={`flex items-end font-bold ${FiraCode.className}`}>
                    <motion.span className="text-8xl md:text-9xl text-white tracking-tighter">
                        {rounded}
                    </motion.span>
                    <span className="text-2xl md:text-3xl mb-4 text-gray-600">%</span>
                </div>
                <div className="h-[1px] w-32 bg-gray-800 relative overflow-hidden">
                    <motion.div 
                        style={{ width: useTransform(count, [0, 100], ["0%", "100%"]) }}
                        className="absolute inset-0 bg-white"
                    />
                </div>
                <p className={`text-xs text-gray-500 uppercase tracking-[0.4em] ${FiraCode.className}`}>
                    Initializing
                </p>
            </motion.div>
        </motion.div>
    );
};