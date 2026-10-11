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

/** Date the case-study content was last revised (shown on the pages and used as JSON-LD dateModified). */
export const CASE_STUDIES_UPDATED = '2026-10-11'

export const articleRegistry: ArticleConfig[] = [
  {
    id: 'decoverai',
    slugs: { es: 'es/decoverai', en: 'decoverai' },
    titles: { es: 'DecoverAI', en: 'DecoverAI' },
    seo: {
      es: { title: 'DecoverAI: Plataforma Legal con IA | Yash Soni', description: 'Caso de estudio: búsqueda de documentos legales con IA y RAG en 10+ bufetes de EE.UU. La empresa levantó $2M+ en financiación semilla.' },
      en: { title: 'Legal AI RAG Platform Case Study: DecoverAI | Yash Soni', description: 'How I helped build legal document search with RAG, used by 10+ US law firms, while the company raised $2M+ in seed funding.' },
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
    slugs: { es: 'es/speakology-ai', en: 'speakology-ai' },
    titles: { es: 'Speakology AI', en: 'Speakology AI' },
    seo: {
      es: { title: 'Speakology AI: App de Idiomas con Avatar IA | Yash Soni', description: 'Caso de estudio: app de idiomas con avatar IA para escuelas del Reino Unido. De cero a 10+ suscripciones en 3 meses, sin financiación externa.' },
      en: { title: 'AI Avatar Language Learning App for UK Schools | Yash Soni', description: 'Case study: AI avatar language app taken from zero to 10+ UK school subscriptions in 3 months, bootstrapped.' },
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
    slugs: { es: 'es/infinity-devops', en: 'infinity-devops' },
    titles: { es: 'Infinity DevOps', en: 'Infinity DevOps' },
    seo: {
      es: { title: 'Infinity DevOps: Plataforma DevOps Enterprise | Yash Soni', description: 'Caso de estudio: plataforma DevOps sobre AWS y GCP, construida en LTI Mindtree como el segundo gran producto del Centro de Excelencia DevOps.' },
      en: { title: 'Enterprise DevOps Platform on AWS and GCP | Yash Soni', description: 'Case study: multi-cloud DevOps platform built at LTI Mindtree\'s DevOps Centre of Excellence.' },
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
    slugs: { es: 'es/mappie-ai', en: 'mappie-ai' },
    titles: { es: 'Mappie AI', en: 'Mappie AI' },
    seo: {
      es: { title: 'Mappie AI: Gestión de Proyectos con IA | Yash Soni', description: 'Caso de estudio: herramienta con IA que convierte requisitos en historias de usuario listas para desarrollo, construida para Nindo Solutions.' },
      en: { title: 'AI Project Management: Requirements to Stories | Yash Soni', description: 'Case study: an AI tool that turns messy requirements into dev-ready user stories, built for Nindo Solutions.' },
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
    slugs: { es: 'es/vectro-ai', en: 'vectro-ai' },
    titles: { es: 'Vectro AI', en: 'Vectro AI' },
    seo: {
      es: { title: 'Vectro AI: Inteligencia de Ventas | Yash Soni', description: 'Caso de estudio: plataforma de inteligencia de ventas que extrae insights de llamadas, emails y Slack con IA y búsqueda vectorial.' },
      en: { title: 'AI Sales Intelligence with Vector Search: Vectro | Yash Soni', description: 'Case study: insights from sales calls, email and Slack using OpenAI and vector search.' },
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
    slugs: { es: 'es/united-medical', en: 'united-medical' },
    titles: { es: 'United Medical', en: 'United Medical' },
    seo: {
      es: { title: 'United Medical: Contratos Hospital-Médico | Yash Soni', description: 'Caso de estudio: aplicación de gestión de contratos para una startup de salud alemana, un retainer activo desde agosto de 2023.' },
      en: { title: 'Healthcare Contract Management SaaS, Germany | Yash Soni', description: 'Case study: hospital and doctor contract management for a German healthcare startup, on retainer since August 2023.' },
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
    slugs: { es: 'es/stethy', en: 'stethy' },
    titles: { es: 'Stethy', en: 'Stethy' },
    seo: {
      es: { title: 'Stethy: SaaS de Triaje de Email con IA | Yash Soni', description: 'Caso de estudio: backend e infraestructura AWS para un SaaS B2B de triaje de email por invitación. Python, TypeScript, AWS CDK, LiteLLM y Langfuse.' },
      en: { title: 'AI Email Triage SaaS on AWS: Stethy Case Study | Yash Soni', description: 'Backend and AWS infrastructure for an invite-only B2B AI email triage SaaS. Python, TypeScript, AWS CDK, LiteLLM, Langfuse.' },
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
    slugs: { es: 'es/noetic', en: 'noetic' },
    titles: { es: 'Noetic', en: 'Noetic' },
    seo: {
      es: { title: 'Noetic: Plataforma de Evaluación Automatizada | Yash Soni', description: 'Caso de estudio: plataforma de evaluación automatizada para TDAH, autismo, dislexia, dispraxia y discalculia.' },
      en: { title: 'Automated Neurodiversity Assessment Platform | Yash Soni', description: 'Case study: automated assessments for ADHD, autism, dyslexia, dyspraxia and dyscalculia.' },
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
    '/es': "Yash Soni's Portfolio",
    '/es/about': 'Sobre Mí',
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
