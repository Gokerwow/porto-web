"use client"

import { CursorContext } from "@/context/cursorContext"
import { ExternalLinkIcon, Github } from "lucide-react"
import Link from "next/link"
import { useContext } from "react"

interface ExternalLinkProps {
    href: string,
    type: 'github' | 'demo'
}

export const ExternalLinkComp = ({ href, type = 'github' }: ExternalLinkProps) => {
    const { handleMouseEnter, handleMouseLeave } = useContext(CursorContext)

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="inline-flex items-center p-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
        >
            {type === 'github' ?
                <>
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                </>
                :
                <>
                    <ExternalLinkIcon className="w-5 h-5 mr-2" />
                    Live Demo
                </>
            }
        </Link>
    )
}