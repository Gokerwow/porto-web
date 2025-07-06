// Wajib ada di baris paling atas untuk menggunakan hook seperti usePathname
"use client";

import React from 'react'; // Import React untuk menggunakan React.cloneElement
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { SVGProps } from 'react';

// --- DEFINISI KOMPONEN IKON SVG ---
const HomeIcon = (props : SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);

const ProjectsIcon = (props : SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
        <path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>
    </svg>
);

const IdCardIcon = (props : SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <circle cx="8" cy="10" r="2"/>
        <path d="M12 10h6"/>
        <path d="M12 14h6"/>
        <path d="M6 14h0"/>
    </svg>
);



// --- KOMPONEN NAVBAR UTAMA ---
export default function Navbar() {
    const pathname = usePathname();

    // Sekarang kita menyimpan komponen, bukan string
    const navLinks = [
        { href: "/", icon: <HomeIcon />, label: "Home" },
        { href: "/projects", icon: <ProjectsIcon />, label: "Projects" },
        { href: "/about", icon: <IdCardIcon/>, label: "About" }
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 bg-[#282a3693] p-2 rounded-xl shadow-lg">
                <nav className="flex items-center gap-2 relative">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <div key={link.href}>
                                <span className='text-white text-center absolute -top-7'>
                                    {link.label}
                                </span>
                                <Link  href={link.href}>
                                    {React.cloneElement(link.icon, {
                                        className: `h-12 w-12 p-1 rounded-xl transition-all duration-200 ${
                                            isActive
                                                ? 'bg-[#4d5066] text-yellow-400'
                                                : 'text-gray-300 hover:bg-[#4d5066] hover:text-white'
                                        }`
                                    })}
                                </Link>
                            </div>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}