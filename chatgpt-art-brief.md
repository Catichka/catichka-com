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

**Update after batch 1 (10 November 2026)**
Thank you, batch 1 is lovely. Approved so far: the hero direction (`hero-style-approved.png`, centred serif intro over the notebook under the lamp) and the druid outline mark (`mark.png`). The book-and-spark mark is out. Still to come from batch 1: the wordmark and the font pairing.

Claude reviewed the files and has these notes. Please fold them into what's next:
1. **Clean re-export of `mark.png`.** The "transparent" area has faint blue, pink and white speckles (partly transparent pixels around the figure). They don't show on near-black but would show on white, like a light-mode browser tab or a LinkedIn preview. Please re-export it with a truly clean transparent background: only the lavender outline and the peach fold, nothing else.
2. **A bold small version of the mark.** At 16–32px the outline gets thin and fades. Please make `mark-small.png` with a thicker line and simplified detail for favicon and nav sizes, and use it for the favicon (item 8).
3. **Phone layout for the hero.** The hero is wide, with the mug on the left and the lamp on the right. With the text-free hero in batch 2 (item 4), please also make a narrow mobile crop (`hero-mobile.png`, about 900×1400, with the book and lamp centred, leaving the top third clear for the heading). Or supply layers (book, lamp, mug, jar, background) as separate transparent PNGs so Claude can arrange them.
4. **Name the fonts.** Please name the exact web fonts (ideally free on Google Fonts) for the headings and body text. The serif in the hero reference is the look we want to keep.
5. **Text-free hero.** As noted in START-HERE.md, the batch 2 hero must have no baked-in text or nav. Claude builds all text and links as real web text.

Next steps, in order: finish batch 1 (wordmark, fonts and items 1–2 above), then batch 2.
