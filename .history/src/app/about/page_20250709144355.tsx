'use client'

import Image from "next/image";
import InfoCard from "@/components/InforCard";
import { cubicBezier, motion, useMotionValue, useTransform } from "framer-motion";
import WavyImage from "@/components/wavyCard";

// Definisikan Ikon SVG di sini untuk kerapian
const UniversityIcon = (
    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
);

const MajorIcon = (
    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const OrganizationIcon = (
    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export default function AboutPage() {
    const pathLength = useMotionValue(0)

    const strokeWidth = useTransform(
        pathLength,
        [0, 0.01],
        ['0', '100'],
        { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
    )


    return (
        <div className="px-40 py-20 w-full ">
            <motion.div initial={{ y: 48, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} className="w-full flex items-center">
                <div className="relative w-1/2">
                    <WavyImage
                        src="/assets/1080full-yuna-(itzy).jpg"
                        alt="Description of the image"
                    />
                    {/* <div className="absolute inset-0">
                        <WavyImage
                            src="/assets/foto_pribadi_2.png"
                            alt="Description of the image"
                        />
                        <svg className="absolute" width="593" height="756" viewBox="0 0 593 756" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <mask id="mask">
                                    <motion.path style={{ pathLength, strokeWidth }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }} d="M165.5 50.5L52.2759 201.326C47.1057 208.213 54.9753 217.286 62.5242 213.141L297.458 84.1428C305.032 79.9841 312.907 89.1228 307.675 95.9992L85.895 387.493C80.0957 395.115 90.1568 404.637 97.4486 398.428L439.574 107.07C446.984 100.759 457.108 110.653 450.968 118.206L61.0116 597.976C54.801 605.617 65.1981 615.547 72.5455 608.991L513.728 215.373C521.065 208.827 531.456 218.724 525.275 226.371L167.738 668.748C161.642 676.29 171.708 686.145 179.119 679.891L528.752 384.84C535.855 378.846 545.747 387.744 540.536 395.44L356.633 667.008C351.864 674.05 359.922 682.683 367.276 678.411L529.225 584.326C535.533 580.662 543.053 586.661 540.881 593.625L506 705.5" stroke="white" strokeWidth="100" strokeLinecap="round" fill="none" />
                                </mask>
                            </defs>
                        </svg>
                    </div> */}
                </div>
            </motion.div>

            <div className="w-full px-4 md:px-8 lg:px-16 mt-20 mb-20">
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                    <InfoCard
                        icon={UniversityIcon}
                        title="Currently Studying at"
                        imageUrl="/assets/unej.png"
                        imageAlt="Universitas Jember"
                        description="University of Jember"
                    />
                    <InfoCard
                        icon={MajorIcon}
                        title="Currently Majoring in"
                        imageUrl="/assets/fasilkom (2).png"
                        imageAlt="Fakultas Ilmu Komputer"
                        description="Information Systems"
                        subDescription="Faculty of Computer Science"
                    />
                    <InfoCard
                        icon={OrganizationIcon}
                        title="Currently a Member of"
                        imageUrl="/assets/HMSF.png"
                        imageAlt="Logo HMSF"
                        description="Himpunan Mahasiswa<br />Sistem Informasi"
                    />
                </div>
            </div>
        </div>
    );
}