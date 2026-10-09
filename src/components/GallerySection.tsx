import React, { useState } from 'react';
import { PORTFOLIO, PortfolioItem, STUDIO_CONFIG } from '../data/studioData';
import { ZoomIn, MessageCircle, Sparkles, Instagram } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'alongamento' | 'classico' | 'blindagem'>('all');

  const filteredItems = PORTFOLIO.filter(item => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  return (
    <section id="galeria" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9A7836]">
            Portfólio Real
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
            Conheça Meu Trabalho
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            Resultados reais de procedimentos realizados em mesa no estúdio Rachel Caetano.
            Unhas delicadas, acabamento anatômico e brilho inconfundível.
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              selectedFilter === 'all'
                ? 'gold-gradient-bg text-stone-900 shadow-2xs'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
            }`}
          >
            Todos os Trabalhos
          </button>
          <button
            onClick={() => setSelectedFilter('alongamento')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              selectedFilter === 'alongamento'
                ? 'gold-gradient-bg text-stone-900 shadow-2xs'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
            }`}
          >
            Alongamento & Curvatura
          </button>
          <button
            onClick={() => setSelectedFilter('classico')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              selectedFilter === 'classico'
                ? 'gold-gradient-bg text-stone-900 shadow-2xs'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
            }`}
          >
            Nude Clássico & Amendoado
          </button>
          <button
            onClick={() => setSelectedFilter('blindagem')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              selectedFilter === 'blindagem'
                ? 'gold-gradient-bg text-stone-900 shadow-2xs'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
            }`}
          >
            Esmaltação & Blindagem
          </button>
        </div>

        {/* Gallery Grid (Preserving Original Image Quality Without Distortion) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative cursor-pointer bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:border-[#C5A059]/60 shadow-xs hover:shadow-luxury transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Scrim Overlay */}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm text-[#9A7836] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-stone-200/60 shadow-2xs">
                  <span className="text-[10px] font-semibold text-stone-800 tracking-wider uppercase">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-4 space-y-1.5 bg-[#FCFAF7]/50">
                <h3 className="font-serif text-base font-bold text-stone-900 leading-snug group-hover:text-[#9A7836] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                  {item.technique}
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px]">
                  <span className="text-[#9A7836] font-medium inline-flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Toque para ampliar
                  </span>
                  <span className="text-stone-400 group-hover:text-[#9A7836] transition-colors">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA - More Photos on Instagram */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#FBF8F2] via-white to-[#FBF8F2] border border-[#C5A059]/25 text-center max-w-2xl mx-auto shadow-2xs">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#9A7836] mb-1">
            Mais de 100+ Fotos e Vídeos de Procedimentos
          </p>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
            Acompanhe as transformações diárias no Instagram
          </h3>
          <p className="text-xs text-stone-600 mt-2 max-w-lg mx-auto">
            Nos stories e reels você confere bastidores, processos de biossegurança e novidades semanais em primeira mão.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={STUDIO_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold tracking-wide transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-amber-400" />
              <span>Ver mais no Instagram</span>
            </a>
            <a
              href={STUDIO_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient-bg text-stone-900 text-xs font-semibold tracking-wide transition-all shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-stone-900" />
              <span>Quero agendar meu horário</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
