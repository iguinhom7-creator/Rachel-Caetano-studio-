import React from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { ShieldCheck, Heart, Sparkles, Clock, CheckCircle2, MessageCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9A7836]">
            Conheça a Profissional
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
            Sobre Rachel Caetano
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Split: Image & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-xs w-full">
              {/* Decorative Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#C5A059]/30 p-1.5 bg-[#FCFAF7] shadow-luxury">
                <div className="rounded-2xl overflow-hidden bg-stone-100 aspect-[3/4]">
                  <img
                    src={STUDIO_CONFIG.officialPortrait}
                    alt="Rachel Caetano - Nail Designer em Belo Horizonte"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating Signature Tag */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-sm border border-[#C5A059]/30 rounded-2xl px-4 py-2.5 shadow-md">
                <p className="text-[11px] font-semibold text-stone-900 uppercase tracking-wider">
                  Belo Horizonte · MG
                </p>
                <p className="text-[10px] text-[#9A7836] font-medium">
                  Atendimento Personalizado
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-stone-700">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 leading-snug">
              Cuidado genuíno, precisão artesanal e a elegância de unhas que refletem a sua essência.
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-stone-600">
              Acredito que o verdadeiro Nail Design vai muito além da estética superficial: é sobre 
              resgatar sua autoestima diária através de um trabalho feito com dedicação, respeito à saúde 
              da lâmina e olhar atento para cada detalhe.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-stone-600">
              Com anos de dedicação em Belo Horizonte, desenvolvi uma assinatura que prioriza 
              <strong> unhas elegantes, leves e de resistência impecável</strong> — sem aspecto grosseiro 
              ou desconforto. Cada cliente que se senta à minha mesa recebe um atendimento exclusivo, 
              sem pressa, em um ambiente pensado para o seu bem-estar.
            </p>

            {/* 4 Pillars of Excellence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
              <div className="p-3.5 rounded-xl bg-[#FCFAF7] border border-stone-200/60 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#F5EEDB] text-[#9A7836] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">Biossegurança Rigorosa</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Esterilização completa e materiais descartáveis individuais.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FCFAF7] border border-stone-200/60 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#F5EEDB] text-[#9A7836] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">Acabamento Ultrafino</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Estrutura anatômica com espessura sutil idêntica à unha natural.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FCFAF7] border border-stone-200/60 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#F5EEDB] text-[#9A7836] shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">Respeito à Lâmina Natural</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Zero agressão: suas unhas continuam saudáveis e intactas.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FCFAF7] border border-stone-200/60 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#F5EEDB] text-[#9A7836] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">Atendimento Exclusivo</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Hora marcada sem espera, em espaço calmo e sofisticado.</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call */}
            <div className="pt-2">
              <a
                href={STUDIO_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#9A7836] hover:text-[#7A5D24] transition-colors group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar diretamente com a Rachel no WhatsApp</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
