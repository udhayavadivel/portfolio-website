'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '@/data/portfolio';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient inline-block relative">
            What People Say
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-neon-cyan/50 shadow-[0_0_10px_#00f5ff] rounded-full"></span>
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-8 hover-neon-glow transition-all duration-300"
            >
              <FaQuoteLeft className="text-neon-cyan/30 text-3xl" />
              <p className="text-gray-300 text-base italic leading-relaxed mt-4">
                "{testimonial.content || testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full bg-neon-glow flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden mt-16 relative">
          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8"
              >
                <FaQuoteLeft className="text-neon-cyan/30 text-3xl" />
                <p className="text-gray-300 text-base italic leading-relaxed mt-4">
                  "{testimonials[activeIndex]?.content || testimonials[activeIndex]?.quote}"
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-12 h-12 rounded-full bg-neon-glow flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {testimonials[activeIndex].name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-500 text-xs">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prevTestimonial} className="w-8 h-8 rounded-full glass flex items-center justify-center text-white hover:text-neon-cyan">
              <FaChevronLeft className="text-sm" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === activeIndex ? 'bg-neon-cyan' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="w-8 h-8 rounded-full glass flex items-center justify-center text-white hover:text-neon-cyan">
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
