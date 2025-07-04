import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <div className="absolute right-0 top-0 h-full w-20 bg-yellow-400">
                <ul className="h-full flex flex-col pointer-events-auto">
                    <li className="flex-1 hover:flex-grow-[2] transition-all duration-300">
                        <Link href="/" className="h-full w-full flex items-center justify-center bg-slate-900 hover:bg-slate-200">
                            <span className="text-slate-900 font-bold rotate-90 text-xl tracking-widest hover:scale-125 transition-transform">HOME</span>
                        </Link>
                    </li>
                    <div className="h-px w-full bg-black/20"></div>
                    <li className="flex-1 hover:flex-grow-[2] transition-all duration-300">
                        <Link href="/projects" className="h-full w-full flex items-center justify-center bg-blue-400 hover:bg-blue-600">
                            <span className="text-white font-bold rotate-90 text-xl tracking-widest hover:scale-125 transition-transform">PROJECTS</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}