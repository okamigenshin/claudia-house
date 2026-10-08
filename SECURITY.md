# Website security

Reviewed and hardened on 8 October 2026. This is a public static export hosted on GitHub Pages, with no Next.js server, database or website login in production.

## Controls

- `master` requires pull requests and a successful Site safety check. Force pushes and deletion are blocked, including for the owner, with no routine bypass. `gh-pages` is a protected historical build and cannot publish.
- Site safety audits locked dependencies, lints the source, builds a production export, validates the export and scans the full Git history for secrets. Reports redact secret values. High or critical dependency findings block publication.
- Actions are restricted to GitHub-owned Actions pinned to full commit SHAs. Workflow credentials default to read-only, are not retained in the checkout, and cannot approve pull requests. External contributors need maintainer approval before workflows run. Only the deployment job receives Pages/OIDC write permissions, only on `master`, after safety checks pass.
- Dependabot checks npm dependencies weekly and GitHub Actions monthly. Security alerts and automatic security update pull requests are enabled.
- Each exported page uses exact content hashes for its necessary inline Next.js scripts. Other inline scripts and eval are blocked. Resources and connection destinations are restricted, plugins and base URL changes are blocked, and referrer information is withheld. Inline presentation styles remain permitted so React styles keep working.
- The unconfigured contact and newsletter forms were removed. People can use the existing email and phone details. Form submission is denied by CSP. PayPal donation navigation and the existing Google Maps embed remain available.
- Structured data escapes less-than characters before insertion into script elements, preventing a future data value from closing the script element.
- `claudiahouse.com` is verified in the owner's GitHub Pages account, and HTTPS is enforced. Preserve domain verification DNS records.

## Access and maintenance

`okamigenshin` is the only human repository administrator. The account's 2FA and passkeys were confirmed enabled during this review. No repository deploy keys, webhooks or stored Actions secrets were found. A compromised owner account can still change protection settings, so keep passkeys and recovery options secure and review new access grants carefully.

Never commit environment files, private keys, private client/programme records or database exports. If a credential is exposed, revoke or rotate it before dealing with history. Report exposures through a trusted private channel; do not post secrets in public issues.

The previous optional Next.js lint preset pulled in an unpatched `braces` dependency chain. It was replaced with maintained JavaScript, TypeScript and React linting. Next.js itself remains in use and type-checks the build. The complete npm dependency audit was clean after the update; future advisories may change that result.

## Limits

The repository and public website remain readable. Branch rules prevent unauthorized or unchecked changes; they do not prevent copying public source or assets. Independent human approval is not required because there is only one maintainer. Add a trusted second reviewer before imposing that requirement.

GitHub Pages does not provide project-configurable HTTP response headers. The HTML CSP cannot enforce `frame-ancestors`, and custom framing/Permissions Policy headers require a suitable host or proxy. No claim is made that those controls are present. Reusable CSP nonces are not used: static pages cannot generate a fresh nonce per request.

This work reduces risk and adds ongoing checks. It cannot guarantee that the repository or its dependencies will never have a vulnerability.
