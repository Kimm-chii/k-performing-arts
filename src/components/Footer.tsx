import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (location.pathname === path) {
      navigate(path, { replace: true, state: { key: Date.now() } });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <footer className="bg-[#FDFCFB] border-t border-stone-200/50 pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <a 
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className="inline-flex items-center gap-3 mb-4 group transform hover:-translate-y-1 transition-all duration-300"
            >
               <img 
                 src="/logo.jpg" 
                 alt="Sora Logo" 
                 className="w-8 h-8 flex-shrink-0 object-cover rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300" 
               />
               <div className="flex flex-col">
                 <span className="font-sans font-bold text-[18px] tracking-[0.12em] text-[#9E2A5E] leading-none mb-1">SORA</span>
                 <div className="w-full h-[1px] bg-[#9E2A5E] mb-1"></div>
                 <span className="text-[5.5px] uppercase tracking-[0.12em] font-medium text-gray-900 leading-none">Simple by Nature. Modern by Design.</span>
               </div>
            </a>
            <p className="text-stone-500 text-xs max-w-sm leading-relaxed mb-4">
              Thoughtfully crafted experiences designed around simplicity, purpose, and connection. Every detail is created with intention to deliver a refined and memorable experience.
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-4">Explore</p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-stone-600">
              <li><a href="/" onClick={(e) => handleNavClick(e, '/')} className="text-xs hover:text-stone-900 transition-colors">Home</a></li>
              <li><a href="/about" onClick={(e) => handleNavClick(e, '/about')} className="text-xs hover:text-stone-900 transition-colors">About</a></li>
              <li><a href="/programs" onClick={(e) => handleNavClick(e, '/programs')} className="text-xs hover:text-stone-900 transition-colors">Programs</a></li>
              <li><a href="/schedule" onClick={(e) => handleNavClick(e, '/schedule')} className="text-xs hover:text-stone-900 transition-colors">Schedule</a></li>
              <li><a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="text-xs hover:text-stone-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-4">Connect</p>
            <ul className="space-y-2 text-stone-600">
              <li>
                <a href="#" className="text-xs hover:text-stone-900 transition-colors flex items-center gap-1 group">
                  [Website Link] <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all">↗</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:text-stone-900 transition-colors flex items-center gap-1 group">
                  [Instagram] <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all">↗</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:text-stone-900 transition-colors flex items-center gap-1 group">
                  [Facebook] <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all">↗</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:text-stone-900 transition-colors flex items-center gap-1 group">
                  [YouTube] <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200/50 pt-6 flex flex-col md:flex-row items-center justify-between text-[10px] text-stone-500 gap-4">
          <div className="flex gap-4">
             <Link to="#" className="hover:text-stone-900 transition-colors">[Privacy Policy]</Link>
             <Link to="#" className="hover:text-stone-900 transition-colors">[Terms of Service]</Link>
          </div>
          <p className="text-center md:text-left text-stone-400 max-w-xl text-[9px] leading-relaxed">
            This website is an unofficial design concept created for demonstration purposes. All trademarks, logos, and business information belong to their respective owners.
          </p>
          <div className="text-center md:text-right flex-shrink-0">
             <p className="font-bold text-stone-400 uppercase tracking-widest mb-0.5">Sora</p>
             <p>[Year] © All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
