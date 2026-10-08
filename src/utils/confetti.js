import confetti from 'canvas-confetti';

export const triggerCelebration = () => {
  try {
    // Fire multiple celebratory bursts with high z-index
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 99999,
      disableForReducedMotion: true
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#10B981', '#059669', '#34D399', '#38BDF8']
    });

    fire(0.2, {
      spread: 60,
      colors: ['#10B981', '#14B8A6', '#06B6D4', '#6366F1']
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#10B981', '#F59E0B', '#EC4899', '#3B82F6']
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#10B981', '#34D399', '#A7F3D0']
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#10B981', '#06B6D4', '#FFFFFF']
    });
  } catch (err) {
    console.error('Confetti execution error:', err);
  }
};
