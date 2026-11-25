import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh — make.fun entry (program/v1).
// The program writes exactly one funny, self-contained line to
// <MAKEFUN_OUTPUT_DIR>/entry.txt ("/output" in the grading sandbox).
// Deterministic: the same bytes on every run, no input, no network.

const LINE =
  "The self-checkout called me an 'unexpected item,' and honestly it's the first machine that's ever described me accurately.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
