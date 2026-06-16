import { getFailedPropheciesSorted } from '../data/failedProphecies';
import { SEO } from '../seo';

export function FailedPropheciesPage()
{
    const failedProphecies = getFailedPropheciesSorted();

    return (
        <section aria-labelledby='failed-prophecies-heading'>
            <SEO
                title='Skepticus Info Hub | Failed Prophecies'
                description='Browse failed prophecy references sorted by canonical Bible order, chapter, and verse.'
            />
            <header className='page-header'>
                <h2 id='failed-prophecies-heading'>Failed Prophecies</h2>
                <p className='muted'>Sorted by canonical book order, then chapter, then verse.</p>
            </header>

            <ul className='stack'
                aria-label='Failed prophecy list'>
                {failedProphecies.map((item, index) => (
                    <li key={`${item.verse}-${index}`}
                        className='card'>
                        <h3>{item.verse}</h3>
                        <p>{item.description}</p>

                        <h4 className='section-gap'>Prophecy text</h4>
                        <blockquote className='prophecy-quote'>
                            <p className='prophecy-quote-text'>{item.text}</p>
                        </blockquote>

                        <h4>Fulfillment verse(s)</h4>
                        <ul className='tight-list'>
                            {item['fulfillment verse(s)'].map((fulfillment) => (
                                <li key={`${item.verse}-${fulfillment.verse}`}>
                                    <strong>{fulfillment.verse}:</strong> {fulfillment.text}
                                </li>
                            ))}
                        </ul>

                        {item.notes.length > 0 ? (
                            <>
                                <h4 className='section-gap'>Notes</h4>
                                <ul className='tight-list'>
                                    {item.notes.map((note) => (
                                        <li key={`${item.verse}-${note}`}>{note}</li>
                                    ))}
                                </ul>
                            </>
                        ) : null}
                    </li>
                ))}
            </ul>
        </section>
    );
}
