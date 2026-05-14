import { counterArguments } from '../data/resources';
import { SEO } from '../seo';

export function CounterApologeticsPage()
{
    return (
        <section aria-labelledby='counter-heading'>
            <SEO
                title='Skepticus Info Hub | Counter-Apologetics'
                description='Fast rebuttal references for common apologetic claims.'
            />
            <header className='page-header'>
                <h2 id='counter-heading'>Counter-Apologetic Reference</h2>
                <p className='muted'>Use concise, source-backed responses during fast-moving debates.</p>
            </header>

            <div className='card-grid'>
                {counterArguments.map((item) => (
                    <article key={item.claim}
                        className='card'>
                        <h3>{item.claim}</h3>
                        <p>{item.response}</p>
                        <p className='muted'>
                            <strong>Suggested sources:</strong> {item.sources.join(' | ')}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
