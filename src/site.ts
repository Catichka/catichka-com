// Site-wide settings and copy. Art comes from ChatGPT's handoffs in docs/art/ (see each batch's START-HERE.md).
// Everything people read lives here so wording, nav order and links are easy to change.

export const site = {
  name: 'Catherine Campbell',
  short: 'catichka',
  description: 'Catherine Campbell: technology and innovation leader in AI strategy, research partnerships and digital infrastructure.',
};

// Top tabs (Catherine, 10 Nov 2026): LinkedIn, CatichkaBeta, blog on Substack, and contact by email.
// The page itself is a professional showcase, not a blog.
export const nav = [
  { href: 'https://www.linkedin.com/in/catherinecampbell-/', label: 'linkedin', external: true },
  { href: 'https://catichkabeta.com', label: 'catichkabeta', external: true },
  { href: 'https://substack.com/@ca7ichka', label: 'blog', external: true },
  { href: 'mailto:connect@catichkabeta.com', label: 'contact' },
];

const linkedin = 'https://www.linkedin.com/in/catherinecampbell-/';

export const hero = {
  kicker: 'AI strategy · research partnerships · digital infrastructure',
  name: 'Catherine Campbell',
  line: 'Technology and innovation leader connecting technology, research and people to shape what’s next.',
  actions: [
    { href: '#experience', label: 'See my work' },
    { href: linkedin, label: 'Connect on LinkedIn ↗', ghost: true },
  ],
};

export const about = {
  paragraphs: [
    'I’m an Australian technology and innovation leader working across digital infrastructure, artificial intelligence, research partnerships and organisational transformation.',
    'Over fifteen years I’ve worked closely with small and digital businesses, gaming publishers, government and telecommunications. At nbn I connect Australia’s national broadband network with the research and innovation ecosystem, including collaborations with UTS, where I’m an Honorary Industry Fellow.',
    'I care about turning emerging ideas into practical, responsible solutions, and about how technology and human capability work together.',
  ],
};

export const expertise = [
  { title: 'AI strategy and responsible AI', body: 'Practical, thoughtful AI strategy, governance and roadmaps, capability building and responsible transformation.' },
  { title: 'Research and innovation partnerships', body: 'Bridging academia and industry to connect promising research with real-world opportunities.' },
  { title: 'Digital infrastructure', body: 'How connectivity, technology ecosystems and partnerships shape Australia’s future.' },
];

// Draft: dates and job titles to come from Catherine's LinkedIn.
export const experience = [
  { org: 'nbn Australia', role: 'Technology and innovation leadership', body: 'Work within Australia’s national broadband ecosystem, including network partnerships, and connecting nbn with the research and innovation community.' },
  { org: 'University of Technology Sydney', role: 'Honorary Industry Fellow', body: 'Research collaboration between industry and academia, including the ASTRID collaboration. Writing on AI governance, roadmaps, capability and responsible output.' },
  { org: 'CatichkaBeta', role: 'Founder', body: 'A small studio building apps and games with AI tools, and a space for people using AI in interesting ways.', href: 'https://catichkabeta.com' },
  { org: 'Earlier career', role: 'Fifteen years across sectors', body: 'Small and digital businesses, gaming publishers, government and telecommunications.' },
];

export const research = {
  intro: 'My research interests sit at the meeting point of philosophy, cognitive science, neuroscience and AI.',
  items: [
    { title: 'Research', body: 'Philosophical, cognitive and neurological approaches to AI, and responsible AI in practice.' },
    { title: 'Talks, seminars and workshops', body: 'Ethical and responsible uses of AI, and how to use these tools without sacrificing your soul.' },
  ],
  links: [
    { label: 'UTS profile', href: 'https://profiles.uts.edu.au/Catherine.Campbell/about' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0009-6215-3743' },
  ],
};


export const art = {
  mark: '/art/mark.png', // approved druid mark (batch 1), edges cleaned for web
  portrait: null as string | null, // Catherine's photo, framed per ChatGPT's portrait treatment (batch 2)
  // Placeholder: cropped from the approved hero reference until ChatGPT's text-free hero (batch 2) arrives.
  hero: '/art/hero-placeholder.webp',
  heroAlt: 'An open notebook under a warm desk lamp. One page shows a tree with pastel cogs among its leaves, the other a brain, joined by dotted lines of thought.',
};
