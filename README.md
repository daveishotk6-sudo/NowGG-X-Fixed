# NowGG-X-Fixed

Fixed version of Now.gg-X for easy deployment on Railway / Render.

## Fixes applied
- Binds to `0.0.0.0` (required by Railway)
- Uses proper `PORT` environment variable
- Configurable target via `TARGET_URL` env var
- Strips common proxy-detection headers

## Deploy on Railway
1. Create new service from this repo
2. Build command: `npm install`
3. Start command: `node index.js` (or `npm start`)
4. Generate domain in Settings → Networking

Optional: set environment variable `TARGET_URL` to any working now.gg mirror if the default doesn't work.

## Notes
now.gg actively detects proxies. If you get "unofficial proxy detected", try changing the `TARGET_URL` or use a self-hosted approach like nggprox.
