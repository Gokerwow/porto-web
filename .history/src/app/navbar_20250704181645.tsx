import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed right-0 top-0 h-screen w-24 border-l-8 border-black bg-yellow-400 z-50 overflow-hidden">
            <ul className="h-full flex flex-col">
                <li className="flex-1 relative border-b-8 border-black">
                    <Link href="/" className="absolute inset-0 flex items-center justify-center bg-amber-500 hover:bg-amber-600 transition-all">
                        <span className="font-bold rotate-90 text-2xl tracking-widest transform hover:skew-x-12 hover:scale-125 transition-all">HOME</span>
                    </Link>
                </li>
                <li className="flex-1 relative">
                    <Link href="/projects" className="absolute inset-0 flex items-center justify-center bg-amber-500 hover:bg-amber-600 transition-all">
                        <span className="font-bold rotate-90 text-2xl tracking-widest transform hover:skew-x-12 hover:scale-125 transition-all">WORK</span>
                    </Link>
                </li>
            </ul>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black"></div>
        </nav>
    );
}