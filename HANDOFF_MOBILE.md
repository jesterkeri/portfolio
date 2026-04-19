# Mobile Frontend Handoff

Desktop ships and works. **No mobile layout exists yet** — build mobile without regressing desktop.

## Key patterns to know

- Pages use **absolute positioning at fixed pixel coordinates** (not flex/grid). `--page-margin` defined in `src/app/globals.css` is the edge offset.
- **No `@media` queries exist yet.** All mobile work is new.
- Vanilla CSS in `src/app/globals.css` (no Tailwind, no CSS modules).
- `src/components/SectionPager.tsx` handles paginated sections (Skills x2, About x2). It has wheel, keyboard, and touch-swipe handlers, and locks body scroll via `body.section-pager-active`. **Don't modify — it's already touch-aware.**

## What mobile needs

1. Media queries in `globals.css` for roughly 375px (phone) and 768px (tablet).
2. Stacked / flex layouts replacing the desktop absolute positioning.
3. Nav: desktop has logo + 4 links + Contact button in a row. Mobile likely needs a hamburger.
4. Typography scale: desktop titles run 48px–156px; too big for phones.
5. Projects page: desktop uses horizontal-scroll cards. Mobile probably stacks vertically with the expanded state filling the viewport.
6. Section numbers "01" / "02" / "03" are stroked 156px; they'll need repositioning or scaling.

## Preserve on desktop

- SectionPager scroll-lock + dot navigation.
- Typewriter animation timing.
- Page transitions: `curtain` for home / achievements, `fade` for inner pages.
- Projects expanded-card behavior: one open at a time, text-first with Visit link.

## Gotchas

- **Turbopack CSS cache**: if CSS edits don't appear, run `pkill -f "next dev"; rm -rf .next; npm run dev`. Not a code bug, dev-mode cache issue.
- **`React.Children.toArray` flattens Fragments.** SectionPager pages must be real `<div>` children, not `<>…</>`.

## Out of scope (leave alone)

- Placeholder project images (`/krait.png`, `/cuttlefish.png`, `/buddies.png`, `/mako.png`, `/krilly.png`, `/suing.png`, `/blastfun.png`) are missing from `public/`. Joshua provides later.
- Project `url` fields are `"#"` placeholders except Mako Markets (`https://makomarket.xyz`).
- Contact popup: X, Telegram, Email are text placeholders. Only GitHub is a real link.

## Branching

Default branch: `master`. Working branch: `staging`. **Never push directly to `master`** — Joshua promotes.

## Files

- **Touch**: `src/app/globals.css` (mostly), and page JSX only if mobile needs new elements like a hamburger menu.
- **Don't touch**: `src/components/SectionPager.tsx`, `src/app/layout.tsx`.
