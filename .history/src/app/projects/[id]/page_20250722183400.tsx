// src/app/projects/[id]/page.tsx

import Link from 'next/link';

// Tipe untuk props halaman ini didefinisikan dengan benar
// { params: { id: string } } adalah struktur yang diharapkan oleh Next.js
// untuk rute dinamis seperti /projects/[id]
type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    // Menggunakan kelas Tailwind untuk styling
    <div className="flex min-h-[80vh] flex-col items-center justify-center p-8 text-center text-gray-800">
      
      {/* Ikon emoji dengan ukuran teks yang lebih besar */}
      <div className="mb-4 text-6xl">🚧</div>

      <h1 className="text-4xl font-bold">Segera Hadir!</h1>

      <p className="mt-2 max-w-lg text-lg">
        Halaman untuk proyek dengan ID: <strong>{params.id}</strong> sedang dalam tahap konstruksi.
      </p>

      <p className="mt-2">
        Terima kasih atas kesabaran Anda selagi kami menyiapkannya.
      </p>

      {/* Komponen Link dari Next.js dengan styling dari Tailwind */}
      <Link 
        href="/projects" 
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white no-underline transition-colors duration-200 hover:bg-blue-700"
      >
        &larr; Kembali ke Daftar Proyek
      </Link>
    </div>
  );
}