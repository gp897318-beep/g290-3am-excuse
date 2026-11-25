// The 3 AM Excuse — make.fun entry.
// A hardware wallet refuses to sign a transaction at 3 AM.
// The program writes the excuse line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The excuse, assembled from its beats: refusal, the wallet's
// absurd signing history, the hour, and the vow never to repeat it.
const beats: string[] = [
  "Declined.",
  "I have signed three divorces, two yachts, and one NFT monkey",
  "— all at 3am.",
  "Never again.",
];

const line: string = beats.join(" ");

// Gate: the competition accepts UTF-8 text of 1 to 200 characters,
// a single line, not only whitespace. The entry is also checked
// against its known shape: 18 words, naming the hour and the vow.
function validateEntry(text: string): void {
  const MAX_CHARS = 200;
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry length ${text.length} outside 1..${MAX_CHARS}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const words: string[] = text.split(/\s+/).filter((w) => w.length > 0);
  if (words.length !== 18) {
    throw new Error(`expected 18 words, got ${words.length}`);
  }
  if (!text.includes("3am") || !text.endsWith("Never again.")) {
    throw new Error("entry must name the hour and end on the vow");
  }
}

validateEntry(line);

const outPath: string = join("/output", "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, line, "utf8");
console.log(`wrote ${line.length} chars to ${outPath}`);
