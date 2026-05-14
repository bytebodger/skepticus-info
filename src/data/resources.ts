export type QuickStat = {
    label: string;
    value: string;
    hint: string;
};

export type CounterArgument = {
    claim: string;
    response: string;
    sources: string[];
};

export type ResearchBrief = {
    topic: string;
    summary: string;
    lastReviewed: string;
};

export type SourceItem = {
    title: string;
    author: string;
    type: 'Book' | 'Paper' | 'Article' | 'Video';
    url: string;
};

export const quickStats: QuickStat[] = [
    {
        label: 'Modules',
        value: '5',
        hint: 'Core dashboard sections ready',
    },
    {
        label: 'Counter Points',
        value: '8',
        hint: 'Fast on-air references',
    },
    {
        label: 'Primary Sources',
        value: '10',
        hint: 'Direct links for citations',
    },
    {
        label: 'Updated',
        value: 'May 2026',
        hint: 'Last full review cycle',
    },
];

export const counterArguments: CounterArgument[] = [
    {
        claim: 'Morality requires a divine lawgiver.',
        response:
            'Moral realism and moral anti-realism both offer non-theistic grounding models, while the Euthyphro dilemma challenges divine command certainty.',
        sources: ['Plato, Euthyphro', 'Shafer-Landau (Moral Realism)'],
    },
    {
        claim: 'Fine-tuning proves intentional design.',
        response:
            'Fine-tuning arguments depend heavily on probability assumptions and selection effects; multiverse and deeper-physics hypotheses remain live alternatives.',
        sources: ['Collins (Fine-Tuning Debate)', 'Sober (Design Arguments)'],
    },
    {
        claim: 'Resurrection reports are best explained as miracle.',
        response:
            'Competing hypotheses include visionary experience models, transmission error, and sociological amplification; historical method cannot infer supernatural causation directly.',
        sources: ['Ehrman', 'Allison (Resurrection Historiography)'],
    },
    {
        claim: 'Without objective purpose, life is meaningless.',
        response:
            'Meaning can be constructed through relationships, projects, and values without requiring cosmic teleology.',
        sources: ['Susan Wolf', 'Camus'],
    },
    {
        claim: 'Consciousness cannot be natural.',
        response:
            'Hard-problem challenges are unresolved, but unresolved does not imply non-natural causation; current models include integrated information and global workspace accounts.',
        sources: ['Chalmers', 'Dehaene'],
    },
    {
        claim: 'Atheism cannot justify reason itself.',
        response:
            'Reliability of cognition can be discussed through evolutionary, Bayesian, and externalist epistemology without theological premises.',
        sources: ['Goldman (Externalism)', 'Plantinga critics'],
    },
    {
        claim: 'Scriptural consistency supports divine inspiration.',
        response:
            'Textual criticism documents redaction layers, copying variants, and historical-context dependence that complicate inerrancy claims.',
        sources: ['Metzger', 'Barton'],
    },
    {
        claim: 'Prayer outcomes demonstrate intervention.',
        response:
            'Controlled studies show mixed or null effects; anecdotal wins are expected under chance and reporting bias.',
        sources: ['STEP Study', 'Barrett (Cognitive Bias)'],
    },
];

export const researchBriefs: ResearchBrief[] = [
    {
        topic: 'Historical method and miracle claims',
        summary:
            'Use methodological naturalism: compare source independence, dating, and bias before discussing extraordinary conclusions.',
        lastReviewed: '2026-05-12',
    },
    {
        topic: 'Moral argument taxonomy',
        summary:
            'Separate moral ontology, moral epistemology, and motivation. Many debates conflate these layers.',
        lastReviewed: '2026-05-10',
    },
    {
        topic: 'Fine-tuning and observer selection',
        summary:
            'Frame with anthropic reasoning and prior sensitivity. Avoid false binary between design and pure chance.',
        lastReviewed: '2026-05-09',
    },
    {
        topic: 'Problem of evil variants',
        summary:
            'Distinguish logical, evidential, and hiddenness arguments. Keep emotional and formal strands clearly separated.',
        lastReviewed: '2026-05-08',
    },
];

export const sourceLibrary: SourceItem[] = [
    {
        title: 'How We Know Acts Is A Fake History',
        author: 'Dr. Richard Carrier',
        type: 'Article',
        url: 'https://www.richardcarrier.info/archives/23447',
    },
    {
        title: 'What Were The Odds That You Would Actually Be Watching This Video?',
        author: 'Skepticus',
        type: 'Article',
        url: 'https://docs.google.com/document/d/1drld6uo1T9sMTB4TNuEhJkG_Ocsqru8BRBOAx_xXoGc/edit?usp=sharing',
    },
];
