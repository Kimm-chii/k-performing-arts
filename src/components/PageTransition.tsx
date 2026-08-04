import { motion } from 'motion/react';
import { ReactNode, useEffect } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  // Scroll to top when this new page mounts, which happens AFTER the old page exits
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
