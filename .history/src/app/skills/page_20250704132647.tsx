'use client';

import { motion } from "framer-motion";

export default function SkillPage() {
    return (
        <div className="px-[300px] py-40 w-full">
            <div className="text-center mb-20">
                <span className="text-sm font-medium text-gray-500 tracking-widest">MY EXPERTISE</span>
                <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mt-4 mb-6">Technical Skills</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    A curated collection of technologies and methodologies I&aposve mastered through professional experience and continuous learning.
                </p>
            </div>
        </div>
    )
}