'use client';

import { useEffect, useRef } from 'react';

const FloatingBlobs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement[]>([]);
  const animationRef = useRef<number>();

  // Configurasi blob
  const config = {
    count: 20, // Jumlah blob
    sizeRange: { min: 80, max: 200 }, // Ukuran blob (px)
    speedRange: { min: 15, max: 30 }, // Durasi animasi (detik)
    colorPalette: [
      'bg-blue-200/60', 
      'bg-purple-200/60',
      'bg-pink-200/60',
      'bg-amber-200/60',
      'bg-emerald-200/60',
      'bg-indigo-200/60'
    ],
    movementRange: 100 // Jarak pergerakan blob (px)
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Inisialisasi blob
    const initBlobs = () => {
      if (!containerRef.current) return;

      // Hapus blob yang ada
      blobsRef.current = [];
      containerRef.current.innerHTML = '';

      // Buat blob baru
      for (let i = 0; i < config.count; i++) {
        createBlob(i);
      }
    };

    // Buat satu blob
    const createBlob = (index: number) => {
      if (!containerRef.current) return;

      const blob = document.createElement('div');
      
      // Properti acak
      const size = Math.floor(Math.random() * (config.sizeRange.max - config.sizeRange.min) + config.sizeRange.min;
      const color = config.colorPalette[Math.floor(Math.random() * config.colorPalette.length)];
      const duration = Math.floor(Math.random() * (config.speedRange.max - config.speedRange.min) + config.speedRange.min;
      const delay = Math.random() * -20;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const movementX = (Math.random() - 0.5) * config.movementRange;
      const movementY = (Math.random() - 0.5) * config.movementRange;

      // Terapkan class Tailwind
      blob.className = `
        absolute rounded-full mix-blend-multiply 
        ${color} 
        animate-float
      `;

      // Style inline untuk properti dinamis
      blob.style.width = `${size}px`;
      blob.style.height = `${size}px`;
      blob.style.left = `${x}%`;
      blob.style.top = `${y}%`;
      blob.style.animationDuration = `${duration}s`;
      blob.style.animationDelay = `${delay}s`;
      blob.style.setProperty('--move-x', `${movementX}px`);
      blob.style.setProperty('--move-y', `${movementY}px`);
      blob.style.setProperty('--rotate', `${Math.random() * 360}deg`);

      containerRef.current.appendChild(blob);
      blobsRef.current.push(blob);
    };

    // Animasi interaktif
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      blobsRef.current.forEach((blob, index) => {
        const reaction = index % 3 === 0 ? 0.3 : index % 2 === 0 ? 0.5 : 0.7;
        const x = (mouseX - 0.5) * 50 * reaction;
        const y = (mouseY - 0.5) * 50 * reaction;

        blob.style.transform = `translate(calc(var(--move-x) + ${x}px), calc(var(--move-y) + ${y}px)) rotate(var(--rotate))`;
      });
    };

    initBlobs();
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Container untuk blob */}
      <div 
        ref={containerRef}
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      />
      
      {/* SVG Filter untuk efek gooey */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 18 -7" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default FloatingBlobs;