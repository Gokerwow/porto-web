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
        <div className="w-full h-96 bg-gray-300 inset-0 rounded-lg shadow-xl relative group" style={{ transformStyle: "preserve-3d", transform: 'rotateY(70deg)' }}>
            <div className="absolute inset-4 rounded-xl bg-white shadow-lg" style={{ transformStyle: "preserve-3d", transform: "translateZ(75px)" }}>
                                                {/* Media container with gradient overlay */}
                                <div className="relative h-64 overflow-hidden">
                                    {project.media.endsWith('.mp4') ? (
                                        <video 
                                            autoPlay loop muted playsInline
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        >
                                            <source src={project.media} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img 
                                            src={project.media} 
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        />
                                    )}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent`}></div>
                                    <span className={`absolute top-4 right-4 px-3 py-1 bg-white/80 text-gray-800 text-sm font-medium rounded-full shadow-sm backdrop-blur-sm`}>
                                        {project.year}
                                    </span>
                                </div>
                <div className="p-4 absolute transform-3d translate-z-12">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    )
}