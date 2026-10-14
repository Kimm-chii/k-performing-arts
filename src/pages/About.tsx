import { motion } from 'motion/react';
import ImageShowcase from '../components/ImageShowcase';

export default function About() {
  return (
    <main className="w-full pt-32 pb-20">
      {/* ABOUT US */}
      <section className="py-20 px-6 bg-[#FDFCFB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-4">Our History</p>
            <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-[0.95] tracking-tight mb-8">
              About Sora
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6 text-stone-500 text-sm leading-relaxed">
                <p>
                  Sora started as one room and a borrowed sound system: a place where kids could dance after school without feeling judged. Today it is two studios, four programs and a showcase at the end of every term.
                </p>
                <p>
                  Classes stay small on purpose. Teachers learn every student's name, levels are flexible, and nobody has to be "good" before they start. We care more about confidence than perfection.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[48px] overflow-hidden group border border-stone-200/50 shadow-inner">
               <div className="absolute inset-0 bg-stone-100"></div>
               <img 
                 src="/assets/hero-3.webp" 
                 alt="A ballet dancer reaching up into a beam of light" 
                 className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
               />
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVE & MISSION SECTION */}
      <section className="py-24 px-6 bg-stone-100/30">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <div>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-6 block">Our Vision</span>
            <p className="font-serif text-2xl text-stone-800 leading-snug">
              To create an inspiring space where creativity, movement, and artistic expression can thrive. We aim to build a welcoming community that encourages individuals of all ages to grow in confidence, discipline, and passion through the performing arts.
            </p>
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-6 block">Our Mission</span>
            <p className="font-serif text-2xl text-stone-800 leading-snug mb-6">
              To inspire creativity through movement, performance, and artistic education while fostering confidence, discipline, and meaningful community connections.
            </p>
            <p className="text-sm text-stone-500 mb-4">Our Focus</p>
            <ul className="space-y-2 text-sm text-stone-600 font-medium">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span> Performing Arts </li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span> Dance & Movement Education</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span> Community Engagement</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* HERITAGE SHOWCASE */}
      <ImageShowcase 
        subtitle="Studio Life"
        sectionTitle="Sora in Action"
        description="Rehearsals, classes and the showcase that closes every term."
        columns={3}
        images={[
          { src: "/assets/hero-1.webp", alt: "A dancer in a long skirt turning under warm stage lights", title: "Contemporary Rehearsal", category: "Dance" },
          { src: "/assets/hero-2.webp", alt: "A full concert hall with blue stage lights and a crowd", title: "End of Term Showcase", category: "Performance" },
          { src: "/assets/hero-3.webp", alt: "A ballet dancer reaching up into a beam of light", title: "Ballet Foundations", category: "Dance" },
        ]}
      />
    </main>
  );
}
