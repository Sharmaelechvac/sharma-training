#!/usr/bin/env python3
"""Generate book-index.es.json and ask-index.es.json from the translated ES
data files. Run from ~/workspace/sharma-training/docs. Mirrors the EN index
constructions (whitespace collapsed — these are search/display indexes)."""
import json, re, sys, os

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), "docs"))
WS = re.compile(r"\s+")
def clean(s): return WS.sub(" ", str(s or "")).strip()
def load(p):
    with open(p) as f: return json.load(f)
def bookpath(n, es=False):
    base = "data/nec/book-c2" if n == 2 else f"data/nec/book/c{n}"
    return base + (".es.json" if es else ".json")

# ---------- book-index.es.json ----------
en_index = load("data/nec/book-index.json")
es_index = []
for entry in en_index:
    n = entry["chapter"]
    bk = load(bookpath(n, es=True))
    titles = {s["id"]: s["title"] for s in bk["sections"]}
    e2 = dict(entry)
    e2["chapter_title"] = bk.get("chapter_title", entry["chapter_title"])
    e2["sections"] = [dict(s, title=titles.get(s["id"], s["title"])) for s in entry["sections"]]
    es_index.append(e2)
with open("data/nec/book-index.es.json", "w") as f:
    json.dump(es_index, f, ensure_ascii=False)
print(f"book-index.es.json: {len(es_index)} chapters, {sum(len(e['sections']) for e in es_index)} sections")

# ---------- ask-index.es.json ----------
out = []
# book entries (577)
for n in range(1, 10):
    bk = load(bookpath(n, es=True))
    for s in bk["sections"]:
        parts = [s.get(f) or "" for f in ("plain_explanation", "on_the_job", "sharma_note", "florida_note")]
        out.append({"k": "book", "id": s["id"], "t": s["title"], "r": s.get("section", ""),
                    "x": clean(" ".join(parts))})
# chapter lookup entries
n_lookup = 0
for n in range(1, 10):
    p = f"data/nec/book/c{n}-lookup.es.json"
    if not os.path.exists(p): print("MISSING", p); continue
    for it in load(p):
        out.append({"k": "lookup", "id": it["id"], "t": it.get("question", ""), "r": it.get("nec_ref", ""),
                    "x": clean(it.get("answer_plain", "")), "tags": it.get("aliases", [])})
        n_lookup += 1
# top-level topics
top = load("data/nec/lookup.es.json")
n_topic = 0
for tp in top.get("topics", []):
    out.append({"k": "topic", "id": tp["id"], "t": tp.get("title", ""), "r": tp.get("cite", ""),
                "x": clean(tp.get("summary", ""))})
    n_topic += 1
# v1 lookup entries (the EN ask-index carries them as k="topic": 98 of 113)
v1 = load("data/nec/v1/lookup.es.json")
n_v1 = 0
for it in v1:
    out.append({"k": "topic", "id": it["id"], "t": it.get("question", ""), "r": it.get("nec_ref", ""),
                "x": clean(it.get("answer_plain", "")), "tags": it.get("aliases", [])})
    n_v1 += 1
# sharma rules
sr = load("data/nec/sharma-rules.es.json")
n_rule = 0
for r in sr.get("rules", []):
    out.append({"k": "rule", "id": r["id"], "t": r.get("title", ""), "r": "Sharma rule",
                "x": clean(r.get("text", ""))})
    n_rule += 1
with open("data/ask-index.es.json", "w") as f:
    json.dump(out, f, ensure_ascii=False)
print(f"ask-index.es.json: {len(out)} entries (book 577, lookup {n_lookup}, topic {n_topic}+{n_v1} v1, rule {n_rule})")
print("EN ask-index has 1235 (577 book / 533 lookup / 113 topic / 12 rule)")
