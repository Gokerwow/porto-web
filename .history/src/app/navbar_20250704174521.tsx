import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed flex flex-col items-center p-6 w-24 h-screen bg-gradient-to-b from-indigo-900 to-purple-900 shadow-2xl z-50">
            {/* Logo/Brand */}
            <div className="mb-16 mt-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">B</span>
                </div>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col items-center space-y-12 flex-1">
                {/* Home Link */}
                <li className="group relative">
                    <Link href="/" className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-md group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <span className="mt-2 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 whitespace-nowrap">Home</span>
                    </Link>
                </li>

                {/* Projects Link */}
                <li className="group relative">
                    <Link href="/projects" className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-md group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <span className="mt-2 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 whitespace-nowrap">Projects</span>
                    </Link>
                </li>
            </ul>

            {/* Decorative Elements */}
            <div className="mt-auto mb-8 w-full flex flex-col items-center">
                <div className="h-1 w-8 bg-purple-400 rounded-full mb-4 opacity-50"></div>
                <div className="h-1 w-6 bg-cyan-400 rounded-full opacity-30"></div>
            </div>
        </nav>
    );
}