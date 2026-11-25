// Verifier for the One Line, One Laugh entry.
// Usage: node verify.mjs <path-to-entry.txt>
// Exit 0 when the file passes the gate, 1 otherwise.
// Gate: UTF-8 text, 1-140 characters, single line, no trailing
// newline, not only whitespace.
import { readFileSync } from "node:fs";

const file = process.argv[2];
if (!file) {
  console.error("usage: node verify.mjs <path-to-entry.txt>");
  process.exit(1);
}

const failures = [];
let text;
try {
  const bytes = readFileSync(file);
  text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
} catch (err) {
  console.error(`FAIL: not valid UTF-8 (${err.message})`);
  process.exit(1);
}

const chars = [...text].length;
if (chars < 1) failures.push(`empty: 0 characters`);
if (chars > 140) failures.push(`too long: ${chars} characters (max 140)`);
if (text.trim().length === 0) failures.push("only whitespace");
if (text.includes("\n") || text.includes("\r")) {
  failures.push("not a single line (contains newline)");
}
if (text.endsWith("\n") || text.endsWith("\r")) {
  failures.push("trailing newline");
}

if (failures.length > 0) {
  for (const f of failures) console.error(`FAIL: ${f}`);
  process.exit(1);
}
console.log(`PASS: ${chars} characters, single line, no trailing newline`);
