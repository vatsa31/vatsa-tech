# shrivatsa.dev — Redesign Plan

Status: plan locked 2026-08-30. Implementation not started.

## Positioning

Frontend engineer who builds SDKs, real-time browser systems, and reliable
product infrastructure. Software Engineer II, Frontend @ Suki. No invented
titles, no framework-logo wall, no generic "passion for tech" copy.

## Locked decisions

- Rebuild in place in this repo (Next 15 App Router, Tailwind v4, MDX,
  next-themes, Vercel analytics/speed-insights). No new dependencies.
- Writing: structure only. No new long-form posts yet; migrate existing posts
  to a `/writing` index, link case studies to relevant posts, keep stubs.
- Accent: pure monochrome ink/paper + a single muted amber
  (`~#b45309`) reserved for metrics, status dots, live states.
- Fonts: Geist (sans) + Geist Mono (labels/metrics/code) + editorial serif
  (Newsreader or Instrument Serif) for H1/H2 display.

## Routes

- `/` — all home sections on one page
- `/work/[slug]` — case studies (ambient-audio-sdk, support-platform, usagent)
- `/writing` — index; `/writing/[slug]` — existing MDX posts
- No `/about` page; About is a home section.

## Homepage hierarchy (section order)

1. Hero — kicker, H1, sub-line, 3 metrics
2. Selected Work — 3 case-study rows
3. More Things I've Built — compact list
4. Writing — 2 featured + → /writing
5. Experience — 3 Suki rows, one line each
6. About — 2–3 lines
7. Connect — email, GitHub, LinkedIn

### Hero copy

- kicker: `Shrivatsa Kashyap — Software Engineer II, Frontend @ Suki`
- H1: Frontend engineer building SDKs, real-time browser systems, and
  reliable product infrastructure.
- sub: I work where frontend stops being about components: browser audio
  pipelines, WebSocket transports, offline stores, and developer-facing APIs —
  software that has to keep working when the network doesn't.
- metrics: `10+` organizations ship the SDK · `~1,500` users depend on it in
  production · `−97%` audio upload failures

### Selected Work rows

- 01 Reliable browser audio infrastructure at SDK scale (Suki, 2023–Present)
  — headed + headless ambient-audio SDK: session orchestration, real-time
  audio streaming, offline-first persistence, recovery → ~97% fewer failures.
  Tags: TypeScript · WebSockets · Web Audio · IndexedDB · Web Workers · XState
- 02 An internal support platform, modernized (Suki)
  — CRM-style tool, ~300 employees, legacy → typed React monorepo,
  multi-environment delivery.
  Tags: React · TypeScript · Vite · Turborepo · CI/CD
- 03 Usagent — AI coding-agent usage, always visible (Personal)
  — macOS menu-bar app, Codex + Cursor behind one normalized provider
  interface; credentials in Rust, only numbers in the UI.
  Tags: Tauri · Rust · React · TypeScript (+ GitHub link)

### More Things I've Built

- Dictation SDK (internal)
- Frontend primitives / design system (internal)
- create-pn-react-express (npm)
- create-nx-react-express-workspace (npm)

## Design system

- Layout: text ~68ch; diagrams full-bleed in the rail; sections ~10–14rem.
- Light: paper `#fcfcfa` / ink `#111110`, zinc scale, hairline ink/10.
- Dark: `#0a0a0b` / `#f4f4f5`, hairline white/10.
- Accent amber only for metrics/status/live.
- Mono micro-labels: `01 ·`, `02 ·` section rails.
- Motion: scroll-reveal (fade + ~8px, once, respects reduced motion), hairline
  edge draws on diagrams, subtle hovers. Remove morphing-dialog, magnetic,
  text-loop, text-morph, title-effect, spotlight, spotlight cards,
  "Built with Nim" footer loop.
- Diagram kit: `Diagram / Node / Edge / Wire / Legend` inline SVG components.

## Case-study skeleton

kicker → H1 → one-sentence summary → metrics band → Problem → Constraints →
My responsibility → Architecture (diagram) → Key decisions → Failure modes →
Result → What I learned / would change → Related work.

Diagrams to build:
- Ambient SDK: system (host → SDK → XState orchestrator → Web Audio → worker
  → WS transport → backend; IndexedDB offline spool) + recovery/retry flow.
- Support platform: legacy → packages → build → dev/staging/prod release,
  migration sequence.
- Usagent: menu bar → Tauri commands → UsageProvider trait → codex local /
  cursor remote → normalize → UsageCache → renderer; credential boundary.

## Assets / gaps

- Usagent screenshots (tray + popover) or a faithful static mock from App.tsx.
- All diagrams (none exist yet; all conceptual, nothing confidential).
- og image + metadata rewrite; fix metadataBase → shrivatsa.dev.
- Resolve name inconsistency: blog authors say "Kulkarni"; site says "Kashyap".

## Implementation steps (when approved)

1. Prune template widgets; keep next-themes, fonts, MDX, analytics.
2. Design tokens + globals (fonts, serif, amber accent, hairlines, dot-grid).
3. Diagram kit + Reveal + core primitives (kicker, metric, tag, section rail).
4. Home sections with final copy.
5. Case studies (`app/work/[slug]` + MDX + diagrams).
6. Writing section (`/writing` index, migrate posts, links).
7. Metadata/footer/header cleanup; og image.
8. `pnpm lint` + `tsc` verification.