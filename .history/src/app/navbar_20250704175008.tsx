import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed flex flex-col items-center p-4 w-24 h-screen bg-gray-900/80 border-r border-purple-500/20 z-50">
            {/* Animated Logo */}
            <div className="mt-10 mb-20 relative">
                <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/30 animate-pulse">
                    <span className="text-black font-bold text-sm">B</span>
                </div>
                <div className="absolute -inset-2 border-2 border-cyan-400/40 rounded-full animate-[spin_8s_linear_infinite]"></div>
            </div>

            {/* Glowing Navigation */}
            <ul className="flex flex-col items-center gap-20 flex-1">
                <li>
                    <Link href="/" className="relative group">
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center 
                            border border-cyan-400/20 group-hover:border-cyan-400/60
                            transition-all duration-300 group-hover:shadow-[0_0_15px_2px_rgba(34,211,238,0.5)]">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 
                            text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity 
                            font-mono tracking-widest">
                            [HOME]
                        </div>
                    </Link>
                </li>

                <li>
                    <Link href="/projects" className="relative group">
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center 
                            border border-purple-400/20 group-hover:border-purple-400/60
                            transition-all duration-300 group-hover:shadow-[0_0_15px_2px_rgba(192,132,252,0.5)]">
                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 
                            text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity 
                            font-mono tracking-widest">
                            [PROJECTS]
                        </div>
                    </Link>
                </li>
            </ul>

            {/* Animated Scan Line */}
            <div className="mt-auto mb-6 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent relative overflow-hidden">
                <div className="absolute top-0 left-0 w-20 h-px bg-cyan-400 animate-[scan_3s_linear_infinite]"></div>
            </div>
        </nav>
    );
}