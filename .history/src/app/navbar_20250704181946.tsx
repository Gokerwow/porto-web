'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
            <div className="flex flex-col gap-2 p-2 bg-yellow-400 rounded-l-lg shadow-xl">
                <Link href="/" className={`relative p-4 rounded-l ${pathname === '/' ? 'bg-amber-600' : 'bg-amber-500'} hover:bg-amber-700 transition-all`}>
                    <span className="font-bold rotate-90 block whitespace-nowrap transform hover:translate-x-2 transition-transform">
                        {pathname === '/' ? '★ HOME ★' : 'HOME'}
                    </span>
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-16 bg-black ${pathname === '/' ? 'opacity-100' : 'opacity-0'} transition-opacity`}></div>
                </Link>
                <Link href="/projects" className={`relative p-4 rounded-l ${pathname === '/projects' ? 'bg-amber-600' : 'bg-amber-500'} hover:bg-amber-700 transition-all`}>
                    <span className="font-bold rotate-90 block whitespace-nowrap transform hover:translate-x-2 transition-transform">
                        {pathname === '/projects' ? '★ WORK ★' : 'WORK'}
                    </span>
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-16 bg-black ${pathname === '/projects' ? 'opacity-100' : 'opacity-0'} transition-opacity`}></div>
                </Link>
            </div>
        </div>
    );
}