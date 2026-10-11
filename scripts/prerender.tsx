/**
 * Static prerender. Runs after `vite build` and the sitemap step.
 *
 * For every route in src/seo-routes.ts it writes an HTML file whose <head>
 * carries that route's own title, description, canonical, hreflang and JSON-LD,
 * and whose #root holds a plain-HTML copy of the page content. Crawlers that do
 * not run JavaScript see real content; the browser then client-renders the app
 * over it (see src/main.tsx).
 *
 *   /            -> dist/index.html
 *   /es/stethy   -> dist/prerendered/es/stethy.html   (served via vercel.json rewrites)
 *
 * The script fails the build if vercel.json has no rewrite for a route.
 *
 * Usage:
 *   npx tsx --tsconfig tsconfig.app.json scripts/prerender.tsx
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { seoRoutes, absoluteUrl, ogLocale, SITE, type RouteSeo } from '../src/seo-routes.ts'
import { translations, type Lang } from '../src/i18n.ts'
import { getWorkExperience } from '../src/work-experience.ts'
import { aboutContent } from '../src/about-i18n.ts'
import { articleRegistry, CASE_STUDIES_UPDATED } from '../src/articles/registry.ts'
import { decoveraiContent } from '../src/decoverai-i18n.ts'
import { speakologyContent } from '../src/speakology-i18n.ts'
import { infinityDevopsContent } from '../src/infinity-devops-i18n.ts'
import { mappieContent } from '../src/mappie-i18n.ts'
import { vectroContent } from '../src/vectro-i18n.ts'
import { unitedMedicalContent } from '../src/united-medical-i18n.ts'
import { stethyContent } from '../src/stethy-i18n.ts'
import { noeticContent } from '../src/noetic-i18n.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const dist = resolve(root, 'dist')

const ARTICLES = {
  'decoverai': decoveraiContent,
  'speakology-ai': speakologyContent,
  'infinity-devops': infinityDevopsContent,
  'mappie-ai': mappieContent,
  'vectro-ai': vectroContent,
  'united-medical': unitedMedicalContent,
  'stethy': stethyContent,
  'noetic': noeticContent,
} as const

// ---------------------------------------------------------------------------
// HTML helpers
// ---------------------------------------------------------------------------

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
/** Strip the inline markers the React app uses for emphasis. */
const plain = (s: string) => esc(s.replace(/\*\*/g, ''))
const h1 = (s: string) => `<h1 class="font-display text-3xl font-bold">${plain(s)}</h1>`
const h2 = (s: string) => `<h2 class="font-display text-xl font-semibold mt-10 mb-3">${plain(s)}</h2>`
const h3 = (s: string) => `<h3 class="font-display font-semibold mt-5">${plain(s)}</h3>`
const p = (s: string) => `<p class="text-muted-foreground mt-2">${plain(s)}</p>`
const ul = (items: string[]) => (items.length ? `<ul class="text-muted-foreground list-disc pl-5 mt-2">${items.map(i => `<li>${i}</li>`).join('')}</ul>` : '')
const a = (href: string, text: string) => `<a class="text-primary underline" href="${esc(href)}">${plain(text)}</a>`
const shell = (inner: string) => `<div class="min-h-screen bg-background text-foreground"><main class="max-w-3xl mx-auto px-6 py-16"><article>${inner}</article></main></div>`
const section = (inner: string[]) => `<section>${inner.join('\n')}</section>`
const nav = (label: string, inner: string) => `<nav aria-label="${esc(label)}" class="mt-6">${inner}</nav>`

const homePath = (l: Lang) => (l === 'en' ? '/' : `/${l}`)

// ---------------------------------------------------------------------------
// Page bodies
// ---------------------------------------------------------------------------

function homeBody(lang: Lang): string {
  const t = translations[lang]
  const work = getWorkExperience(lang)
  const out: string[] = []
  out.push(h1('Yash Soni'))
  out.push(p(`${t.greetingRoles[0]} ${t.greeting} ${t.heroPill} ${t.role}`))
  out.push(p(t.location))
  out.push(p(`${t.summary.p1} ${t.summary.p1Highlight} ${t.summary.p1End}`))

  out.push(h2(t.experience.title))
  for (const job of work.jobs) {
    out.push(h3(job.company))
    out.push(p(`${job.role} · ${job.when} · ${job.where}`))
    out.push(p(job.lead))
    out.push(ul(job.bullets.map(plain)))
    if (job.clients) out.push(ul(job.clients.map(c => `<strong>${plain(c.name)}</strong>: ${plain(c.desc)} (${plain(c.tag)})`)))
    if (job.products) out.push(ul(job.products.map(pr => `<strong>${plain(pr.name)}</strong> (${plain(pr.status)}): ${plain(pr.desc)}${pr.url ? ` ${a(pr.url, pr.meta)}` : ''}`)))
    if (job.quote) out.push(`<blockquote class="text-muted-foreground italic mt-3">&ldquo;${plain(job.quote.text)}&rdquo; ${plain(job.quote.author)}, ${plain(job.quote.role)}</blockquote>`)
  }
  for (const q of work.clientQuotes) out.push(`<blockquote class="text-muted-foreground italic mt-3">&ldquo;${plain(q.text)}&rdquo; ${plain(q.author)}, ${plain(q.role)}</blockquote>`)

  out.push(h3(work.labels.caseStudies))
  out.push(ul(articleRegistry.map(x => a(`/${x.slugs[lang === 'es' ? 'es' : 'en']}`, x.titles[lang === 'es' ? 'es' : 'en']))))

  out.push(h2(t.projects.title))
  for (const item of t.projects.items as { title: string; desc: string; tech: string[]; link: string; caseStudyUrl?: string; caseStudyLabel?: string }[]) {
    out.push(h3(item.title))
    out.push(p(item.desc))
    out.push(p(item.tech.join(', ')))
    if (item.caseStudyUrl) out.push(`<p class="mt-1">${a(item.caseStudyUrl, item.caseStudyLabel ?? item.title)}</p>`)
    else if (item.link) out.push(`<p class="mt-1">${a(`https://${item.link}`, item.link)}</p>`)
  }

  out.push(h2(t.techStack.title))
  out.push(ul(t.techStack.categories.map(c => `<strong>${plain(c.name)}</strong>: ${plain(c.items.join(', '))}`)))

  out.push(h2(t.education.title))
  out.push(ul(t.education.items.map(e => plain(`${e.title}, ${e.org}, ${e.year}`))))
  out.push(h2(t.certifications.title))
  out.push(ul(t.certifications.items.map(c => plain(`${c.title}, ${c.org}`))))

  out.push(section([h2(t.faq.title), ...t.faq.items.flatMap(f => [h3(f.q), p(f.a)])]))

  out.push(h2(t.cta.title))
  out.push(p(t.cta.desc))
  const langs: Lang[] = ['en', 'es', 'zh', 'fr', 'pt', 'hi']
  out.push(
    nav('Site', `<p>${[
      a(lang === 'es' ? '/es/about' : '/about', aboutContent[lang === 'es' ? 'es' : 'en'].heading),
      a('https://www.linkedin.com/in/yashsoni369', 'LinkedIn'),
      a('https://github.com/yashsoni369', 'GitHub'),
      ...langs.filter(l => l !== lang).map(l => a(homePath(l), l.toUpperCase())),
    ].join(' · ')}</p>`),
  )
  return shell(out.join('\n'))
}

function aboutBody(lang: 'en' | 'es'): string {
  const t = aboutContent[lang]
  const out: string[] = []
  out.push(h1(t.heading))
  out.push(p(`${t.subtitle} · ${t.location}`))
  for (const b of t.bio) out.push(p(b))
  out.push(p(t.seeking))
  out.push(h2(t.timelineHeading))
  out.push(ul(t.timeline.map(row => `<strong>${plain(row.company)}</strong>, ${plain(row.role)} (${plain(row.period)}): ${plain(row.desc)}`)))
  out.push(h2(t.certificationsHeading))
  out.push(ul(t.certifications.map(c => plain(`${c.items.join(', ')}, ${c.org}`))))
  out.push(h2(t.educationHeading))
  out.push(ul(t.education.map(plain)))
  out.push(h2(t.faqHeading))
  for (const f of t.faq) {
    out.push(h3(f.q))
    out.push(p(f.a))
  }
  out.push(`<p class="mt-6">${a(lang === 'es' ? '/es' : '/', 'yashsoni.dev')}</p>`)
  return shell(out.join('\n'))
}

function articleBody(id: keyof typeof ARTICLES, lang: 'en' | 'es'): string {
  const t = ARTICLES[id][lang]
  const s = t.sections
  const out: string[] = []
  out.push(`<p class="text-primary text-sm uppercase">${plain(t.header.kicker)}</p>`)
  out.push(h1(t.header.h1))
  out.push(p(t.header.subtitle))
  out.push(`<p class="text-muted-foreground mt-2">${a(lang === 'es' ? '/es/about' : '/about', 'Yash Soni')} · ${plain(t.header.date)}</p>`)
  out.push(h2(s.problem.title), p(s.problem.content))
  out.push(h2(s.solution.title), p(s.solution.content))
  if (s.architecture.stack.length) out.push(h2(s.architecture.title), ul(s.architecture.stack.map(x => `<strong>${plain(x.name)}</strong>: ${plain(x.items)}`)))
  if (s.features.items.length) out.push(h2(s.features.title), ul(s.features.items.map(x => `<strong>${plain(x.title)}</strong>: ${plain(x.desc)}`)))
  if (s.results.metrics.length) out.push(h2(s.results.title), ul(s.results.metrics.map(x => `<strong>${plain(x.value)}</strong> ${plain(x.label)}`)))
  out.push(h2(s.myRole.title), p(s.myRole.content))
  if (s.testimonial.quote) out.push(`<blockquote class="text-muted-foreground italic mt-4">&ldquo;${plain(s.testimonial.quote)}&rdquo; ${plain(s.testimonial.author)}, ${plain(s.testimonial.role)}</blockquote>`)
  const es = lang === 'es'
  out.push(p(`${es ? 'Última actualización' : 'Last updated'}: ${CASE_STUDIES_UPDATED}`))
  out.push(
    nav(
      es ? 'Más casos de estudio' : 'More case studies',
      h2(es ? 'Más casos de estudio' : 'More case studies') +
        ul(articleRegistry.filter(x => x.id !== id).map(x => a(`/${x.slugs[lang]}`, x.titles[lang]))) +
        `<p class="mt-4">${a(es ? '/es' : '/', 'Yash Soni')} · ${a(es ? '/es/about' : '/about', aboutContent[lang].heading)}</p>`,
    ),
  )
  return shell(out.join('\n'))
}

function privacyBody(r: RouteSeo): string {
  return shell(h1(r.title) + p(r.description))
}

// ---------------------------------------------------------------------------
// JSON-LD. Home keeps the WebSite/ProfilePage/Person graph from index.html and
// gains a FAQPage built from the FAQ shown on the page.
// ---------------------------------------------------------------------------

const PERSON = { '@type': 'Person', '@id': `${SITE}/#person`, name: 'Yash Soni', url: SITE }

function jsonLd(r: RouteSeo): object | null {
  const url = absoluteUrl(r.path)
  const crumbs = (name: string) => ({
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Yash Soni', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  })
  if (r.kind === 'article') {
    const t = ARTICLES[r.id as keyof typeof ARTICLES][r.lang as 'en' | 'es']
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `${url}#article`,
          headline: t.header.h1,
          description: r.description,
          image: `${SITE}/og-image.webp`,
          datePublished: CASE_STUDIES_UPDATED,
          dateModified: CASE_STUDIES_UPDATED,
          inLanguage: r.lang,
          mainEntityOfPage: url,
          author: PERSON,
          publisher: PERSON,
        },
        crumbs(t.header.h1),
      ],
    }
  }
  if (r.kind === 'about') {
    const t = aboutContent[r.lang as 'en' | 'es']
    return {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'ProfilePage', '@id': `${url}#profile`, url, inLanguage: r.lang, mainEntity: { ...PERSON, jobTitle: t.roles, address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' }, sameAs: ['https://www.linkedin.com/in/yashsoni369', 'https://github.com/yashsoni369', 'https://www.upwork.com/freelancers/yashs369'] } },
        { '@type': 'FAQPage', mainEntity: t.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
        crumbs(t.heading),
      ],
    }
  }
  return null
}

// ---------------------------------------------------------------------------
// Head rewriting
// ---------------------------------------------------------------------------

function replaceOnce(html: string, re: RegExp, value: string, what: string): string {
  if (!re.test(html)) throw new Error(`[prerender] template is missing ${what}`)
  return html.replace(re, value)
}

function render(template: string, r: RouteSeo, body: string): string {
  const url = absoluteUrl(r.path)
  const t = esc(r.title)
  const d = esc(r.description)
  let html = template
  html = replaceOnce(html, /<html lang="[^"]*"/, `<html lang="${r.lang}"`, '<html lang>')
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${t}</title>`, '<title>')
  const metas: [RegExp, string, string][] = [
    [/<meta name="title" content="[^"]*" \/>/, `<meta name="title" content="${t}" />`, 'meta title'],
    [/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${d}" />`, 'meta description'],
    [/<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${r.noindex ? 'noindex, nofollow' : 'index, follow'}" />`, 'meta robots'],
    [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, 'canonical'],
    [/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, 'og:url'],
    [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${t}" />`, 'og:title'],
    [/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${d}" />`, 'og:description'],
    [/<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${ogLocale(r.lang)}" />`, 'og:locale'],
    [/<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${url}" />`, 'twitter:url'],
    [/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${t}" />`, 'twitter:title'],
    [/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${d}" />`, 'twitter:description'],
  ]
  for (const [re, value, what] of metas) html = replaceOnce(html, re, value, what)

  // hreflang: drop the template's set, add this route's
  html = html.replace(/\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>/g, '')
  const alts = r.alternates.map(x => `    <link rel="alternate" hreflang="${x.hreflang}" href="${absoluteUrl(x.path)}" />`).join('\n')
  if (alts) html = html.replace(/(<link rel="canonical" href="[^"]*" \/>)/, `$1\n${alts}`)

  const LD_RE = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
  const ldBlock = (ld: object | null) => (ld ? `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>` : '')
  if (r.kind === 'home') {
    const m = html.match(LD_RE)
    if (!m) throw new Error('[prerender] template is missing JSON-LD block')
    const graph = JSON.parse(m[1]) as { '@graph': Record<string, unknown>[] }
    const faq = translations[r.lang].faq.items
    graph['@graph'] = [
      ...graph['@graph'].map(n => (n['@type'] === 'WebSite' || n['@type'] === 'ProfilePage' ? { ...n, inLanguage: r.lang } : n)),
      { '@type': 'FAQPage', '@id': `${url}#faq`, inLanguage: r.lang, mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ]
    html = html.replace(LD_RE, () => ldBlock(graph))
  } else {
    if (!LD_RE.test(html)) throw new Error('[prerender] template is missing JSON-LD block')
    html = html.replace(LD_RE, () => ldBlock(jsonLd(r)))
  }

  return replaceOnce(html, /<div id="root"><\/div>/, `<div id="root">${body}</div>`, '#root')
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

const template = readFileSync(resolve(dist, 'index.html'), 'utf-8')
const rewrites: { source: string; destination: string }[] = JSON.parse(readFileSync(resolve(root, 'vercel.json'), 'utf-8')).rewrites ?? []

const fileFor = (path: string) => `/prerendered${path}.html`
let home = ''
let count = 0

for (const r of seoRoutes) {
  const body =
    r.kind === 'home' ? homeBody(r.lang)
    : r.kind === 'about' ? aboutBody(r.lang as 'en' | 'es')
    : r.kind === 'article' ? articleBody(r.id as keyof typeof ARTICLES, r.lang as 'en' | 'es')
    : privacyBody(r)
  const html = render(template, r, body)

  if (r.path === '/') {
    home = html
    continue
  }
  const dest = fileFor(r.path)
  const rule = rewrites.find(x => x.source === r.path)
  if (!rule || rule.destination !== dest) {
    throw new Error(`[prerender] vercel.json needs a rewrite { "source": "${r.path}", "destination": "${dest}" }`)
  }
  const out = resolve(dist, `.${dest}`)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html, 'utf-8')
  count++
}

// Home last: every other page was rendered from the untouched template.
writeFileSync(resolve(dist, 'index.html'), home, 'utf-8')
console.log(`[prerender] Wrote ${count + 1} pages`)
