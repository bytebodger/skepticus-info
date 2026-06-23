export type SourceItem = {
    title: string;
    author: string;
    type: 'Book' | 'Paper' | 'Article' | 'Video' | 'Channel';
    url: string;
};

export const sourceLibrary: SourceItem[] = [
    {
        title: 'How We Know Acts Is A Fake History',
        author: 'Dr. Richard Carrier',
        type: 'Article',
        url: 'https://www.richardcarrier.info/archives/23447',
    },
    {
        title: 'Alex O\'Connor',
        author: 'Alex O\'Connor',
        type: 'Channel',
        url: 'https://www.youtube.com/@CosmicSkeptic',
    },
    {
        title: 'Alyssa Grenfell',
        author: 'Alyssa Grenfell',
        type: 'Channel',
        url: 'https://www.youtube.com/@alyssadgrenfell',
    },
    {
        title: 'Answerman',
        author: 'Answerman',
        type: 'Channel',
        url: 'https://www.youtube.com/@TheOriginalAnswerman',
    },
    {
        title: 'Bart Ehrman',
        author: 'Bart Ehrman',
        type: 'Channel',
        url: 'https://www.youtube.com/@bartdehrman',
    },
    {
        title: 'Belief It Or Not',
        author: 'Trevor Poelman',
        type: 'Channel',
        url: 'https://www.youtube.com/@BeliefItOrNot',
    },
    {
        title: 'C. J. Cornthwaite',
        author: 'C. J. Cornthwaite',
        type: 'Channel',
        url: 'https://www.youtube.com/@cjcornthwaite',
    },
    {
        title: 'Dan McClellan',
        author: 'Dan McClellan',
        type: 'Channel',
        url: 'https://www.youtube.com/@maklelan',
    },
    {
        title: 'Darante\' LaMar',
        author: 'Darante\' LaMar',
        type: 'Channel',
        url: 'https://www.youtube.com/@DaranteLaMar',
    },
    {
        title: 'Deconstruction Zone',
        author: 'Justin',
        type: 'Channel',
        url: 'https://www.youtube.com/@Deconstruction_Zone',
    },
    {
        title: 'When Jesus Insulted People: A Comprehensive List',
        author: 'Levi Secord',
        type: 'Article',
        url: 'https://www.christbible.net/escape-from-reason/when-jesus-insulted-people-a-comprehensive-list',
    },
    {
        title: 'Trump Accountability Tracker',
        author: 'GLAAD',
        type: 'Article',
        url: 'https://glaad.org/trump-accountability-tracker/',
    },
    {
        title: 'Copenhagen Survey on Black Holes and Fundamental Physics',
        author: 'Alice Chen, Phil Harper, Niayesh Afshordi',
        type: 'Article',
        url: 'https://arxiv.org/html/2503.15776v1',
    },
    {
        title: 'Prayers Don\'t Help Heart Surgery Patients',
        author: 'William J. Cromie',
        type: 'Article',
        url: 'https://news.harvard.edu/gazette/story/2006/04/prayers-dont-help-heart-surgery-patients-2/',
    },
    {
        title: '1050 Commands of Christ in the New Testament',
        author: 'Christian Assemblies International',
        type: 'Article',
        url: 'https://theparkprisonministry.org/2024/03/1050-commands-of-christ-in-the-new-testament/?print=print',
    },
    {
        title: 'A List of the 613 Mitzvot (Commandments)',
        author: 'Tracey R Rich',
        type: 'Article',
        url: 'https://www.jewfaq.org/613_commandments',
    },
];
