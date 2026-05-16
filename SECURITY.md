# Security

HarpeBlue Signal is CSS-first and has zero runtime dependencies by design.

## npm Publishing Rules

- Use 2FA on the npm account.
- Prefer trusted publishing from GitHub Actions via `.github/workflows/publish.yml`.
- Keep `files` in `package.json` restricted to the package payload.
- Do not add `postinstall` or install-time scripts.
- Keep runtime dependencies at zero unless there is a strong reason.
- Review any GitHub Action before adding it.
- Use least-privilege workflow permissions.

## Local Consumer Guidance

Consumers can audit signatures when npm provenance is available:

```bash
npm audit signatures
```

## Dependency Policy

The core package should not depend on React, Tailwind, styled-components or any runtime framework.

Adapters may exist later as separate packages, but the CSS core must remain framework-agnostic.

## Trusted Publisher Configuration

Configure npm trusted publishing with these exact values:

```txt
Provider: GitHub Actions
Organization or user: HarpeBlue
Repository: harpeblue-signal
Workflow filename: publish.yml
Environment name: leave empty
```

Publishing happens from the `Publish` workflow when a `v*` tag is pushed, or manually with workflow dispatch.
