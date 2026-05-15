import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { SyllogismsPage } from './SyllogismsPage';

describe('SyllogismsPage', () =>
{
    it('renders alphabetical title list and opens/closes a syllogism', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <SyllogismsPage/>
            </HelmetProvider>,
        );

        const titleButtons = screen.getAllByRole('button', { name: /open syllogism:/i });
        expect(titleButtons.length).toBeGreaterThan(0);

        const labels = titleButtons.map((button) => button.textContent ?? '');
        const sorted = [...labels].sort((a, b) => a.localeCompare(b));
        expect(labels).toEqual(sorted);

        const filterInput = screen.getByRole('textbox', { name: 'Filter syllogisms' });

        await user.type(filterInput, 'without guilt');
        expect(screen.getAllByRole('button', { name: /open syllogism:/i })).toHaveLength(1);
        expect(screen.getByRole('button', { name: 'Open syllogism: Yahweh Is Not Perfectly Just' })).toBeInTheDocument();

        await user.clear(filterInput);
        await user.type(filterInput, 'therefore, god cannot make a prophecy');
        expect(screen.getAllByRole('button', { name: /open syllogism:/i })).toHaveLength(1);
        expect(screen.getByRole('button', { name: 'Open syllogism: God Cannot Make A Prophecy' })).toBeInTheDocument();

        await user.clear(filterInput);
        await user.type(filterInput, 'covenant');
        expect(screen.getAllByRole('button', { name: /open syllogism:/i })).toHaveLength(1);
        expect(screen.getByRole('button', { name: 'Open syllogism: God Cannot Make A Prophecy' })).toBeInTheDocument();

        await user.clear(filterInput);

        const openedTitle = labels[0];

        await user.click(screen.getByRole('button', { name: `Open syllogism: ${openedTitle}` }));

        expect(screen.getByRole('heading', {
            level: 3,
            name: openedTitle,
        })).toBeInTheDocument();
        expect(screen.getByText('Conclusion:')).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Close Syllogism' }));

        expect(screen.getByRole('button', { name: `Open syllogism: ${openedTitle}` })).toBeInTheDocument();
    });
});
