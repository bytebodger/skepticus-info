export type Sound = {
    id: string;
    name: string;
    path: string;
};

/**
 * Sound list configuration.
 * Sounds will be sorted alphabetically by name in the UI.
 * When adding new sounds, simply add an object here and upload the audio file
 * to the corresponding path in public/sounds/ (or update the path to your CDN/storage).
 */
export const soundList: Sound[] = [
    {
        id: 'coward-of-the-week-01',
        name: 'Coward of the Week (01)',
        path: '/sounds/coward-of-the-week-01.mp3',
    },
    {
        id: 'coward-of-the-week-02',
        name: 'Coward of the Week (02)',
        path: '/sounds/coward-of-the-week-02.mp3',
    },
    {
        id: 'coward-of-the-week-03',
        name: 'Coward of the Week (03)',
        path: '/sounds/coward-of-the-week-03.mp3',
    },
    {
        id: 'bell-chord',
        name: 'Bell Chord',
        path: '/sounds/bell-chord.mp3',
    },
    {
        id: 'ding-ding-ding',
        name: 'Ding Ding Ding',
        path: '/sounds/ding-ding-ding.mp3',
    },
    {
        id: 'sad-trombone',
        name: 'Sad Trombone',
        path: '/sounds/sad-trombone.mp3',
    },
    {
        id: 'dj-air-horn',
        name: 'DJ Air Horn',
        path: '/sounds/dj-air-horn.mp3',
    },
    {
        id: 'i-award-you-no-points',
        name: 'I Award You No Points',
        path: '/sounds/i-award-you-no-points.mp3',
    },
    {
        id: 'preachy-music',
        name: 'Preachy Music',
        path: '/sounds/preachy-music.mp3',
    },
    {
        id: 'applause',
        name: 'Applause',
        path: '/sounds/applause.mp3',
    },
    {
        id: 'doh',
        name: 'Doh!',
        path: '/sounds/doh.mp3',
    },
    {
        id: 'wrong-answer',
        name: 'Wrong Answer Buzzer',
        path: '/sounds/wrong-answer.mp3',
    },
    {
        id: 'fart',
        name: 'Fart',
        path: '/sounds/fart.mp3',
    },
    {
        id: 'you-are-an-idiot',
        name: 'You Are An Idiot',
        path: '/sounds/you-are-an-idiot.mp3',
    },
    {
        id: 'i-find-your-lack-of-faith-disturbing',
        name: 'I Find Your Lack of Faith Disturbing',
        path: '/sounds/i-find-your-lack-of-faith-disturbing.mp3',
    },
    {
        id: 'oh-my-god',
        name: 'Oh My God',
        path: '/sounds/oh-my-god.mp3',
    },
    {
        id: 'no-god-please-no',
        name: 'No God Please No',
        path: '/sounds/no-god-please-no.mp3',
    },
    {
        id: 'who-the-hell-cares',
        name: 'Who The Hell Cares',
        path: '/sounds/who-the-hell-cares.mp3',
    },
    {
        id: 'my-god-are-you-still-talking',
        name: 'My God Are You Still Talking?',
        path: '/sounds/my-god-are-you-still-talking.mp3',
    },
    {
        id: 'you-are-a-false-prophet',
        name: 'You Are A False Prophet',
        path: '/sounds/you-are-a-false-prophet.mp3',
    },
];

/**
 * Get all sounds sorted alphabetically by name
 */
export function getSoundsSorted(): Sound[]
{
    return [...soundList].sort((a, b) => a.name.localeCompare(b.name));
}
