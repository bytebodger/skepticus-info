import { useEffect, useMemo, useState } from 'react';
import rehypeKatex from 'rehype-katex';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { Link, useParams } from 'react-router-dom';
import { getMarkdownDocsSorted } from '../data/docs';
import { SEO } from '../seo';

type LoadStatus = 'idle' | 'loading' | 'ready' | 'error';

export function DocsPage()
{
    const { slug } = useParams<{ slug?: string }>();
    const [filterValue, setFilterValue] = useState('');
    const [markdownContent, setMarkdownContent] = useState('');
    const [status, setStatus] = useState<LoadStatus>('idle');

    const docs = getMarkdownDocsSorted();
    const selectedDoc = docs.find((doc) => doc.slug === slug) ?? null;

    const filteredDocs = useMemo(() =>
    {
        const normalizedFilter = filterValue.trim().toLowerCase();

        if (!normalizedFilter)
        {
            return docs;
        }

        return docs.filter((doc) =>
            doc.title.toLowerCase().includes(normalizedFilter) ||
            doc.summary.toLowerCase().includes(normalizedFilter) ||
            doc.slug.toLowerCase().includes(normalizedFilter),
        );
    }, [docs, filterValue]);

    useEffect(() =>
    {
        if (!slug)
        {
            setMarkdownContent('');
            setStatus('idle');
            return;
        }

        if (!selectedDoc)
        {
            setMarkdownContent('');
            setStatus('error');
            return;
        }

        let isMounted = true;

        setStatus('loading');
        setMarkdownContent('');

        fetch(`/markdown/${selectedDoc.fileName}`)
            .then(async (response) =>
            {
                if (!response.ok)
                {
                    throw new Error(`Failed to load markdown: ${response.status}`);
                }

                return response.text();
            })
            .then((content) =>
            {
                if (!isMounted)
                {
                    return;
                }

                setMarkdownContent(content);
                setStatus('ready');
            })
            .catch(() =>
            {
                if (!isMounted)
                {
                    return;
                }

                setStatus('error');
            });

        return () =>
        {
            isMounted = false;
        };
    }, [selectedDoc, slug]);

    return (
        <section aria-labelledby='docs-heading'>
            <SEO
                title='Skepticus Info Hub | Docs'
                description='Search and open markdown docs directly inside the Skepticus dashboard.'
            />
            <header className='page-header'>
                <h2 id='docs-heading'>Docs</h2>
                <p className='muted'>Open markdown files directly in the dashboard, or use direct links for sharing.</p>
            </header>

            <div className='docs-layout'>
                <aside className='card docs-sidebar'>
                    <div className='docs-filter-wrap'>
                        <label htmlFor='docs-filter'
                            className='sr-only'>
                            Filter docs
                        </label>
                        <input
                            id='docs-filter'
                            type='text'
                            className='docs-filter'
                            value={filterValue}
                            onChange={(event) => setFilterValue(event.target.value)}
                            placeholder='Filter docs by title, summary, or slug'
                            aria-label='Filter docs'
                        />
                    </div>

                    <ul className='docs-title-list'
                        aria-label='Docs list'>
                        {filteredDocs.map((doc) => (
                            <li key={doc.slug}>
                                <Link
                                    to={`/docs/${doc.slug}`}
                                    className={`docs-title-link${slug === doc.slug ? ' active' : ''}`}
                                    aria-label={`Open doc: ${doc.title}`}
                                >
                                    <span className='docs-title'>{doc.title}</span>
                                    <span className='docs-summary'>{doc.summary}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {filteredDocs.length === 0 ? (
                        <p className='muted'>No docs match your filter.</p>
                    ) : null}
                </aside>

                <article className='card docs-viewer'
                    aria-live='polite'>
                    {!slug ? (
                        <p className='muted'>Select a document from the list to view it.</p>
                    ) : !selectedDoc ? (
                        <p className='muted'>That document was not found in the local docs index.</p>
                    ) : status === 'loading' ? (
                        <p className='muted'>Loading markdown...</p>
                    ) : status === 'error' ? (
                        <p className='muted'>Unable to load this markdown file. Check the path and filename.</p>
                    ) : (
                        <>
                            <div className='docs-viewer-header'>
                                <h3>{selectedDoc.title}</h3>
                                <a
                                    href={`/markdown/${selectedDoc.fileName}`}
                                    className='docs-raw-link'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Open raw markdown
                                </a>
                            </div>

                            <div className='docs-markdown'>
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm, remarkMath]}
                                    rehypePlugins={[rehypeKatex]}
                                >
                                    {markdownContent}
                                </ReactMarkdown>
                            </div>
                        </>
                    )}
                </article>
            </div>
        </section>
    );
}
