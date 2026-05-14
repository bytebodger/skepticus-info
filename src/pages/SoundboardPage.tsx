import { useRef, useState } from 'react';
import { SEO } from '../seo';
import { getSoundsSorted } from '../data/sounds';

export function SoundboardPage() {
  const [playingSoundId, setPlayingSoundId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const sounds = getSoundsSorted();

  const handleSoundClick = (soundPath: string, soundId: string) => {
    if (!audioRef.current) return;

    // If clicking the same sound that's paused, resume it
    if (playingSoundId === soundId && isPaused) {
      audioRef.current.play().catch((err) => {
        console.error('Failed to resume sound:', err);
      });
      setIsPaused(false);
      return;
    }

    // If clicking the same sound that's playing, pause it
    if (playingSoundId === soundId && !isPaused) {
      audioRef.current.pause();
      setIsPaused(true);
      return;
    }

    // Otherwise, start a new sound from the beginning
    audioRef.current.src = soundPath;
    audioRef.current.play().catch((err) => {
      console.error('Failed to play sound:', err);
    });
    setPlayingSoundId(soundId);
    setIsPaused(false);
  };

  const handleAudioEnd = () => {
    setPlayingSoundId(null);
    setIsPaused(false);
  };

  return (
    <section aria-labelledby="soundboard-heading">
      <SEO
        title="Skepticus Info Hub | Soundboard"
        description="Sound effects and audio clips for livestream use."
      />
      <header className="page-header">
        <h2 id="soundboard-heading">Soundboard</h2>
        <p className="muted">Click a sound to play it during your stream.</p>
      </header>

      <div className="soundboard" role="region" aria-live="polite">
        <ul className="sound-list">
          {sounds.map((sound) => {
            const isThisSound = playingSoundId === sound.id;
            const isPlaying = isThisSound && !isPaused;
            const isPausedState = isThisSound && isPaused;

            return (
              <li key={sound.id}>
                <button
                  className={`sound-button${isPlaying ? ' playing' : ''}${isPausedState ? ' paused' : ''}`}
                  onClick={() => handleSoundClick(sound.path, sound.id)}
                  aria-label={
                    isPlaying
                      ? `Pause ${sound.name}`
                      : isPausedState
                        ? `Resume ${sound.name}`
                        : `Play ${sound.name}`
                  }
                >
                  <span className="sound-name">{sound.name}</span>
                  <span className="play-indicator" aria-hidden="true">
                    {isPlaying ? '⏸ pause' : isPausedState ? '▶ resume' : '▶ play'}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <audio ref={audioRef} onEnded={handleAudioEnd} />
    </section>
  );
}
