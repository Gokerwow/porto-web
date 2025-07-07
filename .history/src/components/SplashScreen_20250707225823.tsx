// File: components/SplashScreen.tsx
'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

// Terima prop 'duration' dari layout
export const SplashScreen = ({ duration = 5 }) => {
    // `useMotionValue` untuk menyimpan dan menganimasikan angka tanpa memicu re-render
    const count = useMotionValue(0);

    // `useTransform` untuk mengubah angka (misal: dari 45.3 menjadi 45)
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        // `animate` adalah fungsi dari Framer Motion untuk memulai animasi
        const controls = animate(count, 100, {
            duration: duration, // Durasi animasi disesuaikan dengan prop
            ease: "easeInOut",     // "linear" agar kenaikan angka terasa konstan
        });

        // Mengembalikan fungsi cleanup untuk menghentikan animasi jika komponen unmount
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
            {/* Ganti spinner dengan teks persentase */}
            <div className="flex items-center justify-center text-6xl md:text-8xl font-bold text-violet-500">
                <motion.h1>{rounded}</motion.h1>
                <h1>%</h1>
            </div>
        </motion.div>
    );
};