import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="fixed bottom-8 right-8 z-50">
            <div className="relative w-24 h-24">
                {/* Main Button */}
                <button className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold shadow-lg z-10">
                    B
                </button>
                
                {/* Orbital Links */}
                <Link href="/" className="absolute top-0 left-0 w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-gray-100"
                    style={{ transform: 'rotate(0deg) translate(40px) rotate(0deg)' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </Link>
                
                <Link href="/projects" className="absolute top-0 left-0 w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-gray-100"
                    style={{ transform: 'rotate(90deg) translate(40px) rotate(-90deg)' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}