'use client'

import React from 'react';
import Link from 'next/link';
import { navLinks, contact } from '@/data/portfolio';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative transition-colors duration-300 bg-gray-100 dark:bg-dark-800">
      {/* Neon Gradient Top Border */}
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-40"></div>
      
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="#home">
              <span className="text-gradient font-display font-bold text-3xl tracking-wide">UP</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed max-w-xs">
              Transforming complex data into actionable insights through advanced analytics and artificial intelligence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    href={link.url}
                    className="text-gray-600 dark:text-gray-400 hover:text-neon-cyan dark:hover:text-neon-cyan transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white">Connect</h3>
            <div className="flex gap-4">
              <a 
                href={contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-neon-cyan dark:hover:text-neon-cyan transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-neon-cyan dark:hover:text-neon-cyan transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href={`mailto:${contact.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-neon-cyan dark:hover:text-neon-cyan transition-colors duration-200"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 dark:border-white/10 pt-8 mt-12 gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm text-center md:text-left">
            © 2024 Udhayakumar P. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm text-center md:text-right">
            Designed and developed by Udhayakumar P
          </p>
        </div>
      </div>
    </footer>
  );
}
