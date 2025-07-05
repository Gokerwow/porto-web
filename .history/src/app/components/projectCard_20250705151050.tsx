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
        // [1] 3D Scene Container
        <div className="group w-full h-full" style={{ perspective: '800px', perspectiveOrigin: '50% 50%' }}> 
            {/* [2] Main 3D Card */}
            <div
                className="relative h-full w-full transition-all duration-700 ease-out cursor-pointer"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(15deg) rotateY(-10deg) translateZ(0px)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotateX(5deg) rotateY(5deg) translateZ(20px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)';
                }}
            >
                {/* [3] Card Base */}
                <div className="relative h-full rounded-2xl overflow-hidden border border-gray-200/70 bg-white/50 shadow-2xl backdrop-blur-sm">
                    
                    {/* Media container */}
                    <div className="relative h-64 overflow-hidden">
                        {media.endsWith('.mp4') ? (
                            <video
                                autoPlay loop muted playsInline
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
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
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent"></div>
                        
                        {/* Year badge - floating above */}
                        <div 
                            className="absolute top-4 right-4 transition-all duration-500"
                            style={{
                                transform: 'translateZ(30px) rotateX(-15deg)',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <span className="block px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full shadow-lg backdrop-blur-sm">
                                {year}
                            </span>
                        </div>
                    </div>

                    {/* Content Layer */}
                    <div className="p-6 space-y-4">
                        {/* Title Section - Most Forward */}
                        <div className="flex justify-between items-start">
                            <div 
                                className="flex-1 transition-all duration-500 group-hover:transform"
                                style={{
                                    transform: 'translateZ(60px) rotateX(-10deg)',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                <h2 className={`text-2xl font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent drop-shadow-lg`}>
                                    {title}
                                </h2>
                            </div>
                            
                            {/* Tags - Floating at different depths */}
                            <div className="flex flex-wrap gap-2 justify-end max-w-[200px]">
                                {tags.map((tag, i) => (
                                    <div
                                        key={i}
                                        className="transition-all duration-500"
                                        style={{
                                            transform: `translateZ(${40 + i * 8}px) rotateX(-8deg) rotateY(${i * 2}deg)`,
                                            transformStyle: 'preserve-3d'
                                        }}
                                    >
                                        <span className="block px-2.5 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full border border-gray-200/70 shadow-md backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Description - Mid-layer */}
                        <div 
                            className="transition-all duration-500"
                            style={{
                                transform: 'translateZ(35px) rotateX(-5deg)',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <p className="text-gray-600 leading-relaxed drop-shadow-sm">
                                {description}
                            </p>
                        </div>
                        
                        {/* Bottom Section - Progressive layers */}
                        <div className="flex justify-between items-center pt-2">
                            <div 
                                className="transition-all duration-500"
                                style={{
                                    transform: 'translateZ(25px) rotateX(-3deg)',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                <button className={`font-medium text-sm bg-gradient-to-r ${accent} bg-clip-text text-transparent hover:brightness-110 transition-all drop-shadow-sm`}>
                                    View Project Details →
                                </button>
                            </div>
                            
                            {/* Index badge - Highest layer */}
                            <div 
                                className="transition-all duration-500"
                                style={{
                                    transform: 'translateZ(50px) rotateX(-12deg) rotateY(5deg)',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center text-white shadow-lg`}>
                                    <span className="text-xs font-bold">{index + 1}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* [4] 3D Shadow/Depth plane */}
                <div 
                    className="absolute inset-0 bg-black/20 rounded-2xl -z-10 transition-all duration-700"
                    style={{
                        transform: 'translateZ(-10px) translateY(10px) translateX(5px)',
                        transformStyle: 'preserve-3d'
                    }}
                ></div>
            </div>
        </div>
    )
}