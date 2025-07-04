// Jangan lupa tambahkan "use client" di paling atas karena kita menggunakan state dan event handler
'use client'; 

import Link from 'next/link';
import { useState } from 'react'; // 1. Impor useState

export default function Navbar() {
    // 2. Buat state untuk melacak kondisi menu (terbuka/tertutup)
    const [isOpen, setIsOpen] = useState(false);

    // 3. Tentukan radius orbit berdasarkan state
    const radius = isOpen ? 80 : 0; // Terbuka: 60px, Tertutup: 0px
    const opacity = isOpen ? 1 : 0; // Terbuka: terlihat, Tertutup: transparan

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {/* 4. Event handler diletakkan di kontainer utama */}
            <div 
                className="relative w-28 h-28"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                {/* Tombol Utama */}
                <button className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold shadow-lg z-10 transition-transform hover:scale-110">
                    B
                </button>
                
                {/* Link-link Orbital */}
                {/* Link Home */}
                <Link 
                    href="/" 
                    className="absolute top-1/2 left-1/2 -mt-6 -ml-6 w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110"
                    style={{ 
                        // 5. Gunakan state untuk mengubah transform dan opacity
                        opacity: opacity,
                        transform: `rotate(0deg) translate(-${radius}px) rotate(0deg) scale(${isOpen ? 1.2 : 0})`,
                        pointerEvents: isOpen ? 'auto' : 'none' // Agar tidak bisa diklik saat tersembunyi
                    }}
                    
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </Link>
                
                {/* Link Projects */}
                <Link 
                    href="/projects" 
                    className="absolute top-1/2 left-1/2 -mt-6 -ml-6 w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110"
                    style={{ 
                        opacity: opacity,
                        transform: `rotate(90deg) translate(-${radius}px) rotate(-90deg) scale(${isOpen ? 1.2 : 0})`,
                        pointerEvents: isOpen ? 'auto' : 'none'
                    }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </Link>

            </div>
        </div>
    );
}