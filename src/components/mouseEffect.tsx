// Pastikan file ini memiliki "use client" di paling atas jika digunakan di Next.js App Router
'use client'

import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "@/context/cursorContext";

// Beri nama komponen agar mudah diidentifikasi
export default function MouseFollower() {

    const { cursorState } = useContext(CursorContext);
    // State untuk menyimpan posisi mouse
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    // useEffect untuk menambahkan dan membersihkan event listener
    useEffect(() => {
        // Fungsi ini akan dipanggil setiap kali mouse bergerak
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        // Tambahkan event listener saat komponen pertama kali dimuat
        window.addEventListener('mousemove', updateMousePosition);

        // Fungsi cleanup: Hapus event listener saat komponen tidak lagi digunakan
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []); // Array kosong `[]` memastikan useEffect hanya berjalan sekali (saat mount dan unmount)

    const padding = 10;
    // Varian untuk animasi Framer Motion
    const variants = {
        default: {
            x: mousePosition.x - 40, // 40 adalah setengah dari width (w-20 -> 80px)
            y: mousePosition.y - 40, // 40 adalah setengah dari height (h-20 -> 80px)
            width: 80,
            height: 80,
            borderRadius: 100
        },
        hovering: {
            x: (cursorState.dimensions.left ?? mousePosition.x - 40) - padding,
            y: (cursorState.dimensions.top ?? mousePosition.y - 40) - padding,
            width: (cursorState.dimensions.width ?? 80) + padding * 2,
            height: (cursorState.dimensions.height ?? 80) + padding * 2,
            borderRadius: 30
        }
    };

    return (
        <motion.div
            variants={variants}
            animate={cursorState.variant}
            // Tambahkan transisi agar pergerakan lebih mulus
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            // Gunakan `fixed` dan atur `top`/`left` agar tidak bergantung pada parent
            // `pointer-events-none` agar div ini tidak menghalangi interaksi dengan elemen lain
            className="w-20 h-20 bg-white rounded-full fixed z-[51] top-0 left-0 pointer-events-none cursor-none mix-blend-difference"
        />
    );
}