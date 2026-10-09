import React from 'react';
import { STUDIO_CONFIG, PORTFOLIO } from '../data/studioData';
import { Instagram, ArrowUpRight, Heart, Sparkles } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FCFAF7] border-y border-[#C5A059]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C5A059]/30 shadow-luxury text-center relative overflow-hidden">
          
          {/* Decorative ambient circle */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 bg-[#F5EEDB] rounded-full blur-2xl opacity-60" 
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Instagram Icon Badge */}
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md mb-5">
              <Instagram className="w-7 h-7" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9A7836]">
              Conecte-se Conosco
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
              Acompanhe meu trabalho no Instagram
            </h2>

            <p className="text-sm text-stone-600 mt-3 max-w-lg mx-auto">
              Inspirações diárias, transformações de antes & depois, dicas de autocuidado para as unhas e bastidores do estúdio.
            </p>

            <p className="text-sm font-semibold text-stone-900 mt-2 font-mono tracking-wide">
              {STUDIO_CONFIG.instagramHandle}
            </p>

            {/* Instagram Feed Mini-Grid Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
              {PORTFOLIO.map((item, idx) => (
                <a
                  key={idx}
                  href={STUDIO_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-2xs block"
                >
                  <img
                    src={item.src}
                    alt={`Instagram post ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <Heart className="w-5 h-5 fill-white" />
                  </div>
                </a>
              ))}
            </div>

            {/* Main Action Button */}
            <a
              href={STUDIO_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Instagram className="w-4 h-4 text-amber-400" />
              <span>Seguir no Instagram</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};
