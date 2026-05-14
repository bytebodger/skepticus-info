export type Syllogism = {
    id: string;
    title: string;
    premises: [string, string, ...string[]];
    conclusion: string;
    notes: string[];
};

// Static syllogism data. Update this list to add/edit syllogisms.
export const syllogisms: Syllogism[] = [
    {
        id: 'sacrifices-must-be-lost',
        title: 'The Deific Jesus Cannot Be A Sacrifice',
        premises: [
            'According to Trinitarianism, Jesus IS god.',
            'God is immortal.',
            'A sacrifice is something that you LOSE.',
            'Jesus was neither "lost" to Yahweh nor to humanity, since he was resurrected and ascended to heaven.',
        ],
        conclusion: 'Therefore, Jesus cannot be a sacrifice.',
        notes: [],
    },
    {
        id: 'you-cant-know-a-sacrifice-is-coming-back',
        title: 'Resurrection Nullifies Jesus\'s Supposed "Sacrifice"',
        premises: [
            'Yahweh is omniscient.',
            'Yahweh always knew that Jesus would be resurrected.',
            'A sacrifice is something that you LOSE.',
            'Jesus was never truly "lost" to Yahweh or humanity, since he was resurrected and ascended to heaven.',
        ],
        conclusion: 'Therefore, Jesus cannot be a sacrifice.',
        notes: [],
    },
    {
        id: 'god-cannot-prophecy',
        title: 'God Cannot Make A Prophecy',
        premises: [
            'God is omniscient.',
            'God is omnipotent.',
            'God can easily make anything happen in the future.',
            'God already knows everything that will happen in the future.',
        ],
        conclusion: 'Therefore, God cannot make a prophecy.',
        notes: [
            'God can make a PROMISE about something that he will do.',
            'God can enter into a COVENANT with someone about something that he will do.',
            'But a prophecy is a specific prediction about something that will happen in the future, and if God already knows it will happen, then it is not really a prophecy.',
        ],
    },
    {
        id: 'yahweh-is-not-perfectly-just',
        title: 'Yahweh Is Not Perfectly Just',
        premises: [
            'Yahweh sacrificed Jesus for us.',
            'Jesus was without sin, meaning that he was without guilt.',
            'Killing someone without guilt to save the guilty is not just.',
        ],
        conclusion: 'Yahweh is not perfectly just.',
        notes: [],
    },
];

export function getSyllogismsSorted(): Syllogism[]
{
    return [...syllogisms].sort((a, b) => a.title.localeCompare(b.title));
}
