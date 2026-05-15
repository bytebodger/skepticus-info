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
        expect(screen.getByRole('button', { name: 'Open contradiction: Does Yahweh Tempt Anyone?' })).toBeInTheDocument();

        await user.clear(filterInput);
        await user.type(filterInput, 'Genesis 7:2-3');
        expect(screen.getAllByRole('button', { name: /open contradiction:/i })).toHaveLength(1);
        expect(screen.getByRole('button', { name: 'Open contradiction: How Many Animals Were Taken Onto the Ark?' })).toBeInTheDocument();

        await user.clear(filterInput);

        await user.click(screen.getByRole('button', { name: 'Open contradiction: Can God Be Seen?' }));

        expect(screen.getByRole('heading', {
            level: 3,
            name: 'Can God Be Seen?',
        })).toBeInTheDocument();
        expect(screen.getByRole('heading', {
            level: 4,
            name: 'On One Hand',
        })).toBeInTheDocument();
        expect(screen.getByRole('heading', {
            level: 4,
            name: 'On The Other Hand',
        })).toBeInTheDocument();
        expect(screen.getByText('Genesis 32:30; Exodus 24:9-11')).toBeInTheDocument();
        expect(screen.getByText('John 1:18; 1 Timothy 6:16')).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Close Contradiction' }));

        expect(screen.getByRole('button', { name: 'Open contradiction: Can God Be Seen?' })).toBeInTheDocument();
    });
});
