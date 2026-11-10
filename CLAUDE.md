# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A touch-screen **information totem (kiosk)** app for the IQOS presence at DWP (an event). It shows an interactive venue map, a "Program Privileges" video, and a 3-day stage rundown. It was scaffolded from the Brainlens Neon starter kit — the README describes that starter, not this app. The Neon/Drizzle/next-safe-action/bcrypt pieces (`src/db/`, `src/lib/safe-action.ts`, `drizzle.config.ts`) are leftover starter scaffolding: there is no schema and no page uses the database or server actions.

## Commands

```bash
npm run dev          # next dev (http://localhost:3000)
npm run build        # next build
npm run lint         # biome check (lint + format check)
npm run check:fix    # biome check --write (auto-fix lint + format)
npm run format       # biome format --write
```

There is no test suite. Biome (not ESLint/Prettier) is the linter/formatter; it uses **tab indentation**. `next.config.ts` sets `allowedDevOrigins: ["192.168.1.10"]` so the dev server can be opened from the physical kiosk device on the LAN.

## Architecture

- **Next.js 16 App Router, React 19, Tailwind v4** (theme tokens in `src/app/globals.css` via `@theme inline`). Path alias `@/*` → `src/*`.
- **Kiosk hardening lives in the root layout** (`src/app/layout.tsx`), wrapping every page:
  - `IdleTimeoutProvider` → `useIdleTimeout(80000)` redirects to `/` after 80s without input.
  - `DisableRightClick`, `DisableZoom` (blocks ctrl+wheel / ctrl +/-), and a viewport with `userScalable: false`.
  - `FooterPeringatan` (the 21+ health warning footer) is rendered on every page.
- **Sub-views are selected by query string, not nested routes.** Each top-level page is a client component that reads `useSearchParams()` and conditionally renders one component:
  - `/map?page=<key>` → `src/components/maps/Maps*.tsx` (falls back to `MapsMain`). Keys include `stage1`, `regbooth`, `houseofiqos`, `drumnbus`, etc.
  - `/rundown?day=day1|day2|day3` → `src/components/rundown/Day*.tsx` (falls back to `MainRundown`).
  - Adding a map location requires: a new `Maps<Name>.tsx`, a branch **and** an entry in the fallback exclusion list in `src/app/map/page.tsx`, and a `MapsButton` in `NavLegends.tsx` linking to `?page=<key>`.
- **Map location pages** are thin wrappers around `MapZoom` (`src/components/maps/MapZoom.tsx`), which takes asset names rather than paths and builds them from fixed folders: `mapFile` → `/mapzoom/<file>`, `iconUrl` → `/icon/<name>.png`, `popImage` → `/popup/<name>.png`. If `popImage` is set, the popup image replaces the title/content card. The close button links back to `/map`.
- **Content is mostly images** in `public/` (backgrounds, button PNGs, text-as-image headings, `rundown/`, `popup/`, `mapzoom/`, `icon/`). Layout is tuned for a large portrait display with fixed pixel sizes/absolute positioning (`lg:` variants for the big screen).
- **Fonts**: local IQOS fonts in `src/fonts/` exposed as CSS vars `--font-iqos` / `--font-iqos-breathing` and used via `font-iqos` classes.
