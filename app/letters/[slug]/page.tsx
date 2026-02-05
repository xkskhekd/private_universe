'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
    content: `
I didn’t fall suddenly.

I arrived slowly.
Through conversations that stayed longer than they needed to.
Through silences that felt safe instead of awkward.

One day, choosing you stopped feeling like a decision.
It felt like alignment.
    `,
  },
  {
    slug: '13072025',
    title: '13 / 07 / 2025',
    content: `
That day was quiet.

No fireworks.
No dramatic turning point.

Just a moment where I realized:
this is no longer hypothetical.
    `,
  },
  {
    slug: 'when-you-doubt-yourself',
    title: 'For the Days You Doubt Yourself',
    content: `
On those days,
borrow my certainty.

I see your effort.
I see your kindness.
Even when you don’t.
    `,
  },
  {
    slug: 'valentine-2026',
    title: 'Valentine 2026',
    content: `
If you are reading this,
it means time kept its promise.
    `,
    unlockDate: '2026-02-14',
  },
  {
    slug: 'when-we-fight',
    title: 'When We Fight',
    content: `
This letter exists because conflict does not scare me.
But timing still matters.
    `,
    unlockDate: '2099-01-01',
  },
];

export default function LetterDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());
  }, []);

  const letter = letters.find((l) => l.slug === slug);

  if (!letter) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Letter not found.</div>;
  }

  const isUnlocked = () => {
    if (!letter.unlockDate || !today) return true;
    return today >= new Date(letter.unlockDate);
  };

  // 🔒 LOCK SCREEN
  if (!isUnlocked()) {
    return (
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-sm tracking-widest opacity-50 mb-6">
          THIS LETTER IS NOT READY
        </motion.p>

        <p className="text-center max-w-md text-base opacity-70 leading-relaxed">Some words need the right moment. This is not that moment yet.</p>

        <button onClick={() => router.back()} className="mt-16 text-xs tracking-widest opacity-40 hover:opacity-100 transition">
          GO BACK
        </button>
      </motion.main>
    );
  }

  // 🔓 UNLOCKED CONTENT
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="min-h-screen bg-black text-white px-6 py-24 flex justify-center">
      <div className="max-w-2xl w-full">
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} onClick={() => router.back()} className="text-xs tracking-widest opacity-50 hover:opacity-100 mb-16">
          BACK
        </motion.button>

        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="text-3xl font-light tracking-wide mb-12">
          {letter.title}
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="space-y-6 text-base md:text-lg font-light leading-relaxed whitespace-pre-line opacity-90">
          {letter.content}
        </motion.div>
        {letter.slug === 'when-we-fight' && (
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} onClick={() => router.push('/ending')} className="mt-24 text-xs tracking-widest opacity-40 hover:opacity-100">
            CLOSE
          </motion.button>
        )}
      </div>
    </motion.main>
  );
}
