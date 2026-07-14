import { motion } from 'framer-motion';
import { USER_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-10 max-w-4xl mx-auto w-full">
      
      {/* 1. Tech Stack & Skills Section */}
      <div className="mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Tech <span className="text-indigo-500">Stack</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {USER_DATA.skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-3 vision-glass border border-white/10 hover:border-indigo-500 hover:text-indigo-400 transition-colors rounded-full font-medium text-sm md:text-base cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* 2. Experience Timeline */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Experience & <span className="text-indigo-500">Education</span>
      </motion.h2>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-500 before:to-transparent">
        {USER_DATA.experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-50 dark:border-[#050505] bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] vision-glass p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex flex-col mb-2">
                <span className="text-indigo-400 font-medium text-sm">{exp.duration}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">{exp.company}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}