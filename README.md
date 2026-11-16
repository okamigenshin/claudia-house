# Claudia House website

Claudia House's static Next.js website is published at https://claudiahouse.com/.

For local development, run `npm ci --ignore-scripts` then `npm run dev`.
For a production preview, run `npm run build:domain` and serve the generated `out/` folder.

Changes go through a pull request, the Site safety checks and the GitHub Pages
publishing workflow. See [DEPLOY.md](DEPLOY.md) and [SECURITY.md](SECURITY.md).

## News & Updates

Homepage news is maintained in `lib/content.ts` and rendered by
`components/NewsUpdates.tsx`. Keep the building update, youth transportation
update and graduate holding announcement together in this section. Lambert's
13 November 2026 clarification allows separate graduate stories once they are
ready and permissions are in place. News photos and their provenance are listed
in [the image manifest](public/images/_manifest.md).
