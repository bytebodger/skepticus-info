import { useState } from 'react';
import { getSyllogismsSorted, Syllogism } from '../data/syllogisms';
import { SEO } from '../seo';

export function SyllogismsPage()
{
    const [selected, setSelected] = useState<Syllogism | null>(null);
    const sortedSyllogisms = getSyllogismsSorted();

    return (
        <section aria-labelledby='syllogisms-heading'>
            <SEO
                title='Skepticus Info Hub | Syllogisms'
                description='Browse and open full syllogisms with premises, conclusion, and notes.'
            />
            <header className='page-header'>
                <h2 id='syllogisms-heading'>Syllogisms</h2>
                <p className='muted'>Select a title to open the full syllogism.</p>
            </header>

            {selected ? (
                <article className='card syllogism-view'
                    aria-labelledby='open-syllogism-title'>
                    <h3 id='open-syllogism-title'>{selected.title}</h3>

                    <section aria-labelledby='premises-heading'
                        className='section-gap'>
                        <h4 id='premises-heading'
                            className='syllogism-subheading'>
                            Premises
                        </h4>
                        <ol className='syllogism-premise-list'>
                            {selected.premises.map((premise, index) => (
                                <li key={`${selected.id}-premise-${index}`}>
                                    {premise}
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section aria-labelledby='conclusion-heading'
                        className='section-gap'>
                        <p>
                            <strong>Conclusion:</strong><br/>{selected.conclusion}
                        </p>
                    </section>

                    {selected.notes.length > 0 ? (
                        <section aria-labelledby='notes-heading'
                            className='section-gap'>
                            <h4 id='notes-heading'
                                className='syllogism-subheading'>
                                Notes
                            </h4>
                            <ul className='syllogism-note-list'>
                                {selected.notes.map((note, index) => (
                                    <li key={`${selected.id}-note-${index}`}>{note}</li>
                                ))}
                            </ul>
                        </section>
                    ) : null}

                    <div className='syllogism-view-actions'>
                        <button type='button'
                            className='syllogism-clear'
                            onClick={() => setSelected(null)}>
                            Close Syllogism
                        </button>
                    </div>
                </article>
            ) : (
                <ul className='syllogism-title-list'
                    aria-label='Syllogism titles'>
                    {sortedSyllogisms.map((item) => (
                        <li key={item.id}>
                            <button
                                type='button'
                                className='syllogism-title-button'
                                onClick={() => setSelected(item)}
                                aria-label={`Open syllogism: ${item.title}`}
                            >
                                {item.title}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
