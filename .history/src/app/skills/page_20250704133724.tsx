'use client';

import { motion } from "framer-motion";

export default function SkillPage() {
    return (
        <div className="px-[300px] py-40 w-full">
            <div className="text-center mb-20">
                <span className="text-sm font-medium text-gray-500 tracking-widest">MY EXPERTISE</span>
                <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mt-4 mb-6">Technical Skills</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed italic">
                    A curated collection of technologies and methodologies I&apos;ve mastered through professional experience and continuous learning.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="skill-card p-8 rounded-xl border border-gray-100 bg-white">
                    <div className="skill-content">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-medium text-gray-900 section-title">Development</h2>
                        </div>
                        
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></span>
                                <div>
                                    <h3 className="font-medium text-gray-800">Frontend</h3>
                                    <p className="text-gray-600 text-sm mt-1">React, Vue, TypeScript, Tailwind CSS</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></span>
                                <div>
                                    <h3 className="font-medium text-gray-800">Backend</h3>
                                    <p className="text-gray-600 text-sm mt-1">Node.js, Express, PostgreSQL, MongoDB</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></span>
                                <div>
                                    <h3 className="font-medium text-gray-800">DevOps</h3>
                                    <p className="text-gray-600 text-sm mt-1">Docker, AWS, CI/CD Pipelines</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface SkillCardProps {
    title: string;
    skills: string;
    technologies: string[];
}

function SkillCard( {title, skills, technologies} ; SkillCardProps) {
    return (
        <motion.div
            className="skill-card p-8 rounded-xl border border-gray-100 bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="skill-content">
                <h2 className="text-xl font-medium text-gray-900 mb-4">{title}</h2>
                <p className="text-gray-600 mb-4">{skills}</p>
                <ul className="list-disc list-inside text-gray-700">
                    {technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );

}