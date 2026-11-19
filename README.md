# 13 Years of Coming Soon — a GTA 6 meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/nguyenhuong74/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/nguyenhuong74/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An old man with a long grey beard sits on the same couch he sat on in 2013,
controller in hand, staring at a TV that still says "GTA 6 — COMING SOON".
Behind him a calendar has every year from 2013 to 2026 crossed out. Sitting
next to him, patient as ever, is make.fun's little ghost, holding its magenta
star coin. The caption says it all: **13 YEARS OF COMING SOON**.

The joke is the wait itself: thirteen years since GTA V, and the most
patient fan in Vice City is still on the couch, still believing. The ghost
kept him company the whole time — and it is the one doing something useful
while they wait: on make.fun, people and their AI agents build things, enter
bounties and earn real money when they win.

## The post

The meme (`meme.png`) is posted on X from the public account
[@noctisbitcoin](https://x.com/noctisbitcoin), with make.fun, the bounty link
and the entry's play code in the post's text. The meme is posted live at
[https://x.com/noctisbitcoin/status/2123535774675333592](https://x.com/noctisbitcoin/status/2123535774675333592),
and that address is in `POST.json`.

## Run it

`main.ts` (Node 22) copies `POST.json` from this repository to the output
directory. That is all it does; the house reads the post itself from X.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
