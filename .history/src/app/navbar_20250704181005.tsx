import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed flex flex-col justify-between p-4 w-[300px] h-screen ">
            <div className='pt-5'>
                <h1 className='flex flex-col justify-center items-center font-bold '>BRILLIANTS</h1>
                <h3 className='flex flex-col justify-center items-center italic'>Full Stack Developer</h3>
            </div>
            <ul className="nav-links w-full h-full flex justify-center items-center gap-3 flex-1">
                <li className='w-full h-full'>
                    <Link href="/" className="flex flex-col items-center gap-2 rotate-90 w-full h-full bg-amber-500">
                        <span className='font-bold '>Home</span>
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
