import React, { useState } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import sacredBibleImg from '../assets/images/hero_sacred_bible_cross_1794306468341.jpg';

export const SpecialMessage: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(sacredBibleImg);

  return (
    <section id="mensagem" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/15 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Editorial Section Kicker */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E6CA65]" />
            <span>Homenagem e Reconhecimento</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            UM ANO A MAIS, <br className="sm:hidden" />
            <span className="text-gold-gradient">UMA GRAÇA A MAIS!</span>
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* 2-Column Split: Illuminated Sacred Art & Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1: Sacred Bible Artwork with gold border */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)] bg-gradient-to-b from-[#16254E] to-[#0A1226] min-h-[320px] sm:min-h-[400px] flex items-center justify-center">
              
              {/* Fallback sacred placeholder in case of asset delay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-[#D4AF37]/40 pointer-events-none">
                <BookOpen className="w-16 h-16 mb-2 text-[#D4AF37]/50" />
                <span className="font-display text-xs tracking-widest uppercase">Sagrada Escritura</span>
              </div>

              <img
                src={imgSrc}
                alt="Sagrada Escritura iluminada pela luz divina"
                referrerPolicy="no-referrer"
                onError={() => {
                  if (imgSrc !== './images/biblia.jpg') {
                    setImgSrc('./images/biblia.jpg');
                  }
                }}
                className="relative z-10 w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0B132B] via-transparent to-black/30 pointer-events-none" />
              
              {/* Bottom Art Inscription */}
              <div className="absolute bottom-4 left-4 right-4 z-30 p-3 rounded-xl bg-[#0B132B]/85 backdrop-blur-md border border-[#D4AF37]/30 text-center">
                <span className="font-display text-xs tracking-widest text-[#F3E5AB] uppercase">
                  Fé · Dedicação · Propósito
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Editorial Prose & Biblical Verse */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Editorial Text with Drop Cap */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1A38]/70 border border-[#D4AF37]/25 shadow-xl backdrop-blur-sm">
              <p className="font-serif-luxury text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
                <span className="font-display text-4xl sm:text-5xl font-bold text-[#F3E5AB] float-left mr-3 mt-1 leading-none">
                  H
                </span>
                á vidas que são instrumentos nas mãos de Deus, testemunhos da Sua bondade e exemplos de perseverança. Hoje celebramos a vida de um homem que caminha pela fé, serve com dedicação e procura viver segundo os propósitos do Senhor.
              </p>

              <p className="font-serif-luxury text-lg sm:text-xl text-slate-200 leading-relaxed mt-5">
                Que este novo ciclo seja marcado por sabedoria, saúde, prosperidade, crescimento espiritual e novas conquistas.
              </p>

              <div className="mt-6 pt-5 border-t border-[#D4AF37]/20 flex items-center justify-between">
                <div>
                  <p className="font-display text-base sm:text-lg font-bold text-[#F5E6AB]">
                    Feliz aniversário, Manuel Cabral Domingos!
                  </p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                    14 de Novembro de 2026
                  </p>
                </div>
                <div className="text-2xl text-[#D4AF37]">✝</div>
              </div>
            </div>

            {/* Featured Biblical Verse in Salience */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#16254E]/90 to-[#0A1226]/90 border border-[#D4AF37]/40 shadow-lg">
              <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                <BookOpen className="w-4 h-4 text-[#F3E5AB]" />
                <span>Palavra das Escrituras</span>
              </div>

              <blockquote className="font-serif-luxury text-xl sm:text-2xl italic text-[#F3E5AB] leading-relaxed">
                “Ensina-nos a contar os nossos dias, de tal maneira que alcancemos corações sábios.”
              </blockquote>

              <p className="font-display text-sm tracking-wider uppercase text-slate-300 font-semibold mt-3 text-right">
                — Salmos 90:12
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
