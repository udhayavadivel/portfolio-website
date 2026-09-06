'use client';

import { motion } from 'framer-motion';
import { about } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">
            About Me
          </h2>
          <div className="w-20 h-1 bg-neon-cyan shadow-[0_0_10px_#00f5ff] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 relative h-full flex flex-col justify-center items-center overflow-hidden">
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl bg-gradient-to-br from-neon-cyan/30 via-transparent to-neon-purple/30 [mask-composite:exclude] [mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] p-[2px] opacity-50 pointer-events-none"></div>
              
              <div className="text-left w-full bg-dark-800/80 p-6 rounded-xl border border-white/5 font-mono text-sm text-gray-300">
                <p><span className="text-neon-purple">import</span> <span className="text-neon-cyan">&#123; Developer &#125;</span> <span className="text-neon-purple">from</span> <span className="text-green-400">'@me/core'</span>;</p>
                <br/>
                <p><span className="text-neon-purple">const</span> <span className="text-neon-cyan">profile</span> <span className="text-white">=</span> <span className="text-neon-blue">new</span> <span className="text-neon-cyan">Developer</span>(&#123;</p>
                <p className="ml-4">name: <span className="text-green-400">'AI & Full Stack Engineer'</span>,</p>
                <p className="ml-4">passion: <span className="text-green-400">'Building intelligent scalable systems'</span>,</p>
                <p className="ml-4">coffeeLevel: <span className="text-orange-400">100</span>,</p>
                <p className="ml-4">status: <span className="text-green-400">'Ready for new challenges'</span></p>
                <p>&#125;);</p>
                <br/>
                <p><span className="text-neon-cyan">profile</span>.<span className="text-blue-400">execute</span>();</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {about.description.map((desc: string, i: number) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="text-gray-300 dark:text-gray-300 text-lg leading-relaxed mb-4"
                >
                  {desc}
                </motion.p>
              ))}

              <div className="grid grid-cols-2 gap-4 mt-8">
                {about.stats.map((stat: any, index: number) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    className="glass rounded-xl p-6 text-center hover:shadow-[0_0_15px_rgba(0,245,255,0.15)] transition-shadow"
                  >
                    <div className="text-3xl font-display font-bold text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
