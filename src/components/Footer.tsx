import React from 'react';
import { ChevronUp, Share2, Heart, MessageCircle } from 'lucide-react';
import { MANUEL_CONTACT } from '../constants/contact';

interface FooterProps {
  onOpenShare: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShare }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage =
    'Olá, prezado Manuel Cabral Domingos! Que a graça do Senhor Jesus Cristo continue a acompanhar a sua caminhada com fé, saúde e paz. Feliz Aniversário!';

  const whatsappUrl = MANUEL_CONTACT.getWhatsAppUrl(whatsappMessage);

  return (
    <footer className="relative bg-[#060A17] border-t border-[#D4AF37]/20 py-16 px-4 sm:px-6 lg:px-8 text-center text-slate-300">
      
      {/* Decorative top gold line with emblem */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
        <span className="text-[#D4AF37] text-lg">✝</span>
        <div className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Core Final Blessing Text */}
        <p className="font-serif-luxury text-lg sm:text-2xl text-[#F3E5AB] italic leading-relaxed text-balance">
          “Que a graça do Senhor Jesus Cristo continue a acompanhar a sua caminhada. Que venham muitos anos de vida, fé, saúde e realizações!”
        </p>

        {/* Celebrant Name & Date */}
        <div className="space-y-1">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[0.15em] text-white uppercase">
            MANUEL CABRAL DOMINGOS
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            14 de Novembro de 2026
          </p>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ChevronUp className="w-4 h-4 text-[#D4AF37]" />
            <span>Voltar ao Início</span>
          </button>

          <button
            type="button"
            onClick={onOpenShare}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F5E6AB] hover:bg-[#D4AF37]/25 text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-[#D4AF37]" />
            <span>Partilhar Cartão</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#54e98d] hover:bg-[#25D366]/30 text-xs uppercase tracking-wider transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enviar Abraço no WhatsApp ({MANUEL_CONTACT.phoneDisplay})</span>
          </a>
        </div>

        <div className="pt-8 border-t border-slate-900 text-xs text-slate-400">
          <p>
            Cartão digital comemorativo dedicado a honrar a vida de um servo do Senhor. Desenvolvido com fé e carinho fraternal.
          </p>
        </div>

      </div>
    </footer>
  );
};
