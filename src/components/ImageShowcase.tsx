import { motion } from 'motion/react';

export interface ShowcaseImage {
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

interface ImageShowcaseProps {
  sectionTitle?: string;
  subtitle?: string;
  description?: string;
  images: ShowcaseImage[];
  columns?: 2 | 3 | 4;
}

export default function ImageShowcase({
  sectionTitle = "Gallery Showcase",
  subtitle = "Sora Highlights",
  description,
  images,
  columns = 3,
}: ImageShowcaseProps) {
  const gridColsClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className="py-16 md:py-24 px-6 bg-[#FDFCFB] border-t border-stone-100">
      <div className="max-w-6xl mx-auto">
        {(subtitle || sectionTitle || description) && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            {subtitle && (
              <p className="text-[11px] uppercase tracking-[0.35em] font-bold text-stone-400 mb-3">
                {subtitle}
              </p>
            )}
            {sectionTitle && (
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
                {sectionTitle}
              </h2>
            )}
            {description && (
              <p className="text-sm text-stone-500 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        <div className={`grid ${gridColsClass} gap-6`}>
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-sm aspect-[4/3] flex flex-col justify-end"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="relative p-6 z-10 text-white">
                {item.category && (
                  <span className="text-[10px] uppercase font-bold tracking-widest text-rose-300 mb-1 block">
                    {item.category}
                  </span>
                )}
                {item.title && (
                  <h3 className="font-serif text-base font-medium text-white leading-snug">
                    {item.title}
                  </h3>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
