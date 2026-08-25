# rrbaker

A one-page personal site. Jekyll, no theme, no JavaScript.

## Local development

Requires Ruby 3.x and Bundler.

```sh
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>.

## What lives where

| Path                            | What it is                                        |
| ------------------------------- | ------------------------------------------------- |
| `index.md`                      | The entire page's content.                         |
| `_layouts/default.html`         | The HTML shell — `<head>`, meta tags, the wrapper. |
| `assets/css/main.css`           | All of the styling, ~60 lines.                     |
| `_config.yml`                   | Site title, description, production URL.           |
| `.github/workflows/pages.yml`   | Builds and deploys on every push to `main`.        |
| `CNAME`                         | The custom domain, one line, no protocol.          |

## Deploying

1. Push this repo to GitHub.
2. Settings → Pages → **Source: GitHub Actions**.
3. Settings → Pages → Custom domain: enter the domain. That writes `CNAME`.
4. At the DNS host, point the apex at GitHub's IPs (185.199.108–111.153) and
   `www` at `<username>.github.io` via CNAME.
5. Once DNS resolves, tick **Enforce HTTPS**.

Keep the `url:` in `_config.yml` matching the live domain — canonical and
Open Graph tags are built from it.
