import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { BibleVersesPage } from './BibleVersesPage';

describe('BibleVersesPage', () =>
{
    it('shows alphabetized verse list and opens/closes overlay details', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <BibleVersesPage/>
            </HelmetProvider>,
        );

        expect(screen.queryByText(/he seizes her and lies with her/i)).not.toBeInTheDocument();

        const verseButtons = screen.getAllByRole('button', { name: /open verse:/i });
        const verses = verseButtons.map((button) => button.getAttribute('aria-label')?.replace('Open verse: ', '') ?? '');
        const sortedVerses = [...verses].sort((a, b) => a.localeCompare(b));

        expect(verses).toEqual(sortedVerses);

        const filterInput = screen.getByRole('textbox', { name: 'Filter verses' });

        await user.type(filterInput, 'deuteronomy');
        expect(screen.getAllByRole('button', { name: /open verse:/i })).toHaveLength(1);
        expect(screen.getByRole('button', { name: 'Open verse: Deuteronomy 22:28-29' })).toBeInTheDocument();

        await user.clear(filterInput);
        await user.type(filterInput, 'same-sex relations');
        expect(screen.getAllByRole('button', { name: /open verse:/i })).toHaveLength(1);
        expect(screen.getByRole('button', { name: 'Open verse: Leviticus 20:13' })).toBeInTheDocument();

        await user.clear(filterInput);
        await user.type(filterInput, 'fifty shekels of silver');
        expect(screen.getAllByRole('button', { name: /open verse:/i })).toHaveLength(1);
        expect(screen.getByRole('button', { name: 'Open verse: Deuteronomy 22:28-29' })).toBeInTheDocument();

        await user.clear(filterInput);

        await user.click(screen.getByRole('button', { name: 'Open verse: Deuteronomy 22:28-29' }));

        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('heading', {
            level: 3,
            name: 'Deuteronomy 22:28-29',
        })).toBeInTheDocument();

        const openDialog = screen.getByRole('dialog');
        expect(openDialog).toHaveTextContent('Rape victim forced to marry rapist');
        expect(openDialog).toHaveTextContent(/fifty shekels of silver/i);

        await user.click(screen.getByRole('button', { name: 'Close verse details' }));

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
});
