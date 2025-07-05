import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";


export default function projectCard() {
    return (
        <div
            style={{ transformStyle: "preserve-3d", transform: "rotateY(30deg)" }}
            className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
                <div
                    style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                    className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
                    <h2 className="text-xl font-bold">Project Title</h2>
                    <p className="text-sm">Project description goes here.</p>
                </div>
        </div>
    )
}