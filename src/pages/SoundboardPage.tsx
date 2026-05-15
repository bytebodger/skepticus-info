import { useMemo, useRef, useState } from 'react';
import { getSoundsSorted } from '../data/sounds';
import { SEO } from '../seo';

export function SoundboardPage()
{
    const [playingSoundId, setPlayingSoundId] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [filterValue, setFilterValue] = useState('');
    const audioRef = useRef<HTMLAudioElement>(null);

    const sounds = getSoundsSorted();
    const filteredSounds = useMemo(() =>
    {
        const normalizedFilter = filterValue.trim().toLowerCase();

        if (!normalizedFilter)
        {
            return sounds;
        }

        return sounds.filter((sound) => sound.name.toLowerCase().includes(normalizedFilter));
    }, [filterValue, sounds]);

    const handleSoundClick = (soundPath: string, soundId: string) =>
    {
        if (!audioRef.current) return;

        // If clicking the same sound that's paused, resume it
        if (playingSoundId === soundId && isPaused)
        {
            audioRef.current.play().catch((err) =>
            {
                console.error('Failed to resume sound:', err);
            });
            setIsPaused(false);
            return;
        }

        // If clicking the same sound that's playing, pause it
        if (playingSoundId === soundId && !isPaused)
        {
            audioRef.current.pause();
            setIsPaused(true);
            return;
        }

        // Otherwise, start a new sound from the beginning
        audioRef.current.src = soundPath;
        audioRef.current.play().catch((err) =>
        {
            console.error('Failed to play sound:', err);
        });
        setPlayingSoundId(soundId);
        setIsPaused(false);
    };

    const handleAudioEnd = () =>
    {
        setPlayingSoundId(null);
        setIsPaused(false);
    };

    return (
        <section aria-labelledby='soundboard-heading'>
            <SEO
                title='Skepticus Info Hub | Soundboard'
                description='Sound effects and audio clips for livestream use.'
            />
            <header className='page-header'>
                <h2 id='soundboard-heading'>Soundboard</h2>
                <p className='muted'>Click a sound to play it during your stream.</p>
            </header>

            <div className='sound-filter-wrap'>
                <label htmlFor='sound-filter'
                    className='sr-only'>
                    Filter sounds
                </label>
                <input
                    id='sound-filter'
                    type='text'
                    className='sound-filter'
                    value={filterValue}
                    onChange={(event) => setFilterValue(event.target.value)}
                    placeholder='Filter sounds by name'
                    aria-label='Filter sounds'
                />
            </div>

            <div className='soundboard'
                role='region'
                aria-live='polite'>
                <ul className='sound-list'>
                    {filteredSounds.map((sound) =>
                    {
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
                                    <span className='sound-name'>{sound.name}</span>
                                    <span className='play-indicator'
                                        aria-hidden='true'>
                    {isPlaying ? '⏸ pause' : isPausedState ? '▶ resume' : '▶ play'}
                  </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {filteredSounds.length === 0 ? (
                    <p className='muted'>No sounds match your filter.</p>
                ) : null}
            </div>

            <audio ref={audioRef}
                onEnded={handleAudioEnd}/>
        </section>
    );
}
