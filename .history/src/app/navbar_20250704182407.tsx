// src/app/navbar.tsx

'use client'; // Diperlukan untuk menggunakan usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 1. Impor usePathname

// 2. Buat data untuk link agar mudah dikelola
const navLinks = [
    { href: '/', text: 'HOME', bgColor: 'bg-purple-500', hoverBgColor: 'hover:bg-purple-600', activeBgColor: 'bg-purple-700' },
    { href: '/projects', text: 'PROJECTS', bgColor: 'bg-blue-500', hoverBgColor: 'hover:bg-blue-600', activeBgColor: 'bg-blue-700' },
    { href: '/skills', text: 'SKILLS', bgColor: 'bg-green-500', hoverBgColor: 'hover:bg-green-600', activeBgColor: 'bg-green-700' },
    { href: '/contact', text: 'CONTACT', bgColor: 'bg-red-500', hoverBgColor: 'hover:bg-red-600', activeBgColor: 'bg-red-700' },
];

export default function Navbar() {
    // 3. Dapatkan path URL saat ini
    const pathname = usePathname();

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <div className="absolute right-0 top-0 h-full w-20 bg-gray-900/30 backdrop-blur-sm"> {/* Latar belakang dibuat sedikit transparan */}
                <ul className="h-full flex flex-col pointer-events-auto">
                    
                    {/* 4. Gunakan .map() untuk me-render link secara dinamis */}
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href;

                        return (
                            // 5. Tambahkan border-t sebagai pemisah, kecuali untuk item pertama
                            <li 
                                key={link.href} 
                                className={`
                                    flex-1 hover:flex-grow-[1.5] transition-all duration-300 ease-in-out
                                    ${index > 0 ? 'border-t border-black/20' : ''}
                                `}
                            >
                                <Link 
                                    href={link.href} 
                                    className={`
                                        h-full w-full flex items-center justify-center 
                                        transition-colors duration-300
                                        ${isActive ? link.activeBgColor : `${link.bgColor} ${link.hoverBgColor}`}
                                    `}
                                >
                                    <span 
                                        className={`
                                            text-white font-bold rotate-90 text-xl tracking-widest transition-transform duration-300 ease-in-out
                                            ${isActive ? 'scale-125' : 'group-hover:scale-110'}
                                        `}
                                    >
                                        {link.text}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}