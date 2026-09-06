'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio';
import { FaCalendarAlt } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">
            Experience
          </h2>
          <div className="w-20 h-1 bg-neon-cyan shadow-[0_0_10px_#00f5ff] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp: any, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center w-full">
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_10px_#00f5ff] transform -translate-x-1/2 z-10 flex items-center justify-center"></div>
                  
                  {/* Content wrapper */}
                  <div className={`ml-20 md:ml-0 w-full flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className={`glass rounded-2xl p-6 w-full md:w-[45%] relative`}
                    >
                      <h3 className="text-xl font-display font-semibold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-neon-cyan text-sm mt-1">{exp.company}</div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                        <FaCalendarAlt />
                        <span>{exp.period}</span>
                      </div>
                      <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400 text-sm">
                        {exp.description.map((point: string, i: number) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {(exp.technologies || exp.tech || []).map((tech: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
