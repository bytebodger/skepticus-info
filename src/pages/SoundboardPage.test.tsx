import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { SoundboardPage } from './SoundboardPage';

describe('SoundboardPage', () =>
{
    it('filters sounds by name', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <SoundboardPage/>
            </HelmetProvider>,
        );

        expect(screen.getAllByRole('button').length).toBeGreaterThan(1);

        const filterInput = screen.getByRole('textbox', { name: 'Filter sounds' });

        await user.type(filterInput, 'air horn');
        expect(screen.getAllByRole('button')).toHaveLength(1);
        expect(screen.getByRole('button', { name: 'Play DJ Air Horn' })).toBeInTheDocument();

        await user.clear(filterInput);
        await user.type(filterInput, 'no match');
        expect(screen.queryAllByRole('button', { name: /play |pause |resume /i })).toHaveLength(0);
        expect(screen.getByText('No sounds match your filter.')).toBeInTheDocument();
    });
});
