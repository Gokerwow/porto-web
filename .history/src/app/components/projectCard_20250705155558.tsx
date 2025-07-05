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
        <div className="w-full h-96 bg-gray-300 inset-0 rounded-lg shadow-xl overflow-hidden relative group" style={{ transformStyle: "preserve-3d", transform: 'rotateY(70deg)' }}>
            <div className="absolute inset-4 rounded-xl bg-white shadow-lg" style={{ transformStyle: "preserve-3d", transform: "translateZ(75px)" }}>
                <Image src={media} alt={title} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>
        </div>
    )
}