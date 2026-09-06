'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '@/data/portfolio';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Data Analytics':
        return 'from-cyan-500 to-blue-500 text-neon-cyan';
      case 'Data Science':
        return 'from-blue-500 to-purple-500 text-neon-blue';
      case 'Generative AI':
        return 'from-purple-500 to-pink-500 text-neon-purple';
      default:
        return 'from-gray-500 to-gray-700 text-gray-300';
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Data Analytics':
        return 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20';
      case 'Data Science':
        return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
      case 'Generative AI':
        return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border border-gray-500/20';
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold inline-block"
          >
            <span className="text-gradient">Featured Projects</span>
            <div className="h-1 w-full bg-gradient-to-r from-neon-cyan via-neon-purple to-transparent mt-2 rounded-full" />
          </motion.h2>
        </div>

        <div className="flex gap-2 justify-center mt-8 flex-wrap">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
                activeCategory === category
                  ? 'bg-neon-cyan text-dark-900 shadow-[0_0_15px_rgba(0,245,255,0.5)]'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id || project.title}
                className="glass rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(0,245,255,0.15)] hover:-translate-y-1 transition-all duration-300 relative"
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-neon-purple/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)] flex items-center gap-1 backdrop-blur-md">
                    <FaStar className="w-3 h-3" /> Featured
                  </div>
                )}
                
                <div
                  className={`h-48 bg-gradient-to-br ${getCategoryColor(
                    project.category
                  )} opacity-80 group-hover:opacity-100 flex items-center justify-center transition-all duration-500`}
                >
                   <span className="text-5xl font-display font-bold text-white/50 group-hover:scale-110 transition-transform duration-500 mix-blend-overlay">
                      {project.title.substring(0, 2).toUpperCase()}
                   </span>
                </div>

                <div className="p-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getCategoryBadgeColor(
                      project.category
                    )}`}
                  >
                    {project.category}
                  </span>
                  
                  <h3 className="text-xl font-display font-semibold text-white mt-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mt-3 line-clamp-3 min-h-[60px]">
                    {project.description}
                  </p>
                  
                  {(() => {
                    const techList = project.technologies || project.tech || [];
                    return (
                      <div className="flex flex-wrap gap-2 mt-5">
                        {techList.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-md text-xs bg-dark-700/50 text-gray-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {techList.length > 4 && (
                          <span className="px-2 py-1 rounded-md text-xs bg-dark-700/50 text-gray-500 border border-white/5">
                            +{techList.length - 4} more
                          </span>
                        )}
                      </div>
                    );
                  })()}
                  
                  <div className="flex gap-4 mt-6 pt-4 border-t border-white/10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-neon-cyan transition-colors"
                      >
                        <FaGithub className="text-lg" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-neon-purple transition-colors ml-auto"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
