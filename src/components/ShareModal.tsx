import React, { useState } from 'react';
import { X, Copy, Check, MessageCircle, Share2, Sparkles, Link2 } from 'lucide-react';
import { fireGoldenConfetti } from '../utils/confettiHelper';
import { MANUEL_CONTACT } from '../constants/contact';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://cartao.manuelcabraldomingos.com';

  const shareTitle = 'Celebração de Aniversário — Manuel Cabral Domingos';
  const shareText = 'Junte-se a nós na celebração do aniversário de Manuel Cabral Domingos no dia 14 de Novembro de 2026. Aceda ao cartão digital interactivo:';

  const directManuelUrl = MANUEL_CONTACT.getWhatsAppUrl(
    'Olá, prezado irmão Manuel Cabral Domingos! Que a bênção e a graça do Senhor Jesus Cristo continuem sobre a sua vida. Feliz aniversário!'
  );

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `${shareTitle}\n\n${shareText}\n${currentUrl}`
  )}`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      fireGoldenConfetti();
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md p-6 sm:p-7 rounded-2xl bg-[#0D1836] border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-slate-100 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-3 text-[#F3E5AB]">
            <Share2 className="w-6 h-6 text-[#E6CA65]" />
          </div>

          <h3 id="share-title" className="font-display text-xl font-bold text-white tracking-wide">
            Partilhar este Cartão
          </h3>
          <p className="font-serif-luxury italic text-sm text-slate-300 mt-1">
            Espalhe a bênção e convide outros irmãos e amigos a celebrar.
          </p>
        </div>

        {/* Primary Share Options */}
        <div className="space-y-3 mb-6">
          {/* Direct WhatsApp to Manuel */}
          <a
            href={directManuelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Mensagem Directa no WhatsApp ({MANUEL_CONTACT.phoneDisplay})</span>
          </a>

          {/* WhatsApp Share Card */}
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#182855] hover:bg-[#203673] text-[#F3E5AB] border border-[#D4AF37]/30 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <Share2 className="w-4 h-4 text-[#D4AF37]" />
            <span>Partilhar Link nos Seus Grupos WhatsApp</span>
          </a>

          {/* Native System Share (if supported) */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#0F1B3C] hover:bg-[#152450] text-slate-300 border border-slate-700 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer active:scale-95"
            >
              <Share2 className="w-4 h-4 text-slate-400" />
              <span>Outras Aplicações de Partilha</span>
            </button>
          )}
        </div>

        {/* Copy Link Section */}
        <div className="p-3.5 rounded-xl bg-[#070D1F] border border-slate-800">
          <label className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1.5">
            Link Directo do Cartão
          </label>
          <div className="flex items-center gap-2">
            <div className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono truncate select-all">
              {currentUrl}
            </div>

            <button
              type="button"
              onClick={handleCopyLink}
              className={`p-2.5 rounded-lg font-medium text-xs flex items-center gap-1 transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-slate-950 font-bold hover:brightness-110'
              }`}
              title="Copiar link"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {copied && (
            <p className="text-[11px] text-emerald-400 font-medium mt-2 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Link copiado para a área de transferência!</span>
            </p>
          )}
        </div>

        {/* Bottom subtle note */}
        <div className="mt-5 text-center">
          <p className="text-[11px] text-slate-400">
            Optimizada para visualização rápida no telemóvel e pré-visualização enriquecida no WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};
