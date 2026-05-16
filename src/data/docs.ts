export type MarkdownDoc = {
    slug: string;
    title: string;
    summary: string;
    fileName: string;
};

// Static markdown doc index. Add entries here to expose new markdown files in the Docs module.
export const markdownDocs: MarkdownDoc[] = [
    {
        slug: 'the-growth-of-the-hebrew-population',
        title: 'How Probable Was The Growth of the Hebrew Population in Egypt?',
        summary: 'From a purely mathematical, biological, and historical standpoint, the likelihood of a group of 70 people growing into a population of millions over 400 years under the conditions of ancient slavery is zero.',
        fileName: 'the-growth-of-the-hebrew-population.md',
    },
    {
        slug: 'the-odds-that-you-would-watch-this-video',
        title: 'What Were The Odds That You Would Actually Be Watching This Video?',
        summary: 'The odds are so infinitesimally small that they\'re effectively zero. You\'re more likely to be struck by lightning while winning the Powerball than to stumble upon a specific, randomly selected video without a direct link.',
        fileName: 'the-odds-that-you-would-watch-this-video.md',
    },
    {
        slug: 'do-biblical-troocounts-make-sense',
        title: 'Do Biblical Troop Counts Make Sense?',
        summary: 'If you take the text entirely literally, the armies fielded by Israel and its neighbors routinely dwarf the largest empires in antiquity. To understand why these numbers don\'t hold up under historical scrutiny, we have to look at the hard limits of ancient logistics, regional population data, and how ancient texts actually functioned.',
        fileName: 'do-biblical-troop-counts-make-sense.md',
    },
    {
        slug: 'nazis-and-atheism',
        title: 'Is Atheism To Blame For Nazi Atrocities?',
        summary: 'Attributing Nazi atrocities to atheism relies on a fundamental misunderstanding of historical facts, Nazi ideology, and the regime\'s political actions. Nazism wasn\'t an atheist movement; it was a totalitarian, ethno-nationalist ideology that explicitly rejected atheism, persecuted freethinkers, and co-opted religious frameworks to serve its racial goals.',
        fileName: 'nazis-and-atheism.md',
    },
    {
        slug: 'soviets-and-atheism',
        title: 'Is Atheism To Blame For The Soviet Death Toll?',
        summary: 'Attributing the massive toll of Soviet deaths—estimated between 15 and 20 million—entirely or even primarily to atheism is a historical category error.',
        fileName: 'soviets-and-atheism.md',
    },
    {
        slug: 'china-and-atheism',
        title: 'Is Atheism To Blame For The Death Toll Under Chinese Communism?',
        summary: 'The claim that atheism is responsible for the massive death toll of the Chinese Communist Party (CCP) under Mao Zedong—estimated between **40 and 80 million deaths**—is historically illiterate. While the CCP was, and remains, an officially atheist organization that has aggressively persecuted religious groups, atheism didn\'t drive the policies that killed tens of millions.',
        fileName: 'china-and-atheism.md',
    },
    {
        slug: 'khmer-rouge-and-atheism',
        title: 'Is Atheism To Blame For The Atrocities of the Khmer Rouge?',
        summary: 'Attributing the mass deaths caused by Pol Pot’s Khmer Rouge regime (1975–1979) to atheism is a fundamental error in historical causality. While the Khmer Rouge enforced a ruthlessly militant form of state atheism and sought to systematically obliterate all religious practices, atheism wasn\'t the engine driving the slaughter.',
        fileName: 'khmer-rouge-and-atheism.md',
    },
    {
        slug: 'impact-of-the-inquisitions',
        title: 'What Were The Impacts of the Inquisitions?',
        summary: 'The Inquisitions represent one of history\'s most successful experiments in bureaucratic totalitarianism. They proved that a highly organized, legally meticulous system could successfully terrorize an entire population, enforce ideological conformity, and paralyze intellectual progress for generations—all while executing only a small percentage of its citizens.',
        fileName: 'impact-of-the-inquisitions.md',
    },
    {
        slug: 'impact-of-the-crusades',
        title: 'What Were The Impacts of the Crusades?',
        summary: 'The Crusades were a violent, destabilizing catalyst that accelerated structural changes across both Europe and the Middle East.',
        fileName: 'impact-of-the-crusades.md',
    },
    {
        slug: 'census-of-quirinius',
        title: 'When Did The Census Of Quirinius Occur?',
        summary: 'The Gospel of Luke attempts to place Jesus\' birth during a Roman census while Herod the Great was King of Judea. This creates an impossible timeline.',
        fileName: 'census-of-quirinius.md',
    },
    {
        slug: 'joshua-jericho-ai',
        title: 'Were Jericho And Ai Conquered By Joshua?',
        summary: 'The Book of Joshua describes a military "blitzkrieg" where Israelites destroyed fortified Canaanite cities around 1400–1200 BCE.',
        fileName: 'joshua-jericho-ai.md',
    },
    {
        slug: 'population-of-preexodus-egypt',
        title: 'What Was The Population Of Pre-Exodus Egypt?',
        summary: 'The best archaeological and demographic estimate for the total population of Egypt during the 13th century BCE (the Ramesside period) is between 3 million and 4.5 million people.',
        fileName: 'population-of-preexodus-egypt.md',
    },
    {
        slug: 'philistines-and-camels',
        title: 'When Did Camels And Philistines Come To The Levant?',
        summary: 'The Bible frequently places things in the "Patriarchal Age" (Abraham/Isaac/Jacob) that didn\'t exist until centuries later.',
        fileName: 'philistines-and-camels.md',
    },
    {
        slug: 'belshazzars-father',
        title: 'Who Was Belshazzar\'s Father?',
        summary: 'In the Book of Daniel, Belshazzar is described as the King of Babylon and the "son" of Nebuchadnezzar.',
        fileName: 'belshazzars-father.md',
    },
    {
        slug: 'resurrection-horses',
        title: 'Yahweh\'s Magic Resurrection Horses: A Case Study In Biblical Absurdity',
        summary: 'It\'s possible that any given chariot horse may have been resurrected as many as **three times**, just so they could meet their ultimate fate at the bottom of the Red Sea.',
        fileName: 'resurrection-horses.md',
    },
    {
        slug: 'holy-land-lies',
        title: 'Did Yahweh Lie To The Israelites About The Promised Land?',
        summary: 'The Bible narrative of the Promised Land is riddled with contradictions, historical inaccuracies, and geographical impossibilities. The land that Yahweh promised to the Israelites was supposed to be a fertile, prosperous territory flowing with "milk and honey," but the actual historical and archaeological record paints a very different picture.',
        fileName: 'holy-land-lies.md',
    },
    {
        slug: 'punishing-innocents',
        title: 'Does Yahweh Punish The Innocent?',
        summary: 'Based on a literal, historical-critical reading of the provided verses, the text demonstrates that Yahweh explicitly commands, sanctions, and executes the punishment and killing of individuals who are entirely innocent of the specific crimes being avenged.',
        fileName: 'punishing-innocents.md',
    },
    {
        slug: 'yahweh-and-free-will',
        title: 'Does Yahweh Violate Free Will?',
        summary: 'Yahweh explicitly violates and overrides human free will, and he does so with the deliberate intent to bring about the catastrophic ruin of those individuals, their nations, and their descendants.',
        fileName: 'yahweh-and-free-will.md',
    },
    {
        slug: 'suffering-servant',
        title: 'Is The "Suffering Servant" In Isaiah 53 A Prophecy About Jesus?',
        summary: 'From a historical-critical perspective, the "Suffering Servant" described in the Book of Isaiah is NOT Jesus of Nazareth.',
        fileName: 'suffering-servant.md',
    },
    {
        slug: 'yahweh-genocide',
        title: 'Is Yahweh Genocidal?',
        summary: 'Based on the modern legal, historical, and sociological definitions of the term, the character of Yahweh as depicted in the Hebrew Bible is explicitly and definitionally genocidal.',
        fileName: 'yahweh-genocide.md',
    },
    {
        slug: 'yahweh-science',
        title: 'Does Yahweh Understand Science?',
        summary: 'From a historical-critical perspective, a literal reading of these verses reveals that the character of Yahweh possesses exactly the same level of knowledge about the universe as the iron-age and bronze-age humans who wrote the texts.',
        fileName: 'yahweh-science.md',
    },
    {
        slug: 'bible-slavery-endorsement',
        title: 'Does The Bible Endorse Slavery?',
        summary: 'Based on a historical-critical and textual analysis of the Hebrew Bible, the text explicitly endorses, codifies, and regulates slavery. It doesn\'t ban the practice in any form.',
        fileName: 'bible-slavery-endorsement.md',
    },
    {
        slug: 'what-about-the-canaanites',
        title: 'Was There Any Way For The Canaanites To Be Spared?',
        summary: 'From a historical-critical perspective, the biblical narrative creates a closed legal and theological loop designed to justify the ethnic cleansing of the Levant.',
        fileName: 'what-about-the-canaanites.md',
    },
    {
        slug: 'bible-yahweh-evil',
        title: 'Does The Bible Depict Yahweh As Evil?',
        summary: 'From a historical-critical perspective, the text doesn\'t just imply that Yahweh can cause harm—it explicitly states that Yahweh is the ultimate, intentional source of both good and evil.',
        fileName: 'bible-yahweh-evil.md',
    },
    {
        slug: 'messiah-requirements',
        title: 'Did Jesus Fulfill The Messianic Requirements Of The Hebrew Bible?',
        summary: 'If you evaluate the requirements using historical-grammatical literalism (the Jewish framework), Jesus didn\'t fulfill the core political and global requirements of the Messiah.',
        fileName: 'messiah-requirements.md',
    },
];

export function getMarkdownDocsSorted(): MarkdownDoc[]
{
    return [...markdownDocs].sort((a, b) => a.title.localeCompare(b.title));
}
