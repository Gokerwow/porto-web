"use client";
import { ReactLenis } from "@studio-freight/lenis";

function SmoothScrolling({ children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;