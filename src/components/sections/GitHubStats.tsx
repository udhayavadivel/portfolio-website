'use client';

import { motion } from 'framer-motion';
import { githubStats } from '@/data/portfolio';
import { FaGithub } from 'react-icons/fa';

export default function GitHubStats() {
  return (
    <section id="github" className="py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden group hover:border-neon-cyan/30 transition-colors duration-500"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px] -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px] -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-20 h-20 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
                <FaGithub className="text-5xl text-white group-hover:text-neon-cyan transition-colors duration-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                GitHub Activity
              </h2>
              <p className="text-gray-400 font-mono text-sm bg-dark-900/80 px-4 py-1.5 rounded-full inline-block mt-2 border border-white/5">
                @{githubStats.username}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Total Repositories', value: githubStats.repos },
                { label: 'Total Contributions', value: githubStats.contributions },
                { label: 'Followers', value: githubStats.followers },
                { label: 'Total Stars', value: githubStats.stars }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="bg-dark-800/50 rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:bg-dark-800 transition-all text-center flex flex-col justify-center items-center h-full"
                >
                  <span className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
