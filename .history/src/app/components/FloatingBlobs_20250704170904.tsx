'use client';

import React, { useState, useRef, useEffect } from 'react';

// Tipe untuk data setiap blob
type BlobData = {
  id: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  initialX: number;
  initialY: number;
  moveX: number;
  moveY: number;
  rotate: number;
};

export default function FloatingBlobs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

    // 1. Gunakan useState untuk menyimpan array data blob
    const [blobs, setBlobs] = useState<BlobData[]>([]);

    const config = {
        count: 20,
        sizeRange: { min: 80, max: 200 },
        speedRange: { min: 15, max: 30 },
        colorPalette: [
            'bg-blue-200/60', 'bg-purple-200/60', 'bg-pink-200/60',
            'bg-amber-200/60', 'bg-emerald-200/60', 'bg-indigo-200/60'
        ],
        movementRange: 100
    };

    useEffect(() => {
        // 2. Buat data blob satu kali saat komponen dimuat
        const generatedBlobs: BlobData[] = [];
        for (let i = 0; i < config.count; i++) {
            generatedBlobs.push({
                id: i,
                size: Math.floor(Math.random() * (config.sizeRange.max - config.sizeRange.min) + config.sizeRange.min),
                color: config.colorPalette[Math.floor(Math.random() * config.colorPalette.length)],
                duration: Math.floor(Math.random() * (config.speedRange.max - config.speedRange.min) + config.speedRange.min),
                delay: Math.random() * -20,
                initialX: Math.random() * 100,
                initialY: Math.random() * 100,
                moveX: (Math.random() - 0.5) * config.movementRange,
                moveY: (Math.random() - 0.5) * config.movementRange,
                rotate: Math.random() * 360,
            });
        }
        setBlobs(generatedBlobs);

        // Fungsi untuk interaksi mouse (logikanya tetap sama)
        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            blobsRef.current.forEach((blob, index) => {
                if (!blob) return;
                const reaction = index % 3 === 0 ? 0.3 : index % 2 === 0 ? 0.5 : 0.7;
                const x = (mouseX - 0.5) * 50 * reaction;
                const y = (mouseY - 0.5) * 50 * reaction;
                
                // Menggunakan ref untuk mengubah transform demi performa
                blob.style.transform = `translate(calc(var(--move-x) + ${x}px), calc(var(--move-y) + ${y}px)) rotate(var(--rotate))`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Dependency array kosong agar hanya berjalan sekali

    return (
        <>
            <div
                ref={containerRef}
                className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
                style={{ filter: 'url(#goo)' }} // Terapkan filter gooey di sini
            >
                {/* 3. Render blob secara deklaratif menggunakan .map() */}
                {blobs.map((blob, index) => (
                    <div
                        key={blob.id}
                        ref={(el) => (blobsRef.current[index] = el)} // 4. Kumpulkan ref untuk setiap elemen
                        className={`absolute rounded-full mix-blend-multiply animate-float ${blob.color}`}
                        style={{
                            width: `${blob.size}px`,
                            height: `${blob.size}px`,
                            left: `${blob.initialX}%`,
                            top: `${blob.initialY}%`,
                            animationDuration: `${blob.duration}s`,
                            animationDelay: `${blob.delay}s`,
                            '--move-x': `${blob.moveX}px`,
                            '--move-y': `${blob.moveY}px`,
                            '--rotate': `${blob.rotate}deg`,
                        } as React.CSSProperties}
                    />
                ))}
            </div>

            {/* SVG Filter untuk efek gooey (sama seperti sebelumnya) */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
        </>
    );
};