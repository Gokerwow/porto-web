'use client';

import { useEffect, useRef } from 'react';

const DynamicBlobsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLElement[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  // Konfigurasi yang bisa disesuaikan
  const config = {
    blobCount: 15, // Jumlah blob awal
    maxBlobs: 25, // Maksimum blob yang ditampilkan
    spawnInterval: 3000, // Interval pembuatan blob baru (ms)
    baseSize: 120, // Ukuran dasar blob
    sizeVariation: 180, // Variasi ukuran blob
    baseSpeed: 15, // Kecepatan dasar animasi
    speedVariation: 10, // Variasi kecepatan
    colorPalette: [
      'rgba(200, 220, 255, 0.6)', // Biru muda
      'rgba(255, 200, 220, 0.6)', // Merah muda
      'rgba(220, 255, 200, 0.6)', // Hijau muda
      'rgba(255, 220, 200, 0.6)', // Oranye muda
      'rgba(220, 200, 255, 0.6)', // Ungu muda
    ],
    repulsionStrength: 0.5, // Kekuatan tolakan antar blob
    mouseInteractionStrength: 0.8 // Kekuatan interaksi dengan mouse
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Inisialisasi blob awal
    for (let i = 0; i < config.blobCount; i++) {
      createBlob();
    }

    // Pembuatan blob baru secara berkala
    const spawnInterval = setInterval(createBlob, config.spawnInterval);

    // Setup interaksi mouse
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animasi utama
    const animate = () => {
      updateBlobs();
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      clearInterval(spawnInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const createBlob = () => {
    if (!containerRef.current || blobsRef.current.length >= config.maxBlobs) return;

    const blob = document.createElement('div');
    blob.className = 'dynamic-blob';
    
    // Properti acak
    const size = config.baseSize + Math.random() * config.sizeVariation;
    const color = config.colorPalette[Math.floor(Math.random() * config.colorPalette.length)];
    const speed = config.baseSpeed + Math.random() * config.speedVariation;
    
    // Posisi awal di sekitar tepi layar
    const edge = Math.floor(Math.random() * 4);
    let left, top;
    
    switch(edge) {
      case 0: // atas
        left = Math.random() * 100;
        top = -10;
        break;
      case 1: // kanan
        left = 110;
        top = Math.random() * 100;
        break;
      case 2: // bawah
        left = Math.random() * 100;
        top = 110;
        break;
      case 3: // kiri
        left = -10;
        top = Math.random() * 100;
        break;
      default:
        left = Math.random() * 100;
        top = Math.random() * 100;
    }
    
    blob.style.width = `${size}px`;
    blob.style.height = `${size}px`;
    blob.style.background = color;
    blob.style.left = `${left}%`;
    blob.style.top = `${top}%`;
    blob.style.animationDuration = `${speed}s`;
    blob.style.setProperty('--random-x', `${Math.random() * 100 - 50}`);
    blob.style.setProperty('--random-y', `${Math.random() * 100 - 50}`);
    
    containerRef.current.appendChild(blob);
    blobsRef.current.push(blob);
  };

  const updateBlobs = () => {
    const blobs = blobsRef.current;
    const mouseX = mousePosition.current.x;
    const mouseY = mousePosition.current.y;
    
    blobs.forEach((blob, index) => {
      if (!blob.isConnected) {
        blobsRef.current.splice(index, 1);
        return;
      }
      
      const rect = blob.getBoundingClientRect();
      const blobX = rect.left + rect.width / 2;
      const blobY = rect.top + rect.height / 2;
      
      // Interaksi dengan mouse
      const dx = mouseX - blobX;
      const dy = mouseY - blobY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 300) {
        const force = (1 - distance / 300) * config.mouseInteractionStrength;
        const angle = Math.atan2(dy, dx);
        
        const repelX = Math.cos(angle + Math.PI) * force * 20;
        const repelY = Math.sin(angle + Math.PI) * force * 20;
        
        blob.style.setProperty('--mouse-x', `${repelX}`);
        blob.style.setProperty('--mouse-y', `${repelY}`);
      } else {
        blob.style.setProperty('--mouse-x', '0');
        blob.style.setProperty('--mouse-y', '0');
      }
      
      // Interaksi dengan blob lain (repulsion)
      let totalRepelX = 0;
      let totalRepelY = 0;
      let interactions = 0;
      
      blobs.forEach(otherBlob => {
        if (otherBlob === blob) return;
        
        const otherRect = otherBlob.getBoundingClientRect();
        const otherX = otherRect.left + otherRect.width / 2;
        const otherY = otherRect.top + otherRect.height / 2;
        
        const blobDistance = Math.sqrt(
          Math.pow(otherX - blobX, 2) + 
          Math.pow(otherY - blobY, 2)
        );
        
        const minDistance = (rect.width + otherRect.width) / 2;
        
        if (blobDistance < minDistance * 1.5) {
          const repelForce = config.repulsionStrength * (1 - blobDistance / (minDistance * 1.5));
          const angle = Math.atan2(otherY - blobY, otherX - blobX);
          
          totalRepelX += Math.cos(angle + Math.PI) * repelForce * 10;
          totalRepelY += Math.sin(angle + Math.PI) * repelForce * 10;
          interactions++;
        }
      });
      
      if (interactions > 0) {
        blob.style.setProperty('--repel-x', `${totalRepelX / interactions}`);
        blob.style.setProperty('--repel-y', `${totalRepelY / interactions}`);
      } else {
        blob.style.setProperty('--repel-x', '0');
        blob.style.setProperty('--repel-y', '0');
      }
    });
  };

  return (
    <>
      {/* SVG Gooey Filter yang lebih halus */}
      <svg className="svg-filters" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix in="blur" mode="matrix" 
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 18 -7" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>

      {/* Blob Container */}
      <div 
        ref={containerRef}
        className="dynamic-blob-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          overflow: 'hidden',
          filter: 'url(#goo)',
          pointerEvents: 'none'
        }}
      />
    </>
  );
};

export default DynamicBlobsBackground;