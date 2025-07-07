'use client';

import { useEffect } from "react";
import ProjectCard from "../components/projectCard";

import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis/types";
const MotionProjectCard = motion(ProjectCard);

export default function Projects() {
    useEffect(() => {
        const lenis = new Lenis()
        function raf(time : any) {
            lenis.raf(time);
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf);
    })

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
        {
            id: 4,
            title: "Cosmic Portfolio",
            description: "Interactive 3D space-themed portfolio",
            media: "/assets/1080full-yuna-(itzy).jpg",
            tags: ["Three.js", "GSAP", "WebXR"],
            year: "2024",
            accent: "from-blue-400 to-sky-500"
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

    const containerVariants = {
        hidden: { opacity: 1 }, // Kontainer bisa langsung terlihat
        visible: {
            opacity: 1,
            transition: {
                // Tugasnya HANYA untuk mengatur jeda antar anak
                staggerChildren: 0.2, // Anda bisa sesuaikan jedanya
            }
        }
    } as const;

    // Variants untuk SETIAP ProjectCard
    const itemVariants = {
        hidden: { y: 50, opacity: 0 }, // Posisi awal anak
        visible: { // Posisi akhir anak
            y: 0,
            opacity: 1,
            transition: {
                // Transisi untuk setiap anak bisa diatur di sini
                type: "spring",
                stiffness: 100,
            }
        }
    } as const;

    return (
        <div className="min-h-screen overflow-hidden relative">
            {/* Subtle background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-100 rounded-full filter blur-[90px] opacity-40 animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-100 rounded-full filter blur-[100px] opacity-30 animate-float-delay"></div>
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

            {/* Projects Grid */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 px-8 pb-20 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <MotionProjectCard
                        key={index}
                        variants={itemVariants}
                        title={project.title}
                        description={project.description}
                        media={project.media}
                        tags={project.tags}
                        year={project.year}
                        accent={project.accent}
                        id={project.id}
                    />
                ))}
            </motion.div>

            {/* Floating indicator */}
            <div className="fixed z-50 bottom-30 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm font-medium animate-pulse">
                Scroll to discover more
            </div>

            {/* Animation styles */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-15px) translateX(10px); }
                }
                .animate-float {
                    animation: float 10s ease-in-out infinite;
                }
                .animate-float-delay {
                    animation: float 12s ease-in-out infinite 2s;
                }
            `}</style>
        </div >
    );
}