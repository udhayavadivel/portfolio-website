'use client';

import { motion } from 'framer-motion';
import { certifications } from '@/data/portfolio';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold inline-block"
          >
            <span className="text-gradient">Certifications</span>
            <div className="h-1 w-full bg-gradient-to-r from-neon-purple via-neon-cyan to-transparent mt-2 rounded-full" />
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id || cert.title || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <div className="w-12 h-12 rounded-xl bg-neon-purple/20 text-neon-purple flex items-center justify-center mb-4 border border-neon-purple/20 group-hover:scale-110 group-hover:bg-neon-purple/30 transition-all">
                <FaCertificate className="text-xl" />
              </div>
              
              <h3 className="text-lg font-display font-semibold text-white mt-4 group-hover:text-neon-cyan transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-sm font-medium text-neon-cyan mt-2">
                {cert.issuer}
              </p>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                <span className="text-xs text-gray-500">
                  {cert.date}
                </span>
                
                {(cert.link || cert.credential) && (
                  <a
                    href={cert.link || cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-purple transition-colors p-2 -mr-2 rounded-full hover:bg-white/5"
                    aria-label={`View ${cert.title} credential`}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
