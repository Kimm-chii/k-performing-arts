import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { schedule, studio } from '../data/studio';

const filters = ['All', 'Dance', 'Acting', 'Modeling', 'Etiquette'] as const;

export default function Schedule() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const days = schedule
    .map((d) => ({ ...d, slots: d.slots.filter((s) => filter === 'All' || s.program === filter) }))
    .filter((d) => d.slots.length > 0);

  return (
    <main className="w-full pt-32 pb-20 bg-[#FDFCFB] min-h-screen">
      <section className="px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-4">Schedule</p>
          <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-[0.95] tracking-tight mb-6">
            Weekly <span className="italic font-light text-stone-400">timetable.</span>
          </h1>
          <p className="text-stone-500 text-base leading-relaxed max-w-xl">
            {studio.season}. {studio.seasonStart}. Classes run Monday to Saturday at our Central Plaza and Riverside studios.
          </p>
        </motion.div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-4 -mx-1 px-1 [scrollbar-width:none]" role="tablist" aria-label="Filter by program">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`shrink-0 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest border transition-colors ${
                  filter === f
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="border-t border-stone-200">
            {days.map((d) => (
              <div key={d.day} className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-6 border-b border-stone-200">
                <h2 className="md:col-span-3 font-serif text-2xl text-stone-900">{d.day}</h2>
                <ul className="md:col-span-9 divide-y divide-stone-100">
                  {d.slots.map((slot) => (
                    <li key={slot.time + slot.level} className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[6rem_1fr_9rem] gap-x-4 gap-y-1 py-3 text-sm">
                      <span className="font-medium text-stone-900 tabular-nums">{slot.time}</span>
                      <span className="text-stone-700">
                        <span className="text-[#9E2A5E] font-semibold">{slot.program}</span>
                        <span className="text-stone-500"> · {slot.level}</span>
                      </span>
                      <span className="col-start-2 sm:col-start-auto text-stone-400 sm:text-right">{slot.studio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl bg-white border border-stone-200/80">
            <p className="text-stone-600 text-base max-w-lg">Want to try a class first? Your first class in any program is free.</p>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-[#9E2A5E] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#86234f] transition-colors"
            >
              Book a Trial Class
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
