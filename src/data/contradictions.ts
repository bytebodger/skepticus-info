export type Contradiction = {
    title: string;
    oneHand: string;
    oneHandVerses: string;
    otherHand: string;
    otherHandVerses: string;
};

// Static contradiction data. Update this list to add or revise contradictions.
export const contradictions: Contradiction[] = [
    {
        title: 'Can God Be Seen?',
        oneHand: 'Many passages say that people saw God directly.',
        oneHandVerses: 'Genesis 12:7; Genesis 18:1; Genesis 26:2; Genesis 26:24; Genesis 32:30; Genesis 35:9; Genesis 48:3; Exodus 24:9-11; Exodus 33:11; Exodus 33:23; Exodus 34:5-8; Deuteronomy 5:4; Numbers 12:8; Matthew 5:8; Every single time that someone saw Jesus;',
        otherHand: 'Other passages say no one has seen God or can see God.',
        otherHandVerses: 'Exodus 33:20; John 1:18; 1 John 4:12; 1 Timothy 1:17; 1 Timothy 6:16',
    },
    {
        title: 'Does Yahweh Tempt Anyone?',
        oneHand: 'One text says God tested Abraham by commanding him to sacrifice Isaac.',
        oneHandVerses: 'Genesis 22:1-2',
        otherHand: 'Another text says God tempts no one.',
        otherHandVerses: 'James 1:13',
    },
    {
        title: 'How Many Animals Were Taken Onto the Ark?',
        oneHand: 'One passage says Noah was to take two of every sort into the ark.',
        oneHandVerses: 'Genesis 6:19-20',
        otherHand: 'Another passage distinguishes between clean and unclean animals, requiring seven pairs of clean animals and one pair of unclean animals.',
        otherHandVerses: 'Genesis 7:2-3',
    },
    {
        title: 'Was Judas Paid for Betraying Jesus?',
        oneHand: 'One account says Judas received thirty pieces of silver for betraying Jesus.',
        oneHandVerses: 'Matthew 26:14-16',
        otherHand: 'Another account frames the payment as what the priests offered after the betrayal plan was already underway.',
        otherHandVerses: 'Mark 14:10-11',
    },
    {
        title: 'Did Saul Know Who David Was?',
        oneHand: 'Yes',
        oneHandVerses: '1 Samuel 16:21-23',
        otherHand: 'No',
        otherHandVerses: '1 Samuel 17:55-58',
    },
];

export function getContradictionsSorted(): Contradiction[]
{
    return [...contradictions].sort((a, b) => a.title.localeCompare(b.title));
}
