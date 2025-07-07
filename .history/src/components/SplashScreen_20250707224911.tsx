// File: src/components/SplashScreen.tsx
'use client';

import { motion } from 'framer-motion';

export const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: [] }}
      transition={{ duration: 5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      {/* Anda bisa menaruh logo atau animasi yang lebih kompleks di sini */}
      <div className="w-20 h-20 border-8 border-dotted rounded-full animate-spin border-violet-500"></div>
    </motion.div>
  );
};