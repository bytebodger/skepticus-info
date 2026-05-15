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
    {
        id: 'jesus-is-not-the-only-son-of-god',
        title: 'Jesus Is Not The Only Son Of God',
        premises: [
            'From Genesis 6:2, there are clearly and obviously "sons of god".',
            'Jesus is a son of god.',
        ],
        conclusion: 'Jesus is not THE son of god, he is A son of god.',
        notes: [
            'John 3:16 is an obvious apologetic for this, but it is a clear contradiction with Genesis 6:2.',
        ],
    },
    {
        id: 'the-quotes-of-jesus-are-fiction',
        title: 'The Quotes Of Jesus Are Fiction',
        premises: [
            'The gospels have 53 pages of direct quotes from Jesus (https://www.wwj.org.nz/content/wwj46p39.pdf)',
            'The earliest gospel (Mark) was written at least 33 years after the death of Jesus.',
            'No one could possibly remember that many exact quotes after 3+ decades.',
        ],
        conclusion: 'The words of Jesus are fiction.',
        notes: [
            'A common apologetic would be that these quotes are all accurate due to divine inspiration. But if it\'s divinely inspired, why did he wait 33 years (at least) until the first gospel was written? And why does a divinely inspired account need to have four different versions?',
        ],
    },
    {
        id: 'the-immaculate-conception-is-pointless',
        title: 'The Immaculate Conception Is Pointless',
        premises: [
            'According to the bible, the conception of Jesus was a miracle from god.',
            'If the omnipotent creator god is capable of causing a virgin to conceive his son, then he\'s capable of having that son be free from Original Sin.',
        ],
        conclusion: 'The entire doctrine of the Immaculate Conception is pointless.',
        notes: [],
    },
    {
        id: 'the-hypostatic-union-violates-logic',
        title: 'The Hypostatic Union Violates Logic',
        premises: [
            'The Hypostatic Union states that Jesus is fully god and fully human.',
            'Gods are not humans.',
            'Humans are not gods.',
        ],
        conclusion: 'The Hypostatic Union is false and violates the law of non-contradiction.',
        notes: [
            'Law of Non-Contradiction: Since gods (G) and humans (H) are fundamentally distinct, stating that anyone can be both a god and a human at the same time is the same as saying that a letter can be a G and an H at the same time.',
        ],
    },
    {
        id: 'jesus-cannot-be-the-christian-god',
        title: 'Jesus Cannot Be The Christian God',
        premises: [
            'The Christian god is omnipresent.',
            'Jesus has a physical body.',
            'No physical body can be omnipresent.',
        ],
        conclusion: 'Jesus cannot be the Christian god.',
        notes: [
            'According to the Hypostatic Union, Jesus is fully god and fully man and you cannot be fully man without a physical body.',
            'The NT asserts that Jesus was resurrected in physical form.',
            'Standard Christian doctrine asserts that Jesus still has a physical body.',
        ],
    },
    {
        id: 'resurrection-does-not-bring-you-a-new-body',
        title: 'Resurrection Does Not Bring You A New Body',
        premises: [
            'Christian theology holds that believers will be resurrected in bodily form, modeled after Jesus\'s physical resurrection.',
            'Jesus still had injuries on his hands, feet, and side after being resurrected.',
        ],
        conclusion: 'Christians retain their injuries after resurrection.',
        notes: [
            'The NT doesn\'t mention whether Jesus retained other injuries from his crown of thorns and his scourging, but given the fact that he maintained the stigmata and the spear wound, it\'s reasonable to believe that his other wounds were still in place.',
            'If resurrection doesn\'t remove outward wounds, why would anyone believe that it heals any other condition?  (like arthritis, dementia, or cancer)',
        ],
    },
];

export function getSyllogismsSorted(): Syllogism[]
{
    return [...syllogisms].sort((a, b) => a.title.localeCompare(b.title));
}
