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
        title: 'Can god be seen?',
        oneHand: 'Many passages say that people saw God directly.',
        oneHandVerses: 'Genesis 12:7; Genesis 18:1; Genesis 26:2; Genesis 26:24; Genesis 32:30; Genesis 35:9; Genesis 48:3; Exodus 24:9-11; Exodus 33:11; Exodus 33:23; Exodus 34:5-8; Deuteronomy 5:4; Numbers 12:8; Matthew 5:8; Every single time that someone saw Jesus;',
        otherHand: 'Other passages say no one has seen God or can see God.',
        otherHandVerses: 'Exodus 33:20; John 1:18; 1 John 4:12; 1 Timothy 1:17; 1 Timothy 6:16',
    },
    {
        title: 'Does Yahweh tempt anyone?',
        oneHand: 'One text says God tested Abraham by commanding him to sacrifice Isaac.',
        oneHandVerses: 'Genesis 22:1-2',
        otherHand: 'Another text says God tempts no one.',
        otherHandVerses: 'James 1:13',
    },
    {
        title: 'How many animals were taken onto the ark?',
        oneHand: 'One passage says Noah was to take two of every sort into the ark.',
        oneHandVerses: 'Genesis 6:19-20',
        otherHand: 'Another passage distinguishes between clean and unclean animals, requiring seven pairs of clean animals and one pair of unclean animals.',
        otherHandVerses: 'Genesis 7:2-3',
    },
    {
        title: 'Was Judas paid for betraying Jesus?',
        oneHand: 'One account says Judas received thirty pieces of silver for betraying Jesus.',
        oneHandVerses: 'Matthew 26:14-16',
        otherHand: 'Another account frames the payment as what the priests offered after the betrayal plan was already underway.',
        otherHandVerses: 'Mark 14:10-11',
    },
    {
        title: 'Did saul know who David was?',
        oneHand: 'Yes',
        oneHandVerses: '1 Samuel 16:21-23',
        otherHand: 'No',
        otherHandVerses: '1 Samuel 17:55-58',
    },
    {
        title: 'When was man created?',
        oneHand: 'After the vegetation, the land animals, and the birds',
        oneHandVerses: 'Genesis 1:11-25',
        otherHand: 'Before the vegetation, the land animals, and the birds',
        otherHandVerses: 'Genesis 2:4-19',
    },
    {
        title: 'How long does Yahweh\'s anger last?',
        oneHand: 'Forever',
        oneHandVerses: 'Jeremiah 17:4',
        otherHand: 'Not forever',
        otherHandVerses: 'Micah 7:18',
    },
    {
        title: 'Can salvation be attained through works?',
        oneHand: 'Yes',
        oneHandVerses: 'Matthew 19:17; Luke 10:26-28; James 2:24',
        otherHand: 'No',
        otherHandVerses: 'Galatians 2:16; Romans 3:28',
    },
    {
        title: 'Did Yahweh command burnt offerings?',
        oneHand: 'Yes',
        oneHandVerses: 'Exodus 20:24',
        otherHand: 'No',
        otherHandVerses: 'Jeremiah 7:22',
    },
    {
        title: 'Is Yahweh the author of evil?',
        oneHand: 'Yes',
        oneHandVerses: 'Isaiah 45:7',
        otherHand: 'No',
        otherHandVerses: '1 John 4:8',
    },
    {
        title: 'On the road to Damascus, did Paul\'s traveling companians hear the voice that spoke to Paul?',
        oneHand: 'Yes',
        oneHandVerses: 'Acts 9:7',
        otherHand: 'No',
        otherHandVerses: 'Acts 22:9',
    },
    {
        title: 'Will the earth last forever?',
        oneHand: 'Yes',
        oneHandVerses: 'Ecclesiastes 1:4',
        otherHand: 'No',
        otherHandVerses: '2 Peter 3:10-13',
    },
    {
        title: 'Is Jesus the only man to have descended into heaven?',
        oneHand: 'Yes',
        oneHandVerses: 'John 3:13',
        otherHand: 'No',
        otherHandVerses: '2 Kings 2:11',
    },
    {
        title: 'Are children to be punished for the sins of their parents?',
        oneHand: 'Yes',
        oneHandVerses: 'Deuteronomy 5:9',
        otherHand: 'No',
        otherHandVerses: 'Deuteronomy 24:16',
    },
    {
        title: 'Does Yahweh get tired?',
        oneHand: 'Yes',
        oneHandVerses: 'Isaiah 1:14; Isaiah 43:24',
        otherHand: 'No',
        otherHandVerses: 'Isaiah 40:28',
    },
    {
        title: 'When did Nebuzaradan burn the house of the lord?',
        oneHand: 'The 7th day of the 5th month',
        oneHandVerses: '2 Kings 25:8-9',
        otherHand: 'The 10th day of the 5th month',
        otherHandVerses: 'Jeremiah 52:12-13',
    },
    {
        title: 'How many men drew the sword for Israel as counted by Joab?',
        oneHand: '800,000',
        oneHandVerses: '2 Samuel 24:9',
        otherHand: '1.1 million',
        otherHandVerses: '1 Chronicles 21:5',
    },
    {
        title: 'How many horsemen did David have against King Habadezer?',
        oneHand: '1,100',
        oneHandVerses: '2 Samuel 8:4',
        otherHand: '700',
        otherHandVerses: '1 Chronicles 18:4',
    },
    {
        title: 'How much did David pay for the threshing floor of Ornan the Jebusite?',
        oneHand: '600',
        oneHandVerses: '1 Chronicles 21:25',
        otherHand: '50',
        otherHandVerses: '2 Samuel 24:24',
    },
    {
        title: 'David\'s chief-of-the-Three killed how many with his spear?',
        oneHand: '800',
        oneHandVerses: '2 Samuel 23:8',
        otherHand: '300',
        otherHandVerses: '1 Chronicles 11:11',
    },
    {
        title: 'How many of the thieves executed with Jesus reviled him?',
        oneHand: '1',
        oneHandVerses: 'Luke 23:39-40',
        otherHand: '2',
        otherHandVerses: 'Mark 15:32; Matthew 27:44',
    },
    {
        title: 'How many blind men did Jesus heal in Jericho?',
        oneHand: '1',
        oneHandVerses: 'Mark 10:46; Luke 18:35',
        otherHand: '2',
        otherHandVerses: 'Matthew 20:30',
    },
    {
        title: 'Did the temple curtain rip before or after Jesus died?',
        oneHand: 'Before',
        oneHandVerses: 'Luke 23:45-46',
        otherHand: 'After',
        otherHandVerses: 'Mark 15:37-38; Matthew 27:50-51',
    },
    {
        title: 'Who put the purple robe on Jesus?',
        oneHand: 'Herod\'s soldiers',
        oneHandVerses: 'Luke 23:11',
        otherHand: 'Pilate\'s soldiers',
        otherHandVerses: 'Matthew 27:28; John 19:2',
    },
    {
        title: 'Did Jesus curse the fig tree before or after driving the money changers out of the temple?',
        oneHand: 'Before',
        oneHandVerses: 'Matthew 21:12, 17-19',
        otherHand: 'After',
        otherHandVerses: 'Mark 11:12-17',
    },
    {
        title: 'When the women arrived at the tomb, was the tomb opened or closed?',
        oneHand: 'Open',
        oneHandVerses: 'Luke 24:2',
        otherHand: 'Closed',
        otherHandVerses: 'Matthew 28:2',
    },
    {
        title: 'How did Judas die?',
        oneHand: 'He hung himself',
        oneHandVerses: 'Matthew 27:5',
        otherHand: 'His guts burst out',
        otherHandVerses: 'Acts 1:18',
    },
];

export function getContradictionsSorted(): Contradiction[]
{
    return [...contradictions].sort((a, b) => a.title.localeCompare(b.title));
}
