Hi! You're the art director again, this time for my personal site, catichka.com. Same setup as catichkabeta.com and T-Rex Run!: you own the look and the art, Claude builds the site and puts your art in, and I review and approve.

**About the site**
catichka.com is me: Catherine Campbell. It has to be two things at once.
- **Me, personally:** curious, a bit philosophical (my Instagram is "Catichka's philosophy for life"), into how minds and AI think, a writer on Substack, and the person behind CatichkaBeta.
- **Me, professionally:** a technology and innovation leader in Australia. I work across AI strategy, research partnerships and digital infrastructure, including leadership at nbn, research collaboration with UTS and ASTRID, and a research background in philosophical, cognitive and neurological approaches to AI.

The site there now is a generic dark one-page CV. It reads like anyone's executive profile, and that's what we're fixing. Visitors should feel a real person first, then find the credible professional detail easily.

catichkabeta.com is the playful home of my company and games. catichka.com is its grown-up sibling: "this is me". Each site gets a tab linking to the other.

**The look**
It's a sibling of catichkabeta, not a copy. Use the same family of pastels on near-black, so they clearly belong together, but make this one calmer, more personal and more thoughtful: less arcade, more notebook-by-lamplight. Hand-made touches (sketch lines, ink, paper texture, little marginal doodles) over neon grids. The vibe is warm, curious and quietly confident. It should be credible to a CEO or a professor without being corporate.

Palette (shared with catichkabeta): background #0b0b10, lavender #c9b8ff, mint #a6f0d2, peach #ffc9a8, baby blue #a8d6ff, pink #ffb8d8, text #f3f0fa. Feel free to propose one accent that's just for catichka.com.

The druid from catichkabeta (my old uni comic character) can make cameo appearances here, a little more personal and less mascot-y.

Start every image prompt with this style line (tweak it in round 1 if you have a better one):
"Thoughtful hand-drawn illustration with ink and pencil texture, soft pastel highlights (lavender, mint, peach, baby blue, pink) on a near-black background, warm and curious, quietly confident, not corporate, no text unless asked."

**Page structure (Claude will build this; design around it)**
One scrolling page, top half personal and bottom half professional:
1. **Hero:** my name, plus one line in my own voice about the question I keep coming back to: how people, minds and machines think together. A hand-drawn illustration sits beside it, not a stock "tech" image.
2. **What I'm thinking about:** a small set of ideas I'm curious about right now, plus my latest Substack posts pulled in automatically.
3. **What I make:** CatichkaBeta and its games, with a tab or link across to catichkabeta.com.
4. **Work and research:** the professional section. Expertise (AI strategy, research and innovation, digital infrastructure), experience (nbn, UTS and ASTRID, AI strategy and transformation, research foundations), plus LinkedIn, the UTS academic profile and ORCID. It should be clear and easy to scan.
5. **Say hi:** a warm contact section with email and socials (LinkedIn, Instagram, X, Substack), not only "go to LinkedIn".

**Batch 1 (please start here)**
1. A mood board or style frame: what the home page hero could look like. Show 2–3 directions before going further.
2. A personal mark or monogram to replace the current "CC" and "catichka." logo. It must read at tiny sizes. Square, transparent PNG.
3. A wordmark: "catichka" in a typeface that suits the new look. Wide, transparent PNG. Please also name the web fonts you'd use for headings and body text.

**Batch 2 (after batch 1 is approved)**
4. Hero illustration: me, or the druid, among sketches of ideas (a brain, a tree, circuits, books, a spark), drawn in the house style. Transparent PNG, about 1400px wide.
5. Four small section icons: Thinking, Making, Work and research, Say hi. Square, transparent PNGs.
6. A professional portrait treatment: a way to frame my real photo so it fits the hand-drawn style, such as an ink border or a pastel wash. I'll supply the photo.
7. Link preview card: 1200×630 PNG.

**Later**
8. Favicon / app icon from the mark: 1024×1024 PNG, extra bold.
9. A 404 illustration: a lost thought wandering off the page. About 800×600.

**Technical rules**
- PNG at the largest size you can make. Use a transparent background wherever it says so, with no white halos around the edges, because everything sits on near-black.
- No text in the illustrations except the wordmark.
- Name files in lowercase with hyphens, e.g. mark.png, icon-thinking.png.

**Hand-off (same as catichkabeta)**
This site will have its own GitHub repo; I'll send you the link once it exists. Put each batch in its own folder under docs/art/ (e.g. docs/art/batch-01/) with a START-HERE.md that says what each file is and which slot it fills (mark, wordmark, fonts, hero, icons.thinking / icons.making / icons.work / icons.hi, portraitFrame, shareImage, favicon, notFound). Commit on a new branch and open a pull request into main. If GitHub won't let you push, just give me the files to download and I'll pass them to Claude.

**Update after batch 1 (10 November 2026): read this first. It overrides anything above that disagrees.**

Batch 1 is approved: the hero direction (notebook under the lamp), the druid mark, the wordmark, and the fonts (Cormorant Garamond 500 for headings, DM Sans 400/500 for body and nav). Thank you!

**Direction change from Catherine: catichka.com is a professional site.** It tells people who I am professionally and showcases my professional life. It is NOT a blog or a "blog lite". So:
- Drop "What I'm thinking about" and the Substack feed. Substack is just one link in the contact section.
- "What I make" becomes one entry in my experience (founder of CatichkaBeta) plus the catichkabeta ↗ tab, not its own section.
- The visual style stays (notebook by lamplight, pastels on near-black). It's the warm, human wrapper around a credible professional profile.

**New page structure (Claude builds this)**
1. **Hero:** my name, a one-line professional positioning (technology and innovation leader: AI strategy, research partnerships, digital infrastructure), buttons for "See my work" and "Connect on LinkedIn", and the notebook illustration.
2. **About:** a short professional bio with my portrait.
3. **Expertise:** AI strategy and responsible AI, research and innovation partnerships, digital infrastructure.
4. **Experience:** a career timeline (nbn, UTS Honorary Industry Fellow, ASTRID collaboration, founder of CatichkaBeta, earlier roles).
5. **Research and speaking:** UTS, ORCID, talks, seminars and workshops on ethical and responsible AI.
Top tabs (Catherine's call): linkedin ↗, catichkabeta ↗, blog ↗ (Substack) and contact (an email link to connect@catichkabeta.com). There's no separate contact section on the page.

**Changes to batch 2**
4. Hero illustration: text-free, based on the approved notebook composition (no nav or words baked in). Also make a narrow phone version, `hero-mobile.png` (about 900×1400, book and lamp centred, top third clear for the heading), or supply layers.
5. Section icons: About, Expertise, Experience, Research and speaking (four). Square, transparent PNGs.
6. Portrait treatment: now more important, because it goes in About. I'll supply the photo.
7. Link preview card: unchanged.

**Fixes to existing files**
- `mark.png` and `wordmark.png` both have faint blue, pink and white speckles in the "transparent" area. They're invisible on near-black but show on white (light-mode browser tabs, LinkedIn previews). Please re-export both with genuinely clean transparency. (Claude has cleaned the mark for now. The site uses live Cormorant Garamond text for the wordmark, so the wordmark PNG is only needed for things like social images.)
- Please make `mark-small.png`: a thicker-line, simplified mark for favicon and nav sizes (16–32px), and use it for the favicon.

Please add to this section, or put notes in a new file, rather than replacing it, so Claude's notes don't get lost.
