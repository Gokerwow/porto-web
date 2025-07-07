"use client";
import { ReactLenis } from "@studio-freight/lenis";

interface SmoothScrollingProps {
  children: React.ReactNode;
}

// 2. Gunakan interface tersebut pada fungsi Anda
function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;