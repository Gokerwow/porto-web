import Link from 'next/link';

export default function Navbar() {
    return (
    <nav className="fixed flex flex-col justify-between p-4 w-[100px] h-screen bg-red-400">        
        <ul className="nav-links flex flex-col justify-center items-center gap-10 bg-blue-400 flex-1">

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
