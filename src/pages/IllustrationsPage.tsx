import { useEffect, useState } from 'react';
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
    ];

    const sortedIllustrations = [...illustrations].sort((a, b) => a.name.localeCompare(b.name));

    const [selected, setSelected] = useState<Illustration | null>(null);

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

            <ul className='illustration-list'
                aria-label='Available illustrations'>
                {sortedIllustrations.map((item) => (
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
