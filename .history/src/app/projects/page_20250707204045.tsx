'use client';

import ProjectCard from "../components/projectCard";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Neon Commerce",
            description: "Next-gen e-commerce with AR product previews",
            media: "/assets/1080full-yuna-(itzy).jpg",
            tags: ["WebGL", "Three.js", "Next.js"],
            year: "2023",
            accent: "from-amber-400 to-rose-500"
        },
        {
            id: 2,
            title: "Cyber Task",
            description: "Holographic task management with AI assistant",
            media: "/assets/1080full-yuna-(itzy).jpg",
            tags: ["React", "Node", "TensorFlow"],
            year: "2024",
            accent: "from-emerald-400 to-cyan-500"
        },
        {
            id: 3,
            title: "Bio Track",
            description: "Wearable health monitor with neural interface",
            media: "/assets/1080full-yuna-(itzy).jpg",
            tags: ["IoT", "React Native", "Web Bluetooth"],
            year: "2023",
            accent: "from-violet-400 to-indigo-500"
        },
        {
            id: 4,
            title: "Cosmic Portfolio",
            description: "Interactive 3D space-themed portfolio",
            media: "/assets/1080full-yuna-(itzy).jpg",
            tags: ["Three.js", "GSAP", "WebXR"],
            year: "2024",
            accent: "from-blue-400 to-sky-500"
        },
    ];

    return (
        <div className="min-h-screen overflow-hidden relative bg-white">
            {/* Minimalist geometric background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
                
                {/* Geometric shapes */}
                <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-gray-200 rounded-full animate-slow-rotate opacity-40"></div>
                <div className="absolute bottom-1/3 left-1/6 w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl animate-float-gentle opacity-60"></div>
                <div className="absolute top-1/6 left-1/3 w-32 h-32 bg-gradient-to-br from-amber-100 to-rose-100 rounded-full animate-pulse-gentle opacity-50"></div>
                
                {/* Minimalist lines */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-30"></div>
                <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30"></div>
                
                {/* Subtle dots pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-12 grid-rows-12 h-full w-full gap-8">
                        {Array.from({ length: 144 }).map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full animate-pulse-random" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Clean modern header */}
            <div className="relative z-10 pt-20 pb-16 px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <div className="inline-block px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-6 animate-slide-in">
                            Portfolio Collection
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gray-900 animate-fade-in-up leading-tight">
                            Project
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Showcase
                            </span>
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full animate-expand-line"></div>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
                        Crafting digital experiences that bridge creativity and technology with precision and elegance
                    </p>
                </div>
            </div>

            {/* Clean projects grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 px-8 pb-20 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                        <div className="relative group">
                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 transform scale-105"></div>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                media={project.media}
                                tags={project.tags}
                                year={project.year}
                                accent={project.accent}
                                id={project.id}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Elegant floating indicator */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex items-center space-x-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 animate-float-indicator">
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce-gentle"></div>
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">Explore More</span>
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-blue-500 rounded-full animate-spin-smooth"></div>
                </div>
            </div>

            {/* Clean animation styles */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                
                @keyframes slow-rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }
                
                @keyframes pulse-gentle {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.05); }
                }
                
                @keyframes pulse-random {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.3; }
                }
                
                @keyframes slide-in {
                    0% { opacity: 0; transform: translateY(-20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes fade-in-delay {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes expand-line {
                    0% { width: 0; }
                    100% { width: 5rem; }
                }
                
                @keyframes slide-up {
                    0% { opacity: 0; transform: translateY(60px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes float-indicator {
                    0%, 100% { transform: translateY(0) translateX(-50%); }
                    50% { transform: translateY(-5px) translateX(-50%); }
                }
                
                @keyframes bounce-gentle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }
                
                @keyframes spin-smooth {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                .animate-slow-rotate {
                    animation: slow-rotate 20s linear infinite;
                }
                
                .animate-float-gentle {
                    animation: float-gentle 6s ease-in-out infinite;
                }
                
                .animate-pulse-gentle {
                    animation: pulse-gentle 4s ease-in-out infinite;
                }
                
                .animate-pulse-random {
                    animation: pulse-random 3s ease-in-out infinite;
                }
                
                .animate-slide-in {
                    animation: slide-in 0.8s ease-out;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }
                
                .animate-fade-in-delay {
                    animation: fade-in-delay 1s ease-out 0.4s both;
                }
                
                .animate-expand-line {
                    animation: expand-line 1.2s ease-out 0.6s both;
                }
                
                .animate-slide-up {
                    animation: slide-up 0.8s ease-out both;
                }
                
                .animate-float-indicator {
                    animation: float-indicator 3s ease-in-out infinite;
                }
                
                .animate-bounce-gentle {
                    animation: bounce-gentle 1.5s ease-in-out infinite;
                }
                
                .animate-spin-smooth {
                    animation: spin-smooth 2s linear infinite;
                }
            `}</style>
        </div>
    );
}