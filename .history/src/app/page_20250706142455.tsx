'use client';

import Image from "next/image";
import InfoCard from "./components/InforCard";
import { motion } from "framer-motion";

// Definisikan Ikon SVG di sini untuk kerapian
const UniversityIcon = (
  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const MajorIcon = (
  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const OrganizationIcon = (
  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export default function Home() {
  return (
    <div className="px-[300px] py-40 w-full ">
      <div className="w-full flex justify-center items-center ">
        <div className="w-1/2 ">
          <h1 className="text-6xl font-bold mb-10">
            Driven by Code, Focused on Results
          </h1>
          <h2 className="text-2xl text-gray-300 ">
            I&apos;m Brillian Maulana Syah, an Indonesian-based Developer who
            specializes in building (and occasionally designing) exceptional
            digital experiences. <br />
            Always searching for learning opportunities
          </h2>
        </div>
        <div className="relative w-1/2">
          <Image
            src="/assets/foto_pribadi.png"
            alt="Description of the image"
            width={600}
            height={600}
          />
          <Image
            src="/assets/foto_pribadi_2.png"
            alt="Description of the image"
            width={600}
            height={600}
            className=""
          />
          <svg width="706" height="716" viewBox="0 0 706 716" fill="none" xmlns="http://www.w3.org/2000/svg">
    
    {/* Langkah 1: Definisikan 'tirai' atau clip-path kita di dalam <defs> */}
    <defs>
        <clipPath id="myClipPath">
            {/* 'Tirai' ini adalah sebuah persegi panjang yang lebarnya akan kita animasikan */}
            <motion.rect
                x="0"
                y="0"
                height="716" // Harus sama dengan tinggi SVG
                
                // Animasi: dari lebar 0 menjadi lebar penuh (706)
                initial={{ width: 0 }}
                whileInView={{ width: 706 }}
                transition={{ duration: 3, ease: 'easeInOut' }}
                // Penting: viewport-based animation agar whileInView bekerja
                viewport={{ once: true }} 
            />
        </clipPath>
    </defs>

    {/* (Opsional) Lapisan 1: Garis luar (stroke) yang statis atau dianimasikan dengan pathLength */}
    {/* Ini akan membuat garis luar muncul terlebih dahulu, baru kemudian diisi */}
    <motion.path
        d="..." // Path data Anda
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }} 
        stroke="white"
        strokeWidth="2"
        fill="none"
    />

    {/* Langkah 2: Lapisan 2: Isian (fill) yang dianimasikan dengan clip-path */}
    {/* Path ini tidak perlu menjadi motion component karena animasinya ada di clip-path */}
    <path
        d="..." // Gunakan path data yang sama persis
        fill="white"
        // Terapkan 'tirai' yang sudah kita buat
        clip-path="url(#myClipPath)"
    />

</svg>
        </div>
      </div>

      <div className="w-full px-4 md:px-8 lg:px-16 mt-20 mb-20">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          <InfoCard
            icon={UniversityIcon}
            title="Currently Studying at"
            imageUrl="/assets/unej.png"
            imageAlt="Universitas Jember"
            description="University of Jember"
          />
          <InfoCard
            icon={MajorIcon}
            title="Currently Majoring in"
            imageUrl="/assets/fasilkom (2).png"
            imageAlt="Fakultas Ilmu Komputer"
            description="Information Systems"
            subDescription="Faculty of Computer Science"
          />
          <InfoCard
            icon={OrganizationIcon}
            title="Currently a Member of"
            imageUrl="/assets/HMSF.png"
            imageAlt="Logo HMSF"
            description="Himpunan Mahasiswa<br />Sistem Informasi"
          />
        </div>
      </div>
    </div>
  );
}
