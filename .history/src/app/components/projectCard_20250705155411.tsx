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
        <div className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"         style={{
          transform: "rotateY(75deg)",
          transformStyle: "preserve-3d",
        }}>
            <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-l"         style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}>
            </div>
        </div>
    )
}