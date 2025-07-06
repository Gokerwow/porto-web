// Wajib ada di baris paling atas untuk menggunakan hook seperti usePathname
"use client";

import React from 'react'; // Import React untuk menggunakan React.cloneElement
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// --- DEFINISI KOMPONEN IKON SVG ---
const HomeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);

const ProjectsIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
        <path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>
    </svg>
);


// --- KOMPONEN NAVBAR UTAMA ---
export default function Navbar() {
    const pathname = usePathname();

    // Sekarang kita menyimpan komponen, bukan string
    const navLinks = [
        { href: "/", icon: <HomeIcon /> },
        { href: "/projects", icon: <ProjectsIcon /> },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 bg-[#282a36] p-2 rounded-xl shadow-lg">
                <nav className="flex items-center gap-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link key={link.href} href={link.href}>
                                {React.cloneElement(link.icon, {
                                    className: `h-8 w-8 p-2 rounded-xl transition-all duration-200 ${
                                        isActive 
                                            ? 'bg-[#4d5066] text-yellow-400' 
                                            : 'text-gray-300 hover:bg-[#4d5066] hover:text-white'
                                    }`
                                })}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}