import React, { useState, useEffect } from 'react';
import { CelestialBackground } from './components/CelestialBackground';
import { TopNav } from './components/TopNav';
import { HeroCountdown } from './components/HeroCountdown';
import { SpecialMessage } from './components/SpecialMessage';
import { SowingSection } from './components/SowingSection';
import { FellowshipLunchSection } from './components/FellowshipLunchSection';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { fireWelcomeConfetti } from './utils/confettiHelper';

export default function App() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isSimulatedCelebration, setIsSimulatedCelebration] = useState(false);

  useEffect(() => {
    // Fire celebratory golden confetti immediately when page is loaded
    const timer = setTimeout(() => {
      fireWelcomeConfetti();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const toggleSimulatedCelebration = () => {
    setIsSimulatedCelebration((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#0B132B] text-slate-100 flex flex-col relative font-sans selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
      {/* Dynamic Golden Particles & Celestial Halo */}
      <CelestialBackground />

      {/* Top Navigation Bar with Audio and Share Controls */}
      <TopNav
        onOpenShare={() => setIsShareModalOpen(true)}
        onSimulateCelebration={toggleSimulatedCelebration}
        isSimulatedCelebration={isSimulatedCelebration}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* Screen 1 & 2: Hero & Real-Time Dynamic Countdown */}
        <HeroCountdown
          isSimulatedCelebration={isSimulatedCelebration}
          onToggleSimulate={toggleSimulatedCelebration}
          onOpenShare={() => setIsShareModalOpen(true)}
        />

        {/* Section 3: Special Message & Scriptures */}
        <SpecialMessage />

        {/* Section 4: Voluntary Sowing & Bank Coordinates */}
        <SowingSection />

        {/* Section 5: Fellowship Lunch on November 29 */}
        <FellowshipLunchSection />
      </main>

      {/* Section 7: Solemn Footer */}
      <Footer onOpenShare={() => setIsShareModalOpen(true)} />

      {/* Interactive Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
