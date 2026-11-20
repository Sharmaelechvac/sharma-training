# Sharma Training

Sharma Electric & HVAC's one training app for crew and new hires — Lean App 6 of 7
(33 apps → 7). Consolidates:

- **Rough-In Guide** (formerly Electrician 101) — cheat sheets, quick answers, glossary
- **Rough-In Training** — the 10-module curriculum with practice quizzes (80% to pass)
- **Education** — the four TUG/service diagram lessons (Overhead, Meter-Main Combo,
  Stacked Combo, Subpanel), now under `docs/howtos/`
- **NEC Code** — the NEC Field Book: 9 chapters, 577 pages, look-ups, Sharma Rules,
  room/chapter checklists and the five calculators

Sections: **Course · Code · How-Tos · Quizzes**, plus **Ask the NEC**.

## Ask the NEC — fixed
The old Ask the NEC POSTed questions to `/api/ask` on a retired worker; on the
GitHub edition the route was stubbed off, so the feature was dead. This build
needs no server: Ask searches the Field Book's own data on the device
(`docs/data/ask-index.json`, generated from the 577 book pages + look-up topics +
Sharma Rules, merged at runtime with the guide topics, rough-in pages and quick
answers — 1,235+ entries). It returns ranked pages with snippets and deep links;
a section number (e.g. 210.52) matches its page directly. No key, nothing leaves
the phone.

## Content integrity
All lesson content is the original data, copied verbatim:
- `docs/data/nec/` — the entire NEC app `content/` tree (book, lookups, quizzes,
  checklists, calc tables, Sharma Rules, v1)
- `docs/data/guide/` — `guide.js`, `roughin.js`, `curriculum.js` byte-for-byte;
  `diagrams.js` is the guide app's own SVG diagram map, extracted unchanged
- `docs/howtos/` — the Education lesson pages; only navigation links and the
  service-worker registration were repointed to Training

New code is presentation only: sharma-kit v1.3 shell (SK.stack screens, sheets,
pull-to-refresh, skeletons), macOS-look, navy #264387 / gold #F0A846, 18px minimum
type, light-always on open with dark only via the Appearance switch.
Learned/Saved state reuses the NEC app's localStorage keys (`nec-learned`,
`nec-favs`) so crew progress carries over. No live business data. No push.

Live: https://sharmaelechvac.github.io/sharma-training/ (GitHub Pages, `docs/`)
Old apps redirect here: sharma-rough-in-guide → #/course, sharma-nec-code → #/code,
sharma-education → Training home and its lessons → the matching how-tos.
