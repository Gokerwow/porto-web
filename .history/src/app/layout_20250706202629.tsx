import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

import Navbar from "./navbar";

const Quivert = localFont({
  src: './assets/fonts/Quivert.ttf', // Path relatif ke file font
  display: 'swap',
});
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
        <main className="h-screen flex flex-col"> {/* <--- TAMBAHKAN INI */}
          <div className='pt-5'>
            <h1 className={`flex flex-col justify-center items-center text-2xl  ${Gafiya.className}`}>BRILLIANTS</h1>
            <h3 className='flex flex-col justify-center items-center italic'>Full Stack Developer</h3>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
