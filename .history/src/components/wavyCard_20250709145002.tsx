// WavingImage.js
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Ini adalah komponen yang berisi logika utama untuk efek gelombang
function FlagMesh({ imageUrl, width, height }) {
    // `useRef` untuk mendapatkan akses langsung ke mesh 3D
    const meshRef = useRef();

    // Memuat tekstur gambar menggunakan helper dari `drei`
    const texture = useTexture(imageUrl);

    // `useMemo` untuk membuat geometri hanya sekali agar performa lebih baik
    // Angka 32, 32 adalah jumlah segmen. Semakin tinggi, semakin halus gelombangnya.
    const geometry = useMemo(() => new THREE.PlaneGeometry(width, height, 32, 32), [width, height]);

    // Simpan posisi asli dari setiap vertex
    const originalPositions = useMemo(() => geometry.attributes.position.clone(), [geometry]);

    // Hook `useFrame` akan menjalankan fungsi ini di setiap frame (sekitar 60x per detik)
    useFrame((state) => {
        const { clock } = state; // Dapatkan waktu yang telah berlalu
        const t = clock.getElapsedTime();

        const positions = meshRef.current.geometry.attributes.position;

        // Loop melalui setiap vertex di geometri
        for (let i = 0; i < positions.count; i++) {
            // Dapatkan posisi x asli dari vertex
            const originalX = originalPositions.getX(i);

            // Hitung gelombang menggunakan fungsi sinus
            // Gabungan dua gelombang sinus untuk efek yang lebih alami
            const wave1 = Math.sin(originalX * 2.5 + t * 2.0) * 0.1;
            const wave2 = Math.sin(originalX * 1.5 + t * 1.5) * 0.1;

            // Terapkan gelombang ke sumbu Z (kedalaman) untuk membuatnya berkibar
            positions.setZ(i, wave1 + wave2);
        }

        // Beri tahu Three.js bahwa posisi vertex perlu diperbarui di frame ini
        meshRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <mesh ref={meshRef} geometry={geometry}>
            {/* Gunakan material yang bereaksi pada cahaya dan tempelkan tekstur gambar */}
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
    );
}

// Komponen utama yang akan Anda gunakan di aplikasi
export default function WavingImage({ imageUrl, width = 5, height = 3 }) {
    return (
        <Canvas style={{ height: '500px', width: '800px' }}>
            {/* Tambahkan cahaya agar material `meshStandardMaterial` terlihat */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <FlagMesh imageUrl={imageUrl} width={width} height={height} />
        </Canvas>
    );
}