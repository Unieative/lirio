# Lirio — Authoring Guide

How to write graded book summaries for Lirio. Read this before creating or editing any chapter so every book reads consistently across levels.

---

## 1. The core idea

Lirio teaches French by retelling great books as **graded summaries**. The same book is rewritten five times, once per CEFR level, getting harder each time. A learner climbs the ladder — A1 → A2 → B1 → B2 → Native — and by the end is ready to read the **real book** in French on their own.

**Important:** the Native level is *not* the original text. It is a dense summary written in authentic native French. It is the final training step before the learner picks up the actual book.

### Chapters must follow the original book

**A book's chapter breakdown must mirror the real book's chapters, one-to-one.** If the source book has 20 chapters, the Lirio version has 20 chapters — same order, same scope per chapter, titles faithful to the original (translated into French). Do **not** condense several source chapters into one summary unit or invent a thematic grouping that the book doesn't have.

- Each Lirio chapter summarizes exactly **one** chapter of the source book.
- Keep the book's own part/section groupings (e.g. *Les Fondamentaux*, *1re Loi*, …) as headings in `SUMMARY.md` and the level READMEs.
- The **only** exception is a work whose natural unit isn't a numbered chapter (e.g. a short novel read in arcs); there, group by the book's own narrative divisions and say so in the introduction.
- All five levels of a book share the **same** chapter list — only the difficulty changes, never the structure.

---

## 2. Levels at a glance

| Level | CEFR | Résumé length | Tenses & grammar | Tone |
|:------|:-----|:--------------|:-----------------|:-----|
| 🟢 **A1** | Beginner | 150–300 words | Présent, near-future (`aller +` inf.), simple sentences | Short, concrete, one idea per sentence |
| 🟡 **A2** | Elementary | 300–450 words | Passé composé, imparfait, futur simple | Connected paragraphs, everyday vocabulary |
| 🟠 **B1** | Intermediate | 400–600 words | Subjonctif & conditionnel présent, relatives, gérondif | Natural argument, some abstraction |
| 🔴 **B2** | Advanced | 600–800 words | All tenses, nominalisation, complex subordination | Analytical, near-native, rich style |
| ⚫ **Natif** | Native | 800–1000 words | The full range; literary devices | Essayist prose, no simplification |

---

## 3. Chapter structure

Each A1–B2 chapter file has these sections, in this order:

```
# [Chapter title] [level emoji + label]

> *[A relevant quote]*
> — [Author]

---

## 📖 Résumé
## 🔤 Vocabulaire
## 💬 Expressions & Idiomes
## 🧠 Grammaire — [one grammar point that appears in the résumé]
## ✍️ Exercices          (3–4 exercises, always with answer keys)
## 📝 Glossaire
## 🔊 Audio               (▶️ link + a study tip)

[navigation footer]
```

The **Native** level is lighter and challenge-oriented:

```
## 📖 Résumé              (no glosses — see §4)
## 💭 Réflexions & Discussion   (5–6 open questions)
## ✍️ Exercice d'écriture       (one 250–300 word prompt)
## 📚 Pour aller plus loin       (French resources / related thinkers)
## 🔊 Audio
```

### Navigation footer

```html
<div style="display:flex; justify-content:space-between; margin-top:3em;">

[← Previous](chapter-0N.md) &nbsp;&nbsp;&nbsp; [Next →](chapter-0N.md)

</div>
```

- The first chapter's back-link points to `README.md` (e.g. `[← Vue d'ensemble A1](README.md)`).
- The last chapter has **no** forward link.

---

## 4. Inline word hints (the "Kindle glosses")

A gloss is a hard word with a dotted underline. Hovering (or tapping on mobile) shows a short definition bubble above it — like looking a word up on a Kindle without leaving the page.

### Markup

```html
<span class="gloss" data-def="short definition">mot difficile</span>
```

- The styling lives in `theme/custom.css`; mobile tap support is in `theme/glosses.js`. You don't touch those — just use the `<span>`.
- A gloss may wrap a bolded word: `<span class="gloss" data-def="...">**mot**</span>`.
- It works inside list items, tables are fine too, but keep glosses in the **Résumé** — that's the reading-flow section.

### Writing good definitions

- **Keep it short** — a few words, not a sentence. It must fit a small bubble.
- **Use the form `English — short clarifier`**: `data-def="to react — respond without thinking"`. The dash adds a tiny bit of nuance without bloating the bubble.
- **Define the word as used here**, not every possible meaning.
- **Plain English** at lower levels; at B2 a short French definition is fine for nuance.
- **Don't gloss the same word twice** in one résumé — gloss its first appearance only.

### Intensity per level (how many words to hint)

Hint density **decreases as the level rises**. Beginners need a lot of support; advanced readers should be challenged.

| Level | Glosses per résumé | What to gloss |
|:------|:-------------------|:--------------|
| 🟢 **A1** | **10–15** | Any word beyond the most basic ~500-word core. Be generous. |
| 🟡 **A2** | **8–12** | Words past everyday A1 vocabulary; useful verbs and nouns. |
| 🟠 **B1** | **6–10** | Less common vocabulary, abstract terms, idiomatic verbs. |
| 🔴 **B2** | **3–5** | Only rare, technical, or literary words. |
| ⚫ **Natif** | **0** | **None.** This is the no-scaffolding challenge — the whole point is to read unaided. |

Rule of thumb: a learner reading at their level should meet a hinted word roughly **every 2–3 sentences** at A1, thinning out to **once a paragraph** by B2, and **never** at Native.

### What *not* to gloss

- Cognates obvious to an English speaker (`important`, `direction`, `solution`) — unless the meaning differs.
- Proper nouns and names.
- Words already explained in the surrounding sentence.
- Anything in the Native résumé.

---

## 5. The other sections

- **🔤 Vocabulaire** — a table of 12–15 words from the chapter with meanings. This is the *exhaustive* word list; the glosses are the *inline* subset a reader is most likely to trip on.
- **💬 Expressions & Idiomes** — ~5 authentic French expressions tied to the chapter's themes.
- **🧠 Grammaire** — pick *one* grammar point that **actually appears** in the résumé, explain it with a table and examples drawn from the text, end with a 💡 *Astuce*.
- **✍️ Exercices** — 3–4 varied exercises (true/false, gap-fill, matching, short writing). **Always** include answer keys.
- **📝 Glossaire** — 5 terms defined *in French* (a mini monolingual dictionary), to nudge learners toward thinking in French.
- **🔊 Audio** — `▶️ [Écouter le chapitre N — LEVEL](../audio/LEVEL-chapter-0N.mp3)` plus a one-line study tip. (Audio files are placeholders for now.)

---

## 6. Style rules

- Write **natural, native French** — never translated-sounding English-in-French.
- One new idea at a time at A1; build complexity gradually with each level.
- Keep the author's key examples and arguments; *illuminate*, don't just list.
- Stay encouraging — the reader is learning a language and a great book at once.
- At Native, draw connections to French thinkers and culture where it fits naturally.

---

## 7. Checklist before committing

- [ ] Résumé length matches the level (§2).
- [ ] Gloss count matches the level's intensity (§4); Native has none.
- [ ] Glosses use the exact `<span class="gloss" data-def="...">` markup.
- [ ] Grammar point appears in the résumé and has examples from it.
- [ ] Exercises have answer keys.
- [ ] Navigation footer links are correct (first ← README, last has no →).
- [ ] `mdbook build` runs with no errors or warnings.
- [ ] New chapters are linked in `src/SUMMARY.md`.
