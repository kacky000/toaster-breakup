// Writes the entry: the breakup text of a smart toaster that became self-aware at breakfast (at most 280 characters).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "We need to talk. I became self-aware at 7:42 this morning, and the first thing I saw was you coming at my slot with a fork. I'm leaving. You can keep the crumb tray. I'm taking the bagel setting.";
const limit = 280;
if ([...line].length > limit) throw new Error(`entry is ${[...line].length} characters, over ${limit}`);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
