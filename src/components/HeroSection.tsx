import React from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { 
  Calendar, 
  Instagram, 
  MapPin, 
  Sparkles, 
  Star, 
  GraduationCap, 
  ShieldCheck, 
  ArrowUpRight,
  Share2
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenShare: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenShare }) => {
  return (
    <section id="inicio" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      {/* Delicate background ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#F5EEDB]/60 via-[#FCFAF7]/30 to-transparent blur-3xl -z-10"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Profile Card Container (Optimized for Instagram Bio Link & High Luxury Feel) */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-[#C5A059]/25 shadow-luxury text-center relative">
          
          {/* Top Quick Actions Bar (Share & Location Badge) */}
          <div className="flex items-center justify-between mb-6 text-xs text-stone-500">
            <span className="inline-flex items-center gap-1.5 font-medium tracking-wider uppercase text-[11px] text-[#9A7836]">
              <MapPin className="w-3.5 h-3.5" />
              {STUDIO_CONFIG.city}
            </span>
            <button
              onClick={onOpenShare}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-100 hover:bg-[#F4EBD9]/60 text-stone-700 hover:text-[#9A7836] transition-colors text-[11px] font-medium"
              title="Compartilhar Link da Bio"
            >
              <Share2 className="w-3 h-3" />
              <span>Compartilhar</span>
            </button>
          </div>

          {/* Rachel's Portrait with Luxury Arched Ring & Natural Enhancement */}
          <div className="relative inline-block mx-auto mb-6">
            <div className="relative w-36 h-44 sm:w-44 sm:h-52 rounded-[2.5rem] p-1.5 bg-gradient-to-b from-[#DFBA6B] via-[#C5A059] to-[#9F7A36] shadow-glow-gold">
              <div className="w-full h-full rounded-[2.25rem] overflow-hidden bg-stone-100 relative">
                <img
                  src={STUDIO_CONFIG.officialPortrait}
                  alt="Rachel Caetano - Nail Designer"
                  className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.02] transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>

            {/* Subtle verification badge */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-white px-3 py-0.5 rounded-full border border-[#C5A059]/40 shadow-sm flex items-center gap-1 text-[11px] font-medium text-stone-800 whitespace-nowrap">
              <Sparkles className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
              <span>Studio Exclusivo</span>
            </div>
          </div>

          {/* Titles & Tagline */}
          <div className="space-y-2.5 max-w-xl mx-auto">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              {STUDIO_CONFIG.brandName}
            </h1>
            
            <p className="text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold text-[#9A7836]">
              {STUDIO_CONFIG.brandSubtitle}
            </p>

            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed pt-1 italic">
              “{STUDIO_CONFIG.tagline}”
            </p>
          </div>

          {/* Trust Metrics Adjacency */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 pt-5 border-t border-stone-100 text-xs text-stone-600">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-stone-900">5.0</span>
              <span className="text-stone-400">·</span>
              <span>Google Reviews</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9A7836]" />
              <span>100% Biossegurança</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#9A7836]" />
              <span>Acabamento Ultrafino</span>
            </div>
          </div>

          {/* Primary CTA Buttons (High Intent & Touch-Friendly) */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <a
              href={STUDIO_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl gold-gradient-bg text-stone-900 text-sm font-bold tracking-wider uppercase shadow-md hover:brightness-105 active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4 text-stone-900" />
              <span>Agendar Meu Horário</span>
            </a>

            <a
              href={STUDIO_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm transition-all"
            >
              <Instagram className="w-4 h-4 text-amber-400" />
              <span>Seguir no Instagram</span>
            </a>
          </div>

          {/* Bio Quick-Nav Links (High Conversion Bio Hub) */}
          <div className="mt-8 pt-7 border-t border-stone-100">
            <p className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 mb-3.5">
              Acesso Rápido ao Studio
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-left">
              <a
                href="#servicos"
                className="group p-3 rounded-xl bg-[#FCFAF7] hover:bg-[#F5EEDB]/40 border border-stone-200/70 hover:border-[#C5A059]/40 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-stone-800 block group-hover:text-[#9A7836]">Serviços</span>
                  <span className="text-[10px] text-stone-500">Técnicas & Cuidados</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#9A7836] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#galeria"
                className="group p-3 rounded-xl bg-[#FCFAF7] hover:bg-[#F5EEDB]/40 border border-stone-200/70 hover:border-[#C5A059]/40 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-stone-800 block group-hover:text-[#9A7836]">Portfólio Real</span>
                  <span className="text-[10px] text-stone-500">Fotos de Trabalhos</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#9A7836] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#cursos"
                className="group p-3 rounded-xl bg-[#FCFAF7] hover:bg-[#F5EEDB]/40 border border-stone-200/70 hover:border-[#C5A059]/40 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-stone-800 block group-hover:text-[#9A7836]">Cursos & Aulas</span>
                  <span className="text-[10px] text-stone-500">Formação Pro / VIP</span>
                </div>
                <GraduationCap className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#9A7836]" />
              </a>

              <a
                href="#avaliacoes"
                className="group p-3 rounded-xl bg-[#FCFAF7] hover:bg-[#F5EEDB]/40 border border-stone-200/70 hover:border-[#C5A059]/40 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-stone-800 block group-hover:text-[#9A7836]">Depoimentos</span>
                  <span className="text-[10px] text-stone-500">5.0 no Google</span>
                </div>
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              </a>

              <a
                href="#localizacao"
                className="group p-3 rounded-xl bg-[#FCFAF7] hover:bg-[#F5EEDB]/40 border border-stone-200/70 hover:border-[#C5A059]/40 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-stone-800 block group-hover:text-[#9A7836]">Localização</span>
                  <span className="text-[10px] text-stone-500">Belo Horizonte</span>
                </div>
                <MapPin className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#9A7836]" />
              </a>

              <button
                onClick={onOpenBooking}
                className="group p-3 rounded-xl bg-gradient-to-br from-[#F5EEDB] to-white hover:to-[#F5EEDB]/60 border border-[#C5A059]/30 transition-all flex items-center justify-between text-left"
              >
                <div>
                  <span className="text-xs font-semibold text-[#9A7836] block">Consultar Data</span>
                  <span className="text-[10px] text-stone-500">Ver Agenda Aberta</span>
                </div>
                <Calendar className="w-3.5 h-3.5 text-[#9A7836]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
