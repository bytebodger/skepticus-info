import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { DocsPage } from './DocsPage';

describe('DocsPage', () =>
{
    afterEach(() =>
    {
        vi.restoreAllMocks();
    });

    it('renders a sorted docs list and filters by title/summary/slug', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <MemoryRouter initialEntries={['/docs']}>
                    <Routes>
                        <Route path='/docs'
                            element={<DocsPage/>}/>
                        <Route path='/docs/:slug'
                            element={<DocsPage/>}/>
                    </Routes>
                </MemoryRouter>
            </HelmetProvider>,
        );

        const docLinks = screen.getAllByRole('link', { name: /open doc:/i });
        expect(docLinks.length).toBeGreaterThan(0);

        const labels = docLinks.map((link) => link.textContent ?? '');
        const sorted = [...labels].sort((a, b) => a.localeCompare(b));
        expect(labels).toEqual(sorted);

        const filterInput = screen.getByRole('textbox', { name: 'Search docs' });
        await user.type(filterInput, 'hebrew population');

        expect(screen.getAllByRole('link', { name: /open doc:/i })).toHaveLength(1);
        expect(screen.getByRole('link', { name: 'Open doc: How Probable Was The Growth of the Hebrew Population in Egypt?' })).toBeInTheDocument();

        await user.clear(filterInput);
        await user.type(filterInput, 'no match at all');
        expect(screen.queryAllByRole('link', { name: /open doc:/i })).toHaveLength(0);
        expect(screen.getByText('No docs match your filter.')).toBeInTheDocument();
    });

    it('filters docs by markdown content', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <MemoryRouter initialEntries={['/docs']}>
                    <Routes>
                        <Route path='/docs'
                            element={<DocsPage/>}/>
                        <Route path='/docs/:slug'
                            element={<DocsPage/>}/>
                    </Routes>
                </MemoryRouter>
            </HelmetProvider>,
        );

        // Wait for markdown content to load
        await vi.waitFor(() =>
        {
            expect(screen.queryByText('No docs match your filter.')).not.toBeInTheDocument();
        }, { timeout: 5000 });

        const filterInput = screen.getByRole('textbox', { name: 'Search docs' });

        // Search for a word that appears in the markdown content of "the-growth-of-the-hebrew-population"
        await user.type(filterInput, 'genealogy');

        // This should find the Hebrew population doc
        expect(screen.getAllByRole('link', { name: /open doc:/i })).toHaveLength(1);
        expect(screen.getByRole('link', { name: 'Open doc: How Probable Was The Growth of the Hebrew Population in Egypt?' })).toBeInTheDocument();
    });

    it('loads markdown content when a doc slug is opened directly', async () =>
    {
        vi.spyOn(globalThis, 'fetch').mockImplementation((url) =>
        {
            const urlStr = url instanceof Request ? url.url : String(url);
            if (urlStr.endsWith('.md'))
            {
                // For the selected doc, return the mock content
                if (urlStr.includes('the-growth-of-the-hebrew-population'))
                {
                    return Promise.resolve(
                        new Response('## Loaded markdown body\n\n$$P(t)=P_0(1+r)^t$$\n\n- Bullet from markdown', {
                            status: 200,
                        }),
                    );
                }
                // For other markdown files, return empty content (they're loaded but not displayed)
                return Promise.resolve(
                    new Response('', {
                        status: 200,
                    }),
                );
            }
            return Promise.reject(new Error('Unexpected fetch'));
        });

        render(
            <HelmetProvider>
                <MemoryRouter initialEntries={['/docs/the-growth-of-the-hebrew-population']}>
                    <Routes>
                        <Route path='/docs'
                            element={<DocsPage/>}/>
                        <Route path='/docs/:slug'
                            element={<DocsPage/>}/>
                    </Routes>
                </MemoryRouter>
            </HelmetProvider>,
        );

        expect(await screen.findByText('Loaded markdown body')).toBeInTheDocument();
        expect(screen.getByText('Bullet from markdown')).toBeInTheDocument();
        expect(document.querySelector('.katex')).not.toBeNull();

        const rawLink = screen.getByRole('link', { name: 'Open raw markdown' });
        expect(rawLink).toHaveAttribute('href', '/markdown/the-growth-of-the-hebrew-population.md');
    });
});
