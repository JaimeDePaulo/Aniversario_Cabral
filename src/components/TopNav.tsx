import React, { useState } from 'react';
import { Volume2, VolumeX, Share2, Sparkles } from 'lucide-react';
import { ambientHymn } from '../utils/audioSynthesizer';

interface TopNavProps {
  onOpenShare: () => void;
  onSimulateCelebration: () => void;
  isSimulatedCelebration: boolean;
}

export const TopNav: React.FC<TopNavProps> = ({
  onOpenShare,
  onSimulateCelebration,
  isSimulatedCelebration,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleSound = () => {
    const newState = ambientHymn.toggle();
    setIsPlayingAudio(newState);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0B132B]/85 border-b border-[#D4AF37]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          className="font-display tracking-[0.2em] text-sm sm:text-base font-bold text-[#F3E5AB] hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="text-[#D4AF37]">✦</span>
          <span>MANUEL CABRAL DOMINGOS</span>
        </a>

        {/* Zone 2: 4-5 single-line clean text nav links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm tracking-wider uppercase text-slate-300 font-medium">
          <a
            href="#inicio"
            className="hover:text-[#F3E5AB] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#D4AF37]/50"
          >
            Início
          </a>
          <a
            href="#mensagem"
            className="hover:text-[#F3E5AB] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#D4AF37]/50"
          >
            Mensagem
          </a>
          <a
            href="#semear"
            className="hover:text-[#F3E5AB] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#D4AF37]/50"
          >
            Semear
          </a>
          <a
            href="#almoco"
            className="hover:text-[#F3E5AB] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#D4AF37]/50"
          >
            Almoço
          </a>
        </nav>

        {/* Zone 3: Primary action + sound toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Audio Hymn Toggle (Optional instrumental Christian music) */}
          <button
            type="button"
            onClick={toggleSound}
            title={isPlayingAudio ? 'Silenciar música instrumental' : 'Tocar música instrumental serena'}
            aria-label={isPlayingAudio ? 'Silenciar música' : 'Ouvir instrumental cristão'}
            className={`p-2 rounded-lg transition-all border text-xs flex items-center gap-1.5 ${
              isPlayingAudio
                ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#F3E5AB] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                : 'bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-500'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-4 h-4 animate-pulse text-[#E6CA65]" />
                <span className="hidden xl:inline text-[11px] font-medium tracking-wide text-[#F3E5AB]">Música Activa</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden xl:inline text-[11px] font-medium tracking-wide">Música Sacra</span>
              </>
            )}
          </button>

          {/* Celebration Preview Mode toggle for testing */}
          <button
            type="button"
            onClick={onSimulateCelebration}
            title="Alternar visualização do dia 14 de Novembro"
            className={`hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              isSimulatedCelebration
                ? 'bg-[#D4AF37]/25 border-[#D4AF37] text-[#F3E5AB]'
                : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="whitespace-nowrap">{isSimulatedCelebration ? 'Modo Normal' : 'Ver Dia 14'}</span>
          </button>

          {/* Primary Action Button: Partilhar Cartão */}
          <button
            type="button"
            onClick={onOpenShare}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#F5E6AB] via-[#D4AF37] to-[#C5A059] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_2px_12px_rgba(212,175,55,0.25)] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-slate-950" />
            <span>Partilhar</span>
          </button>
        </div>

      </div>
    </header>
  );
};
