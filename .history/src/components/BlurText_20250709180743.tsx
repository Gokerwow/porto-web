import React, { useContext } from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
// import { CursorContext } from "./path/to/your/CursorContext"; // Sesuaikan path ini

// Definisikan font Anda
const Transcity = localFont({
    src: '../app/assets/fonts/Transcity.ttf', // Sesuaikan path ini
    display: "swap"
});

// Definisikan tipe untuk props
interface AnimatedNameProps {
    words: string[];
}

export default function AnimatedName({ words }: AnimatedNameProps) {
    // const { setCursorState } = useContext(CursorContext); // Aktifkan jika Anda menggunakan ini

    // Varian untuk animasi per huruf
    const letterVariant = {
        initial: {
            x: "-100%",
            opacity: 0,
            filter: "blur(10px)",
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

    // Varian untuk animasi per kata (untuk "Maulana")
    const wordVariant = {
        initial: {
            y: "100%",
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 15,
                stiffness: 100,
                delay: 0.25 // Beri sedikit delay agar muncul setelah "Brillian"
            }
        }
    } as const;


    // Fungsi mouse event (opsional, bisa diaktifkan kembali)
    // const handleMouseEnter = (e: React.MouseEvent) => { ... }
    // const handleMouseLeave = () => { ... }

    return (
        <motion.div initial="initial" animate="animate" className="relative z-20">
            <div 
                // onMouseEnter={handleMouseEnter} 
                // onMouseLeave={handleMouseLeave} 
                className='w-auto text-right'
            >
                <h1 className={`text-8xl text-right ${Transcity.className} flex flex-wrap justify-end items-center`}>
                    {words.map((word, wordIndex) => (
                        // Cek apakah kata adalah "Maulana"
                        word === "Maulana" ? (
                            // JIKA YA: Animasikan sebagai satu blok
                            <motion.span
                                key={word}
                                variants={wordVariant}
                                className="inline-block mx-2" // Beri sedikit spasi horizontal
                            >
                                {word}
                            </motion.span>
                        ) : (
                            // JIKA TIDAK: Animasikan per huruf
                            <span key={word} className="inline-flex mx-2">
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={letterIndex}
                                        variants={letterVariant}
                                        transition={{ type: "spring", delay: 0.05 * letterIndex + (wordIndex * 0.5) }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        )
                    ))}
                </h1>
            </div>
        </motion.div>
    );
}