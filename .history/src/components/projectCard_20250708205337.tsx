import Image from "next/image"
// 1. Impor `forwardRef` dan `ForwardedRef` dari React
import React, { forwardRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

interface Status {
  name: string;
  color: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    media: string;
    tags: string[];
    year: string;
    accent: string;
    status: object;
    id: number;
}

// 2. Ubah deklarasi fungsi menjadi const dan bungkus dengan forwardRef
const ProjectCard = forwardRef<HTMLAnchorElement, ProjectCardProps>(
    (props, ref) => {
        // 3. Pindahkan destructuring props ke dalam sini
        const { title, description, media, tags, year, accent, id, status } = props;
        
        const x = useMotionValue(0.5)
        const y = useMotionValue(0.5)

        const MouseXSpring = useSpring(x)
        const MouseYSpring = useSpring(y)

        const rotateX = useTransform(MouseYSpring, [0, 1], ['17.5deg', '-17.5deg']);
        const rotateY = useTransform(MouseXSpring, [0, 1], ['-17.5deg', '17.5deg']);

        const HandleMouseMove = (e: React.MouseEvent) => {
            const rect = (e.currentTarget as Element).getBoundingClientRect()
            const width = rect.width;
            const height = rect.height;

            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const xPercent = (mouseX / width);
            const yPercent = (mouseY / height);

            x.set(xPercent);
            y.set(yPercent);
        }

        const HandleMouseLeave = () => {
            x.set(0.5);
            y.set(0.5);
        }

        return (
            // 4. Sekarang `ref` yang diteruskan akan diterima dan ditempatkan di sini
            <Link ref={ref} href={`/projects/${id}`} className="group relative block w-full h-full drop-shadow-2xl">
                <motion.div onMouseLeave={HandleMouseLeave} onMouseMove={HandleMouseMove} className="w-full h-[500px] bg-gray-300 inset-0 rounded-lg shadow-xl relative group transform-3d cursor-pointer " style={{ rotateX, rotateY }} >
                    <div className="absolute inset-4 rounded-xl bg-white shadow-lg transform-3d translate-z-[75px]">
                        {/* Media container with gradient overlay */}
                        <div className="relative aspect-video transform-3d">
                            {media.endsWith('.mp4') ? (
                                <video
                                    autoPlay loop muted playsInline
                                    className="w-full h-full object-cover opacity-90 rounded-t-lg group-hover:opacity-100 transition-opacity duration-200"
                                >
                                    <source src={`${media}`} type="video/mp4" />
                                </video>
                            ) : (
                                <Image
                                    src={media}
                                    alt={title}
                                    fill
                                    className="w-full h-full object-cover opacity-90 rounded-t-lg group-hover:opacity-100 transition-opacity duration-200"
                                />
                            )}
                            <div className={`absolute w-full object-cover bg-gradient-to-t from-white/80 via-white/30 to-transparent`}></div>
                            <span className={`absolute top-4 right-4 px-3 py-1 bg-white/80 text-gray-800 text-sm font-medium rounded-full shadow-sm backdrop-blur-sm transform-3d translate-z-[25px]`}>
                                {year}
                            </span>
                            <span className={`absolute bottom-4 right-4 px-3 py-1 ${status.color}/80 text-gray-800 text-sm font-medium rounded-full shadow-sm backdrop-blur-sm transform-3d translate-z-[25px]`}>
                                {status.name}
                            </span>
                        </div>
                        {/* Content */}
                        <div className="p-6 transform-3d translate-z-[50px]">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className={`text-2xl font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
                                    {title}
                                </h2>
                                <div className="flex flex-wrap gap-2 justify-end">
                                    {tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-200 shadow-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">{description}</p>
                            <div className="flex justify-between items-center">
                                {/* Pembungkus untuk menata teks dan panah secara horizontal */}
                                <div className="relative z-10 flex items-center font-medium text-sm cursor-pointer">

                                    {/* 1. SPAN UNTUK TEKS - Punya gradiennya sendiri */}
                                    <span
                                        className={`bg-gradient-to-r ${accent} bg-clip-text text-transparent`}
                                    >
                                        View Project Details
                                    </span>

                                    {/* 2. SPAN UNTUK PANAH - Punya gradiennya sendiri DAN animasi */}
                                    <span
                                        className={`
                                            ml-2 inline-block 
                                            bg-gradient-to-r ${accent} bg-clip-text text-transparent
                                            transition-transform duration-300 ease-in-out group-hover:translate-x-2
                                        `}
                                    >
                                        →
                                    </span>

                                </div>
                                <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center text-white shadow-sm`}>
                                    <span className="text-xs font-bold">{id}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Link>
        )
    }
);

// (Opsional) Tambahkan display name
ProjectCard.displayName = "ProjectCard";

// 5. Ekspor komponen yang sudah dibungkus
export default ProjectCard;