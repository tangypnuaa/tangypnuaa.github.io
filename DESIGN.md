---
name: "Ying-Peng Tang academic homepage"
description: "Plain bilingual academic pages with readable prose and publication records."
colors:
  page: "#fff"
  ink: "#252a2e"
  text: "#3d4246"
  muted: "#62686d"
  line: "#dfe2e5"
  accent: "#24628a"
  accent-strong: "#164665"
  focus: "#24628a"
  selection: "#dceaf3"
typography:
  body: { fontFamily: '"Chinese YaHei", -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif', fontSize: "17px", lineHeight: 1.8 }
  body-cn: { fontFamily: "Helvetica, Tahoma, Arial, STXihei, sans-serif", fontSize: "18px", lineHeight: 1.9 }
  headline: { fontSize: "calc(2rem + var(--font-size-adjust))", fontWeight: 650, lineHeight: 1.3 }
  headline-cn: { fontSize: "calc(2rem + var(--font-size-adjust))", fontWeight: 700, lineHeight: 1.3 }
  title: { fontSize: "calc(1.1rem + var(--font-size-adjust))", fontWeight: 650, lineHeight: 1.45 }
  subtitle: { fontSize: "var(--body-size)", fontWeight: 700, lineHeight: 1.5 }
  summary: { fontSize: "var(--body-size)", lineHeight: 1.82 }
  affiliation: { fontSize: "var(--body-size)", fontWeight: 500, lineHeight: 1.55 }
  label: { fontSize: "var(--body-size)", fontWeight: 600, lineHeight: 1.8 }
  navigation: { fontSize: "var(--body-size)", fontWeight: 500 }
  publication-title: { fontSize: "max(calc(1.06rem + var(--font-size-adjust)), var(--body-size))", fontWeight: 650, lineHeight: 1.45 }
  record-body: { fontSize: "var(--body-size)", lineHeight: 1.65 }
  venue: { fontSize: "var(--body-size)", fontWeight: 600, lineHeight: 1.3 }
spacing:
  record-paragraph: "0.45rem"
  paragraph: "0.8rem"
  section-heading: "1.45rem"
  research-entry: "1rem"
  publication-entry: "1.7rem"
components:
  text-link: { textColor: "{colors.accent}", padding: "0" }
  navigation-link: { textColor: "{colors.muted}", typography: "{typography.navigation}", padding: "0.25rem 0" }
  section-heading: { textColor: "{colors.ink}", typography: "{typography.headline}" }
  research-entry: { textColor: "{colors.text}", typography: "{typography.body}", padding: "0.65rem 1rem" }
  publication-entry: { textColor: "{colors.text}", typography: "{typography.record-body}" }
  software-link: { textColor: "{colors.accent}" }
---

# Design System: Ying-Peng Tang academic homepage

## Overview

A plain academic homepage informed by Academic Pages, with its own composition. White space, language-specific sans-serif font stacks, blue links, and gentle line and paragraph spacing support reading in both languages.

The source of these tokens is `css/style.css`, with Chinese overrides in `css/style_cn.css`. The frontmatter records shared primitives; responsive rules and component details follow below and in `.impeccable/design.json`.

## Colors

The primary accent is blue: `accent` marks links and `accent-strong` darkens ordinary links on hover. `focus` provides the keyboard outline. The neutral roles are `page` for the white background, `ink` for headings and emphasis, `text` for prose, `muted` for supporting information, and `line` for dividers. Text selection uses `selection` behind `ink`.

## Typography

The English page retains the Academic Pages system font stack, with the local Chinese YaHei face for CJK glyphs. The Chinese page overrides the shared font token with `Helvetica, Tahoma, Arial, STXihei, sans-serif`, in that order. Fonts resolve from the visitor's installed fonts; no font downloads are used. English body line height is 1.8 and Chinese is 1.9; explicit component line heights remain shared.

All visible text must be at least the profile summary size. `--font-size-adjust` is 0px for English and 1px for Chinese, preserving the Chinese sizes while making the English page 1px smaller. The shared `--body-size` is `calc(1.06rem + var(--font-size-adjust))` above 980px and `calc(1rem + var(--font-size-adjust))` at or below 980px; navigation, affiliation, labels, profile details, dates, metadata, service descriptions, and footer use it. Biography prose uses `max(calc(1.02rem + var(--font-size-adjust)), var(--body-size))`; publication titles use `max(calc(1.06rem + var(--font-size-adjust)), var(--body-size))`.

The heading hierarchy is h1/h2 (`headline`), h3 (`title`), and h4 (`subtitle`); Software uses `label`. Software and profile panel titles use `calc(1.28rem + var(--font-size-adjust))` and `calc(1.46rem + var(--font-size-adjust))`. At the browser's default 16px root size, responsive sizes are:

| Viewport | Body (EN / CN) | Default h1/h2 (EN / CN) | Summary (EN / CN) | Affiliation (EN / CN) |
| --- | --- | --- | --- | --- |
| Above 980px | 17px / 18px | 32px / 33px | 16.96px / 17.96px | 16.96px / 17.96px |
| At most 980px | 17px / 18px | 29.12px / 30.12px | 16px / 17px | 16px / 17px |
| At most 720px | 17px / 18px | 26.4px / 27.4px | 16px / 17px | 16px / 17px |
| At most 480px | 16px / 17px | 27.52px / 28.52px | 16px / 17px | 16px / 17px |

## Layout

The header, sections, and footer share a centered maximum width (980px). Sections use vertical/horizontal padding (1.9rem / 1.5rem), reduced at 720px (1.6rem / 1rem). The biography has extra top space (3rem desktop; 2rem at 720px). Its summary and following paragraph have top margins (1.3rem and 1.15rem).

The square portrait floats right within the biography, whose container uses `flow-root`. Its width is 148px, then 112px at 720px and 88px at 480px; left margins are 2.5rem, 1.5rem, and 1rem respectively. At 480px the summary clears the portrait and adds 0.25rem top padding. Profile links, email, and research interests align at the top in a borderless three-column grid (`minmax(0, 1.15fr) minmax(0, 1.1fr) minmax(0, 1.2fr)`, gap 1.5rem), stacking at 720px with a 1rem gap.

Four compact research cards use two columns on desktop and one at 720px, with a 1rem gap and padding of 0.65rem 1rem. They contain short descriptions and optional publication links, without diagrams or a section subtitle. Card paragraphs use a 0.35rem top margin and 1.45 line height; the link row adds 0.35rem top padding. Software retains text and a 320px repository-link column, stacking at 720px with a 1.4rem gap.

Publication entries use venue/text columns (`8.25rem minmax(0, 1fr)`, gap 1.2rem), becoming one column at 720px with a 0.45rem gap; entries remain 1.7rem apart. Awards use date/text columns (`5.5rem minmax(0, 1fr)`, gap 1rem), stacking at 480px with a 0.2rem gap. Academic-service panels are stacked 2.4rem apart.

Navigation contains wrapping section and language links without a repeated name. At 720px it uses 1rem side padding; the footer stacks and its registration text aligns left.

## Elevation & Depth

The page is flat. There are no shadows, raised surfaces, or tinted panels; spacing and thin dividers establish structure.

## Shapes

The portrait remains square, using an aspect ratio of 1 and `object-fit: cover`. Research cards are rectangular with a single-pixel border in `line`; profile details remain borderless. No rounded containers or pills are used. Header, section-heading, and footer dividers use the same single-pixel rule.

## Components

- Navigation uses muted text links with underline and accent color on hover. Chinese labels are 首页 / 研究方向 / 学术论文 / 开源软件 / 荣誉与服务 / English, retaining the existing destinations. The name appears in the biography only.
- Profile actions remain underlined text links. ALiPy has a linked GitHub icon (88px square; 64px at 720px) with a text label below, switching to a horizontal icon/label pair on mobile.
- Research cards use a heading, a concise description, and optional publication links. Publication entries use a venue, title, authors, and citation; author text uses the main prose color, while supporting metadata is muted.
- Every anchor has a visible keyboard outline (2px solid `focus`, offset 4px). The skip link appears on focus and targets the main content. Anchor targets use a 1.5rem scroll margin.
- Anchor scrolling is smooth by default and switches to automatic scrolling when `prefers-reduced-motion: reduce` applies. There are no decorative transitions or animations.
- The portrait (`images/t3.jpg`) and registration image (`images/beian.png`) retain their original bytes. Both language pages declare an empty transparent SVG favicon to replace cached tab artwork. The unused `images/favicon.svg` asset remains in the repository.
- The GitHub icon comes from the existing `fontawesome5/svgs/brands/github.svg` asset. Research cards contain no images.

## Do's and Don'ts

- Do keep every text element at least as large as the profile summary and preserve the English/Chinese line-height distinction.
- Do keep records readable through spacing, plain headings, and conventional links.
- Do preserve the original portrait, registration information, scholarly content, and bilingual links.
- Don't add research diagrams, a research subtitle, decorative monograms, marketing heroes, badges, or decorative animation.
- Don't copy the Academic Pages template or turn this document into a new visual identity.
