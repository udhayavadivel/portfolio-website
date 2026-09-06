'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/data/portfolio';
import { useTheme } from '@/context/ThemeContext';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = navLinks.map(link => document.getElementById(link.url.replace('#', '')));
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'glass backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="#home" onClick={closeMobileMenu}>
          <span className="text-gradient font-display font-bold text-2xl tracking-wider">UP</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.url}
              className={`transition-colors duration-300 hover:text-neon-cyan font-medium text-sm tracking-wide ${activeSection === link.url.replace('#', '') ? 'text-neon-cyan font-bold' : 'text-gray-400 dark:text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="p-2 glass rounded-full hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-neon-cyan min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === 'dark' ? <HiSun size={20} className="text-yellow-400" /> : <HiMoon size={20} className="text-gray-700" />
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 glass rounded-full focus:outline-none min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === 'dark' ? <HiSun size={20} className="text-yellow-400" /> : <HiMoon size={20} className="text-gray-700" />
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full glass-strong backdrop-blur-xl border-b border-white/10 dark:border-white/5 py-4 px-6 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                onClick={closeMobileMenu}
                className={`text-lg font-medium transition-colors duration-200 ${activeSection === link.url.replace('#', '') ? 'text-neon-cyan' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
