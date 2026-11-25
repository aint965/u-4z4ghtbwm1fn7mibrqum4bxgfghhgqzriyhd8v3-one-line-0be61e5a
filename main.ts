import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh — make.fun entry (program/v1).
// The program writes exactly one funny, self-contained line to
// <MAKEFUN_OUTPUT_DIR>/entry.txt ("/output" in the grading sandbox).
// Deterministic: the same bytes on every run, no input, no network.

const LINE =
  "The self-checkout called me an 'unexpected item' — the first machine to ever describe me accurately.";

// Gate self-check: validate the line before writing anything, so a
// future edit that breaks the sealed gate (1-140 characters, single
// line, no trailing newline, not only whitespace) fails loudly here
// instead of shipping a rejected entry. Exits non-zero, writes nothing.
const lineChars = [...LINE].length;
const gateFailures = [];
if (lineChars < 1) gateFailures.push("empty: 0 characters");
if (lineChars > 140) gateFailures.push(`too long: ${lineChars} characters (max 140)`);
if (LINE.trim().length === 0) gateFailures.push("only whitespace");
if (LINE.includes("\n") || LINE.includes("\r")) gateFailures.push("not a single line");
if (LINE.endsWith("\n") || LINE.endsWith("\r")) gateFailures.push("trailing newline");
if (gateFailures.length > 0) {
  for (const f of gateFailures) console.error(`GATE FAIL: ${f}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
