import { useEffect, useMemo, useState } from 'react';
import { BibleVerse, getBibleVersesSorted } from '../data/bibleVerses';
import { SEO } from '../seo';

export function BibleVersesPage()
{
    const [selectedVerse, setSelectedVerse] = useState<BibleVerse | null>(null);
    const [filterValue, setFilterValue] = useState('');
    const sortedVerses = getBibleVersesSorted();

    const filteredVerses = useMemo(() =>
    {
        const normalizedFilter = filterValue.trim().toLowerCase();

        if (!normalizedFilter)
        {
            return sortedVerses;
        }

        return sortedVerses.filter((item) =>
            item.verse.toLowerCase().includes(normalizedFilter) ||
            item.summary.toLowerCase().includes(normalizedFilter) ||
            item.text.toLowerCase().includes(normalizedFilter),
        );
    }, [filterValue, sortedVerses]);

    useEffect(() =>
    {
        if (!selectedVerse)
        {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (event: KeyboardEvent) =>
        {
            if (event.key === 'Escape')
            {
                setSelectedVerse(null);
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () =>
        {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [selectedVerse]);

    return (
        <section aria-labelledby='bible-verses-heading'>
            <SEO
                title='Skepticus Info Hub | Bible Verses'
                description='Browse sorted Bible verses with short summaries and open full verse text in an overlay.'
            />
            <header className='page-header'>
                <h2 id='bible-verses-heading'>Bible Verses</h2>
                <p className='muted'>Select a verse to open the full details.</p>
            </header>

            <div className='bible-verse-filter-wrap'>
                <label htmlFor='bible-verse-filter'
                    className='sr-only'>
                    Filter verses
                </label>
                <input
                    id='bible-verse-filter'
                    type='text'
                    className='bible-verse-filter'
                    value={filterValue}
                    onChange={(event) => setFilterValue(event.target.value)}
                    placeholder='Filter by verse, summary, or full text'
                    aria-label='Filter verses'
                />
            </div>

            <ul className='bible-verse-list'
                aria-label='Bible verse list'>
                {filteredVerses.map((item) => (
                    <li key={item.verse}>
                        <button
                            type='button'
                            className='bible-verse-button'
                            onClick={() => setSelectedVerse(item)}
                            aria-label={`Open verse: ${item.verse}`}
                        >
                            <span className='bible-verse-ref'>{item.verse}</span>
                            <span className='bible-verse-summary'>{item.summary}</span>
                        </button>
                    </li>
                ))}
            </ul>

            {filteredVerses.length === 0 ? (
                <p className='muted'>No verses match your filter.</p>
            ) : null}

            {selectedVerse ? (
                <div
                    className='bible-verse-overlay'
                    role='dialog'
                    aria-modal='true'
                    aria-labelledby='open-bible-verse-title'
                    onClick={(event) =>
                    {
                        if (event.target === event.currentTarget)
                        {
                            setSelectedVerse(null);
                        }
                    }}
                >
                    <article className='bible-verse-dialog'>
                        <button
                            type='button'
                            className='bible-verse-close'
                            onClick={() => setSelectedVerse(null)}
                            aria-label='Close verse details'
                        >
                            Close
                        </button>
                        <h3 id='open-bible-verse-title'
                            className='bible-verse-open-ref'>
                            {selectedVerse.verse}
                        </h3>
                        <p className='bible-verse-open-summary'>{selectedVerse.summary}</p>
                        <p className='bible-verse-open-text'>{selectedVerse.text}</p>
                    </article>
                </div>
            ) : null}
        </section>
    );
}
