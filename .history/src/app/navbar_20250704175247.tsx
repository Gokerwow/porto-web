import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="fixed bottom-0 left-0 z-50">
            <div className="flex">
                <Link href="/" className="relative w-24 h-16 bg-white border-t-2 border-r-2 border-black flex items-center justify-center group">
                    <div className="absolute -top-4 left-2 w-4 h-4 bg-white border-l-2 border-t-2 border-black rotate-45"></div>
                    <svg className="w-8 h-8 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                
                <Link href="/projects" className="relative w-24 h-16 bg-white border-t-2 border-black flex items-center justify-center group">
                    <div className="absolute -top-4 right-2 w-4 h-4 bg-white border-r-2 border-t-2 border-black -rotate-45"></div>
                    <svg className="w-8 h-8 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
            </div>
        </div>
    );
}