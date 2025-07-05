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
        // [1] Container "Panggung" (Scene) - Sets up the 3D perspective
        <div className="group w-full h-full" style={{ perspective: '1200px' }}> 
            {/* [2] Main card container with 3D transforms */}
            <div
                key={index}
                className="h-full w-full rounded-2xl transition-all duration-700 ease-out cursor-pointer"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(55deg) rotateX(2deg)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotateY(8deg) rotateX(5deg) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotateY(5deg) rotateX(2deg) scale(1)';
                }}
            >
                {/* [3] Glassmorphism card body */}
                <div className="relative h-full rounded-2xl overflow-hidden border border-gray-200/70 bg-white/50 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm">
                    
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
                        
                        {/* Year badge with subtle 3D effect */}
                        <span 
                            className="absolute top-4 right-4 px-3 py-1 bg-white/80 text-gray-800 text-sm font-medium rounded-full shadow-sm transition-all duration-300"
                            style={{
                                transform: 'translateZ(10px)',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            {year}
                        </span>
                    </div>

                    {/* Content with enhanced 3D effects */}
                    <div className="p-6" style={{ transformStyle: 'preserve-3d' }}>
                        <div className="flex justify-between items-start mb-4">
                            {/* [4] Title with strong forward projection */}
                            <h2 
                                className={`text-2xl font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent transition-all duration-300`}
                                style={{
                                    transform: 'translateZ(40px)',
                                    transformStyle: 'preserve-3d',
                                    textShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                }}
                            >
                                {title}
                            </h2>
                            
                            {/* Tags with layered 3D effect */}
                            <div 
                                className="flex flex-wrap gap-2 justify-end"
                                style={{
                                    transform: 'translateZ(30px)',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                {tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-200 shadow-sm transition-all duration-300"
                                        style={{
                                            transform: `translateZ(${5 + i * 3}px)`,
                                            transformStyle: 'preserve-3d'
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        {/* Description with medium forward projection */}
                        <p 
                            className="text-gray-600 mb-6 transition-all duration-300"
                            style={{
                                transform: 'translateZ(25px)',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            {description}
                        </p>
                        
                        {/* Bottom section with progressive 3D layering */}
                        <div 
                            className="flex justify-between items-center"
                            style={{
                                transform: 'translateZ(20px)',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <button 
                                className={`px-0 py-1 font-medium text-sm bg-gradient-to-r ${accent} bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300`}
                                style={{
                                    transform: 'translateZ(15px)',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                View Project Details →
                            </button>
                            
                            {/* Index badge with strongest forward projection */}
                            <div 
                                className={`h-8 w-8 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center text-white shadow-sm transition-all duration-300`}
                                style={{
                                    transform: 'translateZ(35px)',
                                    transformStyle: 'preserve-3d',
                                    boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
                                }}
                            >
                                <span className="text-xs font-bold">{index + 1}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}