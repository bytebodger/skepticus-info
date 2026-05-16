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
        title: 'The deific Jesus cannot be a sacrifice.',
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
        title: 'Resurrection nullifies Jesus\'s supposed "sacrifice".',
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
        title: 'God cannot make a prophecy.',
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
            'Giving god credit for making a prophecy is like giving credit to a weather forecaster for "predicting" the weather when they have access to a perfect weather prediction machine.',
        ],
    },
    {
        id: 'yahweh-is-not-perfectly-just',
        title: 'Yahweh is not perfectly just.',
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
        title: 'Jesus is not the only son of god.',
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
        title: 'The quotes of Jesus are fiction.',
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
        title: 'The Immaculate Conception is pointless.',
        premises: [
            'According to the bible, the conception of Jesus was a miracle from god.',
            'If the omnipotent creator god is capable of causing a virgin to conceive his son, then he\'s capable of having that son be free from Original Sin.',
        ],
        conclusion: 'The entire doctrine of the Immaculate Conception is pointless.',
        notes: [],
    },
    {
        id: 'the-hypostatic-union-violates-logic',
        title: 'The Hypostatic Union violates logic.',
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
        title: 'Jesus cannot be the Christian god.',
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
        title: 'Resurrection does not bring you a new body.',
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
    {
        id: 'yahweh-values-birds-over-humans',
        title: 'Yahweh values birds over humans.',
        premises: [
            'In Deuteronomy 22:6-7, Yahweh commands that if you find a bird\'s nest with eggs or chicks, you must not take the mother bird, but you can take the eggs or chicks.',
            'In Deuteronomy 20:16-17, Yahweh commands that when you conquer a city you must kill everyone in it.',
        ],
        conclusion: 'Yahweh values the lives of birds more than the lives of humans.',
        notes: [
            'The commandment in Deuteronomy 20:16-17 does say to "leave alive nothing that breathes", but it is clear that this is a command to kill all the humans and the livestock in the city, and not a command to kill any of the wild birds who happen to be in the city.  Furthermore, there\'s no reason to believe that the Israelites could have caught/killed the birds in those cities.',
        ],
    },
    {
        id: 'yahweh-values-trees-over-humans',
        title: 'Yahweh values trees over humans.',
        premises: [
            'In Deuteronomy 20:19-20, Yahweh commands that when you besiege a city, you must not cut down any fruit trees, but you can cut down non-fruit trees.',
            'In Deuteronomy 20:16-17, Yahweh commands that when you conquer a city you must kill everyone in it.',
        ],
        conclusion: 'Yahweh values the lives of trees more than the lives of humans.',
        notes: [
            'The commandment in Deuteronomy 20:16-17 does say to "leave alive nothing that breathes", and trees do technically breathe, but it is clear that this is a command to kill all the humans and the livestock in the city, and not a command to cut down any of the trees that happen to be in the city.  Furthermore, there\'s no reason to believe that the Israelites would have understood that trees do in fact breathe.',
            'An apologist retort might be that this is just common sense. As in, why would you cut down fruit trees if you plan to occupy the city? But in Deuteronomy 20:19, it explicitly states that the rationale is not merely to preserve food sources. Rather, it\'s to preserve the life of the tree because they are not "human beings that they should come under seige from you".',
        ],
    },
    {
        id: 'no-objective-morality',
        title: 'There is no objective morality.',
        premises: [
            'The very meaning of "objective" dictates that it must be mind-independent. In other words, it must be true regardless of what anyone thinks about it, or even whether anyone thinks about it at all.',
            'Any moral system that is based on the conventions of humanity cannot be indepent of human minds.',
            'Any moral system that is based on the commands of a god cannot be independent of that god\'s mind.',
            'There is no moral system that is independent of human minds or the mind of a god.',
        ],
        conclusion: 'There is no objective morality.',
        notes: [],
    },
    {
        id: 'no-objective-morality-bible',
        title: 'There is no objective morality in the bible.',
        premises: [
            'Objective morality cannot come from a mind (even the mind of Yahweh/Jesus).',
            'Objective morality would need to be defined in objective terms.',
        ],
        conclusion: 'There is no objective morality.',
        notes: [],
    },
    {
        id: 'crucifixion-negates-omnipotence',
        title: 'The crucifixion of Jesus negates the omnipotence of God.',
        premises: [
            'Yahweh is omnipotent.',
            'An omnipotent god could forgive you, for any reason, any time he wants to.',
        ],
        conclusion: 'The crucifixion of Jesus negates the omnipotence of God.',
        notes: [],
    },
    {
        id: 'jesus-not-from-david',
        title: 'Jesus cannot be from the line of David.',
        premises: [
            'Jesus has NO DNA from Joseph, meaning that he can\'t possibly be of Joseph\'s line.',
            'Jesus has no DNA from Mary (if we were to accept the Hypostatic Union that he is "fully god"), meaning that he can\'t possibly be of Mary\'s line.',
            'Adoption was not considered sufficient to be part of someone\'s lineage.',
        ],
        conclusion: 'Whether you accept that Joseph or Mary were descended from David makes no difference - Jesus was not descended from David.',
        notes: [],
    },
    {
        id: 'jesus-died-for-nothing',
        title: 'Jesus died for nothing.',
        premises: [
            'Jesus died for our sins.',
            'We\'re told that there are consequences for our sins.  (e.g., pain in childbirth,  burning in hell, death)',
            'Those consequences are still in place.',
        ],
        conclusion: 'Jesus died for nothing.',
        notes: [],
    },
];

export function getSyllogismsSorted(): Syllogism[]
{
    return [...syllogisms].sort((a, b) => a.title.localeCompare(b.title));
}
