import Link from 'next/link';
// Saran: Gunakan library ikon seperti react-icons untuk tampilan yang lebih baik
// import { Home, FolderKanban } from 'lucide-react'; // Contoh menggunakan lucide-react

export default function Navbar() {
    return (
        // Kontainer utama tetap fixed, namun kita akan atur posisi barnya di bawah
        <div className="fixed bottom-0 left-0 right-0 z-50">
            {/* Wrapper untuk bar navigasi. 
              Dulu: absolute right-0 top-0 h-full w-20
              Sekarang: w-full h-16 (atau h-20) dengan background dan shadow
            */}
            <div className="w-full h-16 bg-white shadow-[0_-2px_5px_rgba(0,0,0,0.05)]">
                {/* Ubah flex-col menjadi flex (default flex-row).
                  Pointer-events-auto sudah benar agar bisa di-klik.
                */}
                <ul className="h-full w-full flex pointer-events-auto">
                    {/* Setiap item menu sekarang akan tumbuh secara horizontal.
                      Efek hover:flex-grow-[2] akan tetap berfungsi dengan baik.
                    */}
                    <li className="flex-1 hover:bg-gray-100 transition-all duration-300">
                        <Link href="/" className="h-full w-full flex flex-col items-center justify-center gap-1">
                            {/* <Home className="h-5 w-5 text-gray-700" />  // Contoh Ikon */}
                            {/* Hapus rotate-90 dan sesuaikan styling teks */}
                            <span className="text-gray-700 font-semibold text-xs tracking-wider">
                                HOME
                            </span>
                        </Link>
                    </li>
                    <li className="flex-1 hover:bg-gray-100 transition-all duration-300">
                        <Link href="/projects" className="h-full w-full flex flex-col items-center justify-center gap-1">
                            {/* <FolderKanban className="h-5 w-5 text-gray-700" /> // Contoh Ikon */}
                            <span className="text-gray-700 font-semibold text-xs tracking-wider">
                                PROJECTS
                            </span>
                        </Link>
                    </li>
                    {/* Anda bisa menambahkan item lain di sini */}
                </ul>
            </div>
        </div>
    );
}