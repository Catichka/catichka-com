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
    'I hold a Master’s in Artificial Intelligence from UNSW, and over fifteen years I’ve worked with small and digital businesses, game developers, federal parliament and government, and telecommunications. As a General Manager in nbn’s Chief Technology Office I lead network innovation, partnerships and roadmaps, connecting Australia’s national broadband network with the research and innovation ecosystem, including collaborations with UTS, where I’m an Honorary Industry Fellow.',
    'I’m most interested in where technology and human capability meet: how organisations adopt AI well, how research becomes real-world impact, and how we use powerful tools without losing what makes us human.',
  ],
  facts: [
    { value: '15 years', label: 'across business, games, government and telco' },
    { value: 'nbn', label: 'General Manager, Network Innovation, CTO' },
    { value: 'UTS', label: 'Honorary Industry Fellow' },
    { value: 'Master’s', label: 'in Artificial Intelligence, UNSW' },
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

// Roles, dates and titles from Catherine's LinkedIn profile (10 Nov 2026). Newest first.
export const experience = [
  {
    org: 'nbn® Australia',
    role: 'General Manager, Network Innovation, Partnerships and Roadmaps, CTO',
    date: '2026 – now',
    body: 'Leading innovation, network partnerships and strategic roadmaps in nbn’s Chief Technology Office, making CTO the innovation and network architecture backbone of nbn.',
    points: [
      'Innovation proof-of-concept governance, strategic alignment and roadmaps',
      'Network strategic roadmaps across the physical network, automation and AI',
      'Partnerships with ASTRID (UTS and RMIT), the Bureau of Meteorology, international wholesale networks, and the gaming, video and streaming industries',
      'Executive and Board papers, white papers and technology disruption advice',
      'Vendor innovation funds, IP and patents, and talent programs including ASTRID, nbn internships and the Graduate STEM strategy',
    ],
  },
  {
    org: 'nbn® Australia',
    role: 'General Manager, Network Partnerships',
    date: '2023 – 2026',
    body: 'Strategic manager for nbn innovation engagement and program development across academia, wholesale telecommunications, over-the-top services and government agencies. From 2025 also accountable for CTO strategic roadmaps, finance, Board advice and proof-of-concept delivery.',
    points: ['Chair, ASTRID Joint Management Committee (nbn and UTS)', 'Chair, nbn–CSIRO Joint Steering Committee'],
  },
  {
    org: 'nbn® Australia',
    role: 'Government Relations: Strategy and Planning, then Senior Advisor, Accountability and Strategic Projects',
    date: '2019 – 2023',
    body: 'Helping nbn work well in a complex political and regulatory environment.',
    points: [
      'Preparing and briefing the CEO and executives for parliamentary hearings, including Senate Estimates',
      'Caretaker Period policy and compliance',
      'Strategic advice on sensitive, business-critical issues and risks',
      'Ministerial and departmental correspondence and time-sensitive media enquiries',
    ],
  },
  {
    org: 'National Survivors Foundation',
    role: 'AI Transformation, Policy and Ethics (pro bono)',
    date: '2026 – now',
    body: 'Pro bono consultant on AI transformation, policy and ethics for one of Australia’s largest not-for-profit survivors foundations (formerly the In Good Faith Foundation).',
    points: [],
  },
  {
    org: 'University of Technology Sydney',
    role: 'Honorary Industry Fellow',
    date: '2025 – now',
    body: 'Continuing my AI and digital research, writing papers and collaborating across the academic community.',
    points: ['The ASTRID collaboration', 'Writing on AI governance, roadmaps, capability and responsible output'],
    href: 'https://profiles.uts.edu.au/Catherine.Campbell/about',
  },
  {
    org: 'UniSC Engineers',
    role: 'Technology Industry Advisory Committee member',
    date: '2024 – now',
    body: 'Industry advice for engineering at the University of the Sunshine Coast.',
    points: [],
  },
  {
    org: 'CatichkaBeta',
    role: 'Founder',
    body: 'A small studio building apps and games with AI tools, and a space for people using AI in interesting ways.',
    points: ['Browser games including T-Rex Run! and A Most Inconvenient Eternity', 'Hands-on practice with AI-assisted design and development'],
    href: 'https://catichkabeta.com',
  },
  {
    org: 'Federal Parliament',
    role: 'Staff to Brendan O’Connor MP (Shadow Minister) and Rob Mitchell MP',
    date: '2016 – 2019',
    body: 'Shadow ministerial and electorate work.',
    points: ['Policy research and analysis, including workplace relations', 'Senate Estimates and Question Time preparation', 'Speech writing and parliamentary correspondence', 'Media, stakeholder and constituent engagement'],
  },
  {
    org: 'Small business consultancy',
    role: 'Consultant and small business analyst',
    date: '2003 – 2019',
    body: 'Ran a small business consultancy for more than a decade, across strategy, operations, finance, regulation and people.',
    points: ['Worked with emerging Australian software and game developers on player communities, marketing, and product testing and development'],
  },
  {
    org: 'UNSW',
    role: 'Education',
    body: 'Master’s in Artificial Intelligence (2008 – 2011), and a Bachelor of Arts with Honours in Analytical Philosophy, Psychology and Artificial Intelligence (2000 – 2007).',
    points: [],
  },
];

// Featured talks and articles (newest first). To add one: Catherine sends the LinkedIn link and text,
// and a new entry goes at the top. kind is 'Talk', 'Article' or 'In the media'.
export const featured = [
  {
    kind: 'In the media',
    date: '10 November 2026',
    title: 'How nbn® prepares for GTA 6',
    body: 'On how nbn® Australia works with the content distribution community to model the impact of major game releases, and uses pre-seeding to spread downloads out and reduce demand at launch.',
    href: 'https://www.linkedin.com/posts/catherinecampbell-_gaming-innovation-nbn-share-7525783813260763137-Sb9X/',
    linkLabel: 'Read on LinkedIn',
  },
  {
    kind: 'Talk',
    date: '4 November 2026',
    title: 'Speaking at the RMIT EnGenius Awards',
    body: 'Representing nbn® Australia on ASTRID, what innovation really looks like in a corporate environment, AI leadership and future careers, and why designs need a Proof of Benefit, not just a proof of concept.',
    href: 'https://www.linkedin.com/posts/catherinecampbell-_engenius-astrid-innovation-share-7523557995084173313-YnsJ/',
    linkLabel: 'Read on LinkedIn',
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
  publications: {
    title: 'Publications',
    points: [
      'A Novel Deep Learning Approach for Non-Invasive Condition Assessment of Broadband Pipes',
      'A Vine-inspired Solution for Enhancing Safety and Efficiency in Broadband Cable Installation',
      'nbn, gaming development and understanding the network ecosystem',
      '‘Fact and Fiction in the Neuropsychology of Art’, chapter 4 in The Aesthetic Mind: Philosophy and Psychology',
    ],
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
