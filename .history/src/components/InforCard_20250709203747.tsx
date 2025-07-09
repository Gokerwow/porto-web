import Image from 'next/image';

type InfoCardProps = {
    icon: React.ReactNode; // Tipe untuk icon, bisa berupa JSX elemen seperti SVG
    title: string;
    imageUrl: string;
    imageAlt: string;
    description: string;
    subDescription?: string; // Tanda tanya (?) berarti prop ini opsional
};

const InfoCard = forwardRef<HTMLDivElement, InfoCardProps>(({
  icon, title, imageUrl, imageAlt, description, subDescription, ...rest
}, ref) => {
    return (
        <div className="flex-1 flex flex-col items-center p-8 bg-slate-50 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-w-[300px] border border-slate-200">

            {/* Judul dengan Ikon */}
            <div className="flex items-center gap-2 mb-5">
                {icon} {/* Menampilkan ikon di sini */}
                <h2 className="text-sm font-bold uppercase text-slate-500 tracking-wider">{title}</h2>
            </div>

            <div className="flex flex-col items-center text-center">
                {/* Kontainer untuk gambar */}
                <div className="h-24 w-24 flex items-center justify-center mb-4">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                {/* Deskripsi Utama */}
                <span className="text-xl font-semibold text-slate-800" dangerouslySetInnerHTML={{ __html: description }} />

                {/* Sub-deskripsi (jika ada) */}
                {subDescription && (
                    <span className="text-base text-slate-600 mt-1">{subDescription}</span>
                )}
            </div>
        </div>
    )
}