// Site-wide settings and copy. Art comes from ChatGPT's handoffs in docs/art/ (see each batch's START-HERE.md).
// Everything people read lives here so wording, nav order and links are easy to change.

export const site = {
  name: 'Catherine Campbell',
  short: 'catichka',
  description: 'Catherine Campbell: how people, minds and machines think together. AI strategy, research and the things I make.',
};

// Nav order and labels from the approved hero (docs/art/batch-01/hero-style-approved.png).
export const nav = [
  { href: '/#thinking', label: 'thinking' },
  { href: '/#making', label: 'making' },
  { href: '/#work', label: 'work & research' },
  { href: '/#hi', label: 'say hi' },
  { href: 'https://catichkabeta.com', label: 'catichkabeta', external: true },
];

export const hero = {
  name: 'Catherine Campbell',
  line: 'I keep coming back to one question: how do people, minds and machines think together?',
  cta: { href: '#thinking', label: 'What I’m thinking about ↓' },
};

// Placeholder ideas: Cat to rewrite in her own words.
export const thinking = {
  intro: 'A few things I’m turning over right now. I write about them properly on Substack.',
  ideas: [
    { title: 'Thinking with machines', body: 'What changes in how we reason, decide and create when an AI is part of the conversation.' },
    { title: 'Responsible, not fearful', body: 'Using AI tools ethically and well, without sacrificing your soul.' },
    { title: 'Minds, philosophically', body: 'What philosophy, cognitive science and neuroscience can tell us about artificial minds, and about our own.' },
  ],
  substack: 'https://substack.com/@ca7ichka',
};

export const making = {
  intro: 'CatichkaBeta is where I build things with friends: apps, games and experiments where imagination meets tools.',
  projects: [
    { title: 'CatichkaBeta', body: 'Our studio and the space for people using AI in interesting ways.', href: 'https://catichkabeta.com' },
    { title: 'T-Rex Run!', body: 'A browser game. Play it now.', href: 'https://trexgame.catichkabeta.com' },
    { title: 'A Most Inconvenient Eternity', body: 'A browser game. Play it now.', href: 'https://eternity.catichkabeta.com' },
    { title: 'Sands of Atlantis', body: 'A game, coming soon.', href: null },
  ],
};

export const work = {
  intro: 'Fifteen years working across small and digital businesses, gaming publishers, government and telecommunications. These days I connect technology, research and people.',
  expertise: [
    { title: 'Artificial intelligence', body: 'Practical, thoughtful AI strategy, capability building and responsible transformation.' },
    { title: 'Research and innovation', body: 'Bridging academia and industry to connect promising research with real-world opportunities.' },
    { title: 'Digital infrastructure', body: 'How connectivity, technology ecosystems and partnerships shape Australia’s future.' },
  ],
  experience: [
    { title: 'Leadership at nbn', body: 'Technology and innovation work within Australia’s national broadband ecosystem, including network partnerships.' },
    { title: 'UTS and ASTRID', body: 'Research collaboration bringing industry and academia together. Honorary Industry Fellow at UTS.' },
    { title: 'AI strategy and transformation', body: 'Practical AI adoption, governance, roadmaps, policy and ethics. Talks, seminars and workshops on responsible AI.' },
    { title: 'Research foundations', body: 'Philosophical, cognitive and neurological approaches to AI.' },
  ],
  profiles: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/catherinecampbell-/' },
    { label: 'UTS profile', href: 'https://profiles.uts.edu.au/Catherine.Campbell/about' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0009-6215-3743' },
  ],
};

export const hi = {
  line: 'Curious about the same things? I’d love to hear from you.',
  email: 'connect@catichkabeta.com',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/catherinecampbell-/' },
    { label: 'Substack', href: 'https://substack.com/@ca7ichka' },
    { label: 'Instagram', href: 'https://www.instagram.com/catichkasphilosophyforlife/' },
    { label: 'X', href: 'https://x.com/catichka' },
  ],
};

export const art = {
  mark: '/art/mark.png', // approved druid mark (batch 1), edges cleaned for web
  // Placeholder: cropped from the approved hero reference until ChatGPT's text-free hero (batch 2) arrives.
  hero: '/art/hero-placeholder.webp',
  heroAlt: 'An open notebook under a warm desk lamp. One page shows a tree with pastel cogs among its leaves, the other a brain, joined by dotted lines of thought.',
};
