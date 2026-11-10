import React, { useState } from 'react';
import { Copy, Check, Share2, Heart, ShieldCheck, Sparkles, Building2, MessageCircle, FileCheck } from 'lucide-react';
import { fireGoldenConfetti } from '../utils/confettiHelper';
import { MANUEL_CONTACT } from '../constants/contact';

export const SowingSection: React.FC = () => {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);
  const [showBlessingToast, setShowBlessingToast] = useState(false);

  const bankAccounts = [
    {
      id: 'bfa',
      bankName: 'Banco BFA',
      fullName: 'Banco de Fomento Angola',
      iban: '0006.0000.4832.8256.3014.4',
      badge: 'BFA',
      accentColor: 'from-amber-500/20 to-amber-700/10',
    },
    {
      id: 'yetu',
      bankName: 'Banco Yetu',
      fullName: 'Banco Yetu, S.A.',
      iban: '0066.0000.0898.4725.1012.4',
      badge: 'YETU',
      accentColor: 'from-blue-600/20 to-blue-800/10',
    },
  ];

  const handleCopy = async (bankId: string, iban: string, bankName: string) => {
    try {
      await navigator.clipboard.writeText(iban);
      setCopiedBank(bankId);
      setShowBlessingToast(true);
      fireGoldenConfetti();

      setTimeout(() => {
        setCopiedBank(null);
      }, 3500);

      setTimeout(() => {
        setShowBlessingToast(false);
      }, 6000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = iban;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedBank(bankId);
      setShowBlessingToast(true);
      setTimeout(() => setCopiedBank(null), 3500);
      setTimeout(() => setShowBlessingToast(false), 6000);
    }
  };

  const whatsappReceiptMessage =
    `Olá, prezado irmão Manuel Cabral Domingos! Segue em anexo o comprovativo da minha contribuição voluntária de aniversário. Que Deus continue a abençoar ricamente a sua vida, saúde e ministério! 🙏`;

  const receiptUrl = MANUEL_CONTACT.getWhatsAppUrl(whatsappReceiptMessage);

  const whatsappShareText = encodeURIComponent(
    `*Semeando na vida de Manuel Cabral Domingos (Aniversário - 14 de Novembro)*\n\n` +
    `Beneficiário: *Manuel Cabral Domingos*\n\n` +
    `🏦 *Banco BFA*\nIBAN: 0006.0000.4832.8256.3014.4\n\n` +
    `🏦 *Banco Yetu*\nIBAN: 0066.0000.0898.4725.1012.4\n\n` +
    `📱 WhatsApp para Envio de Comprovativo: ${MANUEL_CONTACT.phoneDisplay}\n\n` +
    `_«Cada um contribua segundo propôs no seu coração... Deus ama ao que dá com alegria.» (2 Coríntios 9:7)_`
  );

  return (
    <section id="semear" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/15 bg-gradient-to-b from-[#090F22] to-[#0D1836]">
      
      {/* Visual Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
            <Heart className="w-3.5 h-3.5 text-[#E6CA65]" />
            <span>Contribuição Voluntária & Generosidade</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            QUER SEMEAR NA VIDA <br className="sm:hidden" />
            <span className="text-gold-gradient">DO SERVO DO SENHOR?</span>
          </h2>

          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
          
          <p className="font-serif-luxury text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            “Embora não esteja prevista uma festa de aniversário, aqueles que desejarem manifestar o seu carinho, consideração e generosidade através de uma contribuição voluntária poderão fazê-lo utilizando as seguintes coordenadas bancárias.”
          </p>
        </div>

        {/* Beneficiary Header Card with WhatsApp Comprovativo Highlight */}
        <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-[#0F1B3C]/80 border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left shadow-lg">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#F3E5AB] shrink-0">
              <Sparkles className="w-6 h-6 text-[#E6CA65]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Titular da Conta / Beneficiário</p>
              <p className="font-display text-lg sm:text-xl font-bold text-[#F5E6AB]">
                Manuel Cabral Domingos
              </p>
              <p className="text-xs text-slate-300 flex items-center gap-1.5 justify-center md:justify-start mt-0.5">
                <span className="text-[#25D366]">●</span>
                <span>WhatsApp Comprovativos: <strong className="text-white font-mono">{MANUEL_CONTACT.phoneDisplay}</strong></span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 w-full md:w-auto">
            {/* Direct Send Receipt on WhatsApp */}
            <a
              href={receiptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95 shrink-0"
            >
              <FileCheck className="w-4 h-4 text-white" />
              <span>Enviar Comprovativo</span>
            </a>

            {/* Share details on WhatsApp */}
            <a
              href={`https://wa.me/?text=${whatsappShareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold tracking-wider uppercase transition-all shrink-0"
            >
              <Share2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Partilhar Dados</span>
            </a>
          </div>
        </div>

        {/* Bank Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bankAccounts.map((bank) => {
            const isCopied = copiedBank === bank.id;
            return (
              <div
                key={bank.id}
                className={`relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 bg-[#0A1228]/90 backdrop-blur-sm shadow-xl flex flex-col justify-between ${
                  isCopied
                    ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 bg-[#121E3E]'
                    : 'border-[#D4AF37]/25 hover:border-[#D4AF37]/50'
                }`}
              >
                <div>
                  {/* Top Bank Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[#D4AF37]">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white tracking-wide">
                          {bank.bankName}
                        </h3>
                        <p className="text-xs text-slate-400">{bank.fullName}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F3E5AB]">
                      {bank.badge}
                    </span>
                  </div>

                  {/* IBAN Box */}
                  <div className="my-5 p-4 rounded-xl bg-[#060B19] border border-slate-800 focus-within:border-[#D4AF37]/50">
                    <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-medium mb-1">
                      Número de IBAN
                    </span>
                    <span className="font-mono tabular-nums text-sm sm:text-base font-bold text-[#F3E5AB] tracking-wider select-all break-all">
                      {bank.iban}
                    </span>
                  </div>
                </div>

                {/* Copy Action Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(bank.id, bank.iban, bank.bankName)}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isCopied
                      ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                      : 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-slate-950 font-bold hover:brightness-110 active:scale-95 shadow-[0_4px_15px_rgba(212,175,55,0.2)]'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Coordenada copiada com sucesso!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-950" />
                      <span>Copiar IBAN {bank.bankName}</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Thank-you Blessing Toast when IBAN is copied */}
        {showBlessingToast && (
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#D4AF37]/25 via-[#1E3A8A]/50 to-[#D4AF37]/25 border border-[#D4AF37] text-center animate-in fade-in slide-in-from-bottom-3 duration-300 shadow-2xl space-y-3">
            <div className="flex items-center justify-center gap-2 text-[#F5E6AB] font-serif-luxury text-base sm:text-lg italic font-medium">
              <Sparkles className="w-5 h-5 text-[#E6CA65] animate-spin" />
              <span>«Deus abençoe ricamente a sua generosidade e carinho na vida do irmão Manuel!»</span>
              <span>🙏</span>
            </div>
            
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Coordenada copiada! Após realizar a transferência na sua aplicação bancária, envie o comprovativo para o WhatsApp do irmão Manuel:
            </p>

            <div>
              <a
                href={receiptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Comprovativo no WhatsApp ({MANUEL_CONTACT.phoneDisplay})</span>
              </a>
            </div>
          </div>
        )}

        {/* Crucial Respectful Notice */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center max-w-2xl mx-auto flex items-center justify-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <p className="text-xs text-slate-400 leading-relaxed text-balance">
            <strong className="text-slate-300">Nota fraternal:</strong> Qualquer contribuição é inteiramente voluntária, sem valores mínimos ou qualquer obrigatoriedade. Os comprovativos podem ser remetidos directamente para o WhatsApp <strong className="text-slate-200 font-mono">{MANUEL_CONTACT.phoneDisplay}</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};
