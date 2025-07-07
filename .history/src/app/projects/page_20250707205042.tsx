'use client';

import localFont from "next/font/local";
import ProjectCard from "../components/projectCard";

const Delirium = localFont({
    src: '../assets/fonts/DeliriumNcv-Vm5e.ttf',
    display: "swap"
})

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
        <div className="min-h-screen overflow-hidden relative bg-gray-100">
            {/* Large typography background - matching the BRILLIANT style */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white"></div>

                {/* Large background text - similar to "BRILLIANT" in the image */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className={`${Delirium.className} text-[930px] text-gray-300 leading-none text-center cursor-default`}>
                        PROJECTS
                    </div>
                </div>

                {/* Subtle geometric elements matching the design */}
                <div className="absolute top-20 right-20 w-4 h-4 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-32 left-16 w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-gray-600 rounded-full"></div>

                {/* Minimal lines */}
                <div className="absolute top-0 right-1/4 w-px h-full bg-gray-300 opacity-30"></div>
                <div className="absolute bottom-0 left-1/3 w-full h-px bg-gray-300 opacity-30"></div>
            </div>

            {/* Header with typography matching the portfolio style */}
            <div className="relative z-10 pt-20 pb-16 px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Small label like "BRILLIANTS" */}
                    <div className="text-sm text-gray-600 font-medium tracking-wider uppercase mb-2">
                        PORTFOLIO
                    </div>

                    {/* Main title with mixed typography */}
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                            Project
                        </h1>
                        <h2 className="text-6xl md:text-7xl font-bold text-gray-900 italic">
                            Showcase
                        </h2>
                    </div>

                    {/* Description with similar layout */}
                    <div className="max-w-md">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            A <span className="font-bold text-gray-900">Developer</span> who loves
                            discovering new things and
                            exploring the frontiers of
                            technology
                        </p>
                    </div>
                </div>
            </div>

            {/* Projects grid with clean layout */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 pb-20 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="animate-fade-in-portfolio" style={{ animationDelay: `${index * 0.1}s` }}>
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

            {/* Clean navigation indicator */}
            <div className="fixed bottom-8 left-8 z-20">
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 font-medium">Scroll to explore</span>
                </div>
            </div>

            {/* Clean animation styles */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                
                @keyframes fade-in-portfolio {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fade-in-portfolio {
                    animation: fade-in-portfolio 0.8s ease-out both;
                }
                
                /* Custom scrollbar to match clean design */
                ::-webkit-scrollbar {
                    width: 6px;
                }
                
                ::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
                
                ::-webkit-scrollbar-thumb {
                    background: #c1c1c1;
                    border-radius: 3px;
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: #a1a1a1;
                }
            `}</style>
        </div>
    );
}