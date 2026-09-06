'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/portfolio';
import { FaBrain } from 'react-icons/fa';
import { HiCode, HiSparkles } from 'react-icons/hi';

const getIcon = (name: string) => {
  switch (name) {
    case 'brain': return <FaBrain className="w-6 h-6 text-white" />;
    case 'sparkles': return <HiSparkles className="w-6 h-6 text-white" />;
    case 'code':
    default: return <HiCode className="w-6 h-6 text-white" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-neon-cyan shadow-[0_0_10px_#00f5ff] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category: any, catIndex: number) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-8 hover:shadow-[0_0_20px_rgba(0,245,255,0.1)] transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center shadow-lg">
                {getIcon(category.icon)}
              </div>
              <h3 className="text-xl font-display font-semibold text-white mt-4 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill: any, skillIndex: number) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-neon-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-dark-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                        className="h-full bg-neon-cyan shadow-[0_0_10px_#00f5ff] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
