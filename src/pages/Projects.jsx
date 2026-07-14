import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const allProjects = [
  {
    id: 1,
    title: "Distributed RSA Prime Miner",
    category: "Java",
    desc: "Parallel computing system built for prime number mining using Java and MPI.",
    link: "#"
  },
  {
    id: 2,
    title: "Murghi Simulator",
    category: "Python",
    desc: "Interactive game project focused on complex logic and Human-Computer Interaction principles.",
    link: "#"
  },
  {
    id: 3,
    title: "Baynam Store Platform",
    category: "Web",
    desc: "E-commerce interface and automated inventory management structure for an online retail business.",
    link: "#"
  },
  {
    id: 4,
    title: "Fusion Arcade",
    category: "Web",
    desc: "Gaming zone concept featuring interactive browser-based games like Quiz and Ball Blitz.",
    link: "https://areebxahmed.github.io/PROJECT-WEBSITE-/"
  },
  {
    id: 5,
    title: "Web OS Simulator",
    category: "Web",
    desc: "Browser-based operating system simulator demonstrating core OS concepts.",
    link: "#"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="min-h-screen py-10 max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-indigo-500">Work</span></h2>
          <p className="text-gray-400">A collection of my academic, freelance, and personal projects.</p>
        </div>
        
        <div className="flex gap-2 p-1 vision-glass rounded-full w-fit">
          {['All', 'Web', 'Java', 'Python'].map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-indigo-500 text-white shadow-lg' : 'hover:bg-white/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="vision-glass p-6 group flex flex-col justify-between h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
              </div>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto border-t border-white/10 pt-4">
                <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-indigo-500 rounded-full transition-colors text-white">
                  <FiExternalLink size={20} />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-white/20 rounded-full transition-colors text-white">
                  <FiGithub size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}