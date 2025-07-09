import localFont from 'next/font/local';
import { CursorContext } from "@/context/cursorContext";
import { useContext } from 'react';

const Transcity = localFont({
    src: '../app/assets/fonts/Transcity DEMO.otf', // Path relatif ke file font
    display: 'swap',
});

export default function BlurText() {
    const { setCursorState } = useContext(CursorContext);

const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = (e.target as Element).getBoundingClientRect();
    setCursorState({
        variant: 'hovering',
        dimensions: rect
    })
}


const handleMouseLeave = () => {
    setCursorState({
        variant: 'default',
        dimensions: {}
    })
}
    return (
        <div className="absolute z-20 left-1/7 top-1/3 ">
            <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`text-8xl p-7 text-right  ${Transcity.className}`}>Brillian <br /> Maulana  Syah</h1>
        </div>
    )
}