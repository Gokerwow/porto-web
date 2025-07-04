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
                        <svg className='w-[30px] h-[30px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM8.2501 17.9998C8.2501 17.5856 8.58589 17.2498 9.0001 17.2498H15.0001C15.4143 17.2498 15.7501 17.5856 15.7501 17.9998C15.7501 18.414 15.4143 18.7498 15.0001 18.7498H9.0001C8.58589 18.7498 8.2501 18.414 8.2501 17.9998Z" fill="#000000"></path> </g></svg>
                        <span className='font-bold'>Home</span>
                    </Link>
                </li>

                {/* Projects Link */}
                <li>
                    <Link href="/projects" className="flex flex-col items-center gap-2">
                        <span className='font-bold'>Projects</span>
                    </Link>
                </li>

                {/* Skills Link */}
                <li>
                    <Link href="/skills" className="flex flex-col items-center gap-2">
                        <span className='font-bold'>Skills</span>
                    </Link>
                </li>

                {/* Contact Link */}
                <li>
                    <Link href="/contact" className="flex flex-col items-center gap-2">
                        <span className='font-bold'>Contact</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
