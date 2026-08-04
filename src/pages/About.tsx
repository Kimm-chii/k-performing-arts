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
                  Sora is dedicated to thoughtfully crafted experiences designed around simplicity, purpose, and connection. Every detail is created with intention to deliver a refined and memorable experience. We focus on modern design principles to provide an elegant aesthetic and seamless functionality.
                </p>
                <p>
                  Our journey began with a simple idea: to bring beauty and simplicity into everyday experiences. Over the years, we have refined our approach, partnering with forward-thinking creators and visionaries to establish a standard of excellence and modern design.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[48px] overflow-hidden group border border-stone-200/50 shadow-inner">
               <div className="absolute inset-0 bg-stone-100"></div>
               <img 
                 src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Performance" 
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
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-6 block">Our Objective</span>
            <p className="font-serif text-2xl text-stone-800 leading-snug">
              To establish and maintain a cultural enrichment and performing arts school in Chicago and surrounding Suburbs; to finance, direct and produce productions that will enhance, strengthen and support the children of communities served.
            </p>
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-6 block">Our Mission</span>
            <p className="font-serif text-2xl text-stone-800 leading-snug mb-6">
              To create and develop new and enriching productions; and to offer children an understanding of the value of their existence by using fine arts to provide a cultural education.
            </p>
            <p className="text-sm text-stone-500 mb-4">In fulfilling our mission we seek to enrich the world community through the following program areas:</p>
            <ul className="space-y-2 text-sm text-stone-600 font-medium">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span> The Arts</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span> Service to Youth</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span> Service to Community</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* HERITAGE SHOWCASE */}
      <ImageShowcase 
        subtitle="Our Heritage"
        sectionTitle="Sora in Action"
        description="Over four decades of artistic excellence, performances, and student development."
        columns={3}
        images={[
          { src: "https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+1", alt: "Historic Performance", title: "Cultural Enrichment", category: "History" },
          { src: "https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+2", alt: "Oprah Show Appearance", title: "National Recognition", category: "Milestones" },
          { src: "https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+3", alt: "Disney Performance", title: "Disney Award Showcase", category: "Awards" },
        ]}
      />
    </main>
  );
}
