import { useState, useEffect, useCallback, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sun, Moon, House, X, ChevronRight } from 'lucide-react'
import { translations, type Lang } from './i18n'
import { getAltPaths, getPageTitles, getSectionLabels, getEsSlugs } from './articles/registry'

/**
 * GlobalNav — unified navigation across all pages.
 *
 * The translucent bar is a "contextual message container" that appears
 * when there's something to communicate:
 * - Inner pages: permanent "← yashsoni.dev" back link
 * - Any page: temporary language suggestion when browser lang ≠ page lang
 *
 * Language suggestion is right-aligned, next to the lang pill, reinforcing
 * the connection. Controls always live inside the bar when it's visible;
 * when there's no bar (home, no banner), controls float fixed at top-6 right-6.
 */

const ALT_PATH = getAltPaths()
const BANNER_DISMISSED_KEY = 'lang-banner-dismissed'
const PAGE_TITLE = getPageTitles()
const SECTION_LABELS = getSectionLabels()
const ES_SLUGS = getEsSlugs()

/** Observes h2[id] elements and returns the currently visible section ID */
function useActiveSection(pathname: string, enabled: boolean) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    setActiveId(null)
    if (!enabled) return

    let io: IntersectionObserver | null = null
    let mo: MutationObserver | null = null

    function setup() {
      const h1 = document.querySelector('h1')
      const headings = Array.from(document.querySelectorAll('h2[id]'))
      if (headings.length === 0) return false

      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              if (entry.target.tagName === 'H1') {
                setActiveId(null)
                return
              }
              setActiveId(entry.target.id)
              return
            }
          }
        },
        { rootMargin: '-64px 0px -75% 0px' }
      )

      if (h1) io.observe(h1)
      headings.forEach((h) => io!.observe(h))
      return true
    }

    // Try immediately (component may already be rendered)
    if (!setup()) {
      // Lazy component not mounted yet — watch for h2[id] to appear
      mo = new MutationObserver(() => {
        if (setup()) mo!.disconnect()
      })
      mo.observe(document.body, { childList: true, subtree: true })
    }

    return () => {
      io?.disconnect()
      mo?.disconnect()
    }
  }, [pathname, enabled])

  return activeId
}

function useLang() {
  const { pathname } = useLocation()
  const LANG_HOMES = new Set(['/', '/es', '/zh', '/fr', '/pt', '/hi'])
  const isHome = LANG_HOMES.has(pathname)
  const lang: 'es' | 'en' = ES_SLUGS.has(pathname) ? 'es' : 'en'
  const pageTitle = PAGE_TITLE[pathname] ?? null
  return { pathname, isHome, lang, pageTitle }
}

function useTheme() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => {
    if (localStorage.getItem('theme')) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      setIsDark(e.matches)
      document.documentElement.classList.toggle('dark', e.matches)
      document.documentElement.classList.toggle('light', !e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggleTheme = useCallback(() => {
    // Kill all transitions for instant theme switch
    document.documentElement.style.setProperty('--theme-transition', 'none')
    document.querySelectorAll('*').forEach(el => {
      (el as HTMLElement).style.transition = 'none'
    })

    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    document.documentElement.classList.toggle('light', !next)
    localStorage.setItem('theme', next ? 'dark' : 'light')

    // Re-enable transitions after repaint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.style.removeProperty('--theme-transition')
        document.querySelectorAll('*').forEach(el => {
          (el as HTMLElement).style.transition = ''
        })
      })
    })
  }, [isDark])

  return { isDark, toggleTheme }
}

/**
 * Detects browser/page language mismatch.
 * Uses sessionStorage to survive re-mounts across navigations:
 * - null: not shown yet → show after 2s delay
 * - 'shown': already visible → show immediately, no animation
 * - 'dismissed': user closed it → never show again
 */
function useLanguageBanner(lang: Lang) {
  const stored = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(BANNER_DISMISSED_KEY) : null
  const [visible, setVisible] = useState(stored === 'shown')
  const isFirstAppearance = useRef(stored !== 'shown')

  // Show after delay on first visit (no sessionStorage entry yet)
  useEffect(() => {
    if (typeof navigator === 'undefined') return
    if (stored) return // already 'shown' or 'dismissed'

    const browserPrefersEn = !navigator.language.toLowerCase().startsWith('es')
    const mismatch = (lang === 'es' && browserPrefersEn) || (lang === 'en' && !browserPrefersEn)
    if (!mismatch) return

    const timer = setTimeout(() => {
      sessionStorage.setItem(BANNER_DISMISSED_KEY, 'shown')
      setVisible(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [lang, stored])

  // Auto-dismiss if user switches language via toggle
  useEffect(() => {
    if (!visible) return
    const browserPrefersEn = !navigator.language.toLowerCase().startsWith('es')
    const mismatch = (lang === 'es' && browserPrefersEn) || (lang === 'en' && !browserPrefersEn)
    if (!mismatch) {
      sessionStorage.setItem(BANNER_DISMISSED_KEY, 'dismissed')
      setVisible(false)
    }
  }, [lang, visible])

  const dismiss = useCallback(() => {
    sessionStorage.setItem(BANNER_DISMISSED_KEY, 'dismissed')
    setVisible(false)
  }, [])

  return { showBanner: visible, dismiss, animateBanner: visible && isFirstAppearance.current }
}

/** Circular flag icons — Spain (red-yellow-red) and UK (Union Jack simplified) */
function FlagIcon({ code, className = 'w-4 h-4' }: { code: string; className?: string }) {
  const flags: Record<string, JSX.Element> = {
    en: (
      <svg className={className} viewBox="0 0 60 30" aria-hidden="true">
        <clipPath id="fEN"><rect width="60" height="30" rx="2"/></clipPath>
        <g clipPath="url(#fEN)">
          <rect width="60" height="30" fill="#012169"/>
          <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6"/>
          <path d="M0 0l60 30M60 0L0 30" stroke="#c8102e" strokeWidth="4"/>
          <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6"/>
        </g>
      </svg>
    ),
    es: (
      <svg className={className} viewBox="0 0 60 40" aria-hidden="true">
        <clipPath id="fES"><rect width="60" height="40" rx="2"/></clipPath>
        <g clipPath="url(#fES)">
          <rect width="60" height="10" fill="#c60b1e"/>
          <rect y="10" width="60" height="20" fill="#ffc400"/>
          <rect y="30" width="60" height="10" fill="#c60b1e"/>
        </g>
      </svg>
    ),
    zh: (
      <svg className={className} viewBox="0 0 60 40" aria-hidden="true">
        <clipPath id="fZH"><rect width="60" height="40" rx="2"/></clipPath>
        <g clipPath="url(#fZH)">
          <rect width="60" height="40" fill="#de2910"/>
          <g fill="#ffde00" transform="translate(10,7)">
            <polygon points="0,-6 1.8,-1.8 6.8,-1.8 2.5,1.2 4.1,6 0,3 -4.1,6 -2.5,1.2 -6.8,-1.8 -1.8,-1.8" transform="scale(1.6)"/>
            <polygon points="0,-2 .6,-.6 2.2,-.6 .8,.4 1.3,2 0,1 -1.3,2 -.8,.4 -2.2,-.6 -.6,-.6" transform="translate(14,-4)"/>
            <polygon points="0,-2 .6,-.6 2.2,-.6 .8,.4 1.3,2 0,1 -1.3,2 -.8,.4 -2.2,-.6 -.6,-.6" transform="translate(17,0)"/>
            <polygon points="0,-2 .6,-.6 2.2,-.6 .8,.4 1.3,2 0,1 -1.3,2 -.8,.4 -2.2,-.6 -.6,-.6" transform="translate(14,5)"/>
            <polygon points="0,-2 .6,-.6 2.2,-.6 .8,.4 1.3,2 0,1 -1.3,2 -.8,.4 -2.2,-.6 -.6,-.6" transform="translate(10,8)"/>
          </g>
        </g>
      </svg>
    ),
    fr: (
      <svg className={className} viewBox="0 0 60 40" aria-hidden="true">
        <clipPath id="fFR"><rect width="60" height="40" rx="2"/></clipPath>
        <g clipPath="url(#fFR)">
          <rect width="20" height="40" fill="#002395"/>
          <rect x="20" width="20" height="40" fill="#fff"/>
          <rect x="40" width="20" height="40" fill="#ed2939"/>
        </g>
      </svg>
    ),
    pt: (
      <svg className={className} viewBox="0 0 60 42" aria-hidden="true">
        <clipPath id="fPT"><rect width="60" height="42" rx="2"/></clipPath>
        <g clipPath="url(#fPT)">
          <rect width="21" height="42" fill="#009b3a"/>
          <rect x="21" width="39" height="42" fill="#fedf00"/>
          <circle cx="30" cy="21" r="8" fill="#002776"/>
          <circle cx="30" cy="21" r="5.5" fill="#fff"/>
        </g>
      </svg>
    ),
    hi: (
      <svg className={className} viewBox="0 0 60 40" aria-hidden="true">
        <clipPath id="fHI"><rect width="60" height="40" rx="2"/></clipPath>
        <g clipPath="url(#fHI)">
          <rect width="60" height="13.3" fill="#f93"/>
          <rect y="13.3" width="60" height="13.4" fill="#fff"/>
          <rect y="26.7" width="60" height="13.3" fill="#128807"/>
          <circle cx="30" cy="20" r="4" fill="#008" opacity="0.9"/>
          <circle cx="30" cy="20" r="3.2" fill="#fff"/>
          <circle cx="30" cy="20" r="1" fill="#008"/>
        </g>
      </svg>
    ),
  }
  return flags[code] || null
}

const LANG_OPTIONS: { code: string; label: string; path: string }[] = [
  { code: 'en', label: 'EN', path: '/' },
  { code: 'es', label: 'ES', path: '/es' },
  { code: 'zh', label: '中文', path: '/zh' },
  { code: 'fr', label: 'FR', path: '/fr' },
  { code: 'pt', label: 'PT', path: '/pt' },
  { code: 'hi', label: 'हिं', path: '/hi' },
]

/** Shared controls: language dropdown + theme circle */
function NavControls({ lang, isDark, toggleTheme }: {
  lang: Lang; isDark: boolean; toggleTheme: () => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const current = LANG_OPTIONS.find(l => l.code === lang) || LANG_OPTIONS[0]

  useEffect(() => {
    const close = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  return (
    <div className="flex items-center gap-2">
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center gap-1.5 h-10 px-3 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          aria-label="Switch language"
        >
          <FlagIcon code={current.code} className="w-4 h-3 rounded-[1px]" />
          <span>{current.label}</span>
          <ChevronRight className={`w-3 h-3 transition-transform ${open ? 'rotate-90' : ''}`} />
        </button>
        {open && (
          <div className="absolute right-0 top-full mt-1 py-1 min-w-[8rem] rounded-xl bg-card border border-border shadow-xl z-50">
            {LANG_OPTIONS.map((opt) => (
              <button
                key={opt.code}
                onClick={() => { navigate(opt.path); setOpen(false) }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-primary/10 transition-colors ${
                  opt.code === lang ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              >
                <FlagIcon code={opt.code} className="w-5 h-3.5 rounded-[1px]" />
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg hover:border-primary/50 hover:shadow-primary/20 hover:shadow-xl transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
      </button>
    </div>
  )
}

export default function GlobalNav() {
  const { pathname, isHome, lang, pageTitle } = useLang()
  const { isDark, toggleTheme } = useTheme()
  const { showBanner, dismiss, animateBanner } = useLanguageBanner(lang)
  const navigate = useNavigate()
  const activeSection = useActiveSection(pathname, !isHome)

  // altPath kept for language banner dismiss action
  const altPath = ALT_PATH[pathname] || (lang === 'es' ? '/' : '/es')

  const t = translations[lang]
  const hasBar = !isHome

  // Breadcrumb: show active section label or fall back to page title
  const sectionLabels = SECTION_LABELS[pathname]
  const activeSectionLabel = activeSection && sectionLabels?.[activeSection]


  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])

  // Animation tracking — bar and back link animate only on first appearance
  const barShown = useRef(false)
  const animateBar = hasBar && !barShown.current
  if (hasBar) barShown.current = true

  const backLinkShown = useRef(false)
  const animateBackLink = !isHome && !backLinkShown.current
  if (!isHome) backLinkShown.current = true

  const switchLang = () => {
    dismiss()
    navigate(altPath)
  }

  const controls = <NavControls lang={lang} isDark={isDark} toggleTheme={toggleTheme} />

  const fade = (duration: string) => ({ animation: `nav-fade-in ${duration} ease-out` })

  // Banner message (right-aligned, near lang pill)
  const bannerMessage = showBanner ? (
    <div
      className="flex items-center gap-2.5 text-sm"
      style={animateBanner ? fade('0.4s') : undefined}
    >
      <span className="text-muted-foreground hidden lg:inline">{t.ui.languageBanner}</span>
      <button
        onClick={switchLang}
        className="inline-flex items-center gap-1 font-medium text-primary hover:text-primary/80 transition-colors"
      >
        {t.ui.languageBannerSwitchPrefix} <FlagIcon code={lang === 'es' ? 'en' : 'es'} className="w-4 h-3 inline-block mx-0.5 rounded-[1px]" /> {lang === 'es' ? 'EN' : 'ES'}
      </button>
      <button
        onClick={dismiss}
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  ) : null

  // Bar visible: controls (+ optional banner) inside it
  if (hasBar) {
    return (
      <nav className="sticky top-0 z-50 relative">
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border"
          style={animateBar ? fade('0.35s') : undefined}
        />
        <div className="relative pt-4 pb-3 px-6 pl-14 xl:pl-6 flex items-center justify-between">
          {/* Left: back link on inner pages, empty on home (pl-14 leaves room for ToC hamburger on mobile) */}
          <div className="min-w-0 flex items-center">
            {!isHome && (
              <nav
                aria-label="Breadcrumb"
                className="inline-flex items-center gap-1.5 text-sm"
                style={animateBackLink ? fade('0.4s') : undefined}
              >
                <Link
                  to={lang === 'en' ? '/en' : '/'}
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                  <House className="w-4 h-4" />
                  <span className="hidden sm:inline">Yash Soni</span>
                </Link>
                {pageTitle && (
                  <>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0" />
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className={`hover:text-foreground transition-colors cursor-pointer truncate ${activeSectionLabel ? 'text-muted-foreground' : 'text-foreground font-medium'}`}
                    >
                      {pageTitle}
                    </button>
                  </>
                )}
                {activeSectionLabel && (
                  <>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0 hidden sm:block" />
                    <span className="text-foreground font-medium truncate max-w-[140px] sm:max-w-none hidden sm:inline">
                      {activeSectionLabel}
                    </span>
                  </>
                )}
              </nav>
            )}
          </div>
          {/* Right: banner + controls on same line */}
          <div className="flex items-center gap-3 shrink-0">
            {bannerMessage}
            {controls}
          </div>
        </div>
      </nav>
    )
  }

  // Home: controls always fixed at same position, banner bar grows behind them
  if (!hydrated) return null

  return (
    <>
      {/* Translucent bar — appears/disappears without moving controls */}
      {showBanner && (
        <div
          className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
          style={{ height: 'calc(1rem + 2.5rem + 0.75rem)', ...(animateBanner ? fade('0.35s') : {}) }}
        />
      )}
      {/* Controls + banner — always at same fixed position */}
      <div className="fixed top-4 right-6 z-50 flex items-center gap-3">
        {bannerMessage}
        {controls}
      </div>
    </>
  )
}
