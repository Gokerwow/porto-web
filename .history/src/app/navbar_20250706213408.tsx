"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { href: "/", icon: <Home className="h-6 w-6" />, label: "Home" },
        { href: "/projects", icon: <Package className="h-6 w-6" />, label: "Projects" },
        { href: "/profile", icon: <User className="h-6 w-6" />, label: "Profile" },
        { href: "/settings", icon: <Settings className="h-6 w-6" />, label: "Settings" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent">
            <div className="w-full bg-[#121212] border-t border-[#2c2c2c] flex justify-around items-center h-16">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex flex-col items-center justify-center text-white ${
                                isActive ? 'text-yellow-400' : 'text-gray-400 hover:text-gray-300'
                            } transition-colors duration-200`}
                        >
                            {link.icon}
                            {/* Optional: You can add labels below the icons if needed */}
                            {/* <span className="text-xs font-semibold">{link.label}</span> */}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}