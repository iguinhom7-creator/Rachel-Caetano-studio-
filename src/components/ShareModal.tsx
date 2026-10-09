import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { X, Copy, Check, Share2, MessageCircle, Instagram } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://rachelcaetano.com.br';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareViaWhatsApp = () => {
    const text = `Conheça o studio de unhas da Rachel Caetano Nail Designer em Belo Horizonte: ${currentUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-sm w-full p-6 border border-[#C5A059]/30 shadow-2xl relative text-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-12 h-12 rounded-full gold-gradient-bg mx-auto flex items-center justify-center text-stone-900 mb-3 shadow-xs">
          <Share2 className="w-5 h-5" />
        </div>

        <h3 className="font-serif text-2xl font-bold text-stone-900">
          Compartilhar Bio
        </h3>
        <p className="text-xs text-stone-500 mt-1">
          Indique o trabalho da Rachel Caetano para uma amiga ou salve o link para agendamentos.
        </p>

        <div className="mt-5 space-y-3">
          <button
            onClick={handleCopy}
            className="w-full py-3 px-4 rounded-xl border border-stone-200 hover:border-[#C5A059] bg-[#FCFAF7] text-stone-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#9A7836]" />}
            <span>{copied ? 'Link Copiado com Sucesso!' : 'Copiar Link da Bio'}</span>
          </button>

          <button
            onClick={shareViaWhatsApp}
            className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enviar no WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
