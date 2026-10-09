import React, { useState } from 'react';
import { SERVICES, ServiceItem, STUDIO_CONFIG } from '../data/studioData';
import { X, Calendar, MessageCircle, Clock, Check } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedService ? preselectedService.id : SERVICES[0].id
  );
  const [clientName, setClientName] = useState<string>('');
  const [preferredShift, setPreferredShift] = useState<string>('Manhã (09h - 13h)');
  const [preferredDay, setPreferredDay] = useState<string>('Esta semana');

  if (!isOpen) return null;

  const currentService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const handleConfirm = () => {
    const namePart = clientName.trim() ? `Meu nome é ${clientName.trim()}. ` : '';
    const message = `Olá, Rachel! ${namePart}Gostaria de agendar um horário para *${currentService.title}*.\n\nPreferência: ${preferredShift} (${preferredDay}).\nPoderia me informar as datas disponíveis?`;
    const url = `${STUDIO_CONFIG.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#C5A059]/30 shadow-2xl relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-full gold-gradient-bg mx-auto flex items-center justify-center text-stone-900 mb-2.5 shadow-xs">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900">
            Agendar Horário
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Escolha o serviço desejado para iniciar seu atendimento no WhatsApp da Rachel.
          </p>
        </div>

        {/* Service Picker */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
              Selecione o Procedimento:
            </label>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {SERVICES.map(s => (
                <div
                  key={s.id}
                  onClick={() => setSelectedServiceId(s.id)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                    selectedServiceId === s.id
                      ? 'border-[#C5A059] bg-[#F5EEDB]/40 font-medium text-stone-900'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700'
                  }`}
                >
                  <div>
                    <span className="font-semibold block">{s.title}</span>
                    <span className="text-[11px] text-stone-500">{s.duration}</span>
                  </div>
                  {selectedServiceId === s.id && (
                    <div className="w-5 h-5 rounded-full gold-gradient-bg flex items-center justify-center text-stone-900 shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Name input */}
          <div>
            <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1">
              Seu Nome (Opcional):
            </label>
            <input
              type="text"
              placeholder="Ex: Amanda Silva"
              value={clientName}
              onChange={e => setClientName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            />
          </div>

          {/* Preference row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1">
                Turno Preferido:
              </label>
              <select
                value={preferredShift}
                onChange={e => setPreferredShift(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059] bg-white"
              >
                <option value="Manhã (09h - 13h)">Manhã (09h - 13h)</option>
                <option value="Tarde (13h - 18h)">Tarde (13h - 18h)</option>
                <option value="Final do dia (18h+)">Final do dia (18h+)</option>
                <option value="Sábado">Sábado</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1">
                Previsão:
              </label>
              <select
                value={preferredDay}
                onChange={e => setPreferredDay(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059] bg-white"
              >
                <option value="Esta semana">Esta semana</option>
                <option value="Próxima semana">Próxima semana</option>
                <option value="Urgente / Primeiro horário">Primeiro horário vago</option>
                <option value="Data específica">Data específica</option>
              </select>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 pt-4 border-t border-stone-100">
          <button
            onClick={handleConfirm}
            className="w-full py-3.5 px-4 rounded-xl gold-gradient-bg text-stone-900 text-xs sm:text-sm font-bold tracking-wider uppercase text-center hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-stone-900" />
            <span>Continuar no WhatsApp</span>
          </button>
          <p className="text-[11px] text-center text-stone-400 mt-2">
            Você será direcionada para conversar diretamente com a Rachel
          </p>
        </div>

      </div>
    </div>
  );
};
