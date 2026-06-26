# Irion — Landing Page

**The marketing site for Irion: private consumer credit + B2B neobank infrastructure on the Canton Network.**

---

## What it is

The public marketing site for [Irion](../CLAUDE.md) — the "Buy Now, Pay Never" BNPL protocol and the
B2B / neobank infrastructure built on top of it (programmable treasury, FX, private payroll, and
lending-as-a-service, all private by construction on Canton). A Next.js 16 single-page marketing
experience (animated with Framer Motion + GSAP).

## Run

```bash
npm install
npm run dev          # http://localhost:3003   (run with -p 3003 if not the default)
# npm run build && npm start   # production
# npm run lint
```

Static marketing content only — no backend or environment configuration required.

## Layout

| Path | What |
|---|---|
| `src/app/page.tsx`, `layout.tsx` | the page + root layout |
| `src/components/layout/` | header, footer, logo, nav items |
| `src/components/ui/` | nav bar and shared UI |

## How it fits the system

A standalone marketing front door for the Irion product family; it links out to the apps (consumer
`/app` + `/pay`, the merchant + neobank consoles, the docs site) rather than calling any API itself.

> **Heads up:** this repo runs a newer Next.js than the public docs cover (see `AGENTS.md`). Read
> `node_modules/next/dist/docs/` before changing framework code.
