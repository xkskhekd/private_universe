'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="text-center text-lg md:text-xl font-light tracking-wide max-w-xl">
        Some things are not meant to be explained.
        <br />
        They are meant to be kept.
      </motion.p>

      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} onClick={() => router.push('/promise')} className="mt-16 text-sm tracking-widest opacity-60 hover:opacity-100 transition">
        ENTER
      </motion.button>
    </motion.main>
  );
}
