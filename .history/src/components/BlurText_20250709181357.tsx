import React from 'react';
import { motion } from 'framer-motion';

// Definisikan tipe untuk props
interface AnimatedWordsProps {
    text: string;
    className?: string; // Prop opsional untuk styling dari luar
}

export default function AnimatedWords({ text, className }: AnimatedWordsProps) {
    // 1. Pecah teks menjadi array kata-kata
    const words = text.split(" ");

    // Varian untuk komponen induk (container)
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                // Atur jeda antara animasi setiap kata
                staggerChildren: 0.2,
            },
        },
    }as const;

    // Varian untuk setiap anak (setiap kata)
    const child = {
        hidden: {
            opacity: 0,
            y: 20, // Mulai dari 20px di bawah posisi aslinya
        },
        visible: {
            opacity: 1,
            y: 0,    // Kembali ke posisi asli
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }as const;

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={`flex flex-wrap ${className}`} // Gunakan flexbox untuk layout yang rapi
        >
            {words.map((word, index) => (
                // 2. Buat motion.span untuk setiap kata
                <motion.span
                    key={index}
                    variants={child}
                    style={{ marginRight: '0.4em' }} // 3. Tambahkan spasi di antara kata
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}