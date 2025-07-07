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
        <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Enhanced background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary floating orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full filter blur-[90px] opacity-50 animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full filter blur-[100px] opacity-40 animate-float-delay"></div>
                
                {/* Additional ambient orbs */}
                <div className="absolute top-3/4 left-1/6 w-48 h-48 bg-gradient-to-r from-violet-200 to-purple-200 rounded-full filter blur-[80px] opacity-30 animate-float-slow"></div>
                <div className="absolute top-1/6 right-1/3 w-56 h-56 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full filter blur-[85px] opacity-35 animate-float-reverse"></div>
                
                {/* Geometric elements */}
                <div className="absolute top-1/2 left-1/12 w-2 h-2 bg-amber-400 rounded-full animate-pulse-slow opacity-60"></div>
                <div className="absolute top-1/3 right-1/12 w-1 h-1 bg-cyan-400 rounded-full animate-pulse-slower opacity-70"></div>
                <div className="absolute bottom-1/3 left-1/8 w-3 h-3 bg-violet-400 rounded-full animate-pulse-slow opacity-50"></div>
                
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
                        {Array.from({ length: 400 }).map((_, i) => (
                            <div key={i} className="border-r border-b border-gray-300"></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced header */}
            <div className="relative z-10 pt-20 pb-16 px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 bg-clip-text text-transparent animate-fade-in">
                        Project Showcase
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-500 mx-auto mb-8 rounded-full animate-expand"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
                        Innovative solutions blending design and technology to create extraordinary digital experiences
                    </p>
                </div>
            </div>

            {/* Enhanced projects grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 px-8 pb-20 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
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
                ))}
            </div>

            {/* Enhanced floating indicator */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50">
                    <div className="w-1 h-1 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-500 text-sm font-medium">Scroll to discover more</span>
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin-slow"></div>
                </div>
            </div>

            {/* Enhanced animation styles */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
                    33% { transform: translateY(-20px) translateX(15px) rotate(1deg); }
                    66% { transform: translateY(-10px) translateX(-10px) rotate(-1deg); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
                    50% { transform: translateY(-25px) translateX(20px) rotate(2deg); }
                }
                
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
                    50% { transform: translateY(20px) translateX(-15px) rotate(-1deg); }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(60px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                
                @keyframes expand {
                    from { width: 0; }
                    to { width: 6rem; }
                }
                
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.2); }
                }
                
                @keyframes pulse-slower {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 0.9; transform: scale(1.5); }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .animate-float {
                    animation: float 12s ease-in-out infinite;
                }
                
                .animate-float-delay {
                    animation: float 15s ease-in-out infinite 3s;
                }
                
                .animate-float-slow {
                    animation: float-slow 18s ease-in-out infinite 1s;
                }
                
                .animate-float-reverse {
                    animation: float-reverse 14s ease-in-out infinite 2s;
                }
                
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
                
                .animate-fade-in-delay {
                    animation: fade-in 1s ease-out 0.3s both;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out both;
                }
                
                .animate-expand {
                    animation: expand 1s ease-out 0.5s both;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
                
                .animate-pulse-slower {
                    animation: pulse-slower 6s ease-in-out infinite;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
            `}</style>
        </div>
    );
}