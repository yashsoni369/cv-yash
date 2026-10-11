/**
 * Generates dist/sitemap.xml from the shared route table (src/seo-routes.ts).
 *
 * Runs in the build after `vite build`. Every indexable route gets a <url>
 * entry with its hreflang alternates.
 *
 * Usage:
 *   npx tsx --tsconfig tsconfig.app.json scripts/generate-sitemap.ts
 */

import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { seoRoutes, absoluteUrl } from '../src/seo-routes.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = resolve(__dirname, '..', 'dist')

const today = new Date().toISOString().slice(0, 10)
const PRIORITY = { home: '1.0', about: '0.9', article: '0.8', privacy: '0.1' } as const

const blocks = seoRoutes
  .filter(r => !r.noindex)
  .map(r => {
    const alts = r.alternates
      .map(a => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${absoluteUrl(a.path)}"/>`)
      .join('\n')
    return `  <url>
    <loc>${absoluteUrl(r.path)}</loc>
${alts}
    <lastmod>${today}</lastmod>
    <priority>${PRIORITY[r.kind]}</priority>
  </url>`
  })

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${blocks.join('\n')}
</urlset>
`

writeFileSync(resolve(dist, 'sitemap.xml'), xml, 'utf-8')
console.log(`[sitemap] Generated ${blocks.length} URLs in dist/sitemap.xml`)
