import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import Schedule from './pages/Schedule';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();
  const routeKey = location.pathname + (location.state?.key || '');
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={routeKey}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/programs" element={<PageTransition><Programs /></PageTransition>} />
        <Route path="/schedule" element={<PageTransition><Schedule /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-[calc(var(--sh,1vh)*100)] flex flex-col bg-[#FAFAFA] text-[#1A1A1A] font-sans selection:bg-[#9E2A5E]/20 overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
