# 8Kilo Audits

Site performance audits for 8Kilo clients via Unlighthouse + GitHub Actions.

## Usage

1. Go to **Actions** > **Unlighthouse Audit**
2. Click **Run workflow**
3. Enter the site URL and choose device type (mobile/desktop)
4. Wait for the scan to complete
5. View the report on GitHub Pages or download the artifact

## Reports

Reports are deployed to GitHub Pages with unique paths per scan (`site-name/YYYY-MM-DD`), so historical reports are preserved.

## Configuration

- `unlighthouse.config.ts` — default scan settings optimized for Shopify sites
- `.github/workflows/unlighthouse.yml` — GitHub Actions workflow
