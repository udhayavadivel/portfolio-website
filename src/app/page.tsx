'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Static imports for above-the-fold content
import Hero from '@/components/sections/Hero';

// Dynamic imports for below-the-fold sections (code splitting)
const About = dynamic(() => import('@/components/sections/About'));
const Skills = dynamic(() => import('@/components/sections/Skills'));
const Projects = dynamic(() => import('@/components/sections/Projects'));
const Experience = dynamic(() => import('@/components/sections/Experience'));
const Certifications = dynamic(() => import('@/components/sections/Certifications'));
const GitHubStats = dynamic(() => import('@/components/sections/GitHubStats'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const Contact = dynamic(() => import('@/components/sections/Contact'));

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero - always loaded */}
      <Hero />

      {/* About */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <About />
      </motion.div>

      {/* Skills */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Skills />
      </motion.div>

      {/* Projects */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Projects />
      </motion.div>

      {/* Experience */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Experience />
      </motion.div>

      {/* Certifications */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Certifications />
      </motion.div>

      {/* GitHub Stats */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <GitHubStats />
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Testimonials />
      </motion.div>

      {/* Contact */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Contact />
      </motion.div>
    </>
  );
}
