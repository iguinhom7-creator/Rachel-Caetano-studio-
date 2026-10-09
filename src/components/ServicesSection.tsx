import React, { useState } from 'react';
import { SERVICES, ServiceItem, STUDIO_CONFIG } from '../data/studioData';
import { Sparkles, Clock, Check, MessageCircle, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceToBook: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceToBook }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'alongamento' | 'cuidados' | 'arte'>('all');

  const filteredServices = SERVICES.filter(service => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'alongamento') return service.category === 'alongamento' || service.category === 'manutencao';
    if (activeFilter === 'cuidados') return service.category === 'cuidados';
    if (activeFilter === 'arte') return service.category === 'arte';
    return true;
  });

  return (
    <section id="servicos" className="py-14 sm:py-20 bg-[#FCFAF7] border-y border-[#C5A059]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9A7836]">
            Menu de Procedimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
            Serviços Exclusivos
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            Técnicas contemporâneas que combinam durabilidade incomparável, saúde da lâmina e a estética refinada do alto padrão.
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 max-w-lg mx-auto bg-white rounded-2xl border border-stone-200/80 shadow-xs mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeFilter === 'all'
                ? 'gold-gradient-bg text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
            }`}
          >
            Todos os Serviços
          </button>
          <button
            onClick={() => setActiveFilter('alongamento')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeFilter === 'alongamento'
                ? 'gold-gradient-bg text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
            }`}
          >
            Alongamento & Manutenção
          </button>
          <button
            onClick={() => setActiveFilter('cuidados')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeFilter === 'cuidados'
                ? 'gold-gradient-bg text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
            }`}
          >
            Blindagem & Cuidados
          </button>
          <button
            onClick={() => setActiveFilter('arte')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeFilter === 'arte'
                ? 'gold-gradient-bg text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
            }`}
          >
            Nail Art & Francesa
          </button>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/70 hover:border-[#C5A059]/50 shadow-xs hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5EEDB] border border-[#C5A059]/30 flex items-center justify-center text-[#9A7836] shrink-0 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-xl font-bold text-stone-900 leading-snug group-hover:text-[#9A7836] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights List */}
                <ul className="mt-4 space-y-2 border-t border-stone-100 pt-3.5">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#9A7836] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Recommended For */}
                <div className="mt-4 p-2.5 rounded-lg bg-[#FCFAF7] border border-stone-100 text-[11px] text-stone-600">
                  <span className="font-semibold text-stone-800">Ideal para: </span>
                  {service.recommendedFor}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2">
                <a
                  href={`${STUDIO_CONFIG.whatsappUrl}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl gold-gradient-bg text-stone-900 text-xs font-semibold tracking-wider uppercase text-center hover:brightness-105 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-stone-900" />
                  <span>Agendar no WhatsApp</span>
                </a>

                <button
                  onClick={() => onSelectServiceToBook(service)}
                  aria-label={`Ver detalhes de ${service.title}`}
                  className="p-2.5 rounded-xl border border-stone-200 hover:border-[#C5A059] text-stone-600 hover:text-[#9A7836] transition-colors shrink-0"
                  title="Personalizar agendamento"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Custom Services */}
        <div className="mt-10 text-center">
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            Dúvidas sobre qual o melhor procedimento para a saúde da sua unha? 
            Realizamos uma avaliação personalizada antes de cada atendimento.
          </p>
        </div>

      </div>
    </section>
  );
};
