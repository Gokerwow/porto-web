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
        <div className="w-full h-[450px] bg-gray-300 inset-0 rounded-lg shadow-xl relative group " style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute inset-4 h-full rounded-xl bg-white shadow-lg" style={{ transformStyle: "preserve-3d", transform: "translateZ(75px)" }}>
                {/* Media container with gradient overlay */}
                <div className="relative aspect-video transform-3d ">
                    {media.endsWith('.mp4') ? (
                        <video
                            autoPlay loop muted playsInline
                            className="w-full h-full object-cover  opacity-90 group-hover:opacity-100 transition-opacity"
                        >
                            <source src={media} type="video/mp4" />
                        </video>
                    ) : (
                        <Image
                            src={media}
                            alt={title}
                            fill
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent`}></div>
                    <span className={`absolute top-4 right-4 px-3 py-1 bg-white/80 text-gray-800 text-sm font-medium rounded-full shadow-sm transform-3d translate-z-[25px]`}>
                        {year}
                    </span>
                </div>
                {/* Content */}
                <div className="p-6 transform-3d translate-z-[25px]">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className={`text-2xl font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
                            {title}
                        </h2>
                        <div className="flex flex-wrap gap-2 justify-end">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-2.5 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-200 shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6">{description}</p>
                    <div className="flex justify-between items-center">
                        <button className={`px-0 py-1 font-medium text-sm bg-gradient-to-r ${accent} bg-clip-text text-transparent group-hover:brightness-110 transition-all`}>
                            View Project Details →
                        </button>
                        <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center text-white shadow-sm`}>
                            <span className="text-xs font-bold">{index + 1}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}