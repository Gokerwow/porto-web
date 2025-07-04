'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';

// Tipe untuk data setiap blob tetap sama
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

// 1. Pindahkan Konfigurasi ke Luar Komponen
// Objek ini tidak perlu dibuat ulang setiap kali komponen render ulang.
const BLOB_CONFIG = {
    count: 20,
    sizeRange: { min: 80, max: 200 },
    speedRange: { min: 15, max: 30 },
    colorPalette: [
        'bg-blue-200/60', 'bg-purple-200/60', 'bg-pink-200/60',
        'bg-amber-200/60', 'bg-emerald-200/60', 'bg-indigo-200/60'
    ],
    movementRange: 100
};

export default function FloatingBlobs() {
    const blobsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [blobs, setBlobs] = useState<BlobData[]>([]);

    // 2. Gunakan useMemo untuk memastikan data blob hanya dibuat sekali
    const blobData = useMemo(() => {
        const generatedBlobs: BlobData[] = [];
        for (let i = 0; i < BLOB_CONFIG.count; i++) {
            generatedBlobs.push({
                id: i,
                size: Math.floor(Math.random() * (BLOB_CONFIG.sizeRange.max - BLOB_CONFIG.sizeRange.min) + BLOB_CONFIG.sizeRange.min),
                color: BLOB_CONFIG.colorPalette[Math.floor(Math.random() * BLOB_CONFIG.colorPalette.length)],
                duration: Math.floor(Math.random() * (BLOB_CONFIG.speedRange.max - BLOB_CONFIG.speedRange.min) + BLOB_CONFIG.speedRange.min),
                delay: Math.random() * -20,
                initialX: Math.random() * 100,
                initialY: Math.random() * 100,
                moveX: (Math.random() - 0.5) * BLOB_CONFIG.movementRange,
                moveY: (Math.random() - 0.5) * BLOB_CONFIG.movementRange,
                rotate: Math.random() * 360,
            });
        }
        return generatedBlobs;
    }, []); // Dependency array kosong, hanya berjalan sekali

    // Set state dari data yang sudah di-memoize
    useEffect(() => {
        setBlobs(blobData);
    }, [blobData]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            blobsRef.current.forEach((blob, index) => {
                if (!blob) return;
                const reaction = index % 3 === 0 ? 0.3 : index % 2 === 0 ? 0.5 : 0.7;
                const x = (mouseX - 0.5) * 50 * reaction;
                const y = (mouseY - 0.5) * 50 * reaction;
                
                blob.style.transform = `translate(calc(var(--move-x) + ${x}px), calc(var(--move-y) + ${y}px)) rotate(var(--rotate))`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div
                className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
                style={{ filter: 'url(#goo)' }}
            >
                {blobs.map((blob, index) => (
                    <div
                        key={blob.id}
                        ref={(el) => { if (el) blobsRef.current[index] = el; }} // 3. Pengaman untuk ref
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