"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithLoaderProps extends ImageProps {
    containerClassName?: string;
}

export default function ImageWithLoader({ containerClassName, className, ...props }: ImageWithLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative overflow-hidden ${containerClassName}`}>
            {/* 1. The Loading Skeleton (Visible only while loading) */}
            {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse z-10 flex items-center justify-center">
                    {/* Optional: Add a logo or spinner icon here if you want */}
                    <span className="text-gray-400 text-xs font-mono">LOADING...</span>
                </div>
            )}

            {/* 2. The Actual Image */}
            <Image
                {...props}
                className={`
                ${className} 
                transition-all duration-500 ease-in-out
                ${isLoading ? 'scale-110 blur-xl grayscale opacity-0' : 'scale-100 blur-0 grayscale-0 opacity-100'}
                `}
                onLoad={() => setIsLoading(false)} // <--- This triggers the swap
            />
        </div>
    );
}