'use client';

import { motion } from "framer-motion";

export default function SkillPage() {
    return (
        <div>
            <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-blue-500 text-white w-96 h-96 rounded" />
        </div>
    )
}