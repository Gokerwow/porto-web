// components/WavyImage.js
import Image from "next/image";

export interface WavyProps {
    src: string,
    alt: string,
}

export default function WavyImage({ src, alt }: WavyProps) {
    return (
        <div className="wavy-wrapper">
            <svg className="wavy-mask" xmlns="http://www.w3.org/2000/svg">
                <filter id="wavy">
                    <feTurbulence type="turbulence" baseFrequency="0.01 0.02" numOctaves="3" result="turbulence" />
                    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>
            <Image                             width={600}
                            height={600} src={src} alt={alt} className="wavy-img" />
        </div>
    );
}
