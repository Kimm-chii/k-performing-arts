import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { programs } from '../data/studio';

export default function Programs() {
  const location = useLocation();

  // Jump to a program when arriving from a home page card (/programs#dance)
  useEffect(() => {
    if (!location.hash) return;
    const t = setTimeout(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <main className="w-full pt-32 pb-20 bg-[#FDFCFB]">
      <section className="px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-4">Programs</p>
            <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-[0.95] tracking-tight mb-6">
              Find your <span className="italic font-light text-stone-400">stage.</span>
            </h1>
            <p className="text-stone-500 text-base leading-relaxed max-w-xl">
              Four programs, each taught in small groups and ten-week terms. Not sure where to start? Book a free trial class and we will help you choose.
            </p>
          </div>
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-stone-200/80 aspect-[4/3]">
            <img
              src="/assets/hero-1.webp"
              alt="A dancer in a long skirt turning under warm stage lights"
              width={1920}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto border-t border-stone-200">
          {programs.map((program, i) => (
            <article
              key={program.id}
              id={program.id}
              className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-12 border-b border-stone-200"
            >
              <div className="lg:col-span-4">
                <span className="text-[11px] font-bold tracking-[0.3em] text-[#9E2A5E]">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="font-serif text-4xl text-stone-900 mt-2 mb-4">{program.title}</h2>
                <dl className="text-sm text-stone-600 space-y-1.5">
                  <div className="flex gap-3"><dt className="w-16 text-stone-400">Ages</dt><dd>{program.ages}</dd></div>
                  <div className="flex gap-3"><dt className="w-16 text-stone-400">Levels</dt><dd>{program.levels}</dd></div>
                  <div className="flex gap-3"><dt className="w-16 text-stone-400">Class</dt><dd>{program.length}</dd></div>
                </dl>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl">{program.summary}</p>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-stone-400 mb-3">What you will learn</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {program.learn.map((item) => (
                      <li key={item} className="text-sm text-stone-700 bg-white border border-stone-200/80 rounded-xl px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/schedule"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#9E2A5E] hover:gap-2 transition-all"
                >
                  See class times <ChevronRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
