import { SEO } from '../seo';

export function DashboardPage()
{
    return (
        <section aria-labelledby='overview-heading'>
            <SEO
                title='Skepticus Info Hub | Overview'
                description='Quick dashboard metrics and latest skeptical research briefs.'
            />
            <header className={'page-header'}>
                <h1 id={'livestream-details'}>
                    Call in every Tuesday night 5PM CST (until...?) for the Skepticus livestream!
                </h1>
                <h1>
                    <a
                        aria-label={'Join the Skepticus livestream on YouTube'}
                        href={'https://tiny.cc/skepticus'}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        Join the livestream
                    </a>
                </h1>
            </header>
        </section>
    );
}
