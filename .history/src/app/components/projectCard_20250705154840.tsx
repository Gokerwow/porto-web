import Image from "next/image"

interface ProjectCardProps {
    title: string;
    description: string;
    media: string;
    tags: string[];
    year: string;
    accent: string;
    index: number;
}

export default function ProjectCard({ title, description, media, tags, year, accent, index }: ProjectCardProps) {
    return (
        <div className="w-full h-96 bg-gray-300 inset-0 rounded-lg shadow-xl overflow-hidden relative group transform-3d">
            <div className="absolute inset-4 rounded-xl bg-white shadow-lg transform-3d translate-z-20">
                
            </div>
        </div>
    )
}