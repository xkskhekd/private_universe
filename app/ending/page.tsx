'use client';

import { motion } from 'framer-motion';

export default function EndingPage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="font-serif text-center text-xl md:text-2xl tracking-wide opacity-80">
        There is nothing more to read.
        <br />
        But everything continues.
      </motion.p>
    </motion.main>
  );
}
