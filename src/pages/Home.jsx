import { Typewriter } from 'react-simple-typewriter';
import { USER_DATA } from '../data/portfolioData';
import { FiArrowRight, FiGithub, FiDownload } from 'react-icons/fi';

export default function Home() {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center gap-12 pt-10">
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 vision-glass text-indigo-400 font-medium text-sm rounded-full shadow-lg">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for Internships
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
          Hi, I'm Areeb <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            <Typewriter 
              words={['Software Engineer.', 'Full Stack Dev.', 'Problem Solver.']} 
              loop cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}
            />
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
          {USER_DATA.about}
        </p>
        
        <div className="flex flex-wrap gap-4 pt-6">
          <a href="#projects" className="vision-glass px-8 py-4 bg-indigo-600/10 border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center gap-2 group">
            View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          {/* Target _blank used to fix IDM issue */}
          <a href="/Areeb_Ahmed_ATS_CV.pdf" target="_blank" rel="noopener noreferrer" className="vision-glass px-8 py-4 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
            <FiDownload /> View Resume
          </a>
          
          <a href="https://github.com/areebxahmed" target="_blank" rel="noopener noreferrer" className="vision-glass px-8 py-4 hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}