import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { ProphecyScorecardPage } from './ProphecyScorecardPage';

describe('ProphecyScorecardPage', () =>
{
    it('prompts for scorecard values before showing the scorecard and allows clearing', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <ProphecyScorecardPage/>
            </HelmetProvider>,
        );

        expect(screen.getByRole('heading', {
            level: 2,
            name: 'Prophecy Scorecard',
        })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Show Scorecard' })).toBeDisabled();
        expect(screen.queryByRole('table')).not.toBeInTheDocument();

        await user.type(screen.getByLabelText('Target verse'), 'Genesis 14:18');
        await user.type(screen.getByLabelText('Description'), 'The Last Supper foreshadowed');
        await user.type(screen.getByLabelText('Fulfillment verse'), 'Matthew 26:26-29');
        await user.click(screen.getByRole('button', { name: 'Show Scorecard' }));

        const scorecard = screen.getByRole('table');
        expect(scorecard).toBeInTheDocument();
        expect(scorecard).toHaveTextContent('Genesis 14:18');
        expect(scorecard).toHaveTextContent('The Last Supper foreshadowed');
        expect(scorecard).toHaveTextContent('Matthew 26:26-29');
        expect(screen.getByRole('button', { name: 'Clear and enter new values' })).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Clear and enter new values' }));

        expect(screen.getByRole('button', { name: 'Show Scorecard' })).toBeDisabled();
        expect(screen.queryByRole('table')).not.toBeInTheDocument();
        expect(screen.getByLabelText('Target verse')).toHaveValue('');
        expect(screen.getByLabelText('Description')).toHaveValue('');
        expect(screen.getByLabelText('Fulfillment verse')).toHaveValue('');
    });
});
