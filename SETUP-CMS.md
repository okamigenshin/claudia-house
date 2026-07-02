# Claudia House — CMS & Auto-Deploy Setup

The site is set up so a non-technical editor can **log in and edit every page** — no code.
Content lives in editable files under [`content/`](content/); the pages read from them.
This guide has three parts: connect the CMS, turn on auto-publish, and day-to-day editing.

---

## 1. Connect Pages CMS (the editor)

[Pages CMS](https://pagescms.org) is free, open-source, and reads the [`.pages.yml`](.pages.yml)
config already in this repo (it defines a friendly form for every page).

1. Go to **https://app.pagescms.org** and click **Sign in with GitHub**.
2. Authorize the Pages CMS GitHub app **for the `okamigenshin/claudia-house` repo** (you can limit it to just this repo).
3. Open the repo in Pages CMS → it auto-detects `.pages.yml` and shows the editing forms:
   **Site Settings, Home, About, Programs, Team, Gallery, Get Involved, Contact.**
4. Edit text, swap photos (Media → upload), reorder people/gallery items, add job openings, etc.
   **Save** commits the change to the repo.

That's the client's whole experience: sign in with GitHub, edit forms, hit save.

---

## 2. Turn on auto-publish (one-time)

Right now publishing is **manual** (`npm run deploy`). To make a CMS save go live automatically,
switch to **GitHub Actions** (build + deploy on every commit).

**a. Grant the workflow permission** (once, from the project owner's machine):
```bash
gh auth refresh -s workflow
```

**b. Add the workflow file** at `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [master]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - run: node scripts/nojekyll.mjs
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```
Commit + push it (`git add .github && git commit -m "CI" && git push`).

> No terminal handy? Add it via the GitHub website instead: repo → **Actions** tab →
> **New workflow** → **set up a workflow yourself** → paste the YAML → commit. (The web UI
> doesn't need the workflow scope from step *a*.)

**c. Point Pages at Actions:** repo → **Settings → Pages → Build and deployment → Source: GitHub Actions.**
(This replaces the current `gh-pages` branch method.)

Done. From then on: **client edits in Pages CMS → commit → site rebuilds & publishes in ~1 minute.**

---

## 3. Until auto-publish is on

The site still deploys manually anytime with:
```bash
cd website && npm run deploy
```

---

## Notes
- **Fonts/colors/layout** are not in the CMS by design — the client edits *content*, not design, so they can't accidentally break the look. Design changes go through code.
- **Images:** the CMS uploads into `public/images/`. (Reminder: several source photos are large — worth compressing for speed.)
- **Contact form:** set the real Formspree endpoint in the CMS under **Contact → Form endpoint**.
