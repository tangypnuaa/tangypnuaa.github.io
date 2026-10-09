---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["index_cn.html","css/style.css","css/style_cn.css"]
---

# Academic homepage

Mode: Read. Scope: English and Chinese homepages and shared styling.

## Direction contract

THESIS: A personal academic document that makes biography and scholarly records easy to read. The user's Academic Pages reference governs restraint; its template is not adopted.

OWN-WORLD: White background, charcoal text with the Academic Pages system stack for English and Helvetica, Tahoma, Arial, STXihei, sans-serif for the Chinese page, conventional muted blue links, and few section rules. Four compact rectangular text research cards; no research diagrams, subtitle, decorative monogram, marketing hero, badges, or animation.

STORY: Read the researcher's biography, follow research topics to publications, inspect software and academic service, and use contact links.

FIRST VIEWPORT: Text navigation without a repeated name, the name and affiliation in the biography, a 148px portrait in its upper-right, ordinary paragraphs and text links. Profile links, email, and research interests share a borderless responsive grid. Text retains the profile-summary minimum. Chinese navigation reads 首页 / 研究方向 / 学术论文 / 开源软件 / 荣誉与服务 / English with unchanged destinations.

FORM: User-pinned conventional academic homepage, overriding seed 2b4091dd. Direct implementation approved by user; generated comparison board is optional inspiration, not an approved comp. Anchor links are the only signature interaction; no decorative motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Typography uses a language-specific size adjustment: `--font-size-adjust` is 0px for English and 1px for Chinese. The English version is 1px smaller; Chinese sizes are unchanged. Typography uses a shared minimum (`calc(1.06rem + var(--font-size-adjust))` desktop; `calc(1rem + var(--font-size-adjust))` at or below 980px), with established line heights and paragraph spacing outside research cards. Four research cards use two columns on desktop and one on mobile, with concise descriptions, 0.65rem 1rem padding, and 1.45 paragraph line height. The three profile groups align at the top and stack at 720px. ALiPy has a linked GitHub icon. Keep all 15 publications per language, four academic-service categories including ICLR Area Chair, bilingual links, the original portrait, and footer information.

The GitHub icon is the existing Font Awesome asset. Existing portrait and registration raster bytes remain unchanged; their provenance is the original repository.
