// Wajib ada di baris paling atas untuk menggunakan hook seperti usePathname
"use client"; 

import { svg } from 'framer-motion/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import hook untuk mendapatkan path URL saat ini

export default function Navbar() {
    // Panggil hook untuk mendapatkan pathname, contoh: "/", "/projects", dll.
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home", svg: `    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>` },
        { href: "/projects", label: "Projects" },
    ];

    return (
        // Kontainer utama untuk navbar
        // fixed: tetap di layar saat scroll
        // bottom-8: jarak 8 unit (2rem atau 32px) dari bawah
        // left-1/2 -translate-x-1/2: trik untuk membuatnya pas di tengah horizontal
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            
            {/* Wrapper dengan style pill (pil) */}
            <div className="flex items-center gap-2 bg-[#282a36] p-4 rounded-xl shadow-lg">
                
                {/* Tombol Logo "W." */}
                <Link href="/" className="bg-[#1e1f26] text-white font-bold text-lg rounded-xl px-5 py-2 transition-transform hover:scale-105">
                    W.
                </Link>

                {/* Navigasi tengah (Info, Elements, Votes) */}
                <nav className="flex items-center gap-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                // Terapkan style secara kondisional
                                className={`
                                    px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200
                                    ${isActive 
                                        ? 'bg-[#4d5066] text-white border-2 border-yellow-400' 
                                        : 'text-gray-300 border-2 border-transparent hover:bg-[#4d5066] hover:text-white'
                                    }
                                `}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

            </div>
        </div>
    );
}