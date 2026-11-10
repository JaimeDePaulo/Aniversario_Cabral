import React, { useState, useEffect } from 'react';
import { MessageCircle, Gift, Calendar, Sparkles, ChevronDown, Heart } from 'lucide-react';
import { fireGoldenConfetti } from '../utils/confettiHelper';
import { MANUEL_CONTACT } from '../constants/contact';

interface HeroCountdownProps {
  isSimulatedCelebration: boolean;
  onToggleSimulate: () => void;
  onOpenShare: () => void;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

// Target date: Midnight of November 14, 2026 (Angola / West Africa Time UTC+1 or Local time)
const TARGET_DATE = new Date('2026-11-14T00:00:00');

export const HeroCountdown: React.FC<HeroCountdownProps> = ({
  isSimulatedCelebration,
  onToggleSimulate,
  onOpenShare,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  const [hasCelebrated, setHasCelebrated] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE.getTime() - now;

      if (difference <= 0 || isSimulatedCelebration) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });

        if (!hasCelebrated) {
          fireGoldenConfetti();
          setHasCelebrated(true);
        }
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isExpired: false,
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [isSimulatedCelebration, hasCelebrated]);

  const isToday = timeLeft.isExpired || isSimulatedCelebration;

  const triggerCelebrationConfetti = () => {
    fireGoldenConfetti();
  };

  const whatsappMessage =
    'Olá, estimado irmão Manuel Cabral Domingos! Que a graça do Senhor Jesus Cristo continue a iluminar os seus passos e multiplicar os seus dias. Feliz aniversário! Muita saúde, sabedoria, paz e contínuas bênçãos no seu ministério e vida!';

  const whatsappDirectUrl = MANUEL_CONTACT.getWhatsAppUrl(whatsappMessage);

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Decorative celestial background halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-[#D4AF37]/10 via-[#F3E5AB]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Subtle Faith Symbol: Golden Cross & Decorative Arch */}
        <div className="mb-6 flex items-center justify-center gap-3 text-[#D4AF37]">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#0B132B]/80 text-[#F3E5AB] text-xs uppercase tracking-[0.25em] font-medium backdrop-blur-sm">
            <span className="text-[#D4AF37]">✝</span>
            <span>14 de Novembro de 2026</span>
            <span className="text-[#D4AF37]">✦</span>
          </div>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
        </div>

        {/* Central Birthday Title */}
        <div className="space-y-4 mb-6">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
            Celebração e Gratidão a Deus
          </p>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
            FELIZ ANIVERSÁRIO, <br />
            <span className="text-gold-gradient drop-shadow-[0_2px_20px_rgba(212,175,55,0.35)]">
              MANUEL CABRAL DOMINGOS!
            </span>
          </h1>

          <p className="font-serif-luxury text-lg sm:text-2xl text-slate-200 max-w-2xl mx-auto italic font-normal leading-relaxed text-balance">
            “Celebramos não apenas mais um ano de vida, mas a fidelidade de Deus ao longo da caminhada.”
          </p>
        </div>

        {/* Dynamic Countdown OR Special Celebration Today Animation */}
        <div className="w-full max-w-2xl my-8">
          {!isToday ? (
            /* ACTIVE COUNTDOWN */
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111C3D]/90 to-[#0B132B]/95 border border-[#D4AF37]/30 shadow-[0_10px_35px_rgba(0,0,0,0.4)] backdrop-blur-md">
              <div className="flex items-center justify-center gap-2 mb-6 text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                <Sparkles className="w-4 h-4 text-[#E6CA65]" />
                <span>Contagem Decrescente para o Grande Dia</span>
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {/* Dias */}
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#070D1F]/80 border border-[#D4AF37]/20 shadow-inner">
                  <span className="font-display tabular-nums text-2xl sm:text-4xl md:text-5xl font-bold text-[#F3E5AB]">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">
                    Dias
                  </span>
                </div>

                {/* Horas */}
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#070D1F]/80 border border-[#D4AF37]/20 shadow-inner">
                  <span className="font-display tabular-nums text-2xl sm:text-4xl md:text-5xl font-bold text-[#F3E5AB]">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">
                    Horas
                  </span>
                </div>

                {/* Minutos */}
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#070D1F]/80 border border-[#D4AF37]/20 shadow-inner">
                  <span className="font-display tabular-nums text-2xl sm:text-4xl md:text-5xl font-bold text-[#F3E5AB]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">
                    Minutos
                  </span>
                </div>

                {/* Segundos */}
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#070D1F]/80 border border-[#D4AF37]/20 shadow-inner">
                  <span className="font-display tabular-nums text-2xl sm:text-4xl md:text-5xl font-bold text-[#E6CA65] animate-pulse">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">
                    Segundos
                  </span>
                </div>
              </div>

              <div className="mt-5 text-xs text-slate-400 flex items-center justify-center gap-2">
                <span>Contagem programada até à meia-noite de 14 de Novembro</span>
              </div>
            </div>
          ) : (
            /* BIRTHDAY HAS ARRIVED - CELEBRATION CARD */
            <div className="relative p-7 sm:p-10 rounded-2xl bg-gradient-to-b from-[#182855]/95 via-[#101C3E]/95 to-[#0B132B]/95 border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.35)] backdrop-blur-md animate-in fade-in zoom-in-95 duration-500">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#F5E6AB] text-xs uppercase tracking-widest font-semibold mb-4">
                <Sparkles className="w-4 h-4 text-[#F3E5AB] animate-spin" />
                <span>Chegou o dia abençoado!</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-gold-bright tracking-tight mb-4">
                HOJE É O SEU DIA!
              </h2>

              <p className="font-serif-luxury text-xl sm:text-2xl text-slate-100 italic leading-relaxed max-w-xl mx-auto mb-6">
                “Que o Senhor continue a iluminar os seus passos, renovar as suas forças e multiplicar os seus dias com graça e propósito.”
              </p>

              <button
                type="button"
                onClick={triggerCelebrationConfetti}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-slate-950 font-semibold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(212,175,55,0.5)] cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Celebrar com Confetes Dourados</span>
              </button>
            </div>
          )}
        </div>

        {/* Hero Interactive CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
          {/* Send congratulations via WhatsApp */}
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs sm:text-sm shadow-[0_4px_16px_rgba(37,211,102,0.3)] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Enviar Felicitações no WhatsApp</span>
          </a>

          {/* Sowing Section Jump */}
          <a
            href="#semear"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-[#D4AF37]/40 text-[#F3E5AB] hover:text-white font-medium text-xs sm:text-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Gift className="w-4 h-4 text-[#D4AF37]" />
            <span>Semear na Vida do Servo</span>
          </a>

          {/* Fellowship Lunch Jump */}
          <a
            href="#almoco"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium text-xs sm:text-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4 text-[#E6CA65]" />
            <span>Almoço de Confraternização</span>
          </a>
        </div>

        {/* Small test preview toggle helper for users to test both states anytime */}
        <div className="mt-8 text-xs text-slate-400">
          <button
            type="button"
            onClick={onToggleSimulate}
            className="underline underline-offset-4 hover:text-[#F3E5AB] transition-colors cursor-pointer"
          >
            {isSimulatedCelebration ? '← Voltar à contagem real' : 'Simular animação do dia 14 de Novembro'}
          </button>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-10 animate-bounce text-slate-500">
          <a href="#mensagem" aria-label="Ir para a mensagem especial">
            <ChevronDown className="w-5 h-5 text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
};
