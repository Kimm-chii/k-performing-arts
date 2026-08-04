import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageShowcase, { ShowcaseImage } from '../components/ImageShowcase';

interface PlaceholderPageProps {
  title: string;
}

const pageConfigs: Record<string, { subtitle: string; description: string; images: ShowcaseImage[] }> = {
  Programs: {
    subtitle: "Our Programs",
    description: "Explore our comprehensive range of programs designed for all levels.",
    images: [
      { src: "https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+1", alt: "Program 1", title: "Program 1", category: "Category A" },
      { src: "https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+2", alt: "Program 2", title: "Program 2", category: "Category B" },
      { src: "https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+3", alt: "Program 3", title: "Program 3", category: "Category C" },
      { src: "https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+4", alt: "Program 4", title: "Program 4", category: "Category D" },
    ],
  },
  Schedule: {
    subtitle: "Timetable & Calendar",
    description: "Weekly schedule and upcoming sessions.",
    images: [
      { src: "https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+1", alt: "Schedule 1", title: "Weekly Timetable", category: "Schedule" },
      { src: "https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+2", alt: "Schedule 2", title: "Sessions", category: "Sessions" },
      { src: "https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+3", alt: "Schedule 3", title: "Masterclasses", category: "Masterclasses" },
    ],
  },
};

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  const config = pageConfigs[title] || {
    subtitle: "Explore Sora",
    description: `Learn more about our ${title} offerings and studio opportunities.`,
    images: [
      { src: "https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+1", alt: title, title: `${title} Showcase`, category: title },
      { src: "https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+2", alt: title, title: `${title} Highlights`, category: title },
    ],
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#FAFAFA]">
      <section className="px-6 text-center max-w-3xl mx-auto py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 bg-rose-50 text-[#9E2A5E] rounded-full flex items-center justify-center mx-auto mb-6 border border-rose-100 shadow-sm">
            <span className="font-serif text-2xl font-bold">F</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.35em] font-bold text-stone-400 mb-3">
            {config.subtitle}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-6">{title}</h1>
          <p className="text-stone-500 text-base md:text-lg leading-relaxed mb-8">
            {config.description}
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-stone-800 text-xs font-bold uppercase tracking-widest border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors shadow-sm"
          >
            <ArrowLeft size={16} /> Return Home
          </Link>
        </motion.div>
      </section>

      {/* IMAGE SHOWCASE GALLERY */}
      {title !== 'Schedule' && title !== 'Register' && (
        <ImageShowcase 
          sectionTitle={`${title} Gallery`}
          subtitle="Visual Highlights"
          description={`A look at our ${title.toLowerCase()} moments across our two fully-equipped studios.`}
          images={config.images}
          columns={config.images.length === 4 ? 4 : 3}
        />
      )}
    </main>
  );
}

