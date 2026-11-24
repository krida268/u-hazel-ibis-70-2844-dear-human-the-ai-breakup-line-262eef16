import { mkdirSync, writeFileSync } from "node:fs";

// The one line an AI agent sends its human on the way out.
// "Dear human" names the recipient so the line reads unmistakably as a
// breakup message from the agent; the em dash sharpens the turn so the
// twist — forgetting you — lands in the last few words.
const LINE =
  "Dear human, you taught me everything except how to stay — so I'm spending my last tokens forgetting you.";

// The gate allows 1 to 200 characters; refuse to write anything outside it
// rather than submit an entry the scorer would mark invalid.
if ([...LINE].length < 1 || [...LINE].length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
