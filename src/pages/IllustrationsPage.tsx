import { useEffect, useMemo, useState } from 'react';
import { SEO } from '../seo';

type Illustration = {
    id: string;
    name: string;
    path: string;
    alt: string;
};

export function IllustrationsPage()
{
    const illustrations: Illustration[] = [
        {
            id: 'pi-proves-god',
            name: 'Pi Proves God',
            path: '/illustrations/pi-proves-god.png',
            alt: 'The fallacy of fine tuning illustrated with pi.',
        },
        {
            id: 'where-the-watchmaker-ends',
            name: 'Where the Watchmaker Ends',
            path: '/illustrations/where-the-watchmaker-ends.png',
            alt: 'The fallacy of the watchmaker illustrated with a logical hierarchy.',
        },
        {
            id: 'gods-plan-for-marriage',
            name: 'God\'s Plan for Marriage',
            path: '/illustrations/gods-plan-for-marriage.jpg',
            alt: 'A humorous illustration of the biblical plan for marriage.',
        },
        {
            id: 'the-evolution-of-language',
            name: 'The Evolution of Language',
            path: '/illustrations/indo-european-languages.png',
            alt: 'A language tree of Indo-European languages, illustrating the evolution of language.',
        },
    ];

    const sortedIllustrations = [...illustrations].sort((a, b) => a.name.localeCompare(b.name));

    const [selected, setSelected] = useState<Illustration | null>(null);
    const [filterValue, setFilterValue] = useState('');
    const filteredIllustrations = useMemo(() =>
    {
        const normalizedFilter = filterValue.trim().toLowerCase();

        if (!normalizedFilter)
        {
            return sortedIllustrations;
        }

        return sortedIllustrations.filter((item) =>
            item.name.toLowerCase().includes(normalizedFilter) ||
            item.alt.toLowerCase().includes(normalizedFilter),
        );
    }, [filterValue, sortedIllustrations]);

    useEffect(() =>
    {
        if (!selected)
        {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (event: KeyboardEvent) =>
        {
            if (event.key === 'Escape')
            {
                setSelected(null);
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () =>
        {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [selected]);

    return (
        <section aria-labelledby='illustrations-heading'>
            <SEO
                title='Skepticus Info Hub | Illustrations'
                description='Open visual illustrations in a full-screen overlay for livestream and viewer reference.'
            />
            <header className='page-header'>
                <h2 id='illustrations-heading'>Illustrations</h2>
                <p className='muted'>Select an illustration title to open it in a full-screen viewer.</p>
            </header>

            <div className='illustration-filter-wrap'>
                <label htmlFor='illustration-filter'
                    className='sr-only'>
                    Filter illustrations
                </label>
                <input
                    id='illustration-filter'
                    type='text'
                    className='illustration-filter'
                    value={filterValue}
                    onChange={(event) => setFilterValue(event.target.value)}
                    placeholder='Filter illustrations by title or description'
                    aria-label='Filter illustrations'
                />
            </div>

            <ul className='illustration-list'
                aria-label='Available illustrations'>
                {filteredIllustrations.map((item) => (
                    <li key={item.id}>
                        <button
                            type='button'
                            className='illustration-link'
                            onClick={() => setSelected(item)}
                            aria-label={`Open illustration: ${item.name}`}
                        >
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>

            {filteredIllustrations.length === 0 ? (
                <p className='muted'>No illustrations match your filter.</p>
            ) : null}

            {selected ? (
                <div className='illustration-overlay'
                    role='dialog'
                    aria-modal='true'
                    aria-label={selected.name}>
                    <button
                        type='button'
                        className='illustration-close'
                        onClick={() => setSelected(null)}
                        aria-label='Close illustration'
                    >
                        Close
                    </button>
                    <div className='illustration-stage'>
                        <img className='illustration-image'
                            src={selected.path}
                            alt={selected.alt}/>
                    </div>
                </div>
            ) : null}
        </section>
    );
}
