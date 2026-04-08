import type { ComponentType } from 'react'

export interface ArticleSeo {
  title: string
  description: string
}

export interface ArticleSeoMeta {
  datePublished: string
  dateModified: string
  keywords: string[]
  articleType: 'Article' | 'TechArticle'
  articleTags: string
  images: string[]
  about: Array<Record<string, string>>
  extra?: Record<string, string>
  citation?: Array<{ '@type': string; name: string; url: string }>
  isBasedOn?: Record<string, unknown>
  mentions?: Array<Record<string, string>>
  discussionUrl?: string
  relatedLink?: string
}

export interface ArticleConfig {
  id: string
  slugs: { es: string; en: string }
  titles: { es: string; en: string }
  seo: { es: ArticleSeo; en: ArticleSeo }
  sectionLabels: { es: Record<string, string>; en: Record<string, string> }
  type: 'collab' | 'case-study' | 'bridge'
  /** Absolute OG image URL for prerender (social cards: LinkedIn, Twitter) */
  ogImage?: string
  /** Hero image path for JSON-LD / GEO (what AI search engines see). Falls back to ogImage if not set. */
  heroImage?: string
  component: () => Promise<{ default: ComponentType<{ lang: 'es' | 'en' }> }>
  /** x-default hreflang slug (defaults to ES slug) */
  xDefaultSlug?: string
  /** Whether this article is ready for RAG indexing (default: false) */
  ragReady?: boolean
  /** Path to i18n content file relative to project root (required when ragReady=true) */
  i18nFile?: string
  /** SEO metadata for prerender JSON-LD + article meta tags */
  seoMeta?: ArticleSeoMeta
}

export const articleRegistry: ArticleConfig[] = [
  {
    id: 'decoverai',
    slugs: { es: 'decoverai', en: 'decoverai' },
    titles: { es: 'DecoverAI', en: 'DecoverAI' },
    seo: {
      es: { title: 'DecoverAI: Plataforma Legal con IA — $2M Financiados', description: 'Caso de estudio: plataforma de gestión documental legal con IA desplegada en bufetes de EE.UU.' },
      en: { title: 'DecoverAI: AI Legal Document Platform — $2M Funded', description: 'Case study: AI-powered legal document management deployed in US law firms. $2M+ seed funding.' },
    },
    sectionLabels: {
      es: { 'problem': 'El Problema', 'solution': 'La Solución', 'architecture': 'Arquitectura', 'features': 'Características', 'results': 'Resultados', 'my-role': 'Mi Rol', 'lessons': 'Lecciones', 'faq': 'FAQ' },
      en: { 'problem': 'The Problem', 'solution': 'The Solution', 'architecture': 'Architecture', 'features': 'Key Features', 'results': 'Results', 'my-role': 'My Role', 'lessons': 'Lessons', 'faq': 'FAQ' },
    },
    type: 'case-study',
    component: () => import('../DecoverAI.tsx'),
    xDefaultSlug: 'decoverai',
  },
  {
    id: 'speakology-ai',
    slugs: { es: 'speakology-ai', en: 'speakology-ai' },
    titles: { es: 'Speakology AI', en: 'Speakology AI' },
    seo: {
      es: { title: 'Speakology AI: App de Aprendizaje con Avatar IA', description: 'Primera app de aprendizaje de idiomas con Avatar IA para escuelas del Reino Unido. 10+ suscripciones en 3 meses.' },
      en: { title: 'Speakology AI: AI Avatar Language Learning App', description: 'First AI Avatar language learning app for UK schools. 10+ subscriptions in 3 months, bootstrapped.' },
    },
    sectionLabels: {
      es: { 'problem': 'El Problema', 'solution': 'La Solución', 'architecture': 'Arquitectura', 'features': 'Características', 'results': 'Resultados', 'my-role': 'Mi Rol', 'lessons': 'Lecciones', 'faq': 'FAQ' },
      en: { 'problem': 'The Problem', 'solution': 'The Solution', 'architecture': 'Architecture', 'features': 'Key Features', 'results': 'Results', 'my-role': 'My Role', 'lessons': 'Lessons', 'faq': 'FAQ' },
    },
    type: 'case-study',
    component: () => import('../SpeakologyAI.tsx'),
    xDefaultSlug: 'speakology-ai',
  },
  {
    id: 'infinity-devops',
    slugs: { es: 'infinity-devops', en: 'infinity-devops' },
    titles: { es: 'Infinity DevOps', en: 'Infinity DevOps' },
    seo: {
      es: { title: 'Infinity DevOps: Plataforma DevOps Enterprise', description: 'Tech Lead con equipo de 10+ ingenieros construyendo productos DevOps con AWS y GCP.' },
      en: { title: 'Infinity DevOps: Enterprise DevOps Platform', description: 'Tech Lead with 10+ engineer team building DevOps IP products across AWS and GCP.' },
    },
    sectionLabels: {
      es: { 'problem': 'El Problema', 'solution': 'La Solución', 'architecture': 'Arquitectura', 'features': 'Características', 'results': 'Resultados', 'my-role': 'Mi Rol', 'lessons': 'Lecciones', 'faq': 'FAQ' },
      en: { 'problem': 'The Problem', 'solution': 'The Solution', 'architecture': 'Architecture', 'features': 'Key Features', 'results': 'Results', 'my-role': 'My Role', 'lessons': 'Lessons', 'faq': 'FAQ' },
    },
    type: 'case-study',
    component: () => import('../InfinityDevOps.tsx'),
    xDefaultSlug: 'infinity-devops',
  },
  {
    id: 'mappie-ai',
    slugs: { es: 'mappie-ai', en: 'mappie-ai' },
    titles: { es: 'Mappie AI', en: 'Mappie AI' },
    seo: {
      es: { title: 'Mappie AI: Gestión de Proyectos con IA', description: 'Transforma requisitos desordenados en historias de usuario listas para desarrollo con IA.' },
      en: { title: 'Mappie AI: AI Project Management', description: 'Transforms messy requirements into dev-ready user stories with AI.' },
    },
    sectionLabels: {
      es: { 'problem': 'El Problema', 'solution': 'La Solución', 'architecture': 'Arquitectura', 'features': 'Características', 'results': 'Resultados', 'my-role': 'Mi Rol', 'lessons': 'Lecciones', 'faq': 'FAQ' },
      en: { 'problem': 'The Problem', 'solution': 'The Solution', 'architecture': 'Architecture', 'features': 'Key Features', 'results': 'Results', 'my-role': 'My Role', 'lessons': 'Lessons', 'faq': 'FAQ' },
    },
    type: 'case-study',
    component: () => import('../MappieAI.tsx'),
    xDefaultSlug: 'mappie-ai',
  },
  {
    id: 'vectro-ai',
    slugs: { es: 'vectro-ai', en: 'vectro-ai' },
    titles: { es: 'Vectro AI', en: 'Vectro AI' },
    seo: {
      es: { title: 'Vectro AI: Inteligencia de Ventas con IA', description: 'Insights accionables de llamadas de ventas, emails y Slack usando búsqueda vectorial.' },
      en: { title: 'Vectro AI: AI Sales Intelligence', description: 'Actionable insights from sales calls, emails & Slack using vector search and AI.' },
    },
    sectionLabels: {
      es: { 'problem': 'El Problema', 'solution': 'La Solución', 'architecture': 'Arquitectura', 'features': 'Características', 'results': 'Resultados', 'my-role': 'Mi Rol', 'lessons': 'Lecciones', 'faq': 'FAQ' },
      en: { 'problem': 'The Problem', 'solution': 'The Solution', 'architecture': 'Architecture', 'features': 'Key Features', 'results': 'Results', 'my-role': 'My Role', 'lessons': 'Lessons', 'faq': 'FAQ' },
    },
    type: 'case-study',
    component: () => import('../VectroAI.tsx'),
    xDefaultSlug: 'vectro-ai',
  },
  {
    id: 'united-medical',
    slugs: { es: 'united-medical', en: 'united-medical' },
    titles: { es: 'United Medical', en: 'United Medical' },
    seo: {
      es: { title: 'United Medical: Gestión de Contratos Hospitalarios', description: 'App de gestión de contratos hospital-médico para startup alemana de salud.' },
      en: { title: 'United Medical: Hospital Contract Management', description: 'Hospital-doctor contract management app for German healthcare startup.' },
    },
    sectionLabels: {
      es: { 'problem': 'El Problema', 'solution': 'La Solución', 'architecture': 'Arquitectura', 'features': 'Características', 'results': 'Resultados', 'my-role': 'Mi Rol', 'lessons': 'Lecciones', 'faq': 'FAQ' },
      en: { 'problem': 'The Problem', 'solution': 'The Solution', 'architecture': 'Architecture', 'features': 'Key Features', 'results': 'Results', 'my-role': 'My Role', 'lessons': 'Lessons', 'faq': 'FAQ' },
    },
    type: 'case-study',
    component: () => import('../UnitedMedical.tsx'),
    xDefaultSlug: 'united-medical',
  },
  {
    id: 'stethy',
    slugs: { es: 'stethy', en: 'stethy' },
    titles: { es: 'Stethy', en: 'Stethy' },
    seo: {
      es: { title: 'Stethy: Automatización IA en Salud', description: 'Automatización con IA en healthcare y ciencias de la vida.' },
      en: { title: 'Stethy: AI Healthcare Automation', description: 'AI-based automation in healthcare & life sciences.' },
    },
    sectionLabels: {
      es: { 'problem': 'El Problema', 'solution': 'La Solución', 'architecture': 'Arquitectura', 'features': 'Características', 'results': 'Resultados', 'my-role': 'Mi Rol', 'lessons': 'Lecciones', 'faq': 'FAQ' },
      en: { 'problem': 'The Problem', 'solution': 'The Solution', 'architecture': 'Architecture', 'features': 'Key Features', 'results': 'Results', 'my-role': 'My Role', 'lessons': 'Lessons', 'faq': 'FAQ' },
    },
    type: 'case-study',
    component: () => import('../Stethy.tsx'),
    xDefaultSlug: 'stethy',
  },
  {
    id: 'noetic',
    slugs: { es: 'noetic', en: 'noetic' },
    titles: { es: 'Noetic', en: 'Noetic' },
    seo: {
      es: { title: 'Noetic: Evaluación de Neurodiversidad con IA', description: 'Evaluación automatizada de TDAH, autismo, dislexia, dispraxia y discalculia.' },
      en: { title: 'Noetic: AI Neurodiversity Assessment', description: 'Automated assessment for ADHD, autism, dyslexia, dyspraxia, and dyscalculia.' },
    },
    sectionLabels: {
      es: { 'problem': 'El Problema', 'solution': 'La Solución', 'architecture': 'Arquitectura', 'features': 'Características', 'results': 'Resultados', 'my-role': 'Mi Rol', 'lessons': 'Lecciones', 'faq': 'FAQ' },
      en: { 'problem': 'The Problem', 'solution': 'The Solution', 'architecture': 'Architecture', 'features': 'Key Features', 'results': 'Results', 'my-role': 'My Role', 'lessons': 'Lessons', 'faq': 'FAQ' },
    },
    type: 'case-study',
    component: () => import('../Noetic.tsx'),
    xDefaultSlug: 'noetic',
  },
]


// Derived maps for GlobalNav and routing
export function getAltPaths(): Record<string, string> {
  const map: Record<string, string> = {
    '/': '/es',
    '/es': '/',
    '/about': '/es/about',
    '/es/about': '/about',
    '/privacy': '/es/privacy',
    '/es/privacy': '/privacy',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = `/${article.slugs.en}`
    map[`/${article.slugs.en}`] = `/${article.slugs.es}`
  }
  return map
}

export function getPageTitles(): Record<string, string> {
  const map: Record<string, string> = {
    '/': "Yash Soni's Portfolio",
    '/en': "Yash Soni's Portfolio",
    '/sobre-mi': 'Sobre Mí',
    '/about': 'About',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = article.titles.es
    map[`/${article.slugs.en}`] = article.titles.en
  }
  return map
}

export function getSectionLabels(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {}
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = article.sectionLabels.es
    map[`/${article.slugs.en}`] = article.sectionLabels.en
  }
  return map
}

/** All ES slugs (for lang detection: if pathname matches an ES slug → lang is 'es') */
export function getEsSlugs(): Set<string> {
  const slugs = new Set<string>(['/es', '/es/about', '/es/privacy'])
  for (const article of articleRegistry) {
    slugs.add(`/${article.slugs.es}`)
  }
  return slugs
}
