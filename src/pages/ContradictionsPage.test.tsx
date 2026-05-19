import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { ContradictionsPage } from './ContradictionsPage';

describe('ContradictionsPage', () =>
{
    it('renders an alphabetical title list and opens/closes a contradiction detail view', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <ContradictionsPage/>
            </HelmetProvider>,
        );

        const titleButtons = screen.getAllByRole('button', { name: /open contradiction:/i });
        expect(titleButtons.length).toBeGreaterThan(0);

        const labels = titleButtons.map((button) => button.textContent ?? '');
        const sorted = [...labels].sort((a, b) => a.localeCompare(b));
        expect(labels).toEqual(sorted);

        const filterInput = screen.getByRole('textbox', { name: 'Filter contradictions' });

        await user.type(filterInput, 'tested Abraham');
        expect(screen.getAllByRole('button', { name: /open contradiction:/i })).toHaveLength(1);
        expect(screen.getByRole('button', { name: /open contradiction: does yahweh tempt anyone\?/i })).toBeInTheDocument();

        await user.clear(filterInput);
        await user.type(filterInput, 'Genesis 7:2-3');
        expect(screen.getAllByRole('button', { name: /open contradiction:/i })).toHaveLength(1);
        expect(screen.getByRole('button', { name: /open contradiction: how many animals were taken onto the ark\?/i })).toBeInTheDocument();

        await user.clear(filterInput);
        await user.type(filterInput, 'ark');
        expect(screen.getAllByRole('button', { name: /open contradiction:/i })).toHaveLength(1);
        expect(screen.getByRole('button', { name: /open contradiction: how many animals were taken onto the ark\?/i })).toBeInTheDocument();

        await user.clear(filterInput);

        await user.click(screen.getByRole('button', { name: /open contradiction: can god be seen\?/i }));

        expect(screen.getByRole('heading', {
            level: 3,
            name: /can god be seen\?/i,
        })).toBeInTheDocument();
        expect(screen.getByRole('heading', {
            level: 4,
            name: 'On One Hand',
        })).toBeInTheDocument();
        expect(screen.getByRole('heading', {
            level: 4,
            name: 'On The Other Hand',
        })).toBeInTheDocument();
        expect(screen.getByText(/Genesis 32:30/i)).toBeInTheDocument();
        expect(screen.getByText(/John 1:18/i)).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Close Contradiction' }));

        expect(screen.getByRole('button', { name: /open contradiction: can god be seen\?/i })).toBeInTheDocument();
    });
});
