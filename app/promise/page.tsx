'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function PromisePage() {
  const router = useRouter();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-2xl">
        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="text-3xl md:text-4xl font-light tracking-wide mb-12">
          A Promise, Not a Performance
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-90">
          <p>I choose you deliberately. Not out of habit, convenience, or time.</p>

          <p>I promise presence — not perfection. Honesty — even when it is difficult. Effort — even when no one is watching.</p>

          <p>I don’t know everything about the future. But I know who I want to face it with.</p>
        </motion.div>

        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} onClick={() => router.push('/letters')} className="mt-20 text-sm tracking-widest opacity-60 hover:opacity-100 transition">
          READ WHAT I NEVER SAID OUT LOUD
        </motion.button>
      </div>
    </motion.main>
  );
}
