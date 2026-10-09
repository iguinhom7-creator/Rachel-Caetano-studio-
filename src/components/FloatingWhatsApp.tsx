import React from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 group">
      {/* Mobile & Desktop Floating Button */}
      <a
        href={STUDIO_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agende seu horário pelo WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20ba5a] active:scale-95 transition-all duration-200 border-2 border-white"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white stroke-none" />
          {/* Subtle live pulse indicator */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping opacity-75" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-200 rounded-full" />
        </div>
        
        <span className="text-xs font-bold tracking-wide whitespace-nowrap hidden sm:inline-block">
          Agende seu horário pelo WhatsApp
        </span>
        <span className="text-xs font-bold tracking-wide whitespace-nowrap sm:hidden">
          Agendar no WhatsApp
        </span>
      </a>
    </div>
  );
};
