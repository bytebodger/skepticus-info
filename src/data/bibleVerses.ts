export type BibleVerse = {
    verse: string;
    summary: string;
    text: string;
};

/**
 * Bible verses configuration.
 * Add, update, or remove entries here and the module list updates automatically.
 */
export const bibleVerses: BibleVerse[] = [
    {
        verse: 'Deuteronomy 22:28-29',
        summary: 'Rape victim forced to marry rapist',
        text: 'If a man meets a virgin who is not engaged and seizes her and lies with her, and they are discovered, the man who lay with her shall give fifty shekels of silver to the young woman’s father, and she shall become his wife. Because he violated her, he shall not be permitted to divorce her as long as he lives.',
    },
    {
        verse: 'Exodus 21:20-21',
        summary: 'Beating enslaved people is tolerated',
        text: 'When a slaveowner strikes a male or female slave with a rod and the slave dies immediately, the owner shall be punished. But if the slave survives a day or two, there is no punishment, for the slave is the owner’s property.',
    },
    {
        verse: 'Leviticus 20:13',
        summary: 'Death penalty prescribed for same-sex relations',
        text: 'If a man lies with a male as with a woman, both of them have committed an abomination; they shall be put to death; their bloodguilt is upon them.',
    },
    {
        verse: '1 Timothy 2:12',
        summary: 'Women prohibited from teaching men',
        text: 'I do not permit a woman to teach or to have authority over a man; she is to keep silent.',
    },
];

export function getBibleVersesSorted(): BibleVerse[]
{
    return [...bibleVerses].sort((a, b) => a.verse.localeCompare(b.verse));
}
