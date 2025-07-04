import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white p-4 flex justify-between">
            <div className="flex-shrink-0">
                <Link href="#" className="font-orbitron font-bold text-2xl bg-gradient-to-r from-futuristic-primary to-futuristic-secondary bg-clip-text text-transparent tracking-wider hover:animate-text-glow transition-all duration-300">
                    QUANTUM
                </Link>
            </div>
            <ul className='flex space-x-4 text-gray-800'>
                <li><Link href="">Home</Link></li>
                <li><Link href="">About</Link></li>
                <li><Link href="">Projects</Link></li>
                <li><Link href="">Skilss</Link></li>
            </ul>
            <div>
                <button>
                    <Link href="" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Contact Me
                    </Link>
                </button>
            </div>
        </nav>
    );
}
