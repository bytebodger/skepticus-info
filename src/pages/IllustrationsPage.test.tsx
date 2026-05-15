import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { IllustrationsPage } from './IllustrationsPage';

describe('IllustrationsPage', () =>
{
    it('filters illustrations by title and alt text, then still opens the selected illustration', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <IllustrationsPage/>
            </HelmetProvider>,
        );

        const filterInput = screen.getByRole('textbox', { name: 'Filter illustrations' });

        await user.type(filterInput, 'god\'s plan');
        expect(screen.getAllByRole('button', { name: /open illustration:/i })).toHaveLength(1);
        expect(screen.getByRole('button', { name: 'Open illustration: God\'s Plan for Marriage' })).toBeInTheDocument();

        await user.clear(filterInput);
        await user.type(filterInput, 'language tree');
        expect(screen.getAllByRole('button', { name: /open illustration:/i })).toHaveLength(1);
        expect(screen.getByRole('button', { name: 'Open illustration: The Evolution of Language' })).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Open illustration: The Evolution of Language' }));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('dialog', { name: 'The Evolution of Language' })).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Close illustration' }));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
});
