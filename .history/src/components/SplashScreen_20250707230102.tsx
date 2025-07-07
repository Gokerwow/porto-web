// File: components/SplashScreen.tsx
'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

export const SplashScreen = ({ duration = 5 }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, 100, {
            duration: duration,
            ease: "linear",
        });
        return controls.stop;
    }, [count, duration]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.5,
                    ease: "easeInOut"
                }
            }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
            {/* 1. Buat kontainer untuk menampung lingkaran dan angka */}
            <div className="relative w-48 h-48">

                {/* 3. Teks persentase yang diposisikan di tengah */}
                <div className="absolute inset-0 flex items-center justify-center rounded-full text-5xl font-bold border-4 border">
                    <motion.h1>{rounded}</motion.h1>
                    <h1>%</h1>
                </div>

            </div>
        </motion.div>
    );
};