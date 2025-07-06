// Wajib ada di baris paling atas untuk menggunakan hook seperti usePathname
"use client"; 

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import hook untuk mendapatkan path URL saat ini

export default function Navbar() {
    // Panggil hook untuk mendapatkan pathname, contoh: "/", "/projects", dll.
    const pathname = usePathname();

    const navLinks = [
        { href: "/info", label: "Info" },
        { href: "/elements", label: "Elements" },
        { href: "/votes", label: "Votes" },
    ];

    return (
        // Kontainer utama untuk navbar
        // fixed: tetap di layar saat scroll
        // bottom-8: jarak 8 unit (2rem atau 32px) dari bawah
        // left-1/2 -translate-x-1/2: trik untuk membuatnya pas di tengah horizontal
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            
            {/* Wrapper dengan style pill (pil) */}
            <div className="flex items-center gap-2 bg-[#282a36] p-2 rounded-full shadow-lg">
                
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

                {/* Tombol CTA "Visit Site" */}
                <Link href="/site" className="bg-yellow-400 text-black font-bold text-sm rounded-xl px-5 py-2 transition-transform hover:scale-105">
                    Visit Site
                </Link>

            </div>
        </div>
    );
}