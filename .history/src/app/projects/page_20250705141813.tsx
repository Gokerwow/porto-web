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
        <div className="min-h-screen bg-white overflow-hidden relative">
            {/* Subtle background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-100 rounded-full filter blur-[90px] opacity-40 animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-100 rounded-full filter blur-[100px] opacity-30 animate-float-delay"></div>
            </div>
            
            {/* Header */}
            <div className="relative z-10 pt-20 pb-16 px-8 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
                    Project Showcase
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Innovative solutions blending design and technology
                </p>
            </div>

            {/* Projects Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 pb-20 max-w-6xl mx-auto">
                {projects.map((project, index) => (
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
                ))}
            </div>

            {/* Floating indicator */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm font-medium animate-pulse">
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
        </div>
    );
}