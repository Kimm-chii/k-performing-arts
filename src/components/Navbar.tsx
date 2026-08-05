import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === path) {
      navigate(path, { replace: true, state: { key: Date.now() } });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <nav className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-full px-6 py-3 flex items-center justify-between relative">
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center gap-4 group"
          >
            <div className="flex items-center gap-3">
               <img 
                 src="/logo.jpg" 
                 alt="Sora Logo" 
                 className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-300" 
               />
               <div className="flex flex-col">
                 <span className="font-sans font-medium text-[20px] md:text-[24px] tracking-[0.12em] text-[#9E2A5E] leading-none mb-1">SORA</span>
                 <div className="w-full h-[1.5px] bg-[#9E2A5E] mb-1"></div>
                 <span className="text-[5.5px] md:text-[7px] uppercase tracking-[0.12em] font-medium text-gray-900 leading-none">Simple by Nature. Modern by Design.</span>
               </div>
            </div>
          </Link>

          {/* Centered Capsule Navigation (Desktop) */}
          <div className="hidden md:flex bg-stone-100/50 rounded-full px-2 py-1 gap-1 border border-stone-200/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm ${
                  location.pathname === link.path
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="hidden sm:flex px-6 py-2 bg-[#9E2A5E] text-white rounded-full text-xs font-bold tracking-wide hover:bg-[#7a2048] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-[#9E2A5E]/20"
            >
              Inquire Now
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full bg-stone-100 text-stone-900 hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-sm"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="absolute top-[110%] left-0 right-0 bg-white/95 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-xl overflow-hidden flex flex-col md:hidden py-4 px-4 z-40"
            >
              <div className="flex flex-col gap-1 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`text-sm font-medium py-3 px-4 rounded-xl transition-colors ${
                      location.pathname === link.path ? 'bg-stone-100 text-stone-900' : 'text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px w-full bg-stone-100 my-2"></div>
                <a
                  href="/contact"
                  onClick={(e) => handleNavClick(e, '/contact')}
                  className="mx-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#9E2A5E] text-white text-xs font-bold uppercase tracking-widest w-full transition-all duration-300 shadow-md"
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
