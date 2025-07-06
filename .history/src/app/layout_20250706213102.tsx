import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

import Navbar from "./navbar";
import Dock from './Dock';

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];
  
const FiraCode = localFont({
  src: './assets/fonts/FiraCode-Regular.ttf',
  display: "swap"
})
const Gafiya = localFont({
  src: './assets/fonts/Gafiya-regular.otf', // Path relatif ke file font
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRILLIANTS",
  description: "Brilliants - Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="h-screen flex flex-col overflow-hidden"> {/* <--- TAMBAHKAN INI */}
          <div className='pt-5 flex justify-between px-7'>
            <div>
              <h1 className={` text-xl text-gray-500 ${FiraCode.className}`}>Based In</h1>
              <h3 className={` text-gray-500 ${FiraCode.className}`}>Jember, Indonesia</h3>
            </div>
            <div className="text-center">
              <h1 className={` text-2xl  ${Gafiya.className}`}>BRILLIANTS</h1>
              <h3 className='italic'>An Aspiring Developer</h3>
            </div>
            <div className="text-right">
              <h1 className={`text-xl text-gray-500 ${FiraCode.className}`}>GITHUB</h1>
              <h1 className={`text-xl text-gray-500 ${FiraCode.className}`}>FACEBOOK</h1>
              <h1 className={`text-xl text-gray-500 ${FiraCode.className}`}>YOUTUBE</h1>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
