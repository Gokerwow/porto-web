"use client"

import { CursorContext } from "@/context/cursorContext"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useContext } from "react"

export const BackButton = () => {
    const router = useRouter()

    const { setCursorState } = useContext(CursorContext);

    const handleMouseEnter = (e: React.MouseEvent) => {
        const rect = (e.target as Element).getBoundingClientRect();
        setCursorState({
            variant: 'hovering',
            dimensions: rect
        });
    };

    const handleMouseClick = () => {
        setCursorState({
            variant: 'default',
            dimensions: {} as DOMRect
        });
        router.back()
    };

    const handleMouseLeave = () => {
        setCursorState({
            variant: 'default',
            dimensions: {} as DOMRect
        });
    };


    return (
        <button
            onClick={handleMouseClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="inline-flex items-center p-2 text-gray-500 hover:text-gray-700 transition-colors font-medium"
        >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
        </button>
    )
}