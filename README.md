# Grace & Journey

Grace & Journey is a Next.js website for sharing ministry updates, pilgrimage information, reflections, photo galleries, and ways to get in touch.

## Repository Requirements

| Item | Requirement |
| --- | --- |
| GitHub account | `heartsblanks` |
| Repository | `grace-and-journey` |
| Full repo | `heartsblanks/grace-and-journey` |
| Default branch | `main` |
| Intended visibility | Private eventually |
| Current visibility | Public temporarily, while troubleshooting ChatGPT access |
| Purpose | Source repository for the Grace & Journey website |
| Framework | Next.js |
| Hosting | Vercel |
| Deployment model | GitHub to Vercel automatic deployment |
| Code ownership | GitHub remains the source of truth |
| Secrets | Never commit credentials, API keys, or tokens to GitHub |

## Structure

- `app/`: App Router pages, layout, and global styles.
- `components/`: Shared UI components.
- `content/blog/`: Blog post source files.
- `content/pilgrimages/`: Pilgrimage content source files.
- `public/images/`: General site images.
- `public/gallery/`: Gallery images.
- `public/pilgrimage/`: Pilgrimage images.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Adding Content

Add blog post drafts under `content/blog/` and pilgrimage notes under `content/pilgrimages/`. Add image files to `public/gallery/`, `public/pilgrimage/`, or `public/images/`, then reference them from the relevant page or component.

## Deployment

Vercel should be connected to `heartsblanks/grace-and-journey`. Pushes to `main` deploy automatically. Keep GitHub as the source of truth and manage secrets only through Vercel environment variables or another secure secret store.
