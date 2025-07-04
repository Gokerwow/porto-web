import Link from 'next/link';

export default function Navbar() {
    return (
    <nav className="flex flex-col justify-between p-4">        
        <ul className="nav-links">
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Products</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact</Link></li>
        </ul>

        <div>
            <button>
                <Link href="#">Contact Me</Link>
            </button>
        </div>
        
        {/* <div className="hamburger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div> */}
    </nav>
    );
}
