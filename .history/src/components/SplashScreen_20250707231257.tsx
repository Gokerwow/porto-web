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
            ease: "easeOut",
        });
        return controls.stop;
    }, [count, duration]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{
                y: "100vh",
                transition: {
                    duration: 1,
                    type: "tween",
                    ease: "easeIn"
                }
            }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
            {/* 1. Buat kontainer untuk menampung lingkaran dan angka */}
            <div className="relative w-48 h-48">

                {/* 2. SVG untuk lingkaran putus-putus yang berputar */}
                <svg className="absolute inset-0 w-full h-full text-gray-200 animate-spin" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="20 15" // Angka pertama: panjang garis. Angka kedua: panjang spasi.
                        strokeLinecap="round"
                    />
                </svg>

                {/* 3. Teks persentase yang diposisikan di tengah */}
                <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-black">
                    <motion.h1
                        initial={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 1,
                                type: "tween",
                                ease: "easeIn"
                            }
                        }}
                        className='text-md'>{rounded}</motion.h1>
                    <h1>%</h1>
                </div>

            </div>
        </motion.div>
    );
};