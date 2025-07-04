import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white p-4">
            <ul>
                <li><Link href="">Home</Link></li>
                <li><Link href="">About</Link></li>
                <li><Link href="">Projects</Link></li>
                <li><Link href="">Skilss</Link></li>
            </ul>
        </nav>
    );
}
