'use client';

import { motion } from "framer-motion";

export default function SkillPage() {
    return (
    // Cukup berikan padding dan atur lebar jika perlu.
    // Tidak perlu flexbox untuk mendorong konten ke bawah.
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Skills & Expertise</h1>
        <p className="text-lg text-slate-600 mt-2">
          A curated collection of technologies I use to build and design.
        </p>
      </div>
      {/* ... sisa konten skill Anda ... */}
    </main>
    )
}