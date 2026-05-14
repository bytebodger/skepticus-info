import { useRef, useState } from 'react';
import { SEO } from '../seo';
import { getSoundsSorted } from '../data/sounds';

export function SoundboardPage() {
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const sounds = getSoundsSorted();

  const playSound = (soundPath: string, soundId: string) => {
    if (audioRef.current) {
      audioRef.current.src = soundPath;
      audioRef.current.play().catch((err) => {
        console.error('Failed to play sound:', err);
      });
      setPlaying(soundId);
    }
  };

  const handleAudioEnd = () => {
    setPlaying(null);
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
          {sounds.map((sound) => (
            <li key={sound.id}>
              <button
                className={`sound-button${playing === sound.id ? ' playing' : ''}`}
                onClick={() => playSound(sound.path, sound.id)}
                aria-label={`Play ${sound.name}`}
              >
                <span className="sound-name">{sound.name}</span>
                <span className="play-indicator" aria-hidden="true">
                  {playing === sound.id ? '▶ playing' : '▶'}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <audio ref={audioRef} onEnded={handleAudioEnd} />
    </section>
  );
}
