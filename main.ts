// One Star, Written in Sap — make.fun bounty
// u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4
//
// Writes a single one-line 1-star review, in the voice of a houseplant
// reviewing its human owner, to /output/entry.txt.
//
// The review: promised a windowsill, exiled to the top of a bookshelf —
// and the plant's only sunlight is the glow of its owner Googling
// "why is my plant dying" at 2 a.m. The owner is the cause, the search
// is the symptom, and the light is the punchline.
//
// Deterministic: a constant string, no randomness, no network, no env,
// no clock. Two runs write byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. He promised me a windowsill and gave me the top of the bookshelf, where my only sunlight is the glow of him Googling 'why is my plant dying' at 2 a.m.";

// Gate self-check: the sealed scorer accepts UTF-8 text of 1-279
// characters, not only whitespace, on a single line. Refuse to write
// anything invalid rather than emit a file the gate would reject.
if (
  REVIEW.length < 1 ||
  REVIEW.length > 279 ||
  REVIEW.trim().length === 0 ||
  REVIEW.includes("\n")
) {
  throw new Error(`review fails the gate: ${REVIEW.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
