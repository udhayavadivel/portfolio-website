'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { chatResponses } from '@/data/portfolio';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: chatResponses.greeting, isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = { id: Date.now(), text, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      let botResponse = chatResponses.default;
      const lowerText = text.toLowerCase();

      if (lowerText.includes('skill')) botResponse = chatResponses.skills;
      else if (lowerText.includes('project')) botResponse = chatResponses.projects;
      else if (lowerText.includes('experience')) botResponse = chatResponses.experience;
      else if (lowerText.includes('contact')) botResponse = chatResponses.contact;

      const botMessage: Message = { id: Date.now() + 1, text: botResponse, isBot: true };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const quickActions = ['Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <div className="fixed bottom-8 right-24 z-[50]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-80 h-96 glass-strong rounded-2xl overflow-hidden flex flex-col mb-4"
          >
            {/* Header */}
            <div className="bg-neon-glow/10 p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <h3 className="text-white font-semibold text-sm">AI Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <HiX className="text-xl" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-xl text-sm ${
                      msg.isBot ? 'glass text-gray-200' : 'bg-neon-blue/20 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {quickActions.map(action => (
                <button
                  key={action}
                  onClick={() => handleSend(action)}
                  className="text-xs bg-dark-700 text-gray-300 px-3 py-1.5 rounded-full border border-white/10 hover:border-neon-cyan hover:text-white transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 p-3 border-t border-white/10 bg-dark-800/50">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-dark-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 border-none focus:outline-none"
              />
              <button
                onClick={() => handleSend()}
                className="w-9 h-9 shrink-0 rounded-lg bg-neon-cyan/20 text-neon-cyan flex items-center justify-center hover:bg-neon-cyan/30 transition-colors"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-neon-glow text-white shadow-neon-cyan flex items-center justify-center hover:scale-105 transition-transform"
      >
        <span className="absolute inset-0 rounded-full border border-neon-cyan animate-ping opacity-20"></span>
        <FaRobot className="text-xl relative z-10" />
      </button>
    </div>
  );
}
