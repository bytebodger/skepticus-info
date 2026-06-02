import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { GalleryPage } from './GalleryPage';

describe('GalleryPage', () =>
{
    it('sorts by title, filters by title text, and opens/closes the lightbox', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <GalleryPage/>
            </HelmetProvider>,
        );

        const openButtons = screen.getAllByRole('button', { name: /open gallery image:/i });
        expect(openButtons.length).toBeGreaterThan(4);
        expect(openButtons[0]).toHaveAccessibleName('Open gallery image: A Threatening God');
        expect(openButtons[1]).toHaveAccessibleName('Open gallery image: Aaron Dead On Mount Hor');

        const filterInput = screen.getByRole('textbox', { name: 'Filter gallery images' });
        await user.type(filterInput, 'crocodile');

        const filteredButtons = screen.getAllByRole('button', { name: /open gallery image:/i });
        expect(filteredButtons).toHaveLength(1);
        expect(filteredButtons[0]).toHaveAccessibleName('Open gallery image: Crocodile Moses');

        await user.click(filteredButtons[0]);
        expect(screen.getByRole('dialog', { name: 'Crocodile Moses' })).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Close gallery image' }));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('supports keyboard, overlay-button navigation, and closes when clicking outside the image stage', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <GalleryPage/>
            </HelmetProvider>,
        );

        await user.click(screen.getByRole('button', { name: 'Open gallery image: A Threatening God' }));

        expect(screen.getByRole('dialog', { name: 'A Threatening God' })).toBeInTheDocument();

        await user.keyboard('{ArrowRight}');
        expect(screen.getByRole('dialog', { name: 'Aaron Dead On Mount Hor' })).toBeInTheDocument();

        await user.keyboard('{ArrowLeft}');
        expect(screen.getByRole('dialog', { name: 'A Threatening God' })).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Next gallery image' }));
        expect(screen.getByRole('dialog', { name: 'Aaron Dead On Mount Hor' })).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Previous gallery image' }));
        expect(screen.getByRole('dialog', { name: 'A Threatening God' })).toBeInTheDocument();

        const dialog = screen.getByRole('dialog', { name: 'A Threatening God' });
        await user.click(dialog);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('supports swipe gestures for next/previous image navigation', async () =>
    {
        const user = userEvent.setup();

        render(
            <HelmetProvider>
                <GalleryPage/>
            </HelmetProvider>,
        );

        await user.click(screen.getByRole('button', { name: 'Open gallery image: A Threatening God' }));

        const dialog = screen.getByRole('dialog', { name: 'A Threatening God' });
        const image = within(dialog).getByRole('img', { name: 'A Threatening God' });

        fireEvent.touchStart(image, { touches: [{ clientX: 260 }] });
        fireEvent.touchEnd(image, { changedTouches: [{ clientX: 120 }] });
        expect(screen.getByRole('dialog', { name: 'Aaron Dead On Mount Hor' })).toBeInTheDocument();

        const nextDialog = screen.getByRole('dialog', { name: 'Aaron Dead On Mount Hor' });
        const nextImage = within(nextDialog).getByRole('img', { name: 'Aaron Dead On Mount Hor' });
        fireEvent.touchStart(nextImage, { touches: [{ clientX: 120 }] });
        fireEvent.touchEnd(nextImage, { changedTouches: [{ clientX: 260 }] });
        expect(screen.getByRole('dialog', { name: 'A Threatening God' })).toBeInTheDocument();
    });
});
