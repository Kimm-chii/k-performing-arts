import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar as CalendarIcon, Info, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { studio, programs, schedule, firstSteps } from '../data/studio';

const classesPerWeek = schedule.reduce((n, d) => n + d.slots.length, 0);

const heroImages = [
  {
    src: "/assets/hero-1.webp",
    alt: "A dancer in a long skirt turning under warm stage lights",
    category: "Dance",
    title: "Contemporary Program",
  },
  {
    src: "/assets/hero-2.webp",
    alt: "A full concert hall with blue stage lights and a crowd",
    category: "Performance",
    title: "End of Term Showcase",
  },
  {
    src: "/assets/hero-3.webp",
    alt: "A ballet dancer reaching up into a beam of light",
    category: "Dance",
    title: "Ballet Foundations",
  },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeHero = heroImages[heroIndex];

  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[calc(var(--sh,1vh)*90)] flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden bg-[#FDFCFB]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-stone-200/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-stone-100/40 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto mt-12 w-full"
        >
          {/* Main Hero Header + Image Card Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 text-left">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-4">Sora Performing Arts</p>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-stone-900 leading-[0.98] tracking-tight mb-6">
                Move, speak, perform. <br className="hidden sm:block"/> <span className="italic font-light text-stone-400">At your own pace.</span>
              </h1>
              <p className="text-stone-500 text-base leading-relaxed max-w-xl">
                A performing arts studio for kids, teens and adults. Small classes in dance, acting, modeling and etiquette, across two studios in the city.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={heroIndex}
                    src={activeHero.src} 
                    alt={activeHero.alt} 
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex items-end justify-between">
                  <div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={heroIndex}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="text-[10px] uppercase font-bold tracking-widest text-rose-300 block mb-0.5">
                          {activeHero.category}
                        </span>
                        <p className="font-serif text-sm font-medium">
                          {activeHero.title}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Dot Nav Indicators */}
                  <div className="flex gap-1.5 pb-1 z-20">
                    {heroImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setHeroIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === heroIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-stone-600 text-sm">
             <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-3xl border border-stone-200/50">
                <MapPin className="mb-3 text-stone-400" size={24} />
                <span className="font-bold text-stone-800 uppercase tracking-widest text-[10px] mb-2">Two Studios</span>
                {studio.locations.map((loc) => (
                  <span key={loc.name} className="text-center mt-1 first-of-type:mt-0">{loc.address}</span>
                ))}
             </div>
             <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-3xl border border-stone-200/50">
                <CalendarIcon className="mb-3 text-stone-400" size={24} />
                <span className="font-bold text-stone-800 uppercase tracking-widest text-[10px] mb-2">{studio.season}</span>
                <span className="text-center">{studio.seasonStart}</span>
                <span className="text-center mt-1 font-medium text-stone-900">{classesPerWeek} classes a week, six days</span>
             </div>
             <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-3xl border border-stone-200/50">
                <Info className="mb-3 text-stone-400" size={24} />
                <span className="font-bold text-stone-800 uppercase tracking-widest text-[10px] mb-2">Enrollment</span>
                <span className="text-center">Open all season</span>
                <span className="text-center mt-1 font-medium text-stone-900">First class is free</span>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/programs" 
              className="px-8 py-4 border border-stone-200 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto text-stone-900 text-center"
            >
              View Programs
            </Link>
          </div>
        </motion.div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-4">Programs</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Four ways to find your stage</h2>
            <p className="text-stone-500 text-base max-w-xl mx-auto leading-relaxed">Every program runs in ten-week terms, with levels from first class to advanced.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
            {programs.map((program, i) => (
              <Link
                key={program.id}
                to={`/programs#${program.id}`}
                className="bg-stone-50 hover:bg-white p-8 flex flex-col items-start group transition-colors"
              >
                <span className="text-[11px] font-bold tracking-[0.3em] text-[#9E2A5E] mb-6">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-2xl mb-1">{program.title}</h3>
                <p className="text-[11px] uppercase tracking-widest text-stone-400 mb-4">{program.ages}</p>
                <p className="text-sm text-stone-500 leading-relaxed mb-6">{program.summary}</p>
                <span className="text-xs font-bold uppercase tracking-widest text-[#9E2A5E] mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Program <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FIRST CLASS */}
      <section className="py-24 md:py-32 px-6 bg-[#FDFCFB] border-t border-stone-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-4">New Here</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">Your first class</h2>
          </div>
          <ol className="lg:col-span-8 border-t border-stone-200">
            {firstSteps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-4 py-6 border-b border-stone-200">
                <span className="font-serif text-2xl text-[#9E2A5E]">{i + 1}</span>
                <div>
                  <h3 className="font-serif text-xl text-stone-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#9E2A5E] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Ready to take the stage?</h2>
          <p className="text-white/80 text-base mb-10 max-w-xl mx-auto">Book a free trial class in any program. We will help you find the right level.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <Link to="/contact" className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              Book a Trial Class
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
