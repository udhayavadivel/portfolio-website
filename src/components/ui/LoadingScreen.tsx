'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-dark-900 flex flex-col items-center justify-center"
        >
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Inner Core */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-4 border-2 border-dashed border-neon-cyan rounded-full"
            />
            {/* Middle Orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute inset-0 border border-neon-blue rounded-full opacity-50 flex items-start justify-center"
            >
              <div className="w-3 h-3 bg-neon-blue rounded-full -mt-1.5 shadow-[0_0_10px_rgba(0,102,255,0.8)]" />
            </motion.div>
            {/* Outer Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute -inset-4 border border-neon-purple rounded-full opacity-30 flex items-end justify-center"
            >
              <div className="w-2 h-2 bg-neon-purple rounded-full -mb-1 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
            </motion.div>
            
            {/* Center Node */}
            <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </div>
          
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="mt-12 text-neon-cyan font-space tracking-widest text-sm uppercase font-medium"
          >
            Initializing AI Portfolio...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
