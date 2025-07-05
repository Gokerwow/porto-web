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
            style={{ transformStyle: "preserve-3d" }}
            className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
                <div
                    style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}>

                </div>
        </div>
    )
}