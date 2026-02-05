'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Letter = {
  slug: string;
  title: string;
  content: string;
  unlockDate?: string; // YYYY-MM-DD
};

const letters: Letter[] = [
  {
    slug: 'the-day-i-chose-you',
    title: 'The Day I Chose You',
    content: 'I didn’t fall suddenly. I arrived, slowly and deliberately.',
  },
  {
    slug: '13072025',
    title: '13 / 07 / 2025',
    content: 'This wasn’t just a date. It was a quiet decision.',
  },
  {
    slug: 'when-you-doubt-yourself',
    title: 'For the Days You Doubt Yourself',
    content: 'On those days, borrow my certainty.',
  },
  {
    slug: 'valentine-2026',
    title: 'Valentine 2026',
    content: 'If you are reading this, it means we are still choosing each other.',
    unlockDate: '2026-02-14',
  },
  {
    slug: 'when-we-fight',
    title: 'When We Fight',
    content: 'This is not here yet.',
    unlockDate: '2099-01-01',
  },
];

export default function LettersPage() {
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());
  }, []);

  const isUnlocked = (unlockDate?: string) => {
    if (!unlockDate || !today) return true;
    return today >= new Date(unlockDate);
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-3xl font-light tracking-wide mb-4">
          Letters
        </motion.h1>

        <p className="text-sm opacity-60 mb-16">Not meant to be read all at once.</p>

        <div className="space-y-6">
          {letters.map((letter, idx) => {
            const unlocked = isUnlocked(letter.unlockDate);

            const Card = (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + idx * 0.2 }}
                className={`border border-white/10 rounded-xl p-6 transition ${unlocked ? 'hover:border-white/30 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
              >
                <h2 className="text-lg font-light tracking-wide mb-2">{letter.title}</h2>

                {unlocked ? <p className="text-sm leading-relaxed opacity-80">{letter.content}</p> : <p className="text-sm italic opacity-50">Locked — meant for another time.</p>}
              </motion.div>
            );

            // JIKA TERBUKA → BISA DIKLIK
            if (unlocked) {
              return (
                <Link key={letter.slug} href={`/letters/${letter.slug}`} className="block">
                  {Card}
                </Link>
              );
            }

            // JIKA TERKUNCI → TIDAK ADA LINK
            return <div key={letter.slug}>{Card}</div>;
          })}
        </div>
      </div>
    </motion.main>
  );
}
