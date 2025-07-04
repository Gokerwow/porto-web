import Image from "next/image";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="p-12 md:p-24 w-full flex flex-col md:flex-row items-center h-screen">
      {/* Kolom Teks */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Driven by Code, Focused on Results</h1>
        <h2 className="text-lg lg:text-2xl text-gray-600">
          I'm Brillian Maulana Syah, an Indonesian-based Developer who specializes in building (and occasionally designing) exceptional digital experiences. Always searching for learning opportunities.
        </h2>
      </div>

      {/* Kolom untuk Adegan Spline */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        {/* Hapus tag <script> dan <spline-viewer> manual */}
        
        {/* Gunakan komponen <Spline> yang sudah diimpor */}
        <Spline scene="https://prod.spline.design/lN3AcBgptCrtSscH/scene.splinecode" />
      </div>
    </div>
  );
}