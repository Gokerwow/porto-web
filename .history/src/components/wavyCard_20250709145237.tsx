// WavingImage.tsx (Ganti ekstensi file ke .tsx untuk sintaks TypeScript)

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// SOLUSI #1: Definisikan tipe untuk props
interface FlagMeshProps {
  imageUrl: string;
  width: number;
  height: number;
}

// Komponen FlagMesh sekarang menggunakan tipe props yang sudah didefinisikan
function FlagMesh({ imageUrl, width, height }: FlagMeshProps) {
  // `useRef` diberi tipe generic untuk memberitahu TypeScript isinya adalah Mesh
  const meshRef = useRef<THREE.Mesh>(null!);

  // SOLUSI #3 akan teratasi dengan sendirinya karena `imageUrl` sekarang bertipe `string`
  const texture = useTexture(imageUrl);

  const geometry = useMemo(() => new THREE.PlaneGeometry(width, height, 32, 32), [width, height]);
  const originalPositions = useMemo(() => geometry.attributes.position.clone(), [geometry]);

  useFrame((state) => {
    // SOLUSI #2: Tambahkan penjaga untuk memastikan meshRef.current sudah ada
    if (!meshRef.current) {
      return;
    }

    const { clock } = state;
    const t = clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const originalX = originalPositions.getX(i);
      const wave1 = Math.sin(originalX * 2.5 + t * 2.0) * 0.1;
      const wave2 = Math.sin(originalX * 1.5 + t * 1.5) * 0.1;
      positions.setZ(i, wave1 + wave2);
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}

// Definisikan juga tipe untuk komponen utama
interface WavingImageProps {
  imageUrl: string;
  width?: number; // `?` menandakan properti ini opsional
  height?: number;
}

// Gunakan tipe props dan berikan nilai default di dalam parameter
export default function WavingImage({ imageUrl, width = 5, height = 3 }: WavingImageProps) {
  return (
    <Canvas style={{ height: '500px', width: '800px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FlagMesh imageUrl={imageUrl} width={width} height={height} />
    </Canvas>
  );
}