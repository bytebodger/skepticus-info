import { useMemo, useState } from 'react';
import { Contradiction, getContradictionsSorted } from '../data/contradictions';
import { SEO } from '../seo';

export function ContradictionsPage()
{
    const [selected, setSelected] = useState<Contradiction | null>(null);
    const [filterValue, setFilterValue] = useState('');
    const sortedContradictions = getContradictionsSorted();
    const filteredContradictions = useMemo(() =>
    {
        const normalizedFilter = filterValue.trim().toLowerCase();

        if (!normalizedFilter)
        {
            return sortedContradictions;
        }

        return sortedContradictions.filter((item) =>
            item.title.toLowerCase().includes(normalizedFilter) ||
            item.oneHand.toLowerCase().includes(normalizedFilter) ||
            item.oneHandVerses.toLowerCase().includes(normalizedFilter) ||
            item.otherHand.toLowerCase().includes(normalizedFilter) ||
            item.otherHandVerses.toLowerCase().includes(normalizedFilter),
        );
    }, [filterValue, sortedContradictions]);

    return (
        <section aria-labelledby='contradictions-heading'>
            <SEO
                title='Skepticus Info Hub | Contradictions'
                description='Browse contradiction references with both sides and supporting verse citations.'
            />
            <header className='page-header'>
                <h2 id='contradictions-heading'>Contradictions</h2>
                <p className='muted'>Select a contradiction title to open the full reference card.</p>
            </header>

            {selected ? (
                <article className='card contradiction-view'
                    aria-labelledby='open-contradiction-title'>
                    <h3 id='open-contradiction-title'>{selected.title}</h3>

                    <section className='section-gap'
                        aria-labelledby='one-hand-heading'>
                        <h4 id='one-hand-heading'
                            className='contradiction-subheading'>
                            On One Hand
                        </h4>
                        <p>{selected.oneHand}</p>
                        <p>
                            <strong>Verses:</strong><br/>{selected.oneHandVerses}
                        </p>
                    </section>

                    <section className='section-gap'
                        aria-labelledby='other-hand-heading'>
                        <h4 id='other-hand-heading'
                            className='contradiction-subheading'>
                            On The Other Hand
                        </h4>
                        <p>{selected.otherHand}</p>
                        <p>
                            <strong>Verses:</strong><br/>{selected.otherHandVerses}
                        </p>
                    </section>

                    <div className='contradiction-view-actions'>
                        <button
                            type='button'
                            className='syllogism-clear'
                            onClick={() => setSelected(null)}
                        >
                            Close Contradiction
                        </button>
                    </div>
                </article>
            ) : (
                <>
                    <div className='contradiction-filter-wrap'>
                        <label htmlFor='contradiction-filter'
                            className='sr-only'>
                            Filter contradictions
                        </label>
                        <input
                            id='contradiction-filter'
                            type='text'
                            className='contradiction-filter'
                            value={filterValue}
                            onChange={(event) => setFilterValue(event.target.value)}
                            placeholder='Filter by title, either hand, or verse references'
                            aria-label='Filter contradictions'
                        />
                    </div>

                    <ul className='contradiction-title-list'
                        aria-label='Contradiction titles'>
                        {filteredContradictions.map((item) => (
                            <li key={item.title}>
                                <button
                                    type='button'
                                    className='contradiction-title-button'
                                    onClick={() => setSelected(item)}
                                    aria-label={`Open contradiction: ${item.title}`}
                                >
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {filteredContradictions.length === 0 ? (
                        <p className='muted'>No contradictions match your filter.</p>
                    ) : null}
                </>
            )}
        </section>
    );
}
