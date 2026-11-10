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

// Sections below the approved hero. Facts come from Catherine's previous site and her CatichkaBeta profile.
// Wording is a draft for Catherine to adjust.

export const about = {
  quote: 'Turning emerging ideas into practical, responsible solutions.',
  paragraphs: [
    'I’m an Australian technology and innovation leader working across digital infrastructure, artificial intelligence, research partnerships and organisational transformation.',
    'I hold a Master’s degree in Artificial Intelligence, and over fifteen years I’ve worked closely with small and digital businesses, gaming publishers, government and telecommunications. At nbn I connect Australia’s national broadband network with the research and innovation ecosystem, including collaborations with UTS, where I’m an Honorary Industry Fellow.',
    'I’m most interested in where technology and human capability meet: how organisations adopt AI well, how research becomes real-world impact, and how we use powerful tools without losing what makes us human.',
  ],
  facts: [
    { value: '15 years', label: 'across tech, games, government and telco' },
    { value: 'nbn', label: 'technology and innovation leadership' },
    { value: 'UTS', label: 'Honorary Industry Fellow' },
    { value: 'Master’s', label: 'in Artificial Intelligence' },
    { value: 'CatichkaBeta', label: 'founder of a small AI-powered studio' },
  ],
};

export const expertise = [
  {
    icon: 'ai',
    title: 'AI strategy and responsible AI',
    body: 'Practical, thoughtful AI strategy that organisations can actually adopt.',
    points: ['AI strategy and roadmaps', 'Governance and responsible use', 'Building AI capability in teams', 'Ethics, policy and responsible output'],
  },
  {
    icon: 'research',
    title: 'Research and innovation partnerships',
    body: 'Bridging academia and industry to connect promising research with real-world opportunities.',
    points: ['Industry and university collaboration', 'Turning research into practice', 'Innovation programs and ecosystems'],
  },
  {
    icon: 'infrastructure',
    title: 'Digital infrastructure',
    body: 'How connectivity, technology ecosystems and partnerships shape Australia’s future.',
    points: ['National broadband ecosystem', 'Network partnerships', 'Technology and organisational transformation'],
  },
];

// Dates and exact job titles can be added later (date: '2021 – now').
export const experience = [
  {
    org: 'nbn Australia',
    role: 'Technology and innovation leadership',
    body: 'Technology and innovation work within Australia’s national broadband ecosystem.',
    points: ['Network partnerships', 'Connecting nbn with the research and innovation community', 'Industry–university collaboration, including UTS and ASTRID'],
  },
  {
    org: 'University of Technology Sydney',
    role: 'Honorary Industry Fellow',
    body: 'Research collaboration that brings industry and academia together.',
    points: ['The ASTRID collaboration', 'Writing on AI governance, roadmaps, capability and responsible output'],
    href: 'https://profiles.uts.edu.au/Catherine.Campbell/about',
  },
  {
    org: 'CatichkaBeta',
    role: 'Founder',
    body: 'A small studio building apps and games with AI tools, and a space for people using AI in interesting ways.',
    points: ['Browser games including T-Rex Run! and A Most Inconvenient Eternity', 'Hands-on practice with AI-assisted design and development'],
    href: 'https://catichkabeta.com',
  },
  {
    org: 'National Survivors Foundation',
    role: 'Volunteer',
    body: 'Volunteering with a national charity that supports survivors of institutional abuse.',
    points: [],
  },
  {
    org: 'Master of Artificial Intelligence',
    role: 'Education',
    body: 'Postgraduate study in artificial intelligence.',
    points: [],
  },
  {
    org: 'Earlier career',
    role: 'Fifteen years across sectors',
    body: 'Working closely with a wide range of organisations.',
    points: ['Small and digital businesses', 'Gaming publishers', 'Government', 'Telecommunications'],
  },
];

export const research = {
  intro: 'My research sits where philosophy, cognitive science, neuroscience and AI meet. I also speak regularly on using AI ethically and well.',
  areas: {
    title: 'Research interests',
    points: ['Philosophical approaches to AI', 'Cognitive and neurological approaches to AI', 'Responsible AI in practice', 'AI governance and capability'],
  },
  speaking: {
    title: 'Talks, seminars and workshops',
    points: ['Ethical and responsible uses of AI', 'Using AI tools without sacrificing your soul', 'AI strategy, governance and roadmaps for organisations', 'Bringing research and industry together'],
  },
  invite: { label: 'Invite me to speak', href: 'mailto:connect@catichkabeta.com?subject=Speaking%20invitation' },
  links: [
    { label: 'UTS profile', href: 'https://profiles.uts.edu.au/Catherine.Campbell/about' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0009-6215-3743' },
  ],
};

export const closing = {
  title: 'Let’s work together',
  line: 'For partnerships, research collaboration, speaking or advisory work, I’d love to hear from you.',
  action: { label: 'Get in touch', href: 'mailto:connect@catichkabeta.com' },
};

export const art = {
  mark: '/art/mark.png', // approved druid mark (clean batch 2 export)
  portrait: '/art/portrait.webp' as string | null, // Catherine's photo (source: docs/art/source/portrait.png); frame treatment from ChatGPT later
  portraitAlt: 'Catherine Campbell in glasses, chin in hand, reading a laptop screen.',
  // Approved text-free hero from batch 2. The phone version is hero-mobile.png cropped to the illustration.
  hero: '/art/hero.webp',
  heroMobile: '/art/hero-mobile.webp',
  heroAlt: 'An open notebook under a warm desk lamp. One page shows a tree with pastel cogs among its leaves, the other a brain, joined by dotted lines of thought.',
};
