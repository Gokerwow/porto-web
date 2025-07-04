import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed right-0 top-0 h-screen w-16 bg-yellow-400 overflow-hidden z-50">
            <ul className="h-full flex flex-col justify-center items-center gap-8">
                <li className="w-full h-1/2 relative group">
                    <Link href="/" className="flex items-center justify-center h-full w-full bg-amber-500 hover:bg-amber-600 transition-all">
                        <span className="font-bold rotate-90 whitespace-nowrap group-hover:scale-110 transition-transform">HOME</span>
                    </Link>
                    <div className="absolute left-0 top-1/2 h-1 w-1 bg-black rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
                </li>
                <li className="w-full h-1/2 relative group">
                    <Link href="/projects" className="flex items-center justify-center h-full w-full bg-amber-500 hover:bg-amber-600 transition-all">
                        <span className="font-bold rotate-90 whitespace-nowrap group-hover:scale-110 transition-transform">PROJECTS</span>
                    </Link>
                    <div className="absolute left-0 top-1/2 h-1 w-1 bg-black rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
                </li>
            </ul>
        </nav>
    );
}