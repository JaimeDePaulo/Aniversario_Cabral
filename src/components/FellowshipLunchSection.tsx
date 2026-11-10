import React, { useState, useEffect } from 'react';
import { Utensils, Calendar, MapPin, Clock, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { MANUEL_CONTACT } from '../constants/contact';

// Lunch Date: Sunday, November 29, 2026 at 12:30 PM
const LUNCH_DATE = new Date('2026-11-29T12:30:00');

export const FellowshipLunchSection: React.FC = () => {
  const [daysUntilLunch, setDaysUntilLunch] = useState<number>(0);
  const [isPastLunch, setIsPastLunch] = useState<boolean>(false);

  useEffect(() => {
    const calculateDays = () => {
      const now = new Date().getTime();
      const diff = LUNCH_DATE.getTime() - now;
      if (diff <= 0) {
        setIsPastLunch(true);
        setDaysUntilLunch(0);
      } else {
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        setDaysUntilLunch(days);
        setIsPastLunch(false);
      }
    };

    calculateDays();
    const timer = setInterval(calculateDays, 60000);
    return () => clearInterval(timer);
  }, []);

  const confirmationMessage =
    'Olá, Manuel! Gostaria de confirmar a minha presença no almoço de confraternização do dia 29 de Novembro. Será uma alegria participar deste momento.';

  const rsvpUrl = MANUEL_CONTACT.getWhatsAppUrl(confirmationMessage);

  return (
    <section id="almoco" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/15 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#E6CA65]" />
            <span>Comunhão & Fraternidade</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            VAMOS CELEBRAR <br className="sm:hidden" />
            <span className="text-gold-gradient">À MESA!</span>
          </h2>

          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />

          <p className="font-serif-luxury text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            “Não haverá festa de aniversário. Entretanto, para assinalar este momento especial, teremos um almoço de confraternização no último domingo do mês.”
          </p>
        </div>

        {/* Highlight Card with 2-Column Split: Image & Details */}
        <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#0C152F]/90 backdrop-blur-md overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Column 1: Fellowship banquet photo */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
              <img
                src="/src/assets/images/fellowship_table_celebration_1794306469088.jpg"
                alt="Mesa de confraternização com velas e folhagens"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover min-h-[280px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C152F] via-transparent to-black/20 lg:bg-gradient-to-r lg:from-transparent lg:to-[#0C152F]" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0B132B]/85 backdrop-blur-md border border-[#D4AF37]/30 text-center">
                <span className="font-serif-luxury italic text-xs text-[#F3E5AB]">
                  «Oh! Quão bom e quão suave é que os irmãos vivam em união!» — Salmos 133:1
                </span>
              </div>
            </div>

            {/* Column 2: Date, Details, and WhatsApp Confirmation */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              
              <div>
                {/* Event Date Highlight */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F5E6AB] text-xs font-semibold tracking-wider uppercase mb-3">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Último Domingo do Mês</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  29 DE NOVEMBRO DE 2026
                </h3>
                <p className="font-display text-sm tracking-[0.2em] uppercase text-[#D4AF37] font-semibold mt-1">
                  DOMINGO | ALMOÇO DE CONFRATERNIZAÇÃO
                </p>
              </div>

              {/* Active Lunch Countdown Counter */}
              <div className="p-4 rounded-xl bg-[#070D1F] border border-[#D4AF37]/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#D4AF37]/15 text-[#E6CA65]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-medium">
                      Contagem para o Almoço
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-slate-200">
                      {isPastLunch ? 'O almoço foi realizado com louvor a Deus' : 'Encontro de confraternização fraterna'}
                    </span>
                  </div>
                </div>

                {!isPastLunch && (
                  <div className="text-right">
                    <span className="font-display tabular-nums text-2xl sm:text-3xl font-bold text-[#F3E5AB]">
                      {daysUntilLunch}
                    </span>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      {daysUntilLunch === 1 ? 'Dia restante' : 'Dias restantes'}
                    </span>
                  </div>
                )}
              </div>

              {/* Prepared Details Info (without inventing fake address) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Horário previsto</strong>
                    <span>A ser comunicado brevemente aos confirmados</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Local do encontro</strong>
                    <span>Informações enviadas após confirmação</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp RSVP Confirmation Button */}
              <div className="pt-2">
                <a
                  href={rsvpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Confirmar presença pelo WhatsApp ({MANUEL_CONTACT.phoneDisplay})</span>
                </a>

                <p className="text-[11px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Envia a confirmação directamente para {MANUEL_CONTACT.phoneDisplay}</span>
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
