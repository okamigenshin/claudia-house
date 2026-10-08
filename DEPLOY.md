# Claudia House build and deployment

The live site is https://claudiahouse.com/. Source lives on `master`.
GitHub Actions publishes a checked static `out/` artifact after changes merge.
The old `gh-pages` branch is a historical build and is no longer a publishing source.

## Making changes

1. Install the locked dependencies with `npm ci --ignore-scripts`.
2. Work on a separate branch and run `npm run lint`, `npm audit`, and `npm run build:domain`.
3. Run `python .github/scripts/check_site.py` and preview `out/` locally.
4. Open a pull request. The required Site safety check must pass before it can merge.
5. Merge using GitHub's squash merge. The workflow builds, scans and publishes automatically.

Do not push generated files to `gh-pages` or upload an unchecked export. The old direct deployment scripts and their publishing dependency have been removed.

## Production build

`npm run build:domain` sets the root domain and base path, runs Next.js static export,
and adds a restrictive Content Security Policy with the exact inline-script hashes
for each generated HTML page. It also adds a referrer policy and `.nojekyll`.
`public/CNAME` is copied into the export. A plain `npm run build` does not include
this security post-processing and should not be used as a release artifact.

GitHub Pages must use **GitHub Actions** as its source. Only `master` is allowed to
publish to the `github-pages` environment. The deployment job has the Pages and OIDC
permissions it needs; validation jobs have read-only permissions.

## Enquiries

The previous contact form used a placeholder destination, and newsletter inputs had
no delivery service. The site now directs people to the existing email and phone
contacts. Adding any data collection requires an approved destination, an appropriate
privacy notice, and a review of the form and CSP before publication.

See [SECURITY.md](SECURITY.md) for security controls and hosting limits.
