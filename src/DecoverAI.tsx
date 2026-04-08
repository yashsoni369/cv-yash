import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Bot, Database, Search, Shield, FileText, Quote, Lightbulb, Mail, ArrowRight } from 'lucide-react'
import { ArticleLayout, ArticleHeader, MetricsGrid } from './articles/components'
import { H2, Prose, Callout, CardStack, BulletList, Accordion, FloatingToc } from './articles/content-types'
import { decoveraiContent } from './decoverai-i18n'

const ICON_MAP: Record<string, typeof Bot> = { Bot, Database, Search, Shield, FileText }

export default function DecoverAI({ lang }: { lang: 'es' | 'en' }) {
  const t = decoveraiContent[lang] || decoveraiContent.en
  useEffect(() => { document.title = t.seo.title }, [t.seo.title])

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <ArticleLayout lang={lang}>
      <FloatingToc />

      <ArticleHeader
        kicker={t.header.kicker}
        h1={t.header.h1}
        subtitle={t.header.subtitle}
        date={t.header.date}
        readingTime={t.header.readingTime}
        lang={lang}
      />

      {/* The Problem */}
      <H2 id="problem">{t.sections.problem.title}</H2>
      <Prose>{t.sections.problem.content}</Prose>

      {/* The Solution */}
      <H2 id="solution">{t.sections.solution.title}</H2>
      <Prose>{t.sections.solution.content}</Prose>

      {/* Architecture */}
      <H2 id="architecture">{t.sections.architecture.title}</H2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
        {t.sections.architecture.stack.map((s) => (
          <div key={s.name} className="p-4 rounded-xl bg-card border border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{s.name}</p>
            <p className="text-sm font-medium text-foreground">{s.items}</p>
          </div>
        ))}
      </div>

      {/* Key Features */}
      <H2 id="features">{t.sections.features.title}</H2>
      <CardStack
        items={t.sections.features.items.map((f) => ({
          title: f.title,
          detail: f.desc,
        }))}
      />

      {/* Results */}
      <H2 id="results">{t.sections.results.title}</H2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
        {t.sections.results.metrics.map((m) => (
          <div key={m.label} className="text-center p-4 rounded-xl bg-card border border-border">
            <p className="text-2xl font-display font-bold text-primary">{m.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
          </div>
        ))}
      </div>

      {/* My Role */}
      <H2 id="my-role">{t.sections.myRole.title}</H2>
      <Prose>{t.sections.myRole.content}</Prose>

      {/* Testimonial */}
      <Callout>
        <div className="flex gap-3">
          <Quote className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <p className="text-foreground italic mb-3">{t.sections.testimonial.quote}</p>
            <p className="text-sm font-medium text-foreground">{t.sections.testimonial.author}</p>
            <p className="text-xs text-muted-foreground">{t.sections.testimonial.role}</p>
          </div>
        </div>
      </Callout>

      {/* Lessons */}
      <H2 id="lessons">{t.sections.lessons.title}</H2>
      <BulletList items={t.sections.lessons.items as unknown as React.ReactNode[]} marker="bullet" />

      {/* FAQ */}
      <H2 id="faq">FAQ</H2>
      <Accordion
        items={t.sections.faq.map((f) => ({
          title: f.q,
          detail: f.a,
        }))}
      />

      {/* CTA */}
      <div className="mt-12 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
        <h3 className="text-xl font-display font-bold mb-2">{t.sections.cta.title}</h3>
        <p className="text-muted-foreground mb-4">{t.sections.cta.desc}</p>
        <a
          href="mailto:yash.soni2737@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          <Mail className="w-4 h-4" />
          {t.sections.cta.button}
        </a>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-border text-center">
        <Link to="/" className="text-sm text-primary hover:underline flex items-center justify-center gap-1">
          <ArrowRight className="w-3 h-3 rotate-180" />
          {lang === 'es' ? 'Volver al portfolio' : 'Back to portfolio'}
        </Link>
      </div>
    </ArticleLayout>
  )
}
