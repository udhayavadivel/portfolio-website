'use client';

import { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { hero } from '@/data/portfolio';
import dynamic from 'next/dynamic';

// Lazy load the 3D scene
const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false });

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 2000;

  useEffect(() => {
    if (!hero.typingTexts || hero.typingTexts.length === 0) return;

    const handleTyping = () => {
      const fullText = hero.typingTexts[textIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      } else {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % hero.typingTexts.length);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, charIndex === hero.typingTexts[textIndex]?.length && !isDeleting ? delayBetweenTexts : speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-dark-900 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex items-center justify-between">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-neon-purple font-medium mb-4">
            Hello, I'm
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold text-gradient mb-4 leading-tight">
            Udhayakumar P
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-neon-cyan font-medium mb-2">
            {hero.title}
          </motion.h2>
          
          <motion.div variants={itemVariants} className="text-2xl font-bold h-10 flex items-center mb-6">
            <span className="text-white">{currentText}</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-neon-cyan ml-1 inline-block"
            >
              |
            </motion.span>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
            {hero.subtitle}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
            <a 
              href="#projects" 
              className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple text-white px-8 py-3 rounded-xl font-semibold hover:shadow-neon-cyan hover:scale-105 transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="glass border border-neon-cyan/40 text-neon-cyan px-8 py-3 rounded-xl font-semibold hover:bg-neon-cyan/15 hover:border-neon-cyan hover:scale-105 transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="border border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:border-neon-purple/70 hover:bg-neon-purple/10 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right 3D Scene / Mobile Fallback */}
        <div className="hidden lg:block lg:w-1/2 h-full absolute right-0 top-0 bottom-0 pointer-events-none">
          <div className="pointer-events-auto w-full h-full min-h-[500px] flex items-center justify-center">
            <Suspense fallback={<div className="w-32 h-32 rounded-full bg-neon-cyan/20 blur-3xl" />}>
              <HeroScene />
            </Suspense>
          </div>
        </div>

        {/* Mobile Gradient Orb Fallback */}
        <div className="lg:hidden absolute right-1/4 top-1/4 w-64 h-64 rounded-full bg-neon-purple/20 blur-[100px] pointer-events-none z-[-1]" />
        <div className="lg:hidden absolute left-1/4 bottom-1/4 w-48 h-48 rounded-full bg-neon-cyan/20 blur-[80px] pointer-events-none z-[-1]" />
      </div>
    </section>
  );
}
