/**
 * Single source of truth for per-route SEO: title, description, canonical and
 * language alternates. Read by the browser (applyRouteSeo), the sitemap script
 * and the prerender script, so the three cannot drift apart.
 */

import { seo as homeSeo, type Lang } from './i18n'
import { aboutContent } from './about-i18n'
import { articleRegistry } from './articles/registry'

export const SITE = 'https://www.yashsoni.dev'

export interface RouteSeo {
  path: string
  lang: Lang
  kind: 'home' | 'about' | 'privacy' | 'article'
  /** Article id from the registry (kind === 'article'). */
  id?: string
  title: string
  description: string
  alternates: { hreflang: string; path: string }[]
  noindex?: boolean
}

const HOME_LANGS: Lang[] = ['en', 'es', 'zh', 'fr', 'pt', 'hi']
const homePath = (l: Lang) => (l === 'en' ? '/' : `/${l}`)

export const absoluteUrl = (path: string) => SITE + path

function build(): RouteSeo[] {
  const routes: RouteSeo[] = []

  const homeAlts = [...HOME_LANGS.map(l => ({ hreflang: l as string, path: homePath(l) })), { hreflang: 'x-default', path: '/' }]
  for (const l of HOME_LANGS) {
    routes.push({ path: homePath(l), lang: l, kind: 'home', title: homeSeo[l].title, description: homeSeo[l].description, alternates: homeAlts })
  }

  const aboutAlts = [
    { hreflang: 'en', path: '/about' },
    { hreflang: 'es', path: '/es/about' },
    { hreflang: 'x-default', path: '/about' },
  ]
  for (const l of ['en', 'es'] as const) {
    const t = aboutContent[l]
    routes.push({ path: `/${t.slug}`, lang: l, kind: 'about', title: t.seo.title, description: t.seo.description, alternates: aboutAlts })
  }

  routes.push({ path: '/privacy', lang: 'en', kind: 'privacy', title: 'Privacy Policy | yashsoni.dev', description: 'Privacy policy for yashsoni.dev. How chatbot and website data is collected and used.', alternates: [], noindex: true })
  routes.push({ path: '/es/privacy', lang: 'es', kind: 'privacy', title: 'Politica de Privacidad | yashsoni.dev', description: 'Politica de privacidad de yashsoni.dev. Como se recopilan y utilizan los datos del chatbot y la web.', alternates: [], noindex: true })

  for (const a of articleRegistry) {
    const alts = [
      { hreflang: 'en', path: `/${a.slugs.en}` },
      { hreflang: 'es', path: `/${a.slugs.es}` },
      { hreflang: 'x-default', path: `/${a.slugs.en}` },
    ]
    for (const l of ['en', 'es'] as const) {
      routes.push({ path: `/${a.slugs[l]}`, lang: l, kind: 'article', id: a.id, title: a.seo[l].title, description: a.seo[l].description, alternates: alts })
    }
  }
  return routes
}

export const seoRoutes: RouteSeo[] = build()

const byPath = new Map(seoRoutes.map(r => [r.path, r]))

export function getRouteSeo(pathname: string): RouteSeo | undefined {
  const p = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return byPath.get(p)
}

const OG_LOCALE: Record<Lang, string> = { en: 'en_US', es: 'es_ES', zh: 'zh_CN', fr: 'fr_FR', pt: 'pt_BR', hi: 'hi_IN' }
export const ogLocale = (l: Lang) => OG_LOCALE[l]

/** Browser only: point the document head at the current route. */
export function applyRouteSeo(pathname: string) {
  const r = getRouteSeo(pathname)
  if (!r) return
  const url = absoluteUrl(r.path)
  const setMeta = (sel: string, value: string) => document.querySelector(sel)?.setAttribute('content', value)

  document.title = r.title
  document.documentElement.lang = r.lang
  setMeta('meta[name="title"]', r.title)
  setMeta('meta[name="description"]', r.description)
  setMeta('meta[name="robots"]', r.noindex ? 'noindex, nofollow' : 'index, follow')
  setMeta('meta[property="og:title"]', r.title)
  setMeta('meta[property="og:description"]', r.description)
  setMeta('meta[property="og:url"]', url)
  setMeta('meta[property="og:locale"]', ogLocale(r.lang))
  setMeta('meta[name="twitter:url"]', url)
  setMeta('meta[name="twitter:title"]', r.title)
  setMeta('meta[name="twitter:description"]', r.description)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)

  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove())
  for (const alt of r.alternates) {
    const link = document.createElement('link')
    link.rel = 'alternate'
    link.hreflang = alt.hreflang
    link.href = absoluteUrl(alt.path)
    document.head.appendChild(link)
  }
}
