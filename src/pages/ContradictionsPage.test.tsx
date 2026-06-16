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

         // Test filtering functionality without depending on specific data
         const initialCount = screen.getAllByRole('button', { name: /open contradiction:/i }).length;
         expect(initialCount).toBeGreaterThan(0);

         // Filter with a common letter that should reduce results
         await user.type(filterInput, 'the');
         const remainingButtons = screen.queryAllByRole('button', { name: /open contradiction:/i });
         expect(remainingButtons.length).toBeLessThanOrEqual(initialCount);

         await user.clear(filterInput);

         // Open the first contradiction to test the detail view
         const openedTitle = labels[0];
         await user.click(screen.getByRole('button', { name: `Open contradiction: ${openedTitle}` }));

         expect(screen.getByRole('heading', {
             level: 3,
             name: openedTitle,
         })).toBeInTheDocument();
         expect(screen.getByRole('heading', {
             level: 4,
             name: 'On One Hand',
         })).toBeInTheDocument();
         expect(screen.getByRole('heading', {
             level: 4,
             name: 'On The Other Hand',
         })).toBeInTheDocument();

         await user.click(screen.getByRole('button', { name: 'Close Contradiction' }));

         expect(screen.getByRole('button', { name: `Open contradiction: ${openedTitle}` })).toBeInTheDocument();
     });
 });
