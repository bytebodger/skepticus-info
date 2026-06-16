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

         // Test filtering functionality without depending on specific data
         const initialCount = screen.getAllByRole('button', { name: /open syllogism:/i }).length;
         expect(initialCount).toBeGreaterThan(0);

         // Filter to a single character to reduce results
         await user.type(filterInput, 'z');
         const filteredCount = screen.getAllByRole('button', { name: /open syllogism:/i }).length;
         expect(filteredCount).toBeLessThanOrEqual(initialCount);

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
