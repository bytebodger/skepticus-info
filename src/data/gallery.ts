export type GalleryImage = {
    title: string;
    location: string;
};

/**
 * Gallery image definitions.
 * Add entries here and place corresponding files under /public/gallery.
 */
export const galleryImages: GalleryImage[] = [
    {
        title: 'God\'s Plan for Marriage',
        location: '/gallery/gods-plan-for-marriage.jpg',
    },
    {
        title: 'Pi Proves God',
        location: '/gallery/pi-proves-god.png',
    },
    {
        title: 'The Evolution of Language',
        location: '/gallery/indo-european-languages.png',
    },
    {
        title: 'Where the Watchmaker Ends',
        location: '/gallery/where-the-watchmaker-ends.png',
    },
];
