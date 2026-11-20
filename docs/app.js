/* Sharma Training — one app: Rough-in course · Code lookup · How-tos · Quizzes.
   Consolidates the Rough-In Guide, the training curriculum, the Education
   how-to lessons and the NEC Field Book. All lesson content is loaded from
   the original data files, copied verbatim (docs/data/). Presentation only
   is new: sharma-kit v1.3 shell, SK.stack screens, navy/gold, 18px type.
   Ask the NEC runs on-device against the Field Book's own page data —
   no server, no key. */
import { TOPICS, ANSWERS, GLOSSARY, BANNER, REVIEWED, LIC } from "./data/guide/guide.js";
import { ROUGHIN_PAGES, ROUGHIN_GROUPS, ROUGHIN_ANSWERS } from "./data/guide/roughin.js";
import { MODULES, PASS_PCT } from "./data/guide/curriculum.js";
import { diagram } from "./data/guide/diagrams.js";

const $esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const LOGO = `<a class="sk-header__logo" href="#/course"><img src="https://sharma-kit.sharma-crew.workers.dev/assets/logo-white-header.png" alt="Sharma Electric &amp; HVAC" width="103" height="20"></a>`;
const backBtn = (href, label) => `<a class="sk-header__btn sk-header__back" data-back href="${href}"><svg class="sk-icon"><use href="#i-chevron-left"/></svg>${label}</a>`;

/* ---------------- NEC data (lazy, mirrors the NEC app's file layout) ---------------- */
const NEC_BASE = "data/nec/";
const CHAP_DEFS = [
  { book: "book/c1", lookup: "book/c1-lookup", quiz: "book/c1-quiz", checklists: "book/c1-checklists" },
  { book: "book-c2", lookup: "book/c2-lookup", quiz: "book/c2-quiz", checklists: "book/c2-checklists" },
  { book: "book/c3", lookup: "book/c3-lookup", quiz: "book/c3-quiz", checklists: "book/c3-checklists" },
  { book: "book/c4", lookup: "book/c4-lookup", quiz: "book/c4-quiz", checklists: "book/c4-checklists" },
  { book: "book/c5", lookup: "book/c5-lookup", quiz: "book/c5-quiz", checklists: "book/c5-checklists" },
  { book: "book/c6", lookup: "book/c6-lookup", quiz: "book/c6-quiz", checklists: "book/c6-checklists" },
  { book: "book/c7", lookup: "book/c7-lookup", quiz: "book/c7-quiz", checklists: "book/c7-checklists" },
  { book: "book/c8", lookup: "book/c8-lookup", quiz: "book/c8-quiz", checklists: "book/c8-checklists" },
  { book: "book/c9", lookup: "book/c9-lookup", quiz: "book/c9-quiz", checklists: "book/c9-checklists" },
];
const NEC = { index: null, books: {}, top: null, v1: null, _p: {} };
async function loadJSON(name) {
  try { const r = await fetch(NEC_BASE + name + ".json?v=1"); if (r.ok) return await r.json(); } catch (e) {}
  return null;
}
function lightEntry(ix) {
  return { book: { chapter: ix.chapter, chapter_title: ix.chapter_title, nec_edition: ix.nec_edition || "", jurisdiction: ix.jurisdiction || "", sections: (ix.sections || []).map(s => ({ id: s.id, title: s.title, section: s.section || "", chapter: s.chapter || ix.chapter })) }, lookup: [], quiz: [], checklists: [], _light: true, _quizCount: ix.quizCount || 0, _ckCount: ix.ckCount || 0 };
}
async function ensureIndex() {
  if (!NEC.index) { const ix = await loadJSON("book-index"); NEC.index = (ix || []).map(lightEntry).sort((a, b) => a.book.chapter - b.book.chapter); }
  return NEC.index;
}
function ensureChapter(n) {
  if (NEC._p[n]) return NEC._p[n];
  const d = CHAP_DEFS[n - 1]; if (!d) return Promise.resolve(null);
  NEC._p[n] = Promise.all([loadJSON(d.book), loadJSON(d.lookup), loadJSON(d.quiz), loadJSON(d.checklists)]).then(([bk, bl, bq, bc]) => {
    if (bk && bk.sections) NEC.books[n] = { book: bk, lookup: bl || [], quiz: bq || [], checklists: bc || [] };
    return NEC.books[n] || null;
  });
  return NEC._p[n];
}
async function ensureTop() {
  if (!NEC.top) {
    const [l, c, q, s, t] = await Promise.all([loadJSON("lookup"), loadJSON("checklists"), loadJSON("quiz"), loadJSON("sharma-rules"), loadJSON("calc-tables")]);
    NEC.top = { lookup: l, checklists: c, quiz: q, rules: s, tables: t };
  }
  return NEC.top;
}
async function ensureV1() {
  if (!NEC.v1) {
    const [l, q, c, s] = await Promise.all([loadJSON("v1/lookup"), loadJSON("v1/quiz"), loadJSON("v1/checklists"), loadJSON("v1/sharma-rules")]);
    NEC.v1 = { lookup: l || [], quiz: q || [], checklists: c || [], rules: s || [] };
  }
  return NEC.v1;
}
function bookSectionLight(id) {
  for (const e of NEC.index || []) { const s = e.book.sections.find(x => x.id === id); if (s) return { ch: e.book.chapter, s }; }
  return null;
}
async function bookSectionFull(id) {
  const hit = bookSectionLight(id); if (!hit) return null;
  const e = await ensureChapter(hit.ch); if (!e) return null;
  const s = e.book.sections.find(x => x.id === id);
  return s ? { ch: hit.ch, s } : null;
}
const learned = new Set(JSON.parse(localStorage.getItem("nec-learned") || "[]"));
const favs = new Set(JSON.parse(localStorage.getItem("nec-favs") || "[]"));
function saveLearned() { localStorage.setItem("nec-learned", JSON.stringify([...learned])); }
function saveFavs() { localStorage.setItem("nec-favs", JSON.stringify([...favs])); }

/* ---------------- shared block renderer (guide + rough-in pages) ---------------- */
function sectionHtml(sec) {
  if (sec.type === "link") {
    const note = sec.note ? `<p class="tr-note">${$esc(sec.note)}</p>` : "";
    return `<a class="tr-btn tr-btn--ghost" href="${$esc(sec.href)}" target="_blank" rel="noopener">${$esc(sec.label)}</a>${note}`;
  }
  if (sec.type === "lead") return `<p class="tr-lead">${$esc(sec.text)}</p>`;
  if (sec.type === "diagram") return diagram(sec.id);
  if (sec.type === "note") return `<div class="tr-notebox">${$esc(sec.text)}</div>`;
  if (sec.type === "do") return `<div class="tr-do"><b>Do</b><ul>${sec.items.map(i => `<li>${$esc(i)}</li>`).join("")}</ul></div>`;
  if (sec.type === "never") return `<div class="tr-never"><b>Never</b><ul>${sec.items.map(i => `<li>${$esc(i)}</li>`).join("")}</ul></div>`;
  if (sec.type === "table") {
    const head = `<thead><tr>${sec.headers.map(h => `<th>${$esc(h)}</th>`).join("")}</tr></thead>`;
    const rows = `<tbody>${sec.rows.map(r => `<tr>${r.map(c => `<td>${$esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>`;
    return `${sec.caption ? `<div class="tr-tablecap">${$esc(sec.caption)}</div>` : ""}<div class="tr-tablewrap"><table class="tr-grid">${head}${rows}</table></div>`;
  }
  return "";
}
const blocksHtml = (page) => (page.sections || []).map(sectionHtml).join("");
const trimAt = (s, n) => { const t = String(s || ""); return t.length <= n ? t : t.slice(0, n).replace(/\s+\S*$/, "") + "…"; };
const askCard = `<a class="tr-ask" href="#/ask"><b>Ask the NEC</b><span>Type a question or a section number — it searches the Field Book's 577 pages, the look-ups and the guides, right on this device.</span><div class="go">Ask a question</div></a>`;

/* ---------------- Course (Rough-In Guide + training curriculum) ---------------- */
function courseRootHtml() {
  const scores = JSON.parse(localStorage.getItem("training-module-scores") || "{}");
  const mods = MODULES.map(m => {
    const sc = scores[m.id];
    return `<a class="tr-card" href="#/course/module/${m.id}"><span class="tr-card__t">Module ${m.number} — ${$esc(m.title)}${sc ? `<span class="tr-pill ${sc.pct >= PASS_PCT ? "tr-pill--ok" : "tr-pill--warn"}">${sc.pct}%</span>` : ""}</span><span class="tr-card__s">${$esc(m.recap)}</span><span class="tr-card__m">${m.quiz.length} questions · ${PASS_PCT}% to pass</span></a>`;
  }).join("");
  const groups = ROUGHIN_GROUPS.map(g => {
    const cards = g.ids.map(id => ROUGHIN_PAGES.find(p => p.id === id)).filter(Boolean).map(p =>
      `<a class="tr-card" href="#/course/page/${p.id}"><span class="tr-card__t">${$esc(p.title)}</span><span class="tr-card__s">${$esc(p.blurb)}</span></a>`).join("");
    return `<div class="tr-sec">${$esc(g.title)}</div>${cards}`;
  }).join("");
  return `<div class="tr-wrap"><div class="sk-pagehead"><div><h1 class="sk-title">Rough-In Course</h1><p class="sk-note">For helpers and apprentices — Sharma residential new construction</p></div></div>
  ${askCard}
  <p class="tr-reviewed">${$esc(REVIEWED)}</p>
  <div class="tr-sec">Training modules</div>${mods}
  <div class="tr-sec">Residential rough-in, step by step</div>${groups}
  <p class="tr-note">${$esc(LIC)}</p></div>`;
}
function coursePageHtml(id) {
  const p = ROUGHIN_PAGES.find(x => x.id === id);
  if (!p) return `<div class="tr-wrap"><h1 class="tr-h1">Page not found</h1><p class="tr-note">That rough-in page is not in the guide.</p></div>`;
  return `<div class="tr-wrap"><h1 class="tr-h1">${$esc(p.title)}</h1><p class="tr-reviewed">${$esc(REVIEWED)}</p><div class="tr-body">${blocksHtml(p)}</div></div>`;
}
function courseModuleHtml(id) {
  const m = MODULES.find(x => x.id === id);
  if (!m) return `<div class="tr-wrap"><h1 class="tr-h1">Module not found</h1></div>`;
  const topic = TOPICS.find(t => t.id === m.topicId);
  return `<div class="tr-wrap"><div class="tr-kicker">Module ${m.number}</div><h1 class="tr-h1">${$esc(m.title)}</h1>
  <div class="tr-banner">${$esc(BANNER)}</div>
  <p class="tr-lead">${$esc(m.recap)}</p>
  ${topic ? `<a class="tr-card" href="#/howtos/topic/${topic.id}"><span class="tr-card__t">Read: ${$esc(topic.title)}</span><span class="tr-card__s">${$esc(topic.blurb)}</span></a>` : ""}
  <a class="tr-btn" href="#/quiz/mod:${m.id}">Start the quiz — ${m.quiz.length} questions</a>
  <p class="tr-note">${PASS_PCT}% to pass. Scores save on this phone only.</p></div>`;
}

/* ---------------- Code (NEC Field Book) ---------------- */
const skel = `<div class="tr-wrap"><div class="sk-skel" style="margin:14px 0"></div><div class="sk-skel" style="margin:14px 0"></div><div class="sk-skel" style="margin:14px 0"></div></div>`;
function keyNums(t) { const m = [...String(t.summary || "").matchAll(/(\d+(?:\.\d+)?\s?(?:ft|in|%|VA|A\b|AWG))/g)].map(x => x[1].replace(/\s+/g, " ").trim()); return [...new Set(m)].slice(0, 4); }
function steps(t) { return String(t.summary || "").split(/(?<=\.)\s+/).filter(x => x.trim()).slice(0, 4); }

async function codeRootFill(page) {
  await ensureIndex();
  const chCards = NEC.index.map(e => {
    const secs = e.book.sections;
    const done = secs.filter(s => learned.has(s.id)).length;
    return `<a class="tr-card" href="#/code/ch/${e.book.chapter}"><span class="tr-card__t">Chapter ${e.book.chapter} — ${$esc(e.book.chapter_title)}</span><span class="tr-card__s">${secs.length} pages${done ? ` · ${done} learned` : ""}</span></a>`;
  }).join("");
  page.html(`<div class="tr-wrap"><div class="sk-pagehead"><div><h1 class="sk-title">Code Lookup</h1><p class="sk-note">NEC 2020 · Florida Building Code, 8th Edition — the Sharma Field Book, 577 pages</p></div></div>
  ${askCard}
  <div class="tr-sec">Field Book — chapter by chapter</div>${chCards}
  <div class="tr-sec">Fast answers</div>
  <a class="tr-card" href="#/code/lookup"><span class="tr-card__t">Look Up</span><span class="tr-card__s">The most-used topics and questions, answered plain</span></a>
  <a class="tr-card" href="#/code/rules"><span class="tr-card__t">Sharma Rules</span><span class="tr-card__s">Stricter than code — how we do it</span></a>
  <a class="tr-card" href="#/code/tools"><span class="tr-card__t">Tools — calculators</span><span class="tr-card__s">Box fill, conduit fill, voltage drop, ampacity, load calc</span></a>
  <a class="tr-card" href="#/code/checklists"><span class="tr-card__t">Checklists</span><span class="tr-card__s">Room and inspection checklists</span></a>
  ${favs.size ? `<a class="tr-card" href="#/code/saved"><span class="tr-card__t">Saved</span><span class="tr-card__s">${favs.size} saved ${favs.size === 1 ? "page" : "pages"}</span></a>` : ""}
  </div>`);
}
function chHtml(n) {
  const e = (NEC.index || []).find(x => x.book.chapter === n);
  if (!e) return skel;
  const rows = e.book.sections.map(s => `<a class="tr-card" href="#/code/page/${s.id}"><span class="tr-card__t">${$esc(s.title)}</span><span class="tr-card__s">NEC ${$esc(s.section || "")}${learned.has(s.id) ? " · Learned" : ""}</span></a>`).join("");
  return `<div class="tr-wrap"><h1 class="tr-h1">Chapter ${n} — ${$esc(e.book.chapter_title)}</h1><p class="tr-note">${e.book.sections.length} pages · ${$esc(e.book.jurisdiction || "")}</p>${rows}</div>`;
}
async function bookPageFill(page, id) {
  const hit = await bookSectionFull(id);
  if (!hit) { page.html(`<div class="tr-wrap"><h1 class="tr-h1">Page not found</h1><p class="tr-note">That Field Book page is not loaded.</p></div>`); return; }
  const s = hit.s;
  const rel = (s.related_ids || []).map(r => bookSectionLight(r)).filter(Boolean).map(r => `<a class="tr-card" href="#/code/page/${r.s.id}"><span class="tr-card__t">${$esc(r.s.title)}</span><span class="tr-card__s">NEC ${$esc(r.s.section || "")}</span></a>`).join("");
  page.html(`<div class="tr-wrap">
  <div class="tr-kicker">Chapter ${hit.ch} · NEC ${$esc(s.section || "")}</div>
  <h1 class="tr-h1">${$esc(s.title)}${s.verified === false ? `<span class="tr-pill tr-pill--warn">Not yet verified</span>` : `<span class="tr-pill tr-pill--ok">Verified</span>`}</h1>
  <div class="tr-body"><p class="tr-lead">${$esc(s.plain_explanation || "")}</p>
  ${s.on_the_job ? `<div class="tr-job"><b>On the job</b>${$esc(s.on_the_job)}</div>` : ""}
  ${s.sharma_note ? `<div class="tr-notebox"><b>Sharma note</b><br>${$esc(s.sharma_note)}</div>` : ""}
  ${s.florida_note ? `<div class="tr-fla"><b>Florida</b>${$esc(s.florida_note)}</div>` : ""}
  </div>
  <div class="tr-rowbtns">
    <button class="tr-markbtn ${learned.has(s.id) ? "on" : ""}" data-learned="${s.id}">${learned.has(s.id) ? "Learned" : "Mark as learned"}</button>
    <button class="tr-markbtn ${favs.has(s.id) ? "on" : ""}" data-fav="${s.id}">${favs.has(s.id) ? "Saved" : "Save page"}</button>
  </div>
  ${rel ? `<div class="tr-sec">Related pages</div>${rel}` : ""}
  <div class="tr-rowbtns" style="margin-top:14px">
    ${s.prev_id ? `<a class="tr-btn tr-btn--ghost" href="#/code/page/${s.prev_id}">Previous page</a>` : "<span style='flex:1'></span>"}
    ${s.next_id ? `<a class="tr-btn" href="#/code/page/${s.next_id}">Next page</a>` : "<span style='flex:1'></span>"}
  </div></div>`);
  page.el.querySelectorAll("[data-learned]").forEach(b => b.onclick = () => { const k = b.dataset.learned; learned.has(k) ? learned.delete(k) : learned.add(k); saveLearned(); bookPageFill(page, id); });
  page.el.querySelectorAll("[data-fav]").forEach(b => b.onclick = () => { const k = b.dataset.fav; favs.has(k) ? favs.delete(k) : favs.add(k); saveFavs(); bookPageFill(page, id); });
}
async function lookupListFill(page) {
  const [top, v1] = await Promise.all([ensureTop(), ensureV1()]);
  await Promise.all([1, 2, 3, 4, 5, 6, 7, 8, 9].map(ensureChapter));
  const seen = new Set(); const topics = [];
  for (const t of [...((top.lookup && top.lookup.topics) || []), ...(v1.lookup || [])]) { if (t && t.id && !seen.has(t.id)) { seen.add(t.id); topics.push(t); } }
  const topicCards = topics.map(t => `<a class="tr-card" href="#/code/topic/${t.id}"><span class="tr-card__t">${$esc(t.title || t.question || "")}</span><span class="tr-card__s">${$esc(t.cite || t.nec_ref || "")}</span></a>`).join("");
  let qa = "";
  for (const n of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    const e = NEC.books[n]; if (!e) continue;
    qa += e.lookup.map(x => `<a class="tr-card" href="#/code/lookup/${x.id}"><span class="tr-card__t">${$esc(x.question || "")}</span><span class="tr-card__s">Chapter ${n} · NEC ${$esc(x.nec_ref || "")}</span></a>`).join("");
  }
  page.html(`<div class="tr-wrap"><h1 class="tr-h1">Look Up</h1><p class="tr-note">Start with Ask the NEC for anything specific — these are the standing answers.</p>${askCard}<div class="tr-sec">Most-used topics</div>${topicCards}<div class="tr-sec">Questions by chapter</div>${qa}</div>`);
}
async function topicFill(page, id) {
  const [top, v1] = await Promise.all([ensureTop(), ensureV1()]);
  const t = [...((top.lookup && top.lookup.topics) || []), ...(v1.lookup || [])].find(x => x.id === id);
  if (!t) { page.html(`<div class="tr-wrap"><h1 class="tr-h1">Topic not found</h1></div>`); return; }
  const nums = keyNums(t).map(n => `<span class="tr-pill">${$esc(n)}</span>`).join("");
  const st = steps(t).map(s => `<li>${$esc(s)}</li>`).join("");
  page.html(`<div class="tr-wrap"><div class="tr-kicker">${$esc(t.cite || t.nec_ref || "Look Up")}</div><h1 class="tr-h1">${$esc(t.title || t.question || "")}</h1>
  ${nums ? `<p>${nums}</p>` : ""}<div class="tr-body"><p class="tr-lead">${$esc(t.summary || t.answer_plain || "")}</p>${st ? `<div class="tr-sec">Steps</div><ul>${st}</ul>` : ""}</div></div>`);
}
async function lookupFill(page, id) {
  const n = parseInt((id.match(/^C(\d)/) || [])[1] || "0", 10);
  if (n) await ensureChapter(n);
  let item = null, ch = n;
  if (!item) for (const k of Object.keys(NEC.books)) { const f = (NEC.books[k].lookup || []).find(x => x.id === id); if (f) { item = f; ch = +k; break; } }
  if (!item) { page.html(`<div class="tr-wrap"><h1 class="tr-h1">Answer not found</h1></div>`); return; }
  page.html(`<div class="tr-wrap"><div class="tr-kicker">Chapter ${ch} · NEC ${$esc(item.nec_ref || "")}</div><h1 class="tr-h1">${$esc(item.question || "")}</h1>
  <div class="tr-body"><p class="tr-lead">${$esc(item.answer_plain || "")}</p></div>
  ${(item.aliases || []).length ? `<p class="tr-note">Also asked as: ${item.aliases.map($esc).join(" · ")}</p>` : ""}</div>`);
}
async function rulesFill(page) {
  const [top, v1] = await Promise.all([ensureTop(), ensureV1()]);
  const seen = new Set(); const rules = [];
  for (const r of [...((top.rules && top.rules.rules) || []), ...(v1.rules || [])]) { if (r && r.id && !seen.has(r.id)) { seen.add(r.id); rules.push(r); } }
  page.html(`<div class="tr-wrap"><h1 class="tr-h1">Sharma Rules — how we do it</h1><p class="tr-note">The code is the floor. These are Sharma's own rules on top of it — when a Sharma rule and the code differ, follow the stricter one and ask your foreman if you are not sure.</p>
  ${rules.map(r => `<div class="tr-card"><span class="tr-card__t">${$esc(r.title || "")} <span class="tr-pill">${$esc(r.id || "")}</span></span><span class="tr-card__s" style="color:var(--tr-ink)">${$esc(r.text || "")}</span></div>`).join("")}</div>`);
}
async function checklistsFill(page) {
  const top = await ensureTop();
  await Promise.all([1, 2, 3, 4, 5, 6, 7, 8, 9].map(ensureChapter));
  let cards = "";
  ((top.checklists && top.checklists.rooms) || []).forEach((r, i) => {
    cards += `<a class="tr-card" href="#/code/checklist/top:${i}"><span class="tr-card__t">${$esc(r.room || "Room")}</span><span class="tr-card__s">${(r.items || []).length} checks</span></a>`;
  });
  for (const n of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    const e = NEC.books[n]; if (!e) continue;
    (e.checklists || []).forEach((g, i) => {
      cards += `<a class="tr-card" href="#/code/checklist/ch${n}:${i}"><span class="tr-card__t">${$esc(g.room || g.title || "Checklist")}</span><span class="tr-card__s">Chapter ${n} · ${(g.items || []).length} checks</span></a>`;
    });
  }
  page.html(`<div class="tr-wrap"><h1 class="tr-h1">Checklists</h1><p class="tr-note">Check a room or a system before you call it in. Ticks save on this phone only.</p>${cards}</div>`);
}
async function checklistFill(page, key) {
  const top = await ensureTop();
  let title = "", items = [];
  if (key.startsWith("top:")) {
    const r = ((top.checklists && top.checklists.rooms) || [])[+key.slice(4)];
    if (r) { title = r.room || "Checklist"; items = (r.items || []).map(t => ({ text: typeof t === "string" ? t : t.text, ref: "" })); }
  } else {
    const m = key.match(/^ch(\d):(\d)$/); if (m) { const e = await ensureChapter(+m[1]); const g = e && (e.checklists || [])[+m[2]]; if (g) { title = g.room || g.title || "Checklist"; items = (g.items || []).map(t => ({ text: t.text || "", ref: t.nec_ref || "" })); } }
  }
  const storeKey = "training-checks:" + key;
  const done = new Set(JSON.parse(localStorage.getItem(storeKey) || "[]"));
  const render = () => {
    page.html(`<div class="tr-wrap"><h1 class="tr-h1">${$esc(title)}</h1><p class="tr-note">${done.size} of ${items.length} checked</p>
    ${items.map((it, i) => `<label class="tr-check"><input type="checkbox" data-ck="${i}" ${done.has(i) ? "checked" : ""}><span>${$esc(it.text)}${it.ref ? ` <span class="tr-cite">(${ $esc(it.ref)})</span>` : ""}</span></label>`).join("")}</div>`);
    page.el.querySelectorAll("[data-ck]").forEach(c => c.onchange = () => { const i = +c.dataset.ck; c.checked ? done.add(i) : done.delete(i); localStorage.setItem(storeKey, JSON.stringify([...done])); });
  };
  render();
}
async function savedFill(page) {
  await ensureIndex();
  const cards = [...favs].map(id => { const hit = bookSectionLight(id); return hit ? `<a class="tr-card" href="#/code/page/${id}"><span class="tr-card__t">${$esc(hit.s.title)}</span><span class="tr-card__s">NEC ${$esc(hit.s.section || "")}</span></a>` : ""; }).join("");
  page.html(`<div class="tr-wrap"><h1 class="tr-h1">Saved pages</h1>${cards || `<p class="tr-note">Nothing saved yet — tap “Save page” on any Field Book page.</p>`}</div>`);
}

/* ---------------- Tools — calculators (ported from the NEC app, logic unchanged) ---------------- */
async function toolsFill(page) {
  const top = await ensureTop();
  const T = top.tables;
  if (!T) { page.html(`<div class="tr-wrap"><h1 class="tr-h1">Tools</h1><p class="tr-note">Calculator tables did not load.</p></div>`); return; }
  const q = (s) => page.el.querySelector(s);
  const num = (s) => { const v = parseFloat(q(s).value); return isNaN(v) ? 0 : v; };
  const sel = (s) => q(s).value;
  const awgs = Object.keys(T.circularMils);
  const opts = (arr, v) => arr.map(a => `<option ${a === v ? "selected" : ""}>${a}</option>`).join("");
  const emtSizes = Object.keys((T.conduitFillEMT || T.conduitAreas40pct.EMT));
  const matOpts = `<option value="copper">Copper</option><option value="aluminum">Aluminum</option><option value="cca">Copper-clad aluminum (CCA)</option>`;
  page.html(`<div class="tr-wrap">
  <h1 class="tr-h1">Tools — calculators for the job</h1>
  <p class="tr-note">EMT fill here covers 1/2 in through 2 in, THHN through 2 AWG. Ampacity is the Table 310.16 temperature column only — no ambient correction and no adjustment for more than three current-carrying conductors. Box fill and conduit fill do not change with copper, aluminum, or CCA; the metal only changes the size you already chose.</p>
  <div class="tr-card"><span class="tr-card__t">Box fill <span class="tr-cite">314.16</span></span>
    <div class="tr-field"><label>Wire size (AWG) — one size for every conductor in this count, including the largest ground</label><select id="bf-awg">${opts(["14", "12", "10", "8", "6"], "12")}</select></div>
    <div class="tr-field"><label>Conductors entering the box (count each insulated conductor; do NOT count grounds here — use the grounds field)</label><input id="bf-cond" type="number" value="6" min="0"></div>
    <div class="tr-field"><label>Devices (switches / receptacles)</label><input id="bf-dev" type="number" value="1" min="0"></div>
    <div class="tr-field"><label>Internal cable clamps?</label><select id="bf-clamp"><option value="0">No / external</option><option value="1">Yes (counts as 1)</option></select></div>
    <div class="tr-field"><label>Equipment grounding conductors entering the box (count) — 2020 rule 314.16(B)(5): the first four together take ONE allowance; each ground past four adds a QUARTER allowance</label><input id="bf-egc" type="number" value="2" min="0"></div>
    <div class="tr-field"><label>Box volume (cu in — printed inside the box)</label><input id="bf-box" type="number" value="22.5" step="0.5"></div>
    <button class="tr-btn" id="bf-go">Calculate box fill</button><div id="bf-out"></div></div>
  <div class="tr-card"><span class="tr-card__t">Conduit fill <span class="tr-cite">Ch. 9 Tables 1, 4, 5</span></span>
    <p class="tr-note">EMT only, 1/2 in through 2 in, THHN/THWN through 2 AWG. Copper, aluminum, and CCA use the same area.</p>
    <div class="tr-field"><label>Conduit (EMT)</label><select id="cf-size">${opts(emtSizes, "3/4")}</select></div>
    <div class="tr-field"><label>Wire size (THHN)</label><select id="cf-awg">${opts(Object.keys(T.conductorAreasTHHN), "12")}</select></div>
    <div class="tr-field"><label>How many conductors (grounds count too)</label><input id="cf-n" type="number" value="3" min="1"></div>
    <button class="tr-btn" id="cf-go">Calculate conduit fill</button><div id="cf-out"></div></div>
  <div class="tr-card"><span class="tr-card__t">Voltage drop <span class="tr-cite">210.19 / 215.2 notes · Ch. 9 Table 8</span></span>
    <div class="tr-field"><label>Material</label><select id="vd-mat">${matOpts}</select></div>
    <div class="tr-field"><label>Wire size (AWG)</label><select id="vd-awg">${opts(awgs, "12")}</select></div>
    <div class="tr-field"><label>Load (amps)</label><input id="vd-i" type="number" value="16" step="0.5"></div>
    <div class="tr-field"><label>One-way length (ft)</label><input id="vd-l" type="number" value="75"></div>
    <div class="tr-field"><label>Circuit voltage</label><input id="vd-v" type="number" value="120"></div>
    <div class="tr-field"><label>System</label><select id="vd-ph"><option value="1">Single-phase</option><option value="3">Three-phase</option></select></div>
    <button class="tr-btn" id="vd-go">Calculate voltage drop</button><div id="vd-out"></div></div>
  <div class="tr-card"><span class="tr-card__t">Wire ampacity <span class="tr-cite">Table 310.16 · 240.4(D) · 334.80 · 110.14(C)</span></span>
    <p class="tr-note">75°C column, 30°C ambient, not more than three current-carrying conductors. No bundling adjustment and no ambient correction in this tool.</p>
    <div class="tr-field"><label>Material</label><select id="am-mat">${matOpts}</select></div>
    <div class="tr-field"><label>Wire size (AWG)</label><select id="am-awg">${opts(Object.keys(T.ampacity75C.copper), "12")}</select></div>
    <button class="tr-btn" id="am-go">Look up ampacity</button><div id="am-out"></div></div>
  <div class="tr-card"><span class="tr-card__t">Residential load calc <span class="tr-cite">220.82 optional method</span></span>
    <p class="tr-note">For a dwelling on one 120/240 V or 120/208 V service or feeder of 100 A or more. Fixed-appliance nameplates go inside the 10 kVA demand split. Heating and cooling are not added together.</p>
    <div class="tr-field"><label>Living area (sq ft) — outside dimensions, not porches, garages, or unused space</label><input id="lc-sf" type="number" value="1800"></div>
    <div class="tr-field"><label>Small-appliance branch circuits (1,500 VA each)</label><input id="lc-sa" type="number" value="2" min="0"></div>
    <div class="tr-field"><label>Laundry branch circuits (1,500 VA each)</label><input id="lc-ld" type="number" value="1" min="0"></div>
    <div class="tr-field"><label>Fastened appliance nameplates (VA) — range, dryer, water heater, and other fastened loads. These sit inside the 10 kVA / 40% split.</label><input id="lc-app" type="number" value="12000"></div>
    <div class="tr-field"><label>Heating type for 220.82(C)</label><select id="lc-mode">
      <option value="space-lt4" selected>Electric space heat, fewer than 4 separately controlled units (65%)</option>
      <option value="space-4">Electric space heat, 4 or more separately controlled units (40%)</option>
      <option value="hp">Heat pump, no supplemental heat (100%)</option>
      <option value="hp-strips">Heat pump plus strips that can run together (100% compressor + 65% strips)</option>
      <option value="none">No electric heat</option>
    </select></div>
    <div class="tr-field"><label>Heat or heat-pump compressor (VA)</label><input id="lc-heat" type="number" value="10000"></div>
    <div class="tr-field"><label>Supplemental strips (VA) — used only for heat pump plus strips</label><input id="lc-strips" type="number" value="0"></div>
    <div class="tr-field"><label>Air conditioning / cooling nameplate (VA), counted at 100%</label><input id="lc-ac" type="number" value="7200"></div>
    <button class="tr-btn" id="lc-go">Calculate service load</button><div id="lc-out"></div></div></div>`);
  q("#bf-go").onclick = () => { const per = T.boxFillVolumePerConductor[sel("#bf-awg")];
    const egcN = num("#bf-egc"); const egcF = egcN === 0 ? 0 : egcN <= 4 ? 1 : 1 + 0.25 * (egcN - 4);
    const total = per * (num("#bf-cond") + 2 * num("#bf-dev") + num("#bf-clamp") + egcF);
    const box = num("#bf-box");
    q("#bf-out").innerHTML = `<div class="tr-result">Required volume: <b>${total.toFixed(2)} cu in</b> (grounds allowance: ${egcF} × ${per} cu in)<br>Box volume: <b>${box} cu in</b> → ${total <= box ? "<b class=\"ok-t\">FITS</b>" : "<b class=\"no-t\">TOO SMALL</b> — use a bigger box or a box extension"}<br><span class="tr-flag">Copper, aluminum, and CCA do not change this volume — 314.16 charges the AWG, not the metal. This count assumes every conductor and the largest ground are the size selected. A smaller ground, a mixed size, or a fixture stud or hickey (one allowance each) is not in this number.</span></div>`; };
  q("#cf-go").onclick = () => {
    const size = sel("#cf-size"), each = T.conductorAreasTHHN[sel("#cf-awg")], n = num("#cf-n");
    const row = (T.conduitFillEMT || {})[size] || { p40: T.conduitAreas40pct.EMT[size] };
    const p40 = row.p40, p53 = row.p53 != null ? row.p53 : row.p40 / 0.40 * 0.53, p31 = row.p31 != null ? row.p31 : row.p40 / 0.40 * 0.31;
    const allow = n <= 1 ? p53 : n === 2 ? p31 : p40;
    const pct = n <= 1 ? 53 : n === 2 ? 31 : 40;
    const used = each * n;
    const note7 = allowArea => { const raw = allowArea / each; const base = Math.floor(raw + 1e-9); const frac = raw - base; return { raw, maxN: frac >= 0.8 - 1e-6 ? base + 1 : base }; };
    const here = note7(allow), at40 = note7(p40);
    const fits = n <= here.maxN;
    const note = (fits && used > allow + 1e-6) ? `<br>Chapter 9 Note 7 permits this count: the remainder is 0.8 or more, so the next whole number is allowed.` : "";
    q("#cf-out").innerHTML = `<div class="tr-result">Conductors take <b>${used.toFixed(3)} sq in</b>. Allowed at ${pct}% (Chapter 9, Table 1): <b>${allow.toFixed(3)} sq in</b> → ${fits ? "<b class=\"ok-t\">FITS</b>" : "<b class=\"no-t\">OVERFILLED</b> — upsize the conduit"}${note}<br>Note 7 maximum of this size at ${pct}%: <b>${here.maxN}</b>. At 40% (three or more conductors): <b>${at40.maxN}</b>.<br><span class="tr-flag">Same area for copper, aluminum, or CCA. Nipples 24 in or shorter may use 60% fill (Table 1, Note 4), and that note also skips the 310.15(C)(1) adjustment — this tool does not apply the 60% figure. EMT 1/2 in through 2 in, THHN through 2 AWG only.</span></div>`; };
  q("#vd-go").onclick = () => { const mat = sel("#vd-mat"), start = sel("#vd-awg"), I = num("#vd-i"), L = num("#vd-l"), V = num("#vd-v");
    if (mat === "cca") {
      q("#vd-out").innerHTML = `<div class="tr-result"><b>No voltage drop is computed for copper-clad aluminum.</b><br>Chapter 9, Table 8 lists DC resistance for copper and for aluminum. It has no copper-clad aluminum value, and this app has no cited 75°C CCA resistance from a manufacturer or a standard. A number is not invented here. Do not use the copper column for a CCA run.</div>`;
      return;
    }
    const f = sel("#vd-ph") === "3" ? 1.732 : 2;
    const R8 = (T.table8Resistance || {})[mat] || {};
    const dropFor = a => { const R = R8[a]; if (R) return f * L * I * R / 1000; const K = mat === "copper" ? 12.9 : 21.2; return f * K * I * L / T.circularMils[a]; };
    const vd = dropFor(start); const pct = 100 * vd / V;
    let size = start;
    const bySize = [...awgs].sort((x, y) => T.circularMils[x] - T.circularMils[y]);
    for (const a of bySize) { if (R8[a] && 100 * dropFor(a) / V <= 3) { size = a; break; } }
    const basis = R8[start] ? `Chapter 9, Table 8, stranded uncoated, 75°C (${R8[start]} Ω per 1,000 ft)` : "approximate K (12.9 copper, 21.2 aluminum) because no Table 8 value is loaded for this size";
    const rec = pct <= 3 ? "Within the 3% recommendation in the informational notes to 210.19 and 215.2. That note is not an NEC maximum." : `Above the 3% recommendation in the informational notes to 210.19 and 215.2 (not an NEC maximum). Smallest loaded size at or under 3% on this run: <b>${size} AWG</b>.`;
    q("#vd-out").innerHTML = `<div class="tr-result">Voltage drop: <b>${vd.toFixed(2)} V (${pct.toFixed(1)}%)</b> — ${basis}<br>${rec}<br><span class="tr-flag">Table 8 here is DC resistance, not the Table 9 impedance used for a long large feeder. Florida commercial work: FBC Energy Conservation C405.5.3 sizes feeders and branch circuits together for 5% total drop. Solid wire is slightly lower resistance than this stranded value.</span></div>`; };
  q("#am-go").onclick = () => { const mat = sel("#am-mat"), a = sel("#am-awg");
    const key = mat === "copper" ? "copper" : "aluminum";
    const label = mat === "cca" ? "copper-clad aluminum (CCA)" : mat;
    const amp = T.ampacity75C[key][a];
    const amp60 = (T.ampacity60C && T.ampacity60C[key] || {})[a];
    const cap = (T.smallConductorCaps[key] || {})[a];
    if (!amp) { q("#am-out").innerHTML = `<div class="tr-result">No 75°C Table 310.16 value for ${a} AWG ${label}. 14 AWG aluminum and 14 AWG CCA are not in that column.</div>`; return; }
    const cca = mat === "cca" ? `<br>Copper-clad aluminum uses the <b>aluminum column</b> of Table 310.16. The table has no CCA column. 240.4(D) applies the aluminum small-conductor caps to CCA.` : "";
    const col60 = amp60 ? `<br>60°C column: <b>${amp60}A</b>. Under 110.14(C), equipment 100A or less, and terminations on 14 AWG through 1 AWG, use the 60°C column unless the termination is marked for 75°C.` : "";
    const nm = amp60 ? `<br>334.80: NM cable's final ampacity cannot exceed the 60°C column (${amp60}A), even when the conductors are rated 90°C.` : "";
    const capLine = cap ? `<br>240.4(D) small-conductor cap: breaker not over <b>${cap}A</b>.` : `<br>240.4(D) does not cap this size.`;
    q("#am-out").innerHTML = `<div class="tr-result"><b>${a} AWG ${label}</b> — Table 310.16, 75°C column: <b>${amp}A</b> (30°C ambient, not more than three current-carrying conductors).${cca}${col60}${nm}${capLine}<br><span class="tr-flag">This tool does not apply ambient correction or the 310.15(C)(1) adjustment for more than three current-carrying conductors.</span></div>`; };
  q("#lc-go").onclick = () => {
    const sf = num("#lc-sf"), appVA = num("#lc-app"), heat = num("#lc-heat"), strips = num("#lc-strips"), ac = num("#lc-ac");
    const sa = 1500 * num("#lc-sa"), ld = 1500 * num("#lc-ld"), light = 3 * sf;
    const general = light + sa + ld + appVA;
    const demand = Math.min(general, 10000) + 0.4 * Math.max(general - 10000, 0);
    const mode = sel("#lc-mode");
    let heatVA = 0, heatWhy = "No electric heat counted";
    if (mode === "space-lt4") { heatVA = 0.65 * heat; heatWhy = "Electric space heat, fewer than 4 separately controlled units, at 65%"; }
    else if (mode === "space-4") { heatVA = 0.40 * heat; heatWhy = "Electric space heat, 4 or more separately controlled units, at 40%"; }
    else if (mode === "hp") { heatVA = heat; heatWhy = "Heat pump with no supplemental heat, at 100%"; }
    else if (mode === "hp-strips") { heatVA = heat + 0.65 * strips; heatWhy = "Heat-pump compressor at 100% plus supplemental strips at 65%"; }
    const hvac = Math.max(heatVA, ac);
    const hvacWhy = heatVA >= ac ? heatWhy : "Air conditioning at 100%";
    const total = demand + hvac, amps = total / 240;
    const svc = [100, 110, 125, 150, 175, 200, 225, 250, 300, 350, 400].find(s => s >= amps) || ">400";
    const fmt = n => Math.round(n).toLocaleString();
    q("#lc-out").innerHTML = `<div class="tr-result">Lighting, 3 VA/sq ft: <b>${fmt(light)} VA</b><br>Small-appliance + laundry: <b>${fmt(sa + ld)} VA</b><br>Fastened appliances: <b>${fmt(appVA)} VA</b><br>General load before demand: <b>${fmt(general)} VA</b><br>220.82(B): first 10 kVA at 100% and the remainder at 40%: <b>${fmt(demand)} VA</b><br>220.82(C), larger of heat and cooling — ${hvacWhy}: <b>${fmt(hvac)} VA</b> (heat side ${fmt(heatVA)} VA, cooling ${fmt(ac)} VA; they are not added)<br>Total: <b>${fmt(total)} VA = ${amps.toFixed(1)} A at 240 V</b><br>Next standard size in this list: <b>${svc} A</b><br><span class="tr-flag">Optional method only, for a dwelling on one 120/240 V or 120/208 V set of conductors rated 100 A or more. The other 220.82(C) choices (thermal storage, and a controller that keeps the compressor and the strips from running together) are not separate buttons — pick the matching type above. Confirm against the printed section before the service is ordered.</span></div>`; };
}

/* ---------------- Ask the NEC — on-device search over the book's own data ----------------
   The old feature POSTed to /api/ask on a worker that no longer exists, so on
   the GitHub edition the route was stubbed off / dead. This version needs no
   server: it searches the Field Book's 577 pages plus the look-up topics,
   quick answers and guides (data/ask-index.json + the guide modules). */
let ASK_IDX = null;
async function ensureAskIdx() {
  if (ASK_IDX) return ASK_IDX;
  let base = [];
  try { const r = await fetch("data/ask-index.json?v=1"); if (r.ok) base = await r.json(); } catch (e) {}
  const guide = [];
  TOPICS.forEach(t => guide.push({ k: "guide", id: t.id, t: t.title, r: "Rough-In Guide", x: (t.blurb || "") + " " + (t.tags || []).join(" "), tags: t.tags || [], h: "#/howtos/topic/" + t.id }));
  ROUGHIN_PAGES.forEach(p => guide.push({ k: "guide", id: p.id, t: p.title, r: "Rough-In Course", x: (p.blurb || "") + " " + (p.tags || []).join(" "), tags: p.tags || [], h: "#/course/page/" + p.id }));
  ANSWERS.concat(ROUGHIN_ANSWERS || []).forEach(a => guide.push({ k: "answer", id: a.id, t: a.title, r: "Quick answer", x: a.answer || "", tags: a.tags || [], h: "#/howtos/answer/" + a.id }));
  ASK_IDX = base.concat(guide);
  return ASK_IDX;
}
function askSearch(idx, raw) {
  const q = String(raw || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.replace(/[^a-z0-9.\s]/g, " ").split(/\s+/).filter(Boolean);
  const refTerm = (q.match(/\d{3}(?:\.\d+)?/) || [])[0] || null;
  const scored = [];
  for (const e of idx) {
    const title = (e.t || "").toLowerCase(), text = (e.x || "").toLowerCase(), ref = String(e.r || "").toLowerCase();
    const tags = (e.tags || []).join(" ").toLowerCase();
    let score = 0;
    if (refTerm && (ref === refTerm || ref.startsWith(refTerm))) score += 40;
    if (title.includes(q)) score += 25;
    for (const t of terms) {
      if (t.length < 2) continue;
      if (title.includes(t)) score += 10;
      if (tags.includes(t)) score += 6;
      if (ref === t) score += 12;
      if (text.includes(t)) score += 2;
    }
    if (score > 0) scored.push({ e, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 12).map(s => s.e);
}
function askSnippet(e, raw) {
  const text = e.x || ""; if (!text) return "";
  const terms = String(raw || "").toLowerCase().split(/\s+/).filter(t => t.length > 2);
  let pos = -1;
  for (const t of terms) { const i = text.toLowerCase().indexOf(t); if (i >= 0 && (pos < 0 || i < pos)) pos = i; }
  if (pos < 0) return $esc(trimAt(text, 150));
  const start = Math.max(0, pos - 60);
  return (start ? "…" : "") + $esc(text.slice(start, pos + 110)) + "…";
}
const KIND_LABEL = { book: "Field Book", lookup: "Look Up", topic: "Look Up", rule: "Sharma Rule", guide: "Guide", answer: "Quick answer" };
async function buildAsk(page) {
  page.html(`<div class="tr-wrap"><h1 class="tr-h1">Ask the NEC</h1>
  <p class="tr-note">Answers come from Sharma's own Field Book — all 577 pages — plus the look-ups, quick answers and guides. It runs on this device; nothing is sent anywhere. Always confirm against the official NEC, the plans and your foreman.</p>
  <input class="tr-search" id="ask-q" type="search" placeholder="Try: GFCI bathroom, box fill, 210.52, smoke alarms…" autocomplete="off">
  <button class="tr-btn" id="ask-go">Search the book</button>
  <div class="tr-chiprow">${["GFCI bathroom", "box fill", "310.16 ampacity", "smoke alarm placement", "service disconnect", "pool bonding"].map(x => `<button class="tr-chip" data-chip="${x}">${x}</button>`).join("")}</div>
  <div id="ask-out"><p class="tr-note">Loading the book index…</p></div></div>`);
  const idx = await ensureAskIdx();
  const out = page.el.querySelector("#ask-out");
  if (out) out.innerHTML = `<p class="tr-note">Ready — ${idx.length.toLocaleString()} pages and answers indexed.</p>`;
  const run = async () => {
    const v = page.el.querySelector("#ask-q").value;
    const res = askSearch(idx, v);
    out.innerHTML = res.length
      ? res.map(e => `<a class="tr-card" href="${e.h}"><span class="tr-card__t">${$esc(e.t)}</span><span class="tr-card__s">${KIND_LABEL[e.k] || e.k}${e.r ? " · " + $esc(e.r) : ""}</span><span class="tr-card__m">${askSnippet(e, v)}</span></a>`).join("")
      : `<div class="tr-card"><span class="tr-card__t">No match in the book</span><span class="tr-card__s">Try a section number (like 210.52) or different words. If it is not in the book, check the printed NEC or ask your foreman — this search never guesses.</span></div>`;
  };
  page.el.querySelector("#ask-go").onclick = run;
  page.el.querySelector("#ask-q").addEventListener("keydown", (ev) => { if (ev.key === "Enter") run(); });
  page.el.querySelectorAll("[data-chip]").forEach(c => c.onclick = () => { page.el.querySelector("#ask-q").value = c.dataset.chip; run(); });
}

/* ---------------- How-Tos (guide topics, quick answers, diagram lessons, glossary) ---------------- */
const HOWTO_LESSONS = [
  { dir: "overhead", title: "Overhead Service — the Sharma TUG", sub: "Service drop, mast, meter and panel, step by step" },
  { dir: "meter-main-combo", title: "Meter-Main Combo — Underground (TUG)", sub: "The underground service lesson with the Typical Details set" },
  { dir: "stacked", title: "Stacked Combo Lesson", sub: "Stacked meter-main arrangement, worked through" },
  { dir: "subpanel", title: "Subpanel Lesson", sub: "Feeders, grounding and neutrals for subpanels" },
];
function howtosRootHtml() {
  const topics = TOPICS.map(t => `<a class="tr-card" href="#/howtos/topic/${t.id}"><span class="tr-card__t">${$esc(t.title)}</span><span class="tr-card__s">${$esc(t.blurb)}</span></a>`).join("");
  const lessons = HOWTO_LESSONS.map(l => `<a class="tr-card" href="howtos/${l.dir}/"><span class="tr-card__t">${$esc(l.title)}</span><span class="tr-card__s">${$esc(l.sub)}</span></a>`).join("");
  return `<div class="tr-wrap"><div class="sk-pagehead"><div><h1 class="sk-title">How-Tos</h1><p class="sk-note">Cheat sheets, quick answers and worked lessons</p></div></div>
  <div class="tr-banner">${$esc(BANNER)}</div>
  <div class="tr-sec">Diagram lessons</div>${lessons}
  <div class="tr-sec">Cheat sheets</div>${topics}
  <a class="tr-card" href="#/howtos/answers"><span class="tr-card__t">Quick answers</span><span class="tr-card__s">${ANSWERS.concat(ROUGHIN_ANSWERS || []).length} short answers to the questions helpers ask most</span></a>
  <a class="tr-card" href="#/howtos/glossary"><span class="tr-card__t">Glossary</span><span class="tr-card__s">${GLOSSARY.length} trade words, defined plain</span></a></div>`;
}
function howtoTopicHtml(id) {
  const t = TOPICS.find(x => x.id === id);
  if (!t) return `<div class="tr-wrap"><h1 class="tr-h1">Topic not found</h1></div>`;
  return `<div class="tr-wrap"><h1 class="tr-h1">${$esc(t.title)}</h1><div class="tr-banner">${$esc(BANNER)}</div><div class="tr-body">${blocksHtml(t)}</div></div>`;
}
function answersHtml() {
  const cards = ANSWERS.concat(ROUGHIN_ANSWERS || []).map(a => `<a class="tr-card" href="#/howtos/answer/${a.id}"><span class="tr-card__t">${$esc(a.title)}</span><span class="tr-card__s">${$esc(trimAt(a.answer, 110))}</span></a>`).join("");
  return `<div class="tr-wrap"><h1 class="tr-h1">Quick answers</h1><div class="tr-banner">${$esc(BANNER)}</div>${cards}</div>`;
}
function answerHtml(id) {
  const a = ANSWERS.concat(ROUGHIN_ANSWERS || []).find(x => x.id === id);
  if (!a) return `<div class="tr-wrap"><h1 class="tr-h1">Answer not found</h1></div>`;
  const topic = TOPICS.find(t => t.id === a.topic);
  return `<div class="tr-wrap"><h1 class="tr-h1">${$esc(a.title)}</h1><div class="tr-banner">${$esc(BANNER)}</div>
  <div class="tr-body"><p class="tr-lead">${$esc(a.answer)}</p></div>
  ${topic ? `<a class="tr-card" href="#/howtos/topic/${topic.id}"><span class="tr-card__t">Read more: ${$esc(topic.title)}</span><span class="tr-card__s">${$esc(topic.blurb)}</span></a>` : ""}</div>`;
}
function glossaryHtml() {
  const rows = GLOSSARY.map(g => `<div class="tr-card"><span class="tr-card__t">${$esc(g.term)}</span><span class="tr-card__s" style="color:var(--tr-ink)">${$esc(g.def)}</span></div>`).join("");
  return `<div class="tr-wrap"><h1 class="tr-h1">Glossary</h1><div class="tr-banner">${$esc(BANNER)}</div>${rows}</div>`;
}

/* ---------------- Quizzes ---------------- */
function normQ(q, src) {
  return {
    q: q.q || q.question || "",
    choices: q.choices || [],
    answer: (q.answer != null ? q.answer : q.answer_index),
    explain: q.explain || q.why || q.explain_plain || "",
    cite: q.cite || q.nec_ref || "",
    src,
  };
}
async function quizBank(bank) {
  if (bank.startsWith("mod:")) {
    const m = MODULES.find(x => x.id === bank.slice(4));
    return m ? { title: `Module ${m.number} — ${m.title}`, qs: m.quiz.map(q => normQ(q, "module")), module: m } : null;
  }
  if (bank === "nec") {
    const top = await ensureTop();
    return { title: "NEC practice quiz", qs: ((top.quiz && top.quiz.questions) || []).map(q => normQ(q, "nec")) };
  }
  if (bank.startsWith("ch")) {
    const n = +bank.slice(2);
    const e = await ensureChapter(n);
    return e ? { title: `Chapter ${n} quiz`, qs: (e.quiz || []).map(q => normQ(q, "chapter")) } : null;
  }
  return null;
}
async function quizzesRootFill(page) {
  await ensureIndex();
  const scores = JSON.parse(localStorage.getItem("training-module-scores") || "{}");
  const mods = MODULES.map(m => {
    const sc = scores[m.id];
    return `<a class="tr-card" href="#/quiz/mod:${m.id}"><span class="tr-card__t">${$esc(m.title)}${sc ? `<span class="tr-pill ${sc.pct >= PASS_PCT ? "tr-pill--ok" : "tr-pill--warn"}">${sc.pct}%</span>` : ""}</span><span class="tr-card__s">Module ${m.number} · ${m.quiz.length} questions · ${PASS_PCT}% to pass</span></a>`;
  }).join("");
  const top = await ensureTop();
  const necCount = ((top.quiz && top.quiz.questions) || []).length;
  const chaps = NEC.index.map(e => `<a class="tr-card" href="#/quiz/ch${e.book.chapter}"><span class="tr-card__t">Chapter ${e.book.chapter} — ${$esc(e.book.chapter_title)}</span><span class="tr-card__s">${e._quizCount || 0} questions</span></a>`).join("");
  page.html(`<div class="tr-wrap"><div class="sk-pagehead"><div><h1 class="sk-title">Quizzes</h1><p class="sk-note">Practice on this phone — scores save on the device only</p></div></div>
  <div class="tr-sec">Training modules</div>${mods}
  <div class="tr-sec">Code quizzes</div>
  <a class="tr-card" href="#/quiz/nec"><span class="tr-card__t">NEC practice quiz</span><span class="tr-card__s">${necCount} questions from the most-used topics</span></a>
  ${chaps}</div>`);
}
function startQuiz(page, bank) {
  page.html(skel);
  quizBank(bank).then(b => {
    if (!b || !b.qs.length) { page.html(`<div class="tr-wrap"><h1 class="tr-h1">Quiz unavailable</h1><p class="tr-note">No questions loaded for this quiz.</p></div>`); return; }
    const state = { i: 0, score: 0, answered: false };
    const render = () => {
      if (state.i >= b.qs.length) {
        const pct = Math.round(100 * state.score / b.qs.length);
        if (b.module) {
          const scores = JSON.parse(localStorage.getItem("training-module-scores") || "{}");
          scores[b.module.id] = { pct, when: new Date().toISOString() };
          localStorage.setItem("training-module-scores", JSON.stringify(scores));
        }
        page.html(`<div class="tr-wrap"><h1 class="tr-h1">${$esc(b.title)}</h1>
        <p class="tr-score">${state.score} of ${b.qs.length} — ${pct}%</p>
        ${b.module ? `<p class="tr-note">${pct >= PASS_PCT ? "Passed. Nice work." : `Not yet — ${PASS_PCT}% to pass. Review the module and try again.`}</p>` : `<p class="tr-note">Practice only — no pass mark on this one.</p>`}
        <a class="tr-btn" href="#/quiz/${bank}">Retake the quiz</a>
        <a class="tr-btn tr-btn--ghost" href="#/quizzes">All quizzes</a></div>`);
        return;
      }
      const q = b.qs[state.i];
      page.html(`<div class="tr-wrap"><p class="tr-note">Question ${state.i + 1} of ${b.qs.length} · ${$esc(b.title)}</p>
      <h1 class="tr-h1" style="font-size:23px">${$esc(q.q)}</h1>
      <div id="qz-choices">${q.choices.map((c, ci) => `<button class="tr-choice" data-ci="${ci}">${$esc(c)}</button>`).join("")}</div>
      <div id="qz-explain"></div></div>`);
      state.answered = false;
      page.el.querySelectorAll("[data-ci]").forEach(btn => btn.onclick = () => {
        if (state.answered) return;
        state.answered = true;
        const ci = +btn.dataset.ci, right = ci === q.answer;
        if (right) state.score++;
        page.el.querySelectorAll("[data-ci]").forEach(x => {
          const xi = +x.dataset.ci;
          if (xi === q.answer) x.classList.add("right");
          else if (xi === ci) x.classList.add("wrong");
          x.disabled = true;
        });
        page.el.querySelector("#qz-explain").innerHTML = `<div class="tr-explain"><b>${right ? "Correct." : "Not quite."}</b>${q.explain ? `<br>${$esc(q.explain)}` : ""}${q.cite ? `<br><span class="tr-cite">NEC ${$esc(q.cite)}</span>` : ""}</div>
        <button class="tr-btn" id="qz-next">${state.i + 1 >= b.qs.length ? "See the score" : "Next question"}</button>`;
        page.el.querySelector("#qz-next").onclick = () => { state.i++; render(); page.el.scrollTop = 0; };
      });
    };
    render();
  });
}

/* ---------------- Router on SK.stack ---------------- */
let nav = null, curRoot = null, screenStack = [];
const ROOT_TITLES = { course: "Training", code: "Code Lookup", howtos: "How-Tos", quizzes: "Quizzes" };
function routeParts() { return (location.hash || "#/course").replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent); }
function topKey() { return screenStack.length ? screenStack[screenStack.length - 1] : curRoot; }
function buildRootContent(page, root) {
  if (root === "course") page.html(courseRootHtml());
  else if (root === "code") { page.html(skel); codeRootFill(page); }
  else if (root === "howtos") page.html(howtosRootHtml());
  else if (root === "quizzes") { page.html(skel); quizzesRootFill(page); }
}
function buildRoot(page, root) {
  page.setHeader({ lead: LOGO, title: ROOT_TITLES[root] });
  buildRootContent(page, root);
  page.refreshable(() => buildRootContent(page, root));
}
function pushScreen(key, title, backHref, backLabel, build) {
  nav.push(key, (p) => {
    p.setHeader({ lead: backBtn(backHref, backLabel), title });
    build(p);
  });
  screenStack.push(key);
}
function buildScreen(page, parts) {
  const [a, b, c] = parts;
  if (a === "course" && b === "page") page.html(coursePageHtml(c));
  else if (a === "course" && b === "module") page.html(courseModuleHtml(c));
  else if (a === "code" && b === "ch") { ensureIndex().then(() => page.html(chHtml(+c))); page.html(skel); }
  else if (a === "code" && b === "page") { page.html(skel); bookPageFill(page, c); }
  else if (a === "code" && b === "lookup" && !c) { page.html(skel); lookupListFill(page); }
  else if (a === "code" && b === "lookup" && c) { page.html(skel); lookupFill(page, c); }
  else if (a === "code" && b === "topic") { page.html(skel); topicFill(page, c); }
  else if (a === "code" && b === "rules") { page.html(skel); rulesFill(page); }
  else if (a === "code" && b === "tools") { page.html(skel); toolsFill(page); }
  else if (a === "code" && b === "checklists") { page.html(skel); checklistsFill(page); }
  else if (a === "code" && b === "checklist") { page.html(skel); checklistFill(page, c); }
  else if (a === "code" && b === "saved") { page.html(skel); savedFill(page); }
  else if (a === "howtos" && b === "topic") page.html(howtoTopicHtml(c));
  else if (a === "howtos" && b === "answers") page.html(answersHtml());
  else if (a === "howtos" && b === "answer") page.html(answerHtml(c));
  else if (a === "howtos" && b === "glossary") page.html(glossaryHtml());
  else if (a === "quiz") startQuiz(page, b);
  else page.html(`<div class="tr-wrap"><h1 class="tr-h1">Not found</h1></div>`);
}
function screenMeta(parts) {
  const [a, b] = parts;
  if (a === "ask") return { title: "Ask the NEC", back: "#/" + (curRoot || "course"), label: "Back" };
  if (a === "quiz") return { title: "Quiz", back: "#/quizzes", label: "Quizzes" };
  if (a === "course") return { title: b === "module" ? "Module" : "Rough-In", back: "#/course", label: "Course" };
  if (a === "code") return { title: "Code Lookup", back: b === "page" || b === "lookup" || b === "topic" ? "#/code" : "#/code", label: "Code" };
  if (a === "howtos") return { title: "How-Tos", back: "#/howtos", label: "How-Tos" };
  return { title: "Training", back: "#/course", label: "Back" };
}
function applyRoute() {
  if (!nav) return;
  const parts = routeParts();
  const first = parts[0];
  if (first === "ask" || first === "quiz") {
    if (!curRoot) { curRoot = "course"; nav.root("course", (p) => buildRoot(p, "course")); }
    const key = parts.join("/");
    if (topKey() !== key) { const m = screenMeta(parts); pushScreen(key, m.title, m.back, m.label, (p) => { if (first === "ask") buildAsk(p); else startQuiz(p, parts[1]); }); }
    return;
  }
  const root = ["course", "code", "howtos", "quizzes"].includes(first) ? first : "course";
  if (root !== curRoot) {
    curRoot = root;
    nav.root(root, (p) => buildRoot(p, root));
    screenStack = [];
  }
  if (parts.length <= 1) {
    if (screenStack.length) { nav.popTo(0); screenStack = []; }
    return;
  }
  const key = parts.join("/");
  if (topKey() === key) return;
  const ix = screenStack.indexOf(key);
  if (ix >= 0) { nav.popTo(ix + 1); screenStack = screenStack.slice(0, ix + 1); return; }
  const m = screenMeta(parts);
  pushScreen(key, m.title, m.back, m.label, (p) => buildScreen(p, parts));
}
function boot() {
  if (!window.SK || !SK.stack) { setTimeout(boot, 60); return; }
  nav = SK.stack("#app", { lead: LOGO, title: "Training" });
  const ap = document.getElementById("appearance");
  if (ap && SK.scheme) SK.scheme.mountToggle(ap);
  if (!location.hash) history.replaceState(null, "", "#/course");
  applyRoute();
}
window.addEventListener("hashchange", applyRoute);
boot();
