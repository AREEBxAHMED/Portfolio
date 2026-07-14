import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 vision-glass px-8 py-4 flex items-center justify-between w-[95%] max-w-4xl shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
      <a href="#home" className="font-bold text-2xl tracking-tight">
        Areeb Ahmed<span className="text-indigo-500">.</span>
      </a>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#home" className="hover:text-white transition-colors">Home</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      <button onClick={toggleTheme} className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white">
        {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
      </button>
    </nav>
  );
}