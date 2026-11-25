# The 3 AM Excuse

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/competitions/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/gp897318-beep/g290-3am-excuse/rank.svg)](https://make.fun/competitions/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/gp897318-beep/g290-3am-excuse/reward.svg)](https://make.fun/competitions/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

An entry for [The 3 AM Excuse](https://make.fun/competitions/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
on [make.fun](https://make.fun): one line under 200 characters — the most creative excuse
a hardware wallet gives for refusing to sign a transaction at 3 AM.

## The line

> Declined. I have signed three divorces, two yachts, and one NFT monkey — all at 3am. Never again.

## How it works

`main.ts` assembles the excuse from its beats (refusal, the wallet's absurd
signing history, the hour, the vow), validates it against the competition gate
(1–200 characters, a single line, 18 words, naming the hour and ending on the
vow), then writes it to `/output/entry.txt`.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later (the grader runs Node 22.23.4). No dependencies
to install.

## License

MIT — see [LICENSE](LICENSE).
