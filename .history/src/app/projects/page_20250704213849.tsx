'use client'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Neon Commerce",
            description: "Next-gen e-commerce with AR product previews",
            media: "https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-1237-large.mp4",
            tags: ["WebGL", "Three.js", "Next.js"],
            year: "2023"
        },
        {
            id: 2,
            title: "Cyber Task",
            description: "Holographic task management with AI assistant",
            media: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop",
            tags: ["React", "Node", "TensorFlow"],
            year: "2024"
        },
        {
            id: 3,
            title: "Bio Track",
            description: "Wearable health monitor with neural interface",
            media: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-device-31539-large.mp4",
            tags: ["IoT", "React Native", "Web Bluetooth"],
            year: "2023"
        },
        {
            id: 4,
            title: "Cosmic Portfolio",
            description: "Interactive 3D space-themed portfolio",
            media: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=2487&auto=format&fit=crop",
            tags: ["Three.js", "GSAP", "WebXR"],
            year: "2024"
        },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-[90px] opacity-20 animate-float"></div>
                <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full filter blur-[100px] opacity-15 animate-float-delay"></div>
            </div>
            
            {/* Header */}
            <div className="relative z-10 pt-20 pb-16 px-8 text-center">
                <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    PROJECT_ARCHIVE
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Exploring the intersection of design and technology through immersive experiences
                </p>
            </div>

            {/* Projects Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 pb-20 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <div 
                        key={project.id}
                        className="group perspective-1000 hover:scale-[1.02] transition-all duration-500"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="relative h-full transform transition-all duration-700 group-hover:rotate-x-[5deg] group-hover:rotate-y-[5deg]">
                            {/* Card border glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 p-[2px]">
                                <div className="absolute inset-0 rounded-2xl bg-black/80 backdrop-blur-md"></div>
                            </div>
                            
                            {/* Main card content */}
                            <div className="relative h-full rounded-2xl overflow-hidden border border-gray-800/50">
                                {/* Media container */}
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <span className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-cyan-400 text-sm font-mono rounded-full backdrop-blur-sm">
                                        {project.year}
                                    </span>
                                </div>
                                
                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                                            {project.title}
                                        </h2>
                                        <div className="flex space-x-2">
                                            {project.tags.map((tag, i) => (
                                                <span 
                                                    key={i}
                                                    className="px-2 py-1 bg-gray-900/50 text-cyan-300 text-xs font-mono rounded border border-gray-700/50"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-300 mb-6">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <button className="px-0 py-1 text-cyan-400 font-mono text-sm group-hover:text-cyan-300 transition-colors">
                                            VIEW CASE STUDY →
                                        </button>
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-black">
                                            <span className="text-xs font-bold">{index + 1}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating indicator */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm font-mono animate-pulse">
                SCROLL ↓
            </div>

            {/* Add this to your globals.css */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-20px) translateX(10px); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                .animate-float-delay {
                    animation: float 10s ease-in-out infinite 2s;
                }
            `}</style>
        </div>
    );
}