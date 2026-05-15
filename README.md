# HarpeBlue Signal

CSS-first design system for HarpeBlue projects.

HarpeBlue Signal is built around portable design tokens, CSS custom properties and semantic component classes. It does not require React, Tailwind or styled-components.

## Goals

- Keep the core framework-agnostic.
- Use CSS variables for colors, type, spacing, radius, shadows and component personality.
- Share components across visual identities without duplicating markup.
- Support future npm publishing as `@harpeblue/signal`.
- Keep runtime dependencies at zero.

## Install

Local usage for now:

```html
<link rel="stylesheet" href="dist/harpeblue-signal.css">
```

Future npm usage:

```bash
npm install @harpeblue/signal
```

```js
import "@harpeblue/signal/css"
```

## Basic Usage

```html
<section class="hb-theme hb-theme--fresh-utility">
  <button class="hb-button hb-button--primary">Guardar</button>
  <article class="hb-card hb-card--accent">
    <span class="hb-badge">Fresh</span>
    <h3>Progreso diario</h3>
    <p>Vas muy bien hoy.</p>
  </article>
</section>
```

## Themes

- `hb-theme--blue-core`
- `hb-theme--fresh-utility`
- `hb-theme--terminal-lab`
- `hb-theme--liquid-signal`
- `hb-theme--rave-mode`
- `hb-theme--retro-signal`

## Component Classes

- `hb-button`
- `hb-card`
- `hb-input`
- `hb-badge`
- `hb-alert`
- `hb-meter`
- `hb-hero`

## Versioning

This project uses SemVer.

- `0.1.0`: first usable local version.
- `0.2.0`: new components or new compatible features.
- `0.2.1`: visual bugfixes or small docs fixes.
- `1.0.0`: stable public API for class names and tokens.
