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
    id: 'categorical-mortal-socrates',
    title: 'All Humans Are Mortal',
    premises: ['All humans are mortal.', 'Socrates is a human.'],
    conclusion: 'Therefore, Socrates is mortal.',
    notes: ['Classic categorical syllogism.', 'Useful for explaining validity vs. soundness.']
  },
  {
    id: 'modus-tollens-design',
    title: 'Design Argument Modus Tollens',
    premises: [
      'If apparent design always implied intelligent intervention, then naturally generated complexity would be impossible.',
      'Naturally generated complexity is observed in multiple domains.'
    ],
    conclusion: 'Therefore, apparent design does not always imply intelligent intervention.',
    notes: ['Structure follows modus tollens.', 'Keep focus on conditional form first, then content.']
  },
  {
    id: 'problem-evil-evidential',
    title: 'Evidential Problem of Evil Skeleton',
    premises: [
      'If a perfectly good, all-powerful being exists, gratuitous suffering is unlikely.',
      'There appears to be significant gratuitous suffering.'
    ],
    conclusion: 'Therefore, the existence of such a being is less probable than some alternatives.',
    notes: ['This is probabilistic, not a strict deductive contradiction.', 'Define gratuitous suffering before debate.']
  }
];

export function getSyllogismsSorted(): Syllogism[] {
  return [...syllogisms].sort((a, b) => a.title.localeCompare(b.title));
}
