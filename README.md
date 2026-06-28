# Irion — Landing Page

**The marketing site for Irion: private consumer credit + B2B neobank infrastructure on the Canton Network.**

> Buy Now. Pay Never.

---

## What it is

This is the public marketing front door for [**Irion**](https://github.com/nickthelegend) — the
"Buy Now, Pay Never" consumer-credit protocol and the B2B / neobank infrastructure built on top of
it (programmable treasury, multi-currency FX, private payroll, and lending-as-a-service), all
**private by construction** on the [Canton Network](https://www.canton.network/). A Daml contract is
visible only to its signatory and observer parties, so creditworthiness and balances are never
exposed on the ledger — that visibility model replaces zero-knowledge proofs.

The site is a single-page, premium animated experience built with the Next.js App Router and
animated with Framer Motion. It is **static marketing content only** — it links out to the apps
(the consumer wallet/checkout, the merchant and neobank consoles, the docs site) and never calls an
API itself.

## Sections

The page (`src/app/page.tsx`) is composed of scroll-revealed, snap-aligned sections:

| Section | What it shows |
|---|---|
| **Hero** | The "Buy Now. Pay Never." headline, primary CTA into the consumer app, and a dashboard preview. |
| **Bento feature grid** | The product pillars — private credit, the lend/borrow money market, financials-stay-local, and the pay-never yield loop. |
| **Privacy sandbox** | An interactive, simulated terminal that "attests" a credit score to illustrate Canton's private-contract flow. |
| **Methodology** | The three-step "how it works": prove credit privately → deposit collateral & earn yield → buy now, the yield pays it off. |
| **Footer** | Explore links out to the rest of the Irion product family. |

## Tech stack

- [**Next.js**](https://nextjs.org/) (App Router, under `src/app`) · React 19
- [**Framer Motion**](https://www.framer.com/motion/) + [**GSAP**](https://gsap.com/) for animation
- [**Tailwind CSS**](https://tailwindcss.com/) v4
- TypeScript

The brand system is lime-green accent (`#a6f24a`) on near-black, with a mono + Inter type pairing.

## Getting started

```bash
npm install
npm run dev            # http://localhost:3003  (default Next dev server)
npm run dev -- -p 3003 # pin the port explicitly if another app is running
```

No backend or environment configuration is required to run the site. The primary CTA target can be
overridden with the optional `NEXT_PUBLIC_APP_URL` environment variable (it defaults to the hosted
consumer app).

For a production build:

```bash
npm run build
npm start
npm run lint
```

## Testing

```bash
npm test     # node:test — footer render test (via tsx)
npm run e2e  # Playwright — real headless Chromium against the live Next server
```

The Playwright suite (`tests/e2e/landing.spec.ts`) builds and serves the actual app and drives a
browser to verify the page serves, hydrates, and renders the hero headline, the primary CTA, and the
footer.

## Project layout

| Path | What |
|---|---|
| `src/app/page.tsx` | the single-page marketing experience |
| `src/app/layout.tsx`, `globals.css` | root layout + global styles / theme |
| `src/components/layout/` | header, footer, logo, nav items |
| `src/components/ui/` | the nav bar and shared UI |
| `tests/e2e/` | Playwright browser E2E |

## How it fits the system

A standalone marketing site for the Irion product family. It is intentionally backend-free: every
action links out to the consumer app, the merchant / neobank consoles, or the
[documentation site](https://github.com/nickthelegend/irion-docs-bnpl-canton) rather than talking to
the Irion API directly.

---

> **Heads up for contributors:** this repo runs a newer Next.js than the public docs cover (see
> `AGENTS.md`). Read `node_modules/next/dist/docs/` before changing framework code.
