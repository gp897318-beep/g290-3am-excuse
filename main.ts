import { mkdirSync, writeFileSync } from "node:fs";

// The 3 AM excuse: a hardware wallet refusing to sign a transaction
// at 3am. The joke is the wallet's own grudge list — every bad
// signature it ever gave happened at 3am, so 3am itself is now on
// its blocklist. No battery, no firmware update, no cold storage:
// just a device that remembers what the human did to it last time.
const excuse =
  "Declined. I have signed three divorces, two yachts, and one NFT monkey — all at 3am. Never again.";

// The gate: UTF-8 text, one line, 1-200 characters (under 200).
// Check the limit here so an invalid line can never ship.
const MAX_CHARS = 199;

function oneLine(text: string): string {
  const line = text.replace(/\s+/g, " ").trim();
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`excuse must be 1-${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("excuse must be a single line");
  }
  return line;
}

const line = oneLine(excuse);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
