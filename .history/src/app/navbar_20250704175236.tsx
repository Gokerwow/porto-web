import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-4xl mx-auto px-4 py-6">
                <div className="relative bg-white border-b-2 border-black">
                    <div className="flex justify-center space-x-16">
                        <Link href="/" className="group relative px-2 py-1">
                            <span className="text-lg font-mono">HOME</span>
                            <span className="absolute bottom-0 left-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="absolute -bottom-1 right-0 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">⌂</span>
                        </Link>
                        
                        <Link href="/projects" className="group relative px-2 py-1">
                            <span className="text-lg font-mono">PROJECTS</span>
                            <span className="absolute bottom-0 left-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="absolute -bottom-1 right-0 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">⎘</span>
                        </Link>
                    </div>
                    
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-black/10"></div>
                    <div className="absolute -bottom-1 left-0 h-1 bg-black w-1/2"></div>
                </div>
            </div>
        </nav>
    );
}