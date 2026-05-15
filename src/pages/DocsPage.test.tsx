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

        const filterInput = screen.getByRole('textbox', { name: 'Filter docs' });
        await user.type(filterInput, 'hebrew population');

        expect(screen.getAllByRole('link', { name: /open doc:/i })).toHaveLength(1);
        expect(screen.getByRole('link', { name: 'Open doc: How Probable Was The Growth of the Hebrew Population in Egypt?' })).toBeInTheDocument();

        await user.clear(filterInput);
        await user.type(filterInput, 'no match at all');
        expect(screen.queryAllByRole('link', { name: /open doc:/i })).toHaveLength(0);
        expect(screen.getByText('No docs match your filter.')).toBeInTheDocument();
    });

    it('loads markdown content when a doc slug is opened directly', async () =>
    {
        const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
            new Response('## Loaded markdown body\n\n$$P(t)=P_0(1+r)^t$$\n\n- Bullet from markdown', {
                status: 200,
            }),
        );

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

        expect(fetchMock).toHaveBeenCalledWith('/markdown/the-growth-of-the-hebrew-population.md');
        expect(await screen.findByText('Loaded markdown body')).toBeInTheDocument();
        expect(screen.getByText('Bullet from markdown')).toBeInTheDocument();
        expect(document.querySelector('.katex')).not.toBeNull();

        const rawLink = screen.getByRole('link', { name: 'Open raw markdown' });
        expect(rawLink).toHaveAttribute('href', '/markdown/the-growth-of-the-hebrew-population.md');
    });
});
