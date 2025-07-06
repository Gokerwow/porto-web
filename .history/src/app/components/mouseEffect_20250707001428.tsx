// Pastikan file ini memiliki "use client" di paling atas jika digunakan di Next.js App Router
'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Beri nama komponen agar mudah diidentifikasi
export default function MouseFollower() {
    // State untuk menyimpan posisi mouse
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    // useEffect untuk menambahkan dan membersihkan event listener
    useEffect(() => {
        // Fungsi ini akan dipanggil setiap kali mouse bergerak
        const updateMousePosition = (e : MouseEvent) => {
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

    // Varian untuk animasi Framer Motion
    const variants = {
        default: {
            // Atur posisi x dan y berdasarkan state
            // Kurangi setengah dari ukuran div agar kursor berada di tengah div
            x: mousePosition.x - 40, // 40 adalah setengah dari width (w-20 -> 80px)
            y: mousePosition.y - 40, // 40 adalah setengah dari height (h-20 -> 80px)
        }
    };

    return (
        <motion.div
            variants={variants}
            animate="default"
            // Tambahkan transisi agar pergerakan lebih mulus
            transition={{ type: "keyframes", stiffness: 500, damping: 30 }}
            // Gunakan `fixed` dan atur `top`/`left` agar tidak bergantung pada parent
            // `pointer-events-none` agar div ini tidak menghalangi interaksi dengan elemen lain
            className="w-20 h-20 bg-purple-400 rounded-full fixed z-50 top-0 left-0 pointer-events-none"
        />
    );
}