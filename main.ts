// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme picture posted from a public
// account, carrying make.fun and/or @makefunai plus the play code in its text.
// This program's only job is to hand the house the post's address: it copies
// POST.json from the repository root into the output directory, where the
// gate reads it. The house then reads the post from X and builds the dossier
// the judge sees. Nothing this program writes is judged.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'POST.json');
const destination = join(OUTPUT_DIR, 'POST.json');

try {
  copyFileSync(source, destination);
  // Fail fast on a malformed POST.json instead of handing the gate junk.
  const parsed = JSON.parse(readFileSync(destination, 'utf8')) as unknown;
  if (typeof parsed !== 'object' || parsed === null || !('url' in parsed)) {
    throw new Error('POST.json has no url field');
  }
} catch (err) {
  console.error(`Could not copy POST.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
