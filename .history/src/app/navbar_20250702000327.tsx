import Link from 'next/link';

export default function Navbar() {
    return (
    <nav className="fixed flex flex-col justify-between p-4 w-[100px] h-screen bg-red-400">        
        <ul className="nav-links flex flex-col justify-center items-center gap-10 bg-blue-400 flex-1">
            <li>
                <a href="#" aria-label="Home" title="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/>
                    </svg>
                </a>
            </li>
            <li>
                <a href="#" aria-label="Features" title="Features">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.35 7.16h7.65l-6.18 4.48 2.35 7.16L12 16.32l-6.17 4.48 2.35-7.16-6.18-4.48h7.65L12 2z"/>
                    </svg>
                </a>
            </li>
            <li>
                <a href="#" aria-label="Products" title="Products">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020.5 4H5.21l-.94-2H1v2h2l3.6 7.59L3.62 17H19v-2H6.16l.15-.31zM6 6h12l-2.76 5H8.53L6 6z"/>
                    </svg>
                </a>
            </li>
            <li>
                <a href="#" aria-label="About" title="About">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                </a>
            </li>
            <li>
                <a href="#" aria-label="Contact" title="Contact">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                    </svg>
                </a>
            </li>
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
