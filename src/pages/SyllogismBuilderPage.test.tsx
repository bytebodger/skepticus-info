import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { SyllogismBuilderPage } from './SyllogismBuilderPage';

describe('SyllogismBuilderPage', () =>
{
    it('adds premises with ordinals and allows removing a premise', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <SyllogismBuilderPage/>
            </HelmetProvider>,
        );

        await user.type(screen.getByLabelText('Add premise'), 'All humans are mortal.');
        await user.click(screen.getByRole('button', { name: 'Add Premise' }));
        await user.type(screen.getByLabelText('Add premise'), 'Socrates is human.');
        await user.click(screen.getByRole('button', { name: 'Add Premise' }));

        expect(screen.getByText('Premise 1:')).toBeInTheDocument();
        expect(screen.getByText('Premise 2:')).toBeInTheDocument();

        await user.click(screen.getAllByRole('button', { name: 'Remove' })[0]);
        expect(screen.queryByText('All humans are mortal.')).not.toBeInTheDocument();
    });

    it('allows only one conclusion at a time and clears all content', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <SyllogismBuilderPage/>
            </HelmetProvider>,
        );

        await user.type(screen.getByLabelText('Set conclusion'), 'Therefore, Socrates is mortal.');
        await user.click(screen.getByRole('button', { name: 'Set Conclusion' }));

        const conclusionInput = screen.getByLabelText('Set conclusion');
        expect(conclusionInput).toBeDisabled();
        expect(screen.getByRole('button', { name: 'Remove Conclusion' })).toBeInTheDocument();

        await user.type(screen.getByLabelText('Add premise'), 'A is B.');
        await user.click(screen.getByRole('button', { name: 'Add Premise' }));

        await user.click(screen.getByRole('button', { name: 'Clear All' }));

        expect(screen.queryByRole('button', { name: 'Remove Conclusion' })).not.toBeInTheDocument();
        expect(screen.queryByText('Premise 1:')).not.toBeInTheDocument();
        expect(screen.getByLabelText('Set conclusion')).not.toBeDisabled();
    });
});
