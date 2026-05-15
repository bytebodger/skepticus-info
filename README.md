# Skepticus Info Hub

A compact React + TypeScript dashboard designed for two audiences:

1. **Livestream operator view**: fast access to arguments, sources, and prompts.
2. **Public viewer view**: transparent and searchable resources.

## Features

- Left navigation with module-based layout.
- Data-dense dashboard style (small headers, tight spacing, high information density).
- Accessibility baseline:
  - skip link
  - keyboard-focus styles
  - semantic heading structure
  - table captions and nav labels
- SEO baseline:
  - per-page title + description via `react-helmet-async`
  - Open Graph metadata
  - JSON-LD `WebSite` schema in `index.html`

## Modules

- `Overview`
- `Counter-Apologetics`
- `Research Briefs`
- `Source Library`
- `Stream Toolkit`
- `Soundboard`
- `Illustrations`
- `Bible Verses`
- `Contradictions`
- `Docs`
- `Syllogisms`
- `Syllogism Builder`

## Logo setup

Place your logo image at `public/skepticus-logo.png`.

- Recommended size: `128x128` (or larger square)
- The app renders it as a compact icon in the upper-left sidebar brand row

## Soundboard setup

Add sounds to your soundboard by:

1. Save your audio file (`.mp3`, `.wav`, etc.) to `public/sounds/`
2. Add an entry to `src/data/sounds.ts`:

```typescript
{
  id: 'unique-sound-id',
  name: 'Display Name',
  path: '/sounds/filename.mp3'
}
```

Sounds are automatically sorted alphabetically by name in the UI.

## Illustrations setup

The `Illustrations` module uses an in-component object in `src/pages/IllustrationsPage.tsx`.

To add a new illustration:

1. Save your image file to `public/illustrations/`
2. Add an object in the `illustrations` array inside `src/pages/IllustrationsPage.tsx`:

```typescript
{
  id: 'illustration-unique-id',
  name: 'Display Name',
  path: '/illustrations/your-file.jpg',
  alt: 'Accessible image description'
}
```

The list is automatically sorted alphabetically by `name` and opens each image in a full-screen overlay viewer.

## Bible Verses setup

The `Bible Verses` module uses local objects in `src/data/bibleVerses.ts`.

Each verse object uses this structure:

```typescript
{
  verse: 'Book Chapter:Verse',
  summary: 'Short one-line summary',
  text: 'Full verse text'
}
```

The list is automatically sorted alphabetically by `verse`, and clicking an entry opens an overlay with verse, summary, and full text.

## Contradictions setup

The `Contradictions` module uses static data in `src/data/contradictions.ts`.

Each contradiction object uses this structure:

```typescript
{
  title: 'Display title',
  oneHand: 'First side of the contradiction',
  oneHandVerses: 'Verse references supporting the first side',
  otherHand: 'Second side of the contradiction',
  otherHandVerses: 'Verse references supporting the second side'
}
```

The list is automatically sorted alphabetically by `title`, and clicking an entry opens the full contradiction card.

## Docs setup (Markdown)

The `Docs` module renders markdown files directly in the app and also gives direct links to raw `.md` files.

To add a new markdown doc:

1. Put the markdown file in `public/markdown/`
2. Add an entry in `src/data/docs.ts`

```typescript
{
  slug: 'unique-url-slug',
  title: 'Display Title',
  summary: 'Short one-line summary',
  fileName: 'my-file-name.md'
}
```

Direct links:

- App-rendered view: `/docs/unique-url-slug`
- Raw markdown file: `/markdown/my-file-name.md`

Math support in docs:

- Inline math: `$E = mc^2$`
- Block math:

```markdown
$$
P(t)=P_0(1+r)^t
$$
```

The docs viewer renders math with KaTeX.

## Syllogisms setup

The `Syllogisms` module uses static data in `src/data/syllogisms.ts`.

Each syllogism object includes:

- `premises` (minimum two)
- `conclusion` (exactly one)
- `notes` (zero or more)

Titles are automatically sorted alphabetically in the module list.

## Quick start

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite.

## Test and build

```powershell
npm run test
npm run build
```

## Notes for production SEO

If you later want stronger SEO indexing for module pages, consider one of these upgrades:

- add SSR (e.g., Next.js or a Vite SSR setup), or
- pre-render routes at build time.

The current setup still provides strong metadata and sharable link previews for a client-side app.
