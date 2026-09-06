'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { contact } from '@/data/portfolio';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const [success, setSuccess] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-neon-cyan/50 shadow-[0_0_10px_#00f5ff] rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-400 text-base mb-8">
              {contact.description || "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."}
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 text-neon-cyan flex items-center justify-center shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm text-white">{contact.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 text-neon-cyan flex items-center justify-center shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm text-white">{contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 text-neon-cyan flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm text-white">{contact.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:shadow-neon-cyan transition-all">
                <FaGithub />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:shadow-neon-cyan transition-all">
                <FaLinkedin />
              </a>
              <a href={`mailto:${contact.email}`} className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:shadow-neon-cyan transition-all">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Your Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-gray-100 dark:bg-dark-700/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/30 transition"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Your Email</label>
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full bg-gray-100 dark:bg-dark-700/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/30 transition"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Subject</label>
                <input
                  {...register("subject")}
                  className="w-full bg-gray-100 dark:bg-dark-700/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/30 transition"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  className="w-full bg-gray-100 dark:bg-dark-700/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/30 transition resize-none"
                  placeholder="Hello..."
                ></textarea>
                {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-neon-glow text-white py-3 rounded-xl font-semibold hover:shadow-neon-cyan transition-all mt-4 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
              </button>
              
              {success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-sm text-center mt-4"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
