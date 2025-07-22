'use client';

import ProjectCard from "../../components/projectCard";

import { motion } from "framer-motion";

const MotionProjectCard = motion(ProjectCard);

const status = [
    {
        name: "Done",
        color: "bg-green-400"
    },
    {
        name: "Almost Done",
        color: "bg-yellow-400"
    },
    {
        name: "Progress",
        color: "bg-orange-400"
    },
]

export const projects = [
    {
        id: 1,
        title: "EduTask",
        description: "A Laravel-Based Task Management and Productivity System for Academic and Collaborative Work",
        media: "/assets/videos/Edutask.mp4",
        tags: ["Laravel", "Livewire"],
        year: "2025",
        accent: "from-amber-400 to-rose-500",
        status: status[1]
    },
    {
        id: 2,
        title: "NauTure",
        description: "A Web-Based Auction Information System for Agricultural Products to Connect Farmers with Buyers",
        media: "assets/videos/Nauture.mp4",
        tags: ["Laravel"],
        year: "2025",
        accent: "from-emerald-400 to-cyan-500",
        status: status[0]
    },
    {
        id: 3,
        title: "Biasly",
        description: "A Modern Web Application for K-Pop Fans to Create, Manage, and Share Curated Lists and Profiles",
        media: "/assets/Biasly.png",
        tags: ["Next JS", "React", "Framer Motion"],
        year: "2025",
        accent: "from-violet-400 to-indigo-500",
        status: status[2]
    },
    {
        id: 4,
        title: "Zuno",
        description: "A Full-Stack Web Application for Streaming Movie and Anime Content with Personalized User Features",
        media: "/assets/videos/Zuno.mp4",
        tags: ["Laravel", "React"],
        year: "2025",
        accent: "from-red-400 to-orange-500",
        status: status[2]
    },
];

export default function Projects() {
    // useEffect(() => {
    //     const lenis = new Lenis()
    //     function raf(time : any) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf)
    //     }
    //     requestAnimationFrame(raf);
    // }, [])

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
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-100 rounded-full filter blur-[90px] opacity-40 animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-100 rounded-full filter blur-[100px] opacity-30 animate-float-delay"></div>
            </div>


            <div className="relative z-10 pt-20 pb-16 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-sm text-gray-600 font-medium tracking-wider uppercase mb-2">
                        PORTFOLIO
                    </div>

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
                        status={project.status}
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