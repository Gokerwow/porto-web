import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed flex flex-col justify-between p-4 w-[300px] h-screen ">
            <div className='pt-5'>
                <h1 className='flex flex-col justify-center items-center font-bold '>BRILLIANTS</h1>
                <h3 className='flex flex-col justify-center items-center italic'>Full Stack Developer</h3>
            </div>
            <ul className="nav-links flex flex-col justify-center items-center gap-10 flex-1">
                <li>
                    <Link href="/" className="flex flex-col items-center gap-2">
                        <span className='font-bold rotate-90'>Home</span>
                    </Link>
                </li>

                {/* Projects Link */}
                <li>
                    <Link href="/projects" className="flex flex-col items-center gap-2">
                        <span className='font-bold rotate-90'>Projects</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
