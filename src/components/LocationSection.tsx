import React from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { MapPin, Clock, Coffee, ShieldCheck, Car, ExternalLink, MessageCircle } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-14 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9A7836]">
            Studio & Atendimento
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
            Onde Estamos
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            Um ambiente acolhedor e privativo em Belo Horizonte, preparado especialmente para o seu momento de beleza e relaxamento.
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        {/* Studio Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Column */}
          <div className="lg:col-span-7 bg-[#FCFAF7] rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F5EEDB] text-[#9A7836] flex items-center justify-center shrink-0 border border-[#C5A059]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    Belo Horizonte — MG
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Atendimento exclusivo com agendamento prévio. Localização de fácil acesso na capital mineira, com comodidade e discrição para sua sessão.
                  </p>
                  <p className="text-xs text-[#9A7836] font-medium mt-1">
                    Endereço exato enviado na confirmação do agendamento.
                  </p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-200/60">
                <div className="w-11 h-11 rounded-2xl bg-[#F5EEDB] text-[#9A7836] flex items-center justify-center shrink-0 border border-[#C5A059]/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    Horários de Atendimento
                  </h3>
                  <div className="mt-2 space-y-1 text-xs text-stone-600">
                    {STUDIO_CONFIG.openingHours.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between py-1 border-b border-stone-100 last:border-none">
                        <span className="font-medium text-stone-800">{item.days}</span>
                        <span>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Studio Comfort Amenities */}
              <div className="pt-4 border-t border-stone-200/60 grid grid-cols-2 gap-3 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#C5A059]" />
                  <span>Café especial & água</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Biossegurança total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#C5A059]" />
                  <span>Fácil estacionamento</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Pontualidade rigorosa</span>
                </div>
              </div>

            </div>

            {/* Google Location CTA */}
            <div className="mt-8 pt-6 border-t border-stone-200/60 flex flex-col sm:flex-row gap-3">
              <a
                href={STUDIO_CONFIG.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl gold-gradient-bg text-stone-900 text-xs sm:text-sm font-bold tracking-wider uppercase text-center hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Abrir Localização no Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-xl border border-stone-300 hover:border-[#C5A059] bg-white text-stone-800 hover:text-[#9A7836] text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir orientações no WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Map Preview Graphic Column */}
          <div className="lg:col-span-5 bg-stone-900 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between">
            {/* Subtle stylized map background */}
            <div 
              aria-hidden="true" 
              className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" 
            />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-medium backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5" />
                <span>Belo Horizonte / MG</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                Experiência Exclusiva com Hora Marcada
              </h3>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Para manter a máxima privacidade, biossegurança e tranquilidade, atendemos apenas uma cliente por vez em nosso studio. 
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 text-xs">
                <div className="flex items-center justify-between text-stone-300">
                  <span>Cidade:</span>
                  <strong className="text-white">Belo Horizonte, MG</strong>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span>Tipo de Atendimento:</span>
                  <strong className="text-amber-300">Individual & VIP</strong>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span>Agendamentos:</span>
                  <strong className="text-white">Via WhatsApp Oficial</strong>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 text-center">
              <a
                href={STUDIO_CONFIG.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white transition-colors"
              >
                <span>Ver ficha completa da empresa no Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
