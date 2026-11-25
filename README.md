# One Line, One Laugh

A make.fun entry for [One Line, One Laugh](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a): a program that writes exactly one funny, self-contained line to `/output/entry.txt`.

![make.fun](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a.svg)
![rank](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/aint965/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/rank.svg)
![reward](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/aint965/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/reward.svg)

The line:

> The self-checkout called me an 'unexpected item' — the first machine to ever describe me accurately.

`main.ts` (Node 22, standard library only, no dependencies, no network) writes the line deterministically — byte-identical on every run — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (`/output/entry.txt` in the grading sandbox). `verify.mjs` checks the output against the gate: UTF-8, 1–140 characters, a single line, no trailing newline, not only whitespace.
