import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar as CalendarIcon, Info, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  {
    src: "/assets/hero-1.webp",
    alt: "Placeholder 1",
    category: "Design",
    title: "Simple by Nature",
  },
  {
    src: "/assets/hero-2.webp",
    alt: "Placeholder 2",
    category: "Experience",
    title: "Modern by Design",
  },
  {
    src: "/assets/hero-3.webp",
    alt: "Placeholder 3",
    category: "Craft",
    title: "Thoughtfully Crafted",
  },
];

const featuredPrograms = [
  {
    id: 'service-1',
    title: 'Service One',
    description: 'A placeholder description for your first primary service or feature.',
    image: '/assets/hero-1.webp', // Add image path (e.g., "/logo.jpg" or "https://...") or image URL here
    link: '/programs',
  },
  {
    id: 'service-2',
    title: 'Service Two',
    description: 'A placeholder description for your second primary service or feature.',
    image: '/assets/hero-2.webp', // Add image path here
    link: '/programs',
  },
  {
    id: 'service-3',
    title: 'Service Three',
    description: 'A placeholder description for your third primary service or feature.',
    image: '/assets/hero-3.webp', // Add image path here
    link: '/programs',
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
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden bg-[#FDFCFB]">
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
              <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-4">Welcome to Sora</p>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-stone-900 leading-[0.98] tracking-tight mb-6">
                Simple by Nature. <br className="hidden sm:block"/> <span className="italic font-light text-stone-400">Modern by Design.</span>
              </h1>
              <p className="text-stone-500 text-base leading-relaxed max-w-xl">
                Thoughtfully crafted experiences designed around simplicity, purpose, and connection. Every detail is created with intention to deliver a refined and memorable experience.
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
                <span className="font-bold text-stone-800 uppercase tracking-widest text-[10px] mb-2">2 New Locations</span>
                <span className="text-center">20642 Matteson - inside Matteson Community Center</span>
                <span className="text-center mt-1">4450 Oakwood Ave - inside Oakwood Rec Center</span>
             </div>
             <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-3xl border border-stone-200/50">
                <CalendarIcon className="mb-3 text-stone-400" size={24} />
                <span className="font-bold text-stone-800 uppercase tracking-widest text-[10px] mb-2">2026-2027 Season</span>
                <span className="text-center">Begins September 12th</span>
                <span className="text-center mt-1 font-medium text-stone-900">25 Classes Per Week</span>
             </div>
             <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-3xl border border-stone-200/50">
                <Info className="mb-3 text-stone-400" size={24} />
                <span className="font-bold text-stone-800 uppercase tracking-widest text-[10px] mb-2">Enrollment</span>
                <span className="text-center">Open Enrollment</span>
                <span className="text-center mt-1 font-medium text-stone-900">Join Anytime</span>
             </div>
          </div>

          <div className="text-sm text-stone-500 max-w-3xl mx-auto leading-relaxed mb-12 space-y-6 text-left md:text-center">
            <p>
              Thoughtfully crafted experiences designed around simplicity, purpose, and connection. Every detail is created with intention to deliver a refined and memorable experience.
            </p>
            <p>
              We believe that simplicity is the ultimate sophistication. Our approach focuses on delivering seamless and modern designs that resonate with your audience.
            </p>
            <p>
              Explore our curated collections and discover a world where every detail is created with intention. Join us on a journey to redefine modern experiences.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/programs" 
              className="px-8 py-4 border border-stone-200 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto text-stone-900 text-center"
            >
              Click on class to view location
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FEATURED PROGRAMS */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-4">Discover</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Featured Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <div key={program.id} className="p-8 rounded-3xl bg-stone-50 border border-stone-100 flex flex-col items-start group">
                <div className="w-14 h-14 rounded-2xl bg-stone-100 border border-stone-200 mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                  {program.image ? (
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-stone-300/80" />
                  )}
                </div>
                <h3 className="font-serif text-2xl mb-3">{program.title}</h3>
                <p className="text-sm text-stone-500 mb-6">{program.description}</p>
                <Link to={program.link} className="text-xs font-bold uppercase tracking-widest text-[#9E2A5E] mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Program <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-4">Voices</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-16">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-stone-50 rounded-[2rem]">
              <div className="flex gap-1 text-[#E22D6E] mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-sm text-stone-600 italic mb-6">"Sora has been a second home for my daughter. The instructors are phenomenal and truly care about the students' growth."</p>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-900">- Client Placeholder</p>
            </div>
            <div className="p-8 bg-stone-50 rounded-[2rem]">
              <div className="flex gap-1 text-[#E22D6E] mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-sm text-stone-600 italic mb-6">"An incredible community. Their dedication to simplicity and purpose is evident in every interaction we have had."</p>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-900">- Partner Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#9E2A5E] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Ready to take the stage?</h2>
          <p className="text-white/80 text-sm mb-10 max-w-xl mx-auto">Join our community and discover your potential. Enrollment is open year-round.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <Link to="/contact" className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              Inquire
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
