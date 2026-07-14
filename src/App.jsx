import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { FiArrowUp } from 'react-icons/fi';
import './styles/index.css';

export default function App() {
  // Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Back To Top Button Logic
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <ThemeProvider>
      <CustomCursor />
      
      {/* Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 origin-left z-[100]" 
        style={{ scaleX }} 
      />

      <div className="relative min-h-screen overflow-x-hidden">
        {/* Animated Background Blobs */}
        <div className="fixed top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob pointer-events-none z-0"></div>
        <div className="fixed top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000 pointer-events-none z-0"></div>
        
        <Navbar />
        
        <main className="pt-32 px-6 max-w-6xl mx-auto flex flex-col gap-32 pb-32 relative z-10">
          <Home />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Areeb Ahmed. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS & Framer Motion.</p>
        </footer>

        {/* Floating Back to Top Button */}
        <AnimatePresence>
          {showTopBtn && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-4 bg-indigo-600/80 backdrop-blur-md text-white rounded-full shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:bg-indigo-500 transition-colors z-50 focus:outline-none border border-white/20"
            >
              <FiArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}