'use client';

import { useEffect, useRef } from 'react';

const FloatingBlobsBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Create initial blobs
        for (let i = 0; i < 6; i++) {
            createBlob();
        }

        // Add new blobs periodically
        const interval = setInterval(createBlob, 8000);

        // Make blobs interactive
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const blobs = containerRef.current.querySelectorAll('.blob');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            blobs.forEach((blob, index) => {
                // Each blob reacts slightly differently
                const reactionFactor = index * 0.2 + 0.5;
                const xMovement = (mouseX - 0.5) * 100 * reactionFactor;
                const yMovement = (mouseY - 0.5) * 100 * reactionFactor;

                (blob as HTMLElement).style.transform = `translate(${xMovement}px, ${yMovement}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearInterval(interval);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const createBlob = () => {
        if (!containerRef.current) return;

        const blob = document.createElement('div');
        blob.className = 'blob';

        // Random properties
        const size = Math.random() * 200 + 100;
        const color = `rgba(${Math.floor(Math.random() * 100 + 150)}, 
                   ${Math.floor(Math.random() * 100 + 150)}, 
                   ${Math.floor(Math.random() * 100 + 150)}, 
                   ${Math.random() * 0.3 + 0.3})`;

        blob.style.width = `${size}px`;
        blob.style.height = `${size}px`;
        blob.style.background = color;
        blob.style.top = `${Math.random() * 100}%`;
        blob.style.left = `${Math.random() * 100}%`;
        blob.style.animationDuration = `${Math.random() * 15 + 10}s`;
        blob.style.animationDelay = `-${Math.random() * 10}s`;

        containerRef.current.appendChild(blob);

        // Remove some blobs occasionally to prevent too many
        if (containerRef.current.children.length > 8) {
            containerRef.current.removeChild(containerRef.current.children[0]);
        }
    };

    return (
        <>
            {/* SVG Filters for Gooey Effect */}
            <svg className="svg-filters" style={{ position: 'absolute' }}>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

            {/* Blob Container */}
            <div
                ref={containerRef}
                className="blob-container"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    overflow: 'hidden',
                    filter: 'url(#goo)'
                }}
            />
        </>
    );
};

export default FloatingBlobsBackground;