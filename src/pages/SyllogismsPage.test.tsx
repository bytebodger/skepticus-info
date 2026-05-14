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

        await user.click(screen.getByRole('button', { name: 'Open syllogism: All Humans Are Mortal' }));

        expect(screen.getByRole('heading', {
            level: 3,
            name: 'All Humans Are Mortal',
        })).toBeInTheDocument();
        expect(screen.getByText('Conclusion:')).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Close Syllogism' }));

        expect(screen.getByRole('button', { name: 'Open syllogism: All Humans Are Mortal' })).toBeInTheDocument();
    });
});
