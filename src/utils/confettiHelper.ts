import confetti from 'canvas-confetti';

const GOLD_COLORS = ['#D4AF37', '#F5E6AB', '#AA8022', '#FFFFFF', '#E6CA65', '#C5A059'];

export function fireGoldenConfetti() {
  const count = 160;
  const defaults = {
    origin: { y: 0.65 },
    colors: GOLD_COLORS,
    ticks: 350,
    gravity: 0.8,
    scalar: 1.1,
    shapes: ['circle', 'square'] as ('circle' | 'square')[],
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.9,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

/**
 * Grand welcome confetti burst immediately upon page load
 */
export function fireWelcomeConfetti() {
  // Center burst
  fireGoldenConfetti();

  // Left cannon
  setTimeout(() => {
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: GOLD_COLORS,
      ticks: 300,
      gravity: 0.85,
    });
  }, 250);

  // Right cannon
  setTimeout(() => {
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: GOLD_COLORS,
      ticks: 300,
      gravity: 0.85,
    });
  }, 450);

  // Gentle second golden rain from center
  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.5 },
      colors: GOLD_COLORS,
      ticks: 350,
      gravity: 0.75,
      scalar: 1.15,
    });
  }, 800);
}
