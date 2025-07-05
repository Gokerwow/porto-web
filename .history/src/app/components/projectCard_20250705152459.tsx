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
        <div className="h-full w-full bg-black inset-0 rounded-lg shadow-lg overflow-hidden relative group">
            
        </div>
    )
}