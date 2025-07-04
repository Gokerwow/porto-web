import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white p-4 flex justify-between">
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
