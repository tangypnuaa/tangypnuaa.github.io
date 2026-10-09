# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Product Purpose

Ying-Peng Tang's bilingual academic homepage presents his biography, research,
publications, software, awards, academic service, and contact links.

## Capabilities and Constraints

The existing site uses static HTML and CSS, with English at `index.html` and
Chinese at `index_cn.html`. Preserve research claims, publication records,
links, and language switching. All visible text must be at least as large as the
profile summary paragraph at each breakpoint. Desktop body text is 17px in
English and 18px in Chinese. The minimum is 16.96px / 17.96px respectively,
or 16px / 17px at widths up to 980px with the default root size.
Keep established line-height and paragraph spacing outside the
compact research cards.
Keep the original portrait and registration details. Deployment remains the
existing GitHub Pages workflow; redesign work does not authorize publishing.

## Brand Commitments

The user requests a plain academic style informed by Academic Pages, with an
individual composition rather than its template. Slightly increase line and
paragraph spacing. Use the Academic Pages system font stack for the English page and
`Helvetica, Tahoma, Arial, STXihei, sans-serif` for the Chinese page, without font downloads. Chinese
navigation reads 首页 / 研究方向 / 学术论文 / 开源软件 / 荣誉与服务 / English. Keep a
compact upper-right portrait, four concise text research cards, and a borderless
responsive row for profile links, email, and research interests.

## Evidence on Hand

Each language page contains 15 publications, four research themes, ALiPy,
five awards, and four academic-service categories, including ICLR Area Chair.
The two user-supplied additions are “Robust Bidding Strategies under Censored
Feedback for Auction-Based Federated Learning.” (TPAMI 2027, preprint) and
“Distributionally Robust Black Box Optimization-based Bidding Strategy in
Auction-based Federated Learning.” (NeurIPS 2026). The latter cites the 40th
conference. Preserve the exact author lists and publication wording in the HTML.

Research uses text cards without diagrams or a subtitle. ALiPy links through the
existing bundled Font Awesome GitHub icon.
