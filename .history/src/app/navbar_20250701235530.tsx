import Link from 'next/link';

export default function Navbar() {
    return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="logo">NebulaX</div>
        
        <ul className="nav-links flex">
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Products</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact</Link></li>
        </ul>
        
        {/* <div className="hamburger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div> */}
    </nav>
    );
}
