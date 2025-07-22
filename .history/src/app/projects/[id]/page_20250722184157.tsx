import Link from 'next/link';

type ProjectPageProps = {
    params: { id: string };
};

const projects = [
    { id: 1, title: "EduTask" },
    { id: 2, title: "NauTure" },
    { id: 3, title: "Biasly" },
    { id: 4, title: "Zuno" },
];

export default function ProjectPage({ params }: ProjectPageProps) {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center p-8 text-center text-gray-800">
            <div className="mb-4 text-6xl">🚧</div>
            <h1 className="text-4xl font-bold">Segera Hadir!</h1>
            <p className="mt-2 max-w-lg text-lg">
                Halaman untuk proyek dengan ID: <strong>{params.id}</strong> sedang dalam tahap konstruksi.
            </p>
            <p className="mt-2">Terima kasih atas kesabaran Anda selagi kami menyiapkannya.</p>
            <Link
                href="/projects"
                className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white no-underline transition-colors duration-200 hover:bg-blue-700"
            >
                &larr; Kembali ke Daftar Proyek
            </Link>
        </div>
    );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}
