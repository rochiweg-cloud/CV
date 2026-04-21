# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal academic/portfolio website for Santiago Nuñez Rimedio (Social Data Scientist, UNSAM). Built on the **Academic Pages** Jekyll template (a detached fork of Minimal Mistakes), served via **GitHub Pages** from `https://SantiRimedio.github.io/web` (repo: `SantiRimedio/web`, branch `master`, `baseurl: /web`).

## Commands

### Local development
```bash
bundle install                         # install Ruby deps (delete Gemfile.lock and retry on error)
bundle exec jekyll serve -l -H localhost   # live-reload preview at http://localhost:4000/web
```
`_config.yml` is **not** hot-reloaded — restart `jekyll serve` after editing it.

### Docker (alternative)
```bash
docker compose up   # serves on localhost:4000; uses _config_docker.yml to override url/baseurl
```

### JS assets
`assets/js/main.min.js` is a prebuilt concatenation/uglification of jQuery + plugins + `_main.js`. Rebuild only if JS is edited:
```bash
npm install
npm run build:js        # one-shot
npm run watch:js        # rebuild on change
```

### Content generators (optional)
`markdown_generator/` contains Jupyter notebooks and Python scripts that turn TSV/BibTeX files into the markdown files under `_publications/` and `_talks/`. `talkmap.ipynb` / `talkmap.py` geocode talks and produce `talkmap.html`.

## Architecture

### Jekyll collections → pages
Content is authored as markdown in per-type **collections**, each rendered by a layout in `_layouts/` and listed by a page in `_pages/`:

| Collection dir | List page | Typical layout |
|---|---|---|
| `_portfolio/` | `_pages/portfolio.html` | `single` |
| `_publications/` | `_pages/publications.html` | `single` (with citation block) |
| `_talks/` | `_pages/talks.html` + `talkmap.html` | `talk` |
| `_teaching/` | `_pages/teaching.html` | `single` |
| `_research/` | `_pages/_research/...` | `single` |
| `_posts/` | archive pages | `single` |

To add an item: drop a new markdown file into the matching collection folder with the front-matter fields the existing files use (title, permalink, date, excerpt, etc.). Filenames for dated collections follow `YYYY-MM-DD-slug.md`.

### Site-wide configuration lives in three places
1. **`_config.yml`** — identity, author sidebar (social links, employer, bio), `url`/`baseurl`, collection definitions, defaults, analytics. This is the single most important file to edit when rebranding.
2. **`_data/navigation.yml`** — top nav bar entries (must match `permalink`s of pages).
3. **`_data/authors.yml`** — multi-author metadata (only needed if posts set `author:` front matter).

`_data/ui-text.yml` holds localized UI strings; `_config_docker.yml` is merged on top of `_config.yml` only when running under Docker (overrides `url`/`baseurl` for local use).

### Layouts, includes, styles
- `_layouts/` — page skeletons (`default`, `single`, `archive`, `talk`, …). Most pages inherit `default` which composes `_includes/head.html`, `_includes/masthead.html`, `_includes/author-profile.html`, `_includes/footer.html`.
- `_includes/` — partials; the author sidebar (`author-profile.html`) reads from `author:` in `_config.yml` — toggling a social field there makes icons appear/disappear.
- `_sass/` + `assets/css/main.scss` — Sass source; Jekyll compiles to `main.css`. Theme variables live under `_sass/_variables.scss`; skins under `_sass/skins/`.

### Files served as-is
- `files/` → reachable at `/web/files/<name>` (CVs, PDFs, datasets).
- `images/` → image assets referenced from markdown and the author profile (`author.avatar` resolves here).

### Deployment
GitHub Pages builds master automatically using the `github-pages` gem (pinned dependency set — see `Gemfile`). There is no CI build step in this repo for Jekyll; pushing to `master` triggers Pages. The `.github/` directory in this repo holds issue/PR templates, not deploy workflows.

### Gotchas
- Because `baseurl: /web` is set, always build links with `{{ '/path' | relative_url }}` rather than hardcoding `/path`, or local previews will 404 on nested pages.
- GitHub Pages only whitelists a fixed plugin set; the ones in use are declared under `jekyll_plugins` in `Gemfile` (`jekyll-feed`, `jekyll-sitemap`, `jekyll-redirect-from`, `jemoji`). Adding others requires building locally and committing `_site/`, which this repo does not do.
- `_config.yml` is currently pointed at `https://SantiRimedio.github.io` with `baseurl: /web` — if this is ever moved to `SantiRimedio.github.io` (user-site), `baseurl` must become empty.
