import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MouseFollower from "../components/mouseEffect"
import { CursorProvider } from "@/context/cursorContext";
import SmoothScrolling from "@/utils/lenis";

import Navbar from "./navbar";

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
      <SmoothScrolling>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <CursorProvider>
            <MouseFollower />
            <Navbar />
            <main className=""> {/* <--- TAMBAHKAN INI */}
              {children}
            </main>
          </CursorProvider>
        </body>
      </SmoothScrolling>
    </html>
  );
}