import { researchBriefs } from '../data/resources';
import { SEO } from '../seo';

export function ResearchBriefsPage()
{
    return (
        <section aria-labelledby='briefs-heading'>
            <SEO
                title='Skepticus Info Hub | Research Briefs'
                description='Condensed notes on philosophy, religion, science, and debate strategy.'
            />
            <header className='page-header'>
                <h2 id='briefs-heading'>Research Briefs</h2>
                <p className='muted'>Short-form research notes designed for prep and on-air retrieval.</p>
            </header>

            <div className='stack'>
                {researchBriefs.map((brief) => (
                    <article key={brief.topic}
                        className='card'>
                        <h3>{brief.topic}</h3>
                        <p>{brief.summary}</p>
                        <p className='muted'>Last reviewed: {brief.lastReviewed}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
