// File: components/SplashScreen.tsx
'use client';

import { motion, useMotionValue, useTransform, animate, useAnimationControls } from 'framer-motion';
import localFont from 'next/font/local';
import { useEffect } from 'react';

// 1. Terima prop onAnimationComplete dan duration
interface SplashScreenProps {
    duration?: number;
    onAnimationComplete: () => void;
}

const FiraCode = localFont({
    src: '../app/assets/fonts/FiraCode-Regular.ttf',
    display: "swap"
})

export const SplashScreen = ({ duration = 4.5, onAnimationComplete }: SplashScreenProps) => {
    // Kontrol untuk animasi angka dan lingkaran
    const contentControls = useAnimationControls();
    // Kontrol untuk animasi seluruh halaman splash screen
    const containerControls = useAnimationControls();

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const sequence = async () => {
            // Tunggu animasi hitungan selesai
            await animate(count, 100, {
                duration: duration,
                ease: "easeOut",
            });

            // 2. SETELAH hitungan selesai, jalankan animasi fade out pada konten
            await contentControls.start({
                opacity: 0,
                transition: { duration: 0.5, ease: "easeOut" }
            });

            // 3. SETELAH konten fade out, jalankan animasi slide down pada kontainer
            await containerControls.start({
                y: "100vh",
                transition: { duration: 1, type: "tween" }
            });

            // 4. SETELAH semua animasi selesai, panggil fungsi dari parent
            onAnimationComplete();
        };

        sequence();
    }, [count, duration, contentControls, containerControls, onAnimationComplete]);

    return (
        // Gunakan kontrol animasi untuk kontainer utama
        <motion.div
            animate={containerControls}
            initial={{ y: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
            {/* Gunakan kontrol animasi untuk konten di dalamnya */}
            <motion.div
                animate={contentControls}
                initial={{ opacity: 1 }}
                className="relative w-48 h-48"
            >
                <svg className="absolute inset-0 w-full h-full text-gray-200" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="2" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-black">
                    <motion.h1 className={`text-md ${FiraCode.className}`}>{rounded}</motion.h1>
                    <h1>%</h1>
                </div>
            </motion.div>
        </motion.div>
    );
};