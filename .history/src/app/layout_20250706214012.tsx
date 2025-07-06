import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

import Navbar from "./navbar";

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
        <main className=""> {/* <--- TAMBAHKAN INI */}
          {children}
        </main>
      </body>
    </html>
  );
}
