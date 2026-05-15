# Versioning

HarpeBlue Signal follows semantic versioning.

```txt
MAJOR.MINOR.PATCH
```

While the system is still stabilizing, releases stay in `0.x`.

## Current Stage

`0.1.0` means the first usable local CSS-first version.

## Rules

- Patch: small visual fixes, docs fixes, non-breaking CSS refinements.
- Minor: new components, new themes, new compatible tokens.
- Major: breaking class names, removed tokens, renamed themes, incompatible API changes.

## Examples

```txt
0.1.1 = fix button focus style
0.2.0 = add modal and tabs components
0.3.0 = add Tailwind adapter if ever needed
1.0.0 = stable public class and token API
```

## Release Flow

1. Update `CHANGELOG.md`.
2. Update `package.json` version.
3. Run `npm run build && npm run check`.
4. Commit with Gitmoji.
5. Tag the release.

Example:

```bash
git tag v0.1.0
```
