import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { Calendar, Menu, X, MessageCircle, Instagram } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FCFAF7]/90 backdrop-blur-md border-b border-[#C5A059]/20 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#inicio" 
          className="group flex items-center gap-3 shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-md"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C5A059]/40 p-0.5 bg-white shadow-sm shrink-0">
            <img 
              src={STUDIO_CONFIG.officialPortrait} 
              alt="Rachel Caetano" 
              className="w-full h-full object-cover object-top rounded-full"
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-stone-900 leading-none group-hover:text-[#9A7836] transition-colors">
              Rachel Caetano
            </span>
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-[#9A7836] mt-0.5">
              Nail Designer
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium tracking-wide text-stone-600">
          <a href="#sobre" className="hover:text-[#9A7836] transition-colors whitespace-nowrap">Sobre</a>
          <a href="#servicos" className="hover:text-[#9A7836] transition-colors whitespace-nowrap">Serviços</a>
          <a href="#galeria" className="hover:text-[#9A7836] transition-colors whitespace-nowrap">Portfólio</a>
          <a href="#cursos" className="hover:text-[#9A7836] transition-colors whitespace-nowrap">Cursos</a>
          <a href="#avaliacoes" className="hover:text-[#9A7836] transition-colors whitespace-nowrap">Avaliações</a>
          <a href="#localizacao" className="hover:text-[#9A7836] transition-colors whitespace-nowrap">Localização</a>
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full gold-gradient-bg text-stone-900 text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:brightness-105 active:scale-95 transition-all whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-stone-900" />
            <span>Agendar Horário</span>
          </button>

          <a
            href={STUDIO_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp"
            className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366]/10 text-[#208a47] hover:bg-[#25D366]/20 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Alternar Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#C5A059]/20 bg-[#FCFAF7] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3.5 text-sm font-medium text-stone-700">
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-stone-100 hover:text-[#9A7836] transition-colors"
            >
              Sobre Rachel
            </a>
            <a 
              href="#servicos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-stone-100 hover:text-[#9A7836] transition-colors"
            >
              Serviços de Alto Padrão
            </a>
            <a 
              href="#galeria" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-stone-100 hover:text-[#9A7836] transition-colors"
            >
              Conheça Meu Trabalho
            </a>
            <a 
              href="#cursos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-stone-100 hover:text-[#9A7836] transition-colors"
            >
              Cursos e Formação
            </a>
            <a 
              href="#avaliacoes" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-stone-100 hover:text-[#9A7836] transition-colors"
            >
              Avaliações de Clientes
            </a>
            <a 
              href="#localizacao" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-stone-100 hover:text-[#9A7836] transition-colors"
            >
              Onde Estamos (BH)
            </a>
          </nav>

          <div className="mt-5 pt-4 border-t border-stone-200/60 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full gold-gradient-bg text-stone-900 font-semibold text-xs tracking-wider uppercase text-center shadow-sm"
            >
              Agendar Meu Horário
            </button>
            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-stone-500">
              <a 
                href={STUDIO_CONFIG.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 hover:text-[#9A7836]"
              >
                <Instagram className="w-3.5 h-3.5" />
                Instagram
              </a>
              <span className="text-stone-300">·</span>
              <a 
                href={STUDIO_CONFIG.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 hover:text-[#9A7836]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
