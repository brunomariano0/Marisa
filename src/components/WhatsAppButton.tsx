import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5511999999999" 
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-75"></div>
      <MessageCircle size={32} className="text-white fill-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm text-gray-800 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale Conosco
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
