import React, { useEffect } from 'react';
import { PortfolioItem, PORTFOLIO, STUDIO_CONFIG } from '../data/studioData';
import { X, ChevronLeft, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onSelect: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onSelect }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item]);

  if (!item) return null;

  const currentIndex = PORTFOLIO.findIndex(p => p.id === item.id);

  const navigate = (dir: number) => {
    const nextIdx = (currentIndex + dir + PORTFOLIO.length) % PORTFOLIO.length;
    onSelect(PORTFOLIO[nextIdx]);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#C5A059]/40 flex flex-col md:flex-row max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar visualização"
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Area with Prev / Next */}
        <div className="relative md:w-3/5 bg-stone-950 flex items-center justify-center overflow-hidden">
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full max-h-[50vh] md:max-h-[80vh] object-contain"
          />

          {/* Navigation Arrows */}
          <button
            onClick={e => {
              e.stopPropagation();
              navigate(-1);
            }}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-stone-900 flex items-center justify-center shadow-md transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={e => {
              e.stopPropagation();
              navigate(1);
            }}
            aria-label="Próxima foto"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-stone-900 flex items-center justify-center shadow-md transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Content & Action Area */}
        <div className="md:w-2/5 p-6 flex flex-col justify-between bg-[#FCFAF7] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-semibold text-[#9A7836] uppercase tracking-wider bg-[#F5EEDB] px-2.5 py-0.5 rounded-full">
                {item.categoryLabel}
              </span>
              <span className="text-[10px] text-stone-400">
                {currentIndex + 1} de {PORTFOLIO.length}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug">
              {item.title}
            </h3>

            <div className="mt-4 p-3 rounded-xl bg-white border border-stone-200/70 text-xs text-stone-600 space-y-1.5">
              <span className="font-semibold text-stone-800 block text-[11px] uppercase tracking-wider text-[#9A7836]">
                Técnica Utilizada:
              </span>
              <p className="leading-relaxed">{item.technique}</p>
            </div>

            <p className="mt-3 text-xs text-stone-600 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-200 space-y-2">
            <a
              href={`${STUDIO_CONFIG.whatsappUrl}?text=${encodeURIComponent(item.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl gold-gradient-bg text-stone-900 text-xs sm:text-sm font-bold tracking-wider uppercase text-center hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-stone-900" />
              <span>Quero este estilo</span>
            </a>

            <p className="text-[11px] text-center text-stone-400">
              Atendimento exclusivo em Belo Horizonte com hora marcada
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
