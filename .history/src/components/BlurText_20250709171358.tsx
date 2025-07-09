import localFont from 'next/font/local';
import handleMouseEnter from '../app/page';
import handleMouseLeave from '../app/page';

const Transcity = localFont({
    src: '../app/assets/fonts/Transcity DEMO.otf', // Path relatif ke file font
    display: 'swap',
});

export default function BlurText() {
    return (
        <div className="absolute z-20 left-1/7 top-1/3 ">
            <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`text-8xl p-7 text-right  ${Transcity.className}`}>Brillian <br /> Maulana  Syah</h1>
        </div>
    )
}