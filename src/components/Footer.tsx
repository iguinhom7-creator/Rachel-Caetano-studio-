import React from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { Instagram, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 sm:py-16 border-t border-[#C5A059]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main Brand & Quote */}
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C5A059]/40 mx-auto p-0.5 bg-stone-800">
            <img
              src={STUDIO_CONFIG.officialPortrait}
              alt="Rachel Caetano"
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-white">
            {STUDIO_CONFIG.brandName}
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#C5A059]">
            {STUDIO_CONFIG.brandSubtitle}
          </p>

          <p className="text-sm text-stone-400 italic pt-2 font-serif">
            “{STUDIO_CONFIG.footerQuote}”
          </p>
        </div>

        {/* Links Row */}
        <div className="mt-8 pt-8 border-t border-stone-800 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium">
          <a
            href={STUDIO_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#C5A059] transition-colors"
          >
            <Instagram className="w-4 h-4 text-amber-400" />
            <span>Instagram</span>
          </a>

          <a
            href={STUDIO_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#C5A059] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          <a
            href={STUDIO_CONFIG.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#C5A059] transition-colors"
          >
            {/* Google G small icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Google</span>
          </a>
        </div>

        {/* Copyright & Location Note */}
        <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Rachel Caetano Nail Designer. Todos os direitos reservados. Belo Horizonte - MG.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-[#C5A059] transition-colors text-stone-400"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
