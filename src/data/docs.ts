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
    {
        slug: 'blood-atonement',
        title: 'Was Blood Atonement Required For Salvation In The Old Testament?',
        summary: 'The short answer is no. The Hebrew Bible explicitly demonstrates that blood sacrifice wasn\'t an absolute, non-negotiable prerequisite for individual or national forgiveness.',
        fileName: 'blood-atonement.md',
    },
    {
        slug: 'jesus-passover-lamb',
        title: 'Did Jesus Fulfill The Passover Lamb Prophecy?',
        summary: 'If you evaluate the crucifixion using the strict, literal legal code of the Old Testament, Jesus did not qualify as an acceptable sacrifice.',
        fileName: 'jesus-passover-lamb.md',
    },
    {
        slug: 'jesus-as-king',
        title: 'Was (Or, Is) Jesus A King?',
        summary: 'The proposition that Jesus was or is a king under Old Testament guidelines is textually unsustainable without completely redefining the terms.',
        fileName: 'jesus-as-king.md',
    },
    {
        slug: 'dating-the-new-testament',
        title: 'What Are The Earliest Compelete Manuscripts Of The New Testament?',
        summary: 'While we have 2nd-century papyrus fragments containing a few verses (like the famous, credit-card-sized P52 for the Gospel of John), we don\'t see fully intact, unbroken copies of individual books until the late 3rd to mid-4th centuries.',
        fileName: 'dating-the-new-testament.md',
    },
    {
        slug: 'biblical-autographs',
        title: 'How Many Original Autographs Of The Bible Do We Have?',
        summary: 'We don\'t have any. The exact number is zero.',
        fileName: 'biblical-autographs.md',
    },
    {
        slug: 'contemporary-jesus-sources',
        title: 'How Many Contemporary Sources Do We Have For Jesus?',
        summary: 'We don\'t have any. The exact number is zero.',
        fileName: 'contemporary-jesus-sources.md',
    },
    {
        slug: 'jesus-attestation',
        title: 'Is Jesus The Best-Attested Figure Of Antiquity?',
        summary: 'The assertion that Jesus is the "best-attested figure in antiquity" is a staple of popular apologetics, but from a rigorous historical perspective, it is flatly incorrect. When extended to comparisons with Julius Caesar, the claim falls apart completely.',
        fileName: 'jesus-attestation.md',
    },
    {
        slug: 'shroud-of-turin',
        title: 'Is The Shroud Of Turin Authentic?',
        summary: 'To get from "unexplained artifact" to "burial cloth of the Son of God" requires several inferential leaps, each of which is contestable.',
        fileName: 'shroud-of-turin.md',
    },
    {
        slug: 'bible-vs-trinity',
        title: 'How And Where Does The Bible Conflict With The Doctrine Of The Trinity?',
        summary: 'The tensions described here are real. They\'re not invented by critics. Many of them were identified by early Christian theologians themselves, which is precisely why councils had to meet and creeds had to be written.',
        fileName: 'bible-vs-trinity.md',
    },
    {
        slug: 'old-testament-hell',
        title: 'How Is Hell Depicted In The Old Testament?',
        summary: 'If you\'re looking for the modern concept of Hell — a fire-and-brimstone playground of the devil where the wicked are tortured for eternity — you won\'t find it in the Old Testament.',
        fileName: 'old-testament-hell.md',
    },
    {
        slug: 'old-testament-heaven',
        title: 'How Is Heaven Depicted In The Old Testament?',
        summary: 'Just like the Old Testament concept of Hell, the ancient Hebrew concept of Heaven is radically different from modern popular theology.',
        fileName: 'old-testament-heaven.md',
    },
    {
        slug: 'unchanging-objective-morals',
        title: 'Objective Morals: Are They Unchanging And Absolute?',
        summary: 'For the claim that "Christian morality is objective" to be coherent, it needs to be grounded in that underlying standard - something like the character of God, or the principle of love, or human flourishing - rather than in the specific biblical commands, which demonstrably shift.',
        fileName: 'unchanging-objective-morals.md',
    },
    {
        slug: 'are-psalms-prophecies',
        title: 'Are The Psalms Prophecies About Jesus?',
        summary: 'The Psalms do not contain predictive, forward-looking prophecies about a future historical figure named Jesus of Nazareth.',
        fileName: 'are-psalms-prophecies.md',
    },
    {
        slug: 'god-is-not-omnipotent',
        title: 'Is God Omnipotent?',
        summary: 'The concept of absolute omnipotence — the philosophical idea that God can do absolutely anything without limitation — is a later theological development.',
        fileName: 'god-is-not-omnipotent.md',
    },
    {
        slug: 'god-is-not-omniscient',
        title: 'Is God Omniscient?',
        summary: 'Just as with omnipotence, the concept of absolute omniscience—the idea that God possesses simultaneous, exhaustive knowledge of all past, present, and future events, including human thoughts—is a philosophical framework layered onto the text long after it was written.',
        fileName: 'god-is-not-omniscient.md',
    },
    {
        slug: 'god-is-not-omnipresent',
        title: 'Is God Omnipresent?',
        summary: 'The concept of absolute omnipresence—the theological claim that God is simultaneously, essentially, and equally present in every point of space throughout the universe—is entirely missing from vast stretches of the Biblical narrative.',
        fileName: 'god-is-not-omnipresent.md',
    },
    {
        slug: 'old-testament-satan',
        title: 'How Is Satan Depicted In The Old Testament?',
        summary: 'If you\'re looking for the red, horned ruler of Hell who wages a cosmic war against God, you won\'t find him in the Hebrew Bible (the Old Testament).',
        fileName: 'old-testament-satan.md',
    },
    {
        slug: 'perfectly-just-god',
        title: 'Is God Perfectly Just?',
        summary: 'The text of the Bible demonstrates that the character of Yahweh does not operate under a framework of perfect, objective justice.',
        fileName: 'perfectly-just-god.md',
    },
    {
        slug: 'how-are-you-saved',
        title: 'What Does The Bible Say About How To Be Saved?',
        summary: 'The short answer is that the Bible does not have a single, unified view on salvation. Instead, you have competing theological systems running through both the Old and New Testaments.',
        fileName: 'how-are-you-saved.md',
    },
    {
        slug: 'is-jesus-universal',
        title: 'Is Christian Salvation Universal?',
        summary: 'The short answer is that the texts support both ideas, but they do so across a historical and theological timeline. The contradiction is real.',
        fileName: 'is-jesus-universal.md',
    },
    {
        slug: 'signs-of-god',
        title: 'Can You Demand Signs From God?',
        summary: 'When humans take the initiative to request a sign or negotiate terms, the text reveals a highly specific list of interactions.',
        fileName: 'signs-of-god.md',
    },
];

export function getMarkdownDocsSorted(): MarkdownDoc[]
{
    return [...markdownDocs].sort((a, b) => a.title.localeCompare(b.title));
}
