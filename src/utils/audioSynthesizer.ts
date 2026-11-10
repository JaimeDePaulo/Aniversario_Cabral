/**
 * Pure Web Audio API ambient hymn synthesizer.
 * Creates an ethereal, peaceful, reverent instrumental progression
 * without requiring any external audio files.
 */

class AmbientHymnPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;
  private masterGain: GainNode | null = null;

  // Gentle pentatonic/hymn chords (frequencies in Hz): Fmaj7 -> C/E -> Dm7 -> Am -> G -> C
  private chordProgression: number[][] = [
    [174.61, 220.00, 261.63, 329.63], // Fmaj7 (F3, A3, C4, E4)
    [164.81, 196.00, 261.63, 329.63], // C/E (E3, G3, C4, E4)
    [146.83, 220.00, 261.63, 349.23], // Dm7 (D3, A3, C4, F4)
    [110.00, 220.00, 261.63, 329.63], // Am (A2, A3, C4, E4)
    [130.81, 196.00, 246.94, 293.66], // G (G2, G3, B3, D4)
    [130.81, 196.00, 261.63, 329.63, 523.25], // C (C3, G3, C4, E4, C5)
  ];
  private currentChordIndex = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playChord(frequencies: number[]) {
    if (!this.ctx || !this.masterGain) return;

    const chordDuration = 5.5; // seconds
    const now = this.ctx.currentTime;

    frequencies.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;

      // Soft sine/triangle oscillators
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx === 0 ? 'sine' : idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Low pass filter for warm, celestial church pad warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, now);
      filter.frequency.exponentialRampToValueAtTime(1100, now + 2.5);
      filter.frequency.exponentialRampToValueAtTime(500, now + chordDuration);

      // Attack & Release envelope (soft and reverent)
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.05, now + 1.2);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + chordDuration);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + chordDuration + 0.5);
    });
  }

  public start() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Play first chord immediately
    this.playChord(this.chordProgression[this.currentChordIndex]);
    this.currentChordIndex = (this.currentChordIndex + 1) % this.chordProgression.length;

    // Continue progression smoothly
    this.intervalId = window.setInterval(() => {
      if (!this.isPlaying) return;
      this.playChord(this.chordProgression[this.currentChordIndex]);
      this.currentChordIndex = (this.currentChordIndex + 1) % this.chordProgression.length;
    }, 5000);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const ambientHymn = new AmbientHymnPlayer();
