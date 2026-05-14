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
    path: '/sounds/coward-of-the-week-01.mp3'
  },
  {
    id: 'coward-of-the-week-02',
    name: 'Coward of the Week (02)',
    path: '/sounds/coward-of-the-week-02.mp3'
  },
  {
    id: 'coward-of-the-week-03',
    name: 'Coward of the Week (03)',
    path: '/sounds/coward-of-the-week-03.mp3'
  },
  {
    id: 'bell-chord',
    name: 'Bell Chord',
    path: '/sounds/bell-chord.mp3'
  },
  {
    id: 'ding-ding-ding',
    name: 'Ding Ding Ding',
    path: '/sounds/ding-ding-ding.mp3'
  },
  {
    id: 'sad-trombone',
    name: 'Sad Trombone',
    path: '/sounds/sad-trombone.mp3'
  },
  {
    id: 'dj-air-horn',
    name: 'DJ Air Horn',
    path: '/sounds/dj-air-horn.mp3'
  },
  {
    id: 'i-award-you-no-points',
    name: 'I Award You No Points',
    path: '/sounds/i-award-you-no-points.mp3'
  },
  {
    id: 'preachy-music',
    name: 'Preachy Music',
    path: '/sounds/preachy-music.mp3'
  },
];

/**
 * Get all sounds sorted alphabetically by name
 */
export function getSoundsSorted(): Sound[] {
  return [...soundList].sort((a, b) => a.name.localeCompare(b.name));
}
