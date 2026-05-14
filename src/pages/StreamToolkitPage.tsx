import { SEO } from '../seo';

const prepChecklist = [
    'Confirm stream title, thumbnail, and chapter markers.',
    'Open counter-apologetic module and source library tabs.',
    'Prepare two pinned links: source library and topic brief page.',
    'Queue backup discussion prompts in case of dead air.',
    'Validate audio levels and recording redundancy.',
];

const quickPrompts = [
    'What specific premise do you think is strongest in that argument?',
    'Which source best supports that claim, and is it primary?',
    'Are we discussing logical possibility or evidential probability?',
    'What result would change your view on this point?',
];

export function StreamToolkitPage()
{
    return (
        <section aria-labelledby='toolkit-heading'>
            <SEO
                title='Skepticus Info Hub | Stream Toolkit'
                description='Livestream operations checklist and high-value discussion prompts.'
            />
            <header className='page-header'>
                <h2 id='toolkit-heading'>Stream Toolkit</h2>
                <p className='muted'>Operational notes for smoother livestream flow.</p>
            </header>

            <div className='split-grid'>
                <article className='card'>
                    <h3>Pre-Stream Checklist</h3>
                    <ol className='tight-list'>
                        {prepChecklist.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </article>

                <article className='card'>
                    <h3>High-Value Prompts</h3>
                    <ul className='tight-list'>
                        {quickPrompts.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
}
