# Liquid Convo Website

A React + Vite landing page for Liquid Convo, a Singapore social community and event brand focused on hosted, safe, real-world social networking events.

## Based on public channels

- Instagram: https://www.instagram.com/liquidconvo/
- Meetup: https://www.meetup.com/liquid-convo/
- Tessera: https://www.yourtessera.com/e/liquidconvo
- Eventbrite: https://www.eventbrite.sg/o/liquid-convo-115142497721
- Luma: https://luma.com/hnyzgmxi

## Tech stack

- React
- Vite
- CSS only styling
- Cloudflare Pages compatible static build

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deploy to Cloudflare Pages

Cloudflare Pages settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node version: 22 or later

If your Cloudflare project is configured as Workers Static Assets or runs `wrangler deploy`, this repo also includes:

```toml
[assets]
directory = "./dist"
not_found_handling = "single-page-application"
```

So either deployment path works.

Deploy commands:

```bash
# Workers Static Assets
npm run deploy:cloudflare

# Cloudflare Pages direct upload
npm run deploy:pages
```
