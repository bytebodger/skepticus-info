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
    {
        id: 'the-bible-lies-about-prayer',
        title: 'The bible lies about prayer.',
        premises: [
            'John 14:13-14, John 16:23-24, Matthew 7:7-11, and Matthew 18:19-20 all claim that if you ask god for something in prayer, he will give it to you.',
            'If you pray to receive something obvious and tangible that is not the course of natural consequence (e.g. you want to receive a billion dollars in the next 5 minutes), you will not receive it. And you can repeat this test over and over ad infinitum and it will always fail.',
        ],
        conclusion: 'The bible lies about prayer.',
        notes: [
            'To be fair, there are other verses that say that god will not give you something in prayer if it\'s not good for you, but the verses cited in the premises make no such claim and are very clear that if you ask for something in prayer, you will receive it.',
        ],
    },
    {
        id: 'hypostatic-union-is-impossible',
        title: 'The Hypostatic Union is impossible.',
        premises: [
            'Children receive half of their DNA from their mother and half from their father (which is something that wasn\'t properly understood when the bible was written).',
            'The Hypostatic Union claims that Jesus is fully god and fully human.',
            'Mary was impregnated by the Holy Spirit and not by a human father.',
            'If Jesus received half of his DNA from Mary and half from the Holy Spirit, then he could not have been "fully god". He would have been a demigod.',
            'If Jesus received all of his DNA from the Holy Spirit, then he could not have been "fully human". He would been have a god.',
            'If Jesus received all of his DNA from Mary, then he could not have been "fully god". He would have been a human.',
        ],
        conclusion: 'The Hypostatic Union is impossible.',
        notes: [
            'There is no "god\'s ways are mysterious" escape hatch here. You can\'t have a human body without DNA, and Jesus had to get his DNA from somewhere.',
            'If you have no human DNA, then you can\'t be human. If you have no divine DNA, then you can\'t be divine. If you have some of both, then you can\'t be fully either.',
        ],
    },
    {
        id: 'no-objective-morality-bible-2',
        title: 'There is no objective morality in the bible. (2)',
        premises: [
            'An objective moral standard would not change unless it is based upon some other objective standard that also changes.',
            'An objective moral standard cannot be defined in subjective terms.',
            'The moral standards in the bible change over time and/or are defined in subjective terms.',
        ],
        conclusion: 'There is no objective morality in the bible.',
        notes: [],
    },
    {
        id: 'fundamentalism-is-unworkable',
        title: 'Biblical fundamentalism/literalism is unworkable.',
        premises: [
            'Yahweh is quoted using metaphors and hyperbole in the bible. (e.g., "I will make your enemies a footstool for your feet")',
            'Jesus frequently uses metaphors and parables in the bible. (e.g., "the kingdom of heaven is like a mustard seed")',
            'If you take the bible literally, then you would have to take these verses literally as well.',
            'Taking these verses literally leads to absurd conclusions.',
            'The bible itself offers no guidance on how to determine which verses are meant to be taken literally and which are meant to be taken figuratively.',
        ],
        conclusion: 'Biblical fundamentalism/literalism is unworkable.',
        notes: [
            'Fundamentalists see themselves as being more faithful to the text by taking it literally, but in doing so they end up with a very inconsistent and incoherent interpretation of the bible.',
            'Every fundamentalist, whether they realize it or not, has to make some sort of subjective judgment call about which verses are meant to be taken literally and which are meant to be taken figuratively. This is a problem for fundamentalism because it claims to be based on the text alone, but in reality it relies on subjective interpretation just as much as any other approach.',
        ],
    },
    {
        id: 'trinity-violates-monotheism',
        title: 'The Trinity violates monotheism.',
        premises: [
            'Christianity claims to be a monotheistic religion.',
            'Monotheism is the belief in exactly one god.',
            'The Trinity doctrine holds that the Father, Son, and Holy Spirit are three distinct persons.',
            'Three distinct persons cannot be one god without violating the definition of "one."',
        ],
        conclusion: 'The Trinity doctrine is incompatible with monotheism.',
        notes: [],
    },
    {
        id: 'omniscient-god-cannot-be-surprised-angered-disappointed',
        title: 'An omniscient god cannot be surprised, angered, or disappointed.',
        premises: [
            'Yahweh is omniscient.',
            'Omniscience means knowing everything - past, present, and future.',
            'Surprise, anger, and disappointment are reactions to unexpected or unwanted outcomes.',
            'An omniscient being cannot encounter unexpected outcomes.',
        ],
        conclusion: 'Yahweh cannot genuinely experience surprise, anger, or disappointment.',
        notes: [
            'The bible repeatedly depicts Yahweh as surprised, angered, or disappointed by human behavior. (e.g., Genesis 6:6, where Yahweh "regrets" creating mankind.)',
            'If these are genuine emotional reactions, then Yahweh is not omniscient. If Yahweh is omniscient, then these depicted emotions are false.',
        ],
    },
    {
        id: 'omniscient-god-cannot-genuinely-test-anyone',
        title: 'An omniscient god cannot genuinely "test" anyone.',
        premises: [
            'Yahweh is omniscient.',
            'A test is designed to reveal information that is currently unknown.',
            'An omniscient being already knows the outcome of any test.',
        ],
        conclusion: 'Yahweh cannot genuinely test anyone.',
        notes: [
            'The binding of Isaac (Genesis 22) is explicitly framed as a test. But if Yahweh already knew what Abraham would do, the test reveals nothing new to Yahweh.',
            'If the test wasn\'t for Yahweh\'s benefit, then it was purely to cause Abraham suffering - which raises serious moral questions.',
        ],
    },
    {
        id: 'free-will-and-omniscience-are-incompatible',
        title: 'Free will and omniscience are incompatible.',
        premises: [
            'Yahweh is omniscient.',
            'Omniscience means Yahweh knows, with certainty, every choice every person will ever make.',
            'If a future choice is already known with certainty, it cannot be otherwise.',
            'If a choice cannot be otherwise, it is not a free choice.',
        ],
        conclusion: 'Free will cannot exist under an omniscient god.',
        notes: [
            'A common apologetic is that god "foreknows" without "foreordaining." But knowing something will happen with certainty is functionally identical to it being determined. The distinction doesn\'t hold up.',
        ],
    },
    {
        id: 'hell-incompatible-with-omnibenevolent-god',
        title: 'Hell is incompatible with an omnibenevolent god.',
        premises: [
            'Yahweh is omnibenevolent - perfectly good and loving.',
            'Omnibenevolence means Yahweh always acts in the most loving way possible.',
            'Eternal conscious torment in hell is the worst possible punishment.',
            'No finite sin can justify an infinite punishment.',
        ],
        conclusion: 'Hell is incompatible with an omnibenevolent god.',
        notes: [],
    },
    {
        id: 'omnipotent-god-has-no-need-of-worship',
        title: 'An omnipotent god has no need of worship.',
        premises: [
            'Yahweh is omnipotent and self-sufficient.',
            'A self-sufficient being has no unmet needs.',
            'Worship exists to honor, please, or appease a being.',
            'A self-sufficient being cannot genuinely need to be honored, pleased, or appeased.',
        ],
        conclusion: 'Yahweh has no need of worship.',
        notes: [
            'If Yahweh genuinely desires or demands worship despite having no need for it, that describes vanity - not perfect goodness.',
        ],
    },
    {
        id: 'original-sin-cannot-be-inherited',
        title: 'Original sin cannot be inherited.',
        premises: [
            'Christian doctrine holds that all humans inherit Original Sin from Adam and Eve.',
            'A sin is a moral failing for which the sinner bears responsibility.',
            'You cannot bear responsibility for actions you did not take and choices you did not make.',
        ],
        conclusion: 'Original Sin cannot be inherited.',
        notes: [
            'Punishing someone for the actions of an ancestor isn\'t justice. By any reasonable moral standard, it\'s the opposite.',
        ],
    },
    {
        id: 'hell-undermines-free-will',
        title: 'Hell undermines free will.',
        premises: [
            'Christian doctrine holds that humans must freely choose to follow god.',
            'A genuine free choice requires that the options be presented without coercion.',
            'Threatening someone with eternal torment if they choose incorrectly is coercion.',
        ],
        conclusion: 'The threat of hell makes genuine free choice impossible.',
        notes: [],
    },
    {
        id: 'divine-hiddenness-disproves-omnibenevolent-god',
        title: 'The problem of divine hiddenness disproves an omnibenevolent god.',
        premises: [
            'An omnibenevolent god would want all people to have the opportunity to know him.',
            'A relationship with god is, according to Christianity, the most important thing a person can have.',
            'Many people sincerely seek god and find nothing.',
            'An omnibenevolent, omnipotent god could make himself known to anyone who sincerely seeks him.',
        ],
        conclusion: 'The existence of sincere, unrequited seekers is incompatible with an omnibenevolent god.',
        notes: [],
    },
    {
        id: 'answered-prayer-indistinguishable-from-coincidence',
        title: 'Answered prayer is indistinguishable from coincidence.',
        premises: [
            'Christians claim that prayer produces results.',
            'The outcomes attributed to answered prayer are statistically indistinguishable from random chance.',
            'If a phenomenon is statistically indistinguishable from random chance, there\'s no basis for concluding it has a supernatural cause.',
        ],
        conclusion: 'There is no evidence that prayer produces results beyond what random chance would predict.',
        notes: [],
    },
    {
        id: 'eternal-hell-makes-repentance-irrelevant',
        title: 'An eternal hell makes repentance irrelevant.',
        premises: [
            'Standard Christian doctrine holds that a person who dies without accepting Jesus goes to hell permanently, with no possibility of future repentance.',
            'Christianity also holds that Yahweh desires all people to repent and be saved. (2 Peter 3:9)',
            'A god who permanently removes the opportunity for repentance cannot genuinely desire all people to repent.',
        ],
        conclusion: 'Eternal hell is incompatible with the claim that Yahweh desires all people to be saved.',
        notes: [],
    },
    {
        id: 'global-flood-is-logically-impossible',
        title: 'The global flood is logically impossible.',
        premises: [
            'Genesis describes a global flood that covered every mountain on earth.',
            'The earth\'s oceans contain approximately 1.335 billion cubic kilometers of water.',
            'Covering every mountain on earth would require roughly 4.4 billion cubic kilometers of water - more than three times the water currently on earth.',
            'The bible gives no account of where this additional water came from or where it went.',
        ],
        conclusion: 'The global flood as described in Genesis is physically impossible.',
        notes: [],
    },
    {
        id: 'bible-authorship-undermines-authority',
        title: 'The bible\'s authorship undermines its authority.',
        premises: [
            'Christians claim the bible is the authoritative word of god.',
            'The bible was written by dozens of human authors over hundreds of years.',
            'Those authors disagreed with each other on key doctrinal points.',
            'A document with contradicting authors cannot be a unified, authoritative statement from a single, coherent divine source.',
        ],
        conclusion: 'The bible cannot be the authoritative word of god.',
        notes: [],
    },
];

export function getSyllogismsSorted(): Syllogism[]
{
    return [...syllogisms].sort((a, b) => a.title.localeCompare(b.title));
}
