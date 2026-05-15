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
];

export function getMarkdownDocsSorted(): MarkdownDoc[]
{
    return [...markdownDocs].sort((a, b) => a.title.localeCompare(b.title));
}
