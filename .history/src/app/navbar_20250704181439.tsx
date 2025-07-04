import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed right-0 bg-yellow-400 flex justify-between w-[300px] h-screen ">
            {/* <div className='pt-5'>
                <h1 className='flex flex-col justify-center items-center font-bold '>BRILLIANTS</h1>
                <h3 className='flex flex-col justify-center items-center italic'>Full Stack Developer</h3>
            </div> */}
            <ul className="nav-links h-full flex justify-center items-center gap-3 flex-1">
                <li className=' h-full'>
                    <Link href="/" className="flex items-center justify-center gap-2 w-[50px] h-full bg-amber-500">
                        <span className='font-bold rotate-90'>Home</span>
                    </Link>
                </li>

                {/* Projects Link */}
                <li className=' h-full'>
                    <Link href="/projects" className="flex items-center justify-center gap-2 w-[50px] h-full bg-amber-500">
                        <span className='font-bold rotate-90'>Projects</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
