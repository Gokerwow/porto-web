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
        <div className="min-h-screen overflow-hidden relative bg-black">
            {/* Cyberpunk grid background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
                
                {/* Animated grid lines */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                
                {/* Neon scanlines */}
                <div className="absolute inset-0 bg-scanlines opacity-20 animate-scan"></div>
                
                {/* Floating neon particles */}
                <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-neon-pulse shadow-cyan-glow"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-neon-pulse-delay shadow-pink-glow"></div>
                <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-green-400 rounded-full animate-neon-pulse-slow shadow-green-glow"></div>
                <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-yellow-400 rounded-full animate-neon-pulse-fast shadow-yellow-glow"></div>
                
                {/* Holographic elements */}
                <div className="absolute top-1/2 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50 animate-hologram"></div>
                <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-40 animate-hologram-delay"></div>
            </div>

            {/* Cyberpunk header */}
            <div className="relative z-10 pt-20 pb-16 px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                        <div className="inline-block border border-cyan-400 px-4 py-2 text-cyan-400 text-sm font-mono mb-4 animate-border-glow">
                            &gt; PORTFOLIO.EXE
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-text-glow font-mono">
                            PROJECT_SHOWCASE
                        </h1>
                        <div className="text-green-400 font-mono text-sm animate-type">
                            <span className="opacity-70">[LOADING...]</span>
                            <span className="animate-cursor">|</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto font-mono leading-relaxed border-l-2 border-cyan-400 pl-4 animate-fade-in-cyber">
                        <span className="text-cyan-400">&gt;</span> Innovative solutions blending design and technology
                    </p>
                </div>
            </div>

            {/* Cyberpunk projects grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 px-8 pb-20 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="animate-glitch-in" style={{ animationDelay: `${index * 0.3}s` }}>
                        <div className="relative">
                            {/* Glitch effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transform -skew-x-12 animate-glitch-sweep opacity-0"></div>
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

            {/* Cyberpunk floating indicator */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex items-center space-x-3 px-6 py-3 bg-black/80 backdrop-blur-sm border border-cyan-400/50 rounded-none shadow-2xl shadow-cyan-400/20">
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-cyan-400 animate-pulse"></div>
                        <div className="w-2 h-2 bg-cyan-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span className="text-cyan-400 text-sm font-mono uppercase tracking-wider">SCROLL_TO_EXPLORE</span>
                    <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent animate-spin"></div>
                </div>
            </div>

            {/* Cyberpunk animation styles */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
                
                .bg-scanlines {
                    background-image: repeating-linear-gradient(
                        0deg,
                        rgba(0, 255, 255, 0.03),
                        rgba(0, 255, 255, 0.03) 1px,
                        transparent 1px,
                        transparent 2px
                    );
                }
                
                .shadow-cyan-glow {
                    box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4);
                }
                
                .shadow-pink-glow {
                    box-shadow: 0 0 20px rgba(255, 20, 147, 0.8), 0 0 40px rgba(255, 20, 147, 0.4);
                }
                
                .shadow-green-glow {
                    box-shadow: 0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(0, 255, 0, 0.4);
                }
                
                .shadow-yellow-glow {
                    box-shadow: 0 0 20px rgba(255, 255, 0, 0.8), 0 0 40px rgba(255, 255, 0, 0.4);
                }
                
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100vh); }
                }
                
                @keyframes neon-pulse {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.5); }
                }
                
                @keyframes hologram {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.8; }
                }
                
                @keyframes text-glow {
                    0%, 100% { text-shadow: 0 0 20px rgba(0, 255, 255, 0.5); }
                    50% { text-shadow: 0 0 30px rgba(0, 255, 255, 0.8), 0 0 40px rgba(255, 20, 147, 0.5); }
                }
                
                @keyframes border-glow {
                    0%, 100% { border-color: rgba(0, 255, 255, 0.5); box-shadow: 0 0 10px rgba(0, 255, 255, 0.3); }
                    50% { border-color: rgba(0, 255, 255, 1); box-shadow: 0 0 20px rgba(0, 255, 255, 0.6); }
                }
                
                @keyframes type {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                
                @keyframes cursor {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                
                @keyframes glitch-in {
                    0% { opacity: 0; transform: translateX(-100px) skewX(-10deg); }
                    20% { opacity: 0.5; transform: translateX(20px) skewX(5deg); }
                    40% { opacity: 0.8; transform: translateX(-10px) skewX(-2deg); }
                    60% { opacity: 0.9; transform: translateX(5px) skewX(1deg); }
                    100% { opacity: 1; transform: translateX(0) skewX(0deg); }
                }
                
                @keyframes glitch-sweep {
                    0% { opacity: 0; transform: translateX(-200%) skewX(-10deg); }
                    50% { opacity: 0.8; }
                    100% { opacity: 0; transform: translateX(200%) skewX(-10deg); }
                }
                
                @keyframes fade-in-cyber {
                    0% { opacity: 0; transform: translateY(20px); filter: blur(10px); }
                    100% { opacity: 1; transform: translateY(0); filter: blur(0); }
                }
                
                .animate-scan {
                    animation: scan 3s linear infinite;
                }
                
                .animate-neon-pulse {
                    animation: neon-pulse 2s ease-in-out infinite;
                }
                
                .animate-neon-pulse-delay {
                    animation: neon-pulse 2s ease-in-out infinite 0.5s;
                }
                
                .animate-neon-pulse-slow {
                    animation: neon-pulse 3s ease-in-out infinite;
                }
                
                .animate-neon-pulse-fast {
                    animation: neon-pulse 1.5s ease-in-out infinite;
                }
                
                .animate-hologram {
                    animation: hologram 4s ease-in-out infinite;
                }
                
                .animate-hologram-delay {
                    animation: hologram 4s ease-in-out infinite 2s;
                }
                
                .animate-text-glow {
                    animation: text-glow 3s ease-in-out infinite;
                }
                
                .animate-border-glow {
                    animation: border-glow 2s ease-in-out infinite;
                }
                
                .animate-type {
                    animation: type 1s ease-in-out infinite;
                }
                
                .animate-cursor {
                    animation: cursor 1s ease-in-out infinite;
                }
                
                .animate-glitch-in {
                    animation: glitch-in 1s ease-out both;
                }
                
                .animate-glitch-sweep {
                    animation: glitch-sweep 2s ease-in-out infinite 3s;
                }
                
                .animate-fade-in-cyber {
                    animation: fade-in-cyber 1s ease-out 0.5s both;
                }
            `}</style>
        </div>
    );
}